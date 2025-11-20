import React from "react";
import { Shield, FileText, Lock, CreditCard, AlertCircle, Scale, RefreshCw, Mail } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "accounts",
      title: "1. Accounts",
      icon: Lock,
      bgColor: "#EBF5FF",
      iconBgColor: "#DBEAFE",
      iconColor: "#1E40AF",
      borderColor: "#3B82F6",
      content: [
        "When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
        "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.",
        "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
      ]
    },
    {
      id: "ip",
      title: "2. Intellectual Property",
      icon: Shield,
      bgColor: "#F3E8FF",
      iconBgColor: "#E9D5FF",
      iconColor: "#7C3AED",
      borderColor: "#A855F7",
      content: [
        "The Service and its original content, features, and functionality are and will remain the exclusive property of Cheeky Charting and its licensors. The Service is protected by copyright, trademark, and other laws of both the USA and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Cheeky Charting."
      ]
    },
    {
      id: "payments",
      title: "3. Payments",
      icon: CreditCard,
      bgColor: "#ECFDF5",
      iconBgColor: "#D1FAE5",
      iconColor: "#059669",
      borderColor: "#10B981",
      content: [
        "We use a third-party payment processor, Stripe, to bill you for our services. The processing of payments will be subject to the terms, conditions, and privacy policies of Stripe in addition to these Terms. We are not responsible for any errors by the payment processor. By choosing to use our paid services, you agree to pay us, through Stripe, all charges at the prices then in effect for any use of such paid services in accordance with the applicable payment terms and you authorize us, through Stripe, to charge your chosen payment provider."
      ]
    },
    {
      id: "termination",
      title: "4. Termination",
      icon: AlertCircle,
      bgColor: "#FEF2F2",
      iconBgColor: "#FECACA",
      iconColor: "#DC2626",
      borderColor: "#EF4444",
      content: [
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service."
      ]
    },
    {
      id: "liability",
      title: "5. Limitation of Liability",
      icon: Scale,
      bgColor: "#FFF7ED",
      iconBgColor: "#FED7AA",
      iconColor: "#C2410C",
      borderColor: "#F97316",
      content: [
        "In no event shall Cheeky Charting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essence."
      ]
    },
    {
      id: "disclaimer",
      title: "6. Disclaimer",
      icon: FileText,
      bgColor: "#FFFBEB",
      iconBgColor: "#FDE68A",
      iconColor: "#D97706",
      borderColor: "#F59E0B",
      content: [
        "Your use of the Service is at your sole risk. The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.",
        "Cheeky Charting its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements."
      ]
    },
    {
      id: "law",
      title: "7. Governing Law",
      icon: Scale,
      bgColor: "#EEF2FF",
      iconBgColor: "#C7D2FE",
      iconColor: "#4F46E5",
      borderColor: "#6366F1",
      content: [
        "These Terms shall be governed and construed in accordance with the laws of USA, without regard to its conflict of law provisions.",
        "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service."
      ]
    },
    {
      id: "changes",
      title: "8. Changes",
      icon: RefreshCw,
      bgColor: "#F0FDFA",
      iconBgColor: "#99F6E4",
      iconColor: "#0F766E",
      borderColor: "#14B8A6",
      content: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service."
      ]
    }
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
                <FileText style={{ width: "40px", height: "40px", color: "#FFFFFF" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  lineHeight: "1.2"
                }}>
                  Terms and Conditions
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
                  Last Updated: December 20, 2025
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: "2rem" }}>
            <div style={{
              background: "linear-gradient(90deg, #EEF2FF 0%, #F3E8FF 100%)",
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
                Please read these Terms and Conditions carefully before using the <span style={{ color: "#4F46E5", fontWeight: "bold" }}>Thera-Track App</span> mobile application Service operated by <span style={{ color: "#7C3AED", fontWeight: "bold" }}>Cheeky Charting</span>.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#374151", lineHeight: "1.7", margin: 0 }}>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p style={{ color: "#374151", lineHeight: "1.7", margin: 0 }}>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #E5E7EB",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div style={{
                  borderLeft: `4px solid ${section.borderColor}`,
                  padding: "2rem",
                  backgroundColor: section.bgColor
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                    <div style={{
                      padding: "1rem",
                      backgroundColor: section.iconBgColor,
                      borderRadius: "16px",
                      flexShrink: 0
                    }}>
                      <IconComponent style={{ 
                        width: "28px", 
                        height: "28px", 
                        color: section.iconColor 
                      }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#111827",
                        marginBottom: "1rem",
                        marginTop: 0
                      }}>
                        {section.title}
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            style={{
                              color: "#4B5563",
                              lineHeight: "1.7",
                              fontSize: "1rem",
                              margin: 0
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
                  If you have any questions about these Terms, please contact us:
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