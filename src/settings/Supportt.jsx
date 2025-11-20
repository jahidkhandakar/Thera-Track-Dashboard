import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value.trim());
      case 'message':
        return value.trim().length >= 10;
      case 'name':
        return value.trim() !== '';
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name] && validateField(name, value)) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!validateField(name, value)) {
      setErrors(prev => ({ ...prev, [name]: true }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !validateField('name', formData.name),
      email: !validateField('email', formData.email),
      message: !validateField('message', formData.message)
    };

    setErrors(newErrors);

    const isFormValid = !Object.values(newErrors).some(error => error);

    if (isFormValid) {
      setIsSubmitting(true);

      setTimeout(() => {
        setShowModal(true);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%)",
      padding: "4rem 1rem"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Hero Header */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
            padding: "3rem 2rem"
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{
                padding: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px"
              }}>
                <MessageSquare style={{ width: "40px", height: "40px", color: "#FFFFFF" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  lineHeight: "1.2",
                  marginTop: 0
                }}>
                  Support Center
                </h1>
                <p style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.125rem",
                  margin: 0
                }}>
                  We're here to help! Send us a message.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ padding: "2rem" }}>
            <div style={{
              background: "#EEF2FF",
              borderLeft: "4px solid #4F46E5",
              padding: "1.5rem",
              borderRadius: "0 12px 12px 0"
            }}>
              <p style={{
                color: "#1F2937",
                lineHeight: "1.7",
                margin: 0
              }}>
                Having trouble with the app? Need help with a feature? We're here to assist you. Fill out the form below and our support team will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2.5rem",
          border: "1px solid #E5E7EB"
        }}>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label 
                htmlFor="name" 
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#374151",
                  fontWeight: "600",
                  fontSize: "0.875rem"
                }}
              >
                Full Name <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <User style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  color: "#9CA3AF"
                }} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.75rem 0.75rem 2.75rem",
                    border: `2px solid ${errors.name ? '#DC2626' : '#D1D5DB'}`,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.2s",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = '#4F46E5';
                    }
                  }}
                  onBlurCapture={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = '#D1D5DB';
                    }
                  }}
                />
              </div>
              {errors.name && (
                <span style={{
                  color: "#DC2626",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  display: "block"
                }}>
                  Please enter your name
                </span>
              )}
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label 
                htmlFor="email" 
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#374151",
                  fontWeight: "600",
                  fontSize: "0.875rem"
                }}
              >
                Email Address <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <div style={{ position: "relative" }}>
                <Mail style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  color: "#9CA3AF"
                }} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your.email@example.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.75rem 0.75rem 2.75rem",
                    border: `2px solid ${errors.email ? '#DC2626' : '#D1D5DB'}`,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.2s",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = '#4F46E5';
                    }
                  }}
                  onBlurCapture={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = '#D1D5DB';
                    }
                  }}
                />
              </div>
              {errors.email && (
                <span style={{
                  color: "#DC2626",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  display: "block"
                }}>
                  Please enter a valid email address
                </span>
              )}
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label 
                htmlFor="message" 
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#374151",
                  fontWeight: "600",
                  fontSize: "0.875rem"
                }}
              >
                Message <span style={{ color: "#DC2626" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Describe your issue or question in detail..."
                rows="6"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: `2px solid ${errors.message ? '#DC2626' : '#D1D5DB'}`,
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "border-color 0.2s",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit"
                }}
                onFocus={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = '#4F46E5';
                  }
                }}
                onBlurCapture={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = '#D1D5DB';
                  }
                }}
              />
              {errors.message && (
                <span style={{
                  color: "#DC2626",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                  display: "block"
                }}>
                  Please enter your message (minimum 10 characters)
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "1rem",
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                opacity: isSubmitting ? 0.6 : 1,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(79, 70, 229, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid #FFFFFF",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite"
                  }} />
                  Sending...
                </>
              ) : (
                <>
                  <Send style={{ width: "20px", height: "20px" }} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "1.5rem",
          color: "#6B7280",
          fontSize: "0.875rem"
        }}>
          <p style={{ margin: 0 }}>
            &copy; 2025 Camera Live Streaming App. All rights reserved.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease"
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "2.5rem",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              animation: "slideUp 0.3s ease"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem"
            }}>
              <CheckCircle style={{ width: "48px", height: "48px", color: "#FFFFFF" }} />
            </div>

            <h2 style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#4F46E5",
              marginBottom: "1rem",
              marginTop: 0
            }}>
              Message Sent!
            </h2>
            <p style={{
              color: "#6B7280",
              fontSize: "1.125rem",
              lineHeight: "1.7",
              marginBottom: "2rem"
            }}>
              Thank you for contacting us. We've received your message and will get back to you within 24-48 hours.
            </p>

            <button
              onClick={closeModal}
              style={{
                padding: "0.875rem 2.5rem",
                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}