import React from "react";
import { Shield, User, CreditCard, Smartphone, Camera, Bell, Lock, Users, Scale, CheckCircle, Mail } from "lucide-react";

export default function PrivacyPage() {
  const dataTypes = [
    {
      icon: User,
      title: "Personal Data",
      description: "Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the App.",
      bgColor: "#EBF5FF",
      iconBgColor: "#DBEAFE",
      iconColor: "#1E40AF",
      borderColor: "#3B82F6"
    },
    {
      icon: CreditCard,
      title: "Financial Data",
      description: "Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you make a purchase. We use Stripe as a third-party payment processor. All payment information is stored by Stripe.",
      bgColor: "#ECFDF5",
      iconBgColor: "#D1FAE5",
      iconColor: "#059669",
      borderColor: "#10B981"
    },
    {
      icon: Smartphone,
      title: "Device Data",
      description: "Information our servers automatically collect when you access the App, such as your mobile device ID, model, and manufacturer, and information about the location of your device.",
      bgColor: "#F3E8FF",
      iconBgColor: "#E9D5FF",
      iconColor: "#7C3AED",
      borderColor: "#A855F7"
    },
    {
      icon: Camera,
      title: "Image and Camera Data",
      description: "Our App may request access to your device's camera and photo library to allow you to upload and use images within the App.",
      bgColor: "#FDF2F8",
      iconBgColor: "#FBCFE8",
      iconColor: "#DB2777",
      borderColor: "#EC4899"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "We may request to send you push notifications regarding your account or the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.",
      bgColor: "#FFF7ED",
      iconBgColor: "#FED7AA",
      iconColor: "#C2410C",
      borderColor: "#F97316"
    }
  ];

  const usageItems = [
    "Create and manage your account",
    "Process your payments and refunds",
    "Email you regarding your account or order",
    "Send you push notifications",
    "Enable user-to-user communications",
    "Improve the App and your user experience",
    "Respond to your service requests"
  ];

  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 50%, #E5E7EB 100%)",
      padding: "4rem 1rem"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{
                padding: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px"
              }}>
                <Shield style={{ width: "40px", height: "40px", color: "#FFFFFF" }} />
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
                  Privacy Policy
                </h1>
                <div style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: "0.875rem"
                }}>
                  Last Updated: September 15, 2025
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: "2rem" }}>
            <div style={{
              background: "#EEF2FF",
              borderLeft: "4px solid #4F46E5",
              padding: "1.5rem",
              borderRadius: "0 12px 12px 0",
              marginBottom: "1.5rem"
            }}>
              <p style={{
                color: "#1F2937",
                lineHeight: "1.7",
                fontWeight: "500",
                margin: 0
              }}>
                Thank you for using <span style={{ fontWeight: "bold", color: "#4F46E5" }}>Thera-Track App</span>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully. <strong>IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APP.</strong>
              </p>
            </div>

            <div style={{
              background: "#FFFBEB",
              borderLeft: "4px solid #F59E0B",
              padding: "1.5rem",
              borderRadius: "0 12px 12px 0"
            }}>
              <p style={{
                color: "#1F2937",
                lineHeight: "1.7",
                margin: 0
              }}>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </div>
          </div>
        </div>

        {/* Collection Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#DBEAFE",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E40AF",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}>
              1
            </div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              color: "#111827",
              margin: 0
            }}>
              Collection of Your Information
            </h2>
          </div>
          <p style={{
            color: "#374151",
            lineHeight: "1.7",
            marginBottom: "1.5rem"
          }}>
            We may collect information about you in a variety of ways. The information we may collect via the App includes:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {dataTypes.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: item.bgColor,
                    borderLeft: `4px solid ${item.borderColor}`,
                    borderRadius: "0 16px 16px 0",
                    padding: "1.5rem",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{
                      padding: "0.75rem",
                      backgroundColor: item.iconBgColor,
                      borderRadius: "12px",
                      flexShrink: 0
                    }}>
                      <IconComponent style={{ 
                        width: "24px", 
                        height: "24px", 
                        color: item.iconColor 
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#111827",
                        marginTop: 0,
                        marginBottom: "0.5rem"
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: "#4B5563",
                        lineHeight: "1.7",
                        margin: 0
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use of Information Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#D1FAE5",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#059669",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}>
              2
            </div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              color: "#111827",
              margin: 0
            }}>
              Use of Your Information
            </h2>
          </div>
          <p style={{
            color: "#374151",
            lineHeight: "1.7",
            marginBottom: "1.5rem"
          }}>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {usageItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#ECFDF5",
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "1px solid #D1FAE5"
                }}
              >
                <div style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  flexShrink: 0
                }}>
                  {index + 1}
                </div>
                <span style={{ color: "#1F2937", fontSize: "1rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclosure Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#E9D5FF",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7C3AED",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}>
              3
            </div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              color: "#111827",
              margin: 0
            }}>
              Disclosure of Your Information
            </h2>
          </div>
          <p style={{
            color: "#374151",
            lineHeight: "1.7",
            marginBottom: "1.5rem"
          }}>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{
              backgroundColor: "#FEF2F2",
              borderLeft: "4px solid #EF4444",
              borderRadius: "0 16px 16px 0",
              padding: "1.5rem"
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  padding: "0.75rem",
                  backgroundColor: "#FECACA",
                  borderRadius: "12px",
                  flexShrink: 0
                }}>
                  <Scale style={{ width: "24px", height: "24px", color: "#DC2626" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#111827",
                    marginTop: 0,
                    marginBottom: "0.5rem"
                  }}>
                    By Law or to Protect Rights
                  </h3>
                  <p style={{
                    color: "#4B5563",
                    lineHeight: "1.7",
                    margin: 0
                  }}>
                    If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: "#EBF5FF",
              borderLeft: "4px solid #3B82F6",
              borderRadius: "0 16px 16px 0",
              padding: "1.5rem"
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  padding: "0.75rem",
                  backgroundColor: "#DBEAFE",
                  borderRadius: "12px",
                  flexShrink: 0
                }}>
                  <Users style={{ width: "24px", height: "24px", color: "#1E40AF" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#111827",
                    marginTop: 0,
                    marginBottom: "0.5rem"
                  }}>
                    Third-Party Service Providers
                  </h3>
                  <p style={{
                    color: "#4B5563",
                    lineHeight: "1.7",
                    margin: 0
                  }}>
                    We may share your information with third parties that perform services for us or on our behalf, including payment processing (Stripe), data analysis (Firebase), email delivery, hosting services, and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#C7D2FE",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4F46E5",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}>
              4
            </div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              color: "#111827",
              margin: 0
            }}>
              Security of Your Information
            </h2>
          </div>
          <div style={{
            backgroundColor: "#EEF2FF",
            borderLeft: "4px solid #6366F1",
            borderRadius: "0 16px 16px 0",
            padding: "1.5rem"
          }}>
            <p style={{
              color: "#4B5563",
              lineHeight: "1.7",
              margin: 0
            }}>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </div>
        </div>

        {/* Your Rights Section */}
        <div style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid #E5E7EB"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#99F6E4",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0F766E",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}>
              5
            </div>
            <h2 style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              color: "#111827",
              margin: 0
            }}>
              Your Rights
            </h2>
          </div>
          <div style={{
            backgroundColor: "#F0FDFA",
            borderLeft: "4px solid #14B8A6",
            borderRadius: "0 16px 16px 0",
            padding: "1.5rem"
          }}>
            <p style={{
              color: "#4B5563",
              lineHeight: "1.7",
              margin: 0
            }}>
              You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information. To exercise these rights, please contact us at{" "}
              <a 
                href="mailto:cheekycharting@gmail.com" 
                style={{
                  color: "#0F766E",
                  fontWeight: "600",
                  textDecoration: "underline"
                }}
              >
                cheekycharting@gmail.com
              </a>.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          marginTop: "2.5rem",
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderRadius: "24px",
          overflow: "hidden"
        }}>
          <div style={{ padding: "2.5rem 2rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                padding: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px"
              }}>
                <Mail style={{ width: "32px", height: "32px", color: "#FFFFFF" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                  marginTop: 0
                }}>
                  Contact Us
                </h2>
                <p style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.125rem",
                  margin: 0
                }}>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
              <p style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#FFFFFF",
                marginTop: 0
              }}>
                Cheeky Charting
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "rgba(255, 255, 255, 0.95)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Mail style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                  <a 
                    href="mailto:cheekycharting@gmail.com" 
                    style={{
                      color: "rgba(255, 255, 255, 0.95)",
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "2px",
                      fontWeight: "500"
                    }}
                  >
                    cheekycharting@gmail.com
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <svg style={{ width: "20px", height: "20px", flexShrink: 0, marginTop: "2px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p style={{ margin: 0, marginBottom: "0.25rem" }}>2070 Realwind Drive</p>
                    <p style={{ margin: 0 }}>Fort Sumner, NM 88119</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </main>
  );
}