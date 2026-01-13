import React, { useState } from 'react';
import { FileText, AlertTriangle, Shield, Users, CreditCard, Lock, Scale, Mail, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const EULADocument = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const Section = ({ id, title, icon: Icon, children, defaultExpanded = false }) => {
    const isExpanded = expandedSections[id] ?? defaultExpanded;
    
    return (
      <div className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>
        {isExpanded && (
          <div className="px-6 py-5 text-gray-700 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    );
  };

  const SubSection = ({ title, children }) => (
    <div className="mb-5">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );

  const BulletList = ({ items }) => (
    <ul className="space-y-2 ml-5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-purple-600 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">End User License Agreement</h1>
          <p className="text-xl text-purple-100 mb-6">Cheeky Charting Application</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Last Updated: January 13, 2026
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Effective Date: January 13, 2026
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-8">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">IMPORTANT: Please Read Carefully</h2>
              <p className="leading-relaxed">
                This End User License Agreement ("Agreement" or "EULA") is a legally binding agreement between you ("User," "you," or "your") and Cheeky Charting ("Company," "we," "us," or "our") governing your use of the Cheeky Charting mobile application ("App" or "Application") and any related services, features, content, or applications offered by the Company.
              </p>
              <p className="mt-3 leading-relaxed">
                By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not download, install, access, or use the App.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        
        {/* Section 1: License Grant */}
        <Section id="license" title="1. LICENSE GRANT" icon={Shield} defaultExpanded={true}>
          <SubSection title="1.1 License">
            <p>
              Subject to the terms of this Agreement, the Company grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on a compatible device that you own or control, solely for your personal or professional use in connection with therapeutic or veterinary practice management.
            </p>
          </SubSection>

          <SubSection title="1.2 Restrictions">
            <p className="mb-3">You agree not to:</p>
            <BulletList items={[
              "Copy, modify, distribute, sell, or lease any part of the App",
              "Reverse engineer, decompile, or disassemble the App",
              "Remove, alter, or obscure any proprietary notices in the App",
              "Use the App for any illegal purpose or in violation of any laws",
              "Transfer your license to use the App to another party",
              "Use the App in any manner that could damage, disable, or impair the App or interfere with other users' enjoyment of the App",
              "Attempt to gain unauthorized access to the App's systems or networks"
            ]} />
          </SubSection>
        </Section>

        {/* Section 2: Subscription Terms */}
        <Section id="subscription" title="2. AUTO-RENEWABLE SUBSCRIPTION TERMS" icon={CreditCard}>
          <SubSection title="2.1 Subscription Plans">
            <p className="mb-3">
              The Cheeky Charting App offers auto-renewable subscription plans ("Subscription") that provide access to premium features. Available subscription options include:
            </p>
            <BulletList items={[
              "Monthly Subscription: Billed every month",
              "Yearly Subscription: Billed every year"
            ]} />
            <p className="mt-3 text-sm text-gray-600">
              Exact pricing will be displayed in the App and may vary by region and currency.
            </p>
          </SubSection>

          <SubSection title="2.2 Free Trial Period">
            <p className="mb-3">
              New users may be eligible for a <span className="font-semibold text-purple-600">7-day free trial</span> period. The free trial provides full access to all premium features. After the trial period ends:
            </p>
            <BulletList items={[
              "If you have subscribed, your subscription will automatically begin, and you will be charged according to your selected plan",
              "If you have not subscribed, your access to premium features will be restricted"
            ]} />
          </SubSection>

          <SubSection title="2.3 Subscription Features">
            <p className="mb-3">The "Cheeky Charting Pro" subscription includes:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Unlimited access to all premium features",
                "Client and animal/patient management",
                "Appointment scheduling and management",
                "Chart creation and archiving",
                "Inventory management",
                "Travel expense tracking",
                "Invoice generation",
                "Priority customer support"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-purple-50 p-3 rounded-lg">
                  <span className="text-purple-600 mt-0.5">✓</span>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </SubSection>

          <SubSection title="2.4 Payment and Billing">
            <BulletList items={[
              "Payment will be charged to your Apple ID account or Google Play account at confirmation of purchase",
              "Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current billing period",
              "Your account will be charged for renewal within 24 hours prior to the end of the current period",
              "You can manage and cancel your subscriptions by going to your account settings on the App Store or Google Play Store after purchase"
            ]} />
          </SubSection>

          <SubSection title="2.5 Price Changes">
            <p>
              Subscription prices may change from time to time. We will notify you of any price changes before they take effect. Your continued use of the App after a price change becomes effective constitutes your acceptance of the new price.
            </p>
          </SubSection>

          <SubSection title="2.6 Cancellation">
            <BulletList items={[
              "You may cancel your subscription at any time through your App Store or Google Play Store account settings",
              "Cancellation will take effect at the end of the current billing period",
              "No refunds or credits will be provided for partial subscription periods",
              "Upon cancellation, you will continue to have access to premium features until the end of your current billing period"
            ]} />
          </SubSection>

          <SubSection title="2.7 No Refunds">
            <p>
              All subscription fees are non-refundable except as required by applicable law. If you believe you have been incorrectly charged, please contact us within 30 days of the charge.
            </p>
          </SubSection>
        </Section>

        {/* Section 3: Free Trial */}
        <Section id="trial" title="3. FREE TRIAL TERMS" icon={CreditCard}>
          <SubSection title="3.1 Eligibility">
            <p>
              The free trial is available only to new users who have not previously used a free trial for the Cheeky Charting App.
            </p>
          </SubSection>

          <SubSection title="3.2 Trial Duration">
            <p>
              The free trial period is 7 days from the date of first use of the App.
            </p>
          </SubSection>

          <SubSection title="3.3 Trial Access">
            <p>
              During the trial period, you will have full access to all premium features of the App.
            </p>
          </SubSection>

          <SubSection title="3.4 Post-Trial">
            <p className="mb-3">When your free trial ends:</p>
            <BulletList items={[
              "You will need an active subscription to continue accessing premium features",
              "If you do not subscribe, certain features will become unavailable",
              "Your data will be retained but access may be limited"
            ]} />
          </SubSection>
        </Section>

        {/* Section 4: User Accounts */}
        <Section id="accounts" title="4. USER ACCOUNTS AND RESPONSIBILITIES" icon={Users}>
          <SubSection title="4.1 Account Registration">
            <p className="mb-3">To use certain features of the App, you must create an account. You agree to:</p>
            <BulletList items={[
              "Provide accurate, current, and complete registration information",
              "Maintain and promptly update your account information",
              "Maintain the security of your account credentials",
              "Accept responsibility for all activities that occur under your account",
              "Notify us immediately of any unauthorized use of your account"
            ]} />
          </SubSection>

          <SubSection title="4.2 Age Requirements">
            <p>
              You must be at least 18 years old or the age of legal majority in your jurisdiction to use this App. By using the App, you represent and warrant that you meet this age requirement.
            </p>
          </SubSection>

          <SubSection title="4.3 Professional Use">
            <p className="mb-3">
              If you use this App for professional therapeutic or veterinary practice management, you are solely responsible for:
            </p>
            <BulletList items={[
              "Compliance with all applicable professional regulations and standards",
              "Maintaining appropriate licenses and certifications",
              "Ensuring proper care and treatment of clients and patients",
              "Protecting client confidentiality and data privacy"
            ]} />
          </SubSection>
        </Section>

        {/* Section 5: Privacy */}
        <Section id="privacy" title="5. USER DATA AND PRIVACY" icon={Lock}>
          <SubSection title="5.1 Data Collection">
            <p>
              Our collection and use of your personal information is governed by our Privacy Policy, available at:{" "}
              <a href="https://dashboard.cheekycharting.com/privacypolicy" className="text-purple-600 hover:text-purple-700 underline inline-flex items-center gap-1">
                https://dashboard.cheekycharting.com/privacypolicy
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </SubSection>

          <SubSection title="5.2 User Content">
            <p>
              You retain ownership of any content, data, or information you submit to the App ("User Content"). By submitting User Content, you grant us a non-exclusive license to use, store, and process such content solely for the purpose of providing the App's services.
            </p>
          </SubSection>

          <SubSection title="5.3 Data Security">
            <p>
              We implement reasonable security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure. You acknowledge that you use the App at your own risk.
            </p>
          </SubSection>

          <SubSection title="5.4 Data Backup">
            <p>
              You are responsible for maintaining your own backups of important data. We are not liable for any loss of data.
            </p>
          </SubSection>
        </Section>

        {/* Section 6: Intellectual Property */}
        <Section id="ip" title="6. INTELLECTUAL PROPERTY" icon={Shield}>
          <SubSection title="6.1 Ownership">
            <p>
              The App, including all content, features, functionality, design, graphics, logos, and trademarks, is owned by the Company and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </SubSection>

          <SubSection title="6.2 Trademarks">
            <p>
              "Cheeky Charting" and related logos are trademarks of the Company. You may not use these trademarks without our prior written consent.
            </p>
          </SubSection>

          <SubSection title="6.3 Feedback">
            <p>
              If you provide feedback, suggestions, or ideas about the App, you grant us the right to use such feedback without restriction or compensation to you.
            </p>
          </SubSection>
        </Section>

        {/* Section 7: Third-Party Services */}
        <Section id="third-party" title="7. THIRD-PARTY SERVICES" icon={ExternalLink}>
          <SubSection title="7.1 Third-Party Integrations">
            <p className="mb-3">The App may integrate with third-party services, including but not limited to:</p>
            <BulletList items={[
              "Apple App Store / Google Play Store (for subscriptions and payments)",
              "Firebase (for notifications and analytics)",
              "RevenueCat (for subscription management)"
            ]} />
          </SubSection>

          <SubSection title="7.2 Third-Party Terms">
            <p>
              Your use of third-party services is subject to those services' terms and conditions. We are not responsible for the content, privacy policies, or practices of third-party services.
            </p>
          </SubSection>
        </Section>

        {/* Section 8: Disclaimers */}
        <Section id="disclaimers" title="8. DISCLAIMERS" icon={AlertTriangle}>
          <SubSection title="8.1 'As Is' Basis">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="font-semibold text-gray-800">
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>
          </SubSection>

          <SubSection title="8.2 No Professional Advice">
            <p>
              The App is a practice management tool and does not provide medical, veterinary, therapeutic, legal, or financial advice. You should consult qualified professionals for such advice.
            </p>
          </SubSection>

          <SubSection title="8.3 Service Availability">
            <p>
              We do not guarantee that the App will be available at all times or that it will be free from errors, bugs, or interruptions.
            </p>
          </SubSection>
        </Section>

        {/* Section 9: Limitation of Liability */}
        <Section id="liability" title="9. LIMITATION OF LIABILITY" icon={Scale}>
          <SubSection title="9.1 Limitation">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE APP.
              </p>
            </div>
          </SubSection>

          <SubSection title="9.2 Cap on Liability">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800">
                IN NO EVENT SHALL THE COMPANY'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNTS YOU HAVE PAID TO THE COMPANY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </div>
          </SubSection>

          <SubSection title="9.3 Exceptions">
            <p className="text-sm">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR LIABILITY. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
            </p>
          </SubSection>
        </Section>

        {/* Section 10: Indemnification */}
        <Section id="indemnification" title="10. INDEMNIFICATION" icon={Shield}>
          <p className="mb-3">
            You agree to indemnify, defend, and hold harmless the Company and its affiliates, officers, directors, employees, agents, and licensors from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:
          </p>
          <BulletList items={[
            "Your use of the App",
            "Your violation of this Agreement",
            "Your violation of any rights of another party",
            "Your User Content"
          ]} />
        </Section>

        {/* Section 11: Termination */}
        <Section id="termination" title="11. TERMINATION" icon={AlertTriangle}>
          <SubSection title="11.1 Termination by You">
            <p className="mb-3">You may terminate this Agreement at any time by:</p>
            <BulletList items={[
              "Canceling your subscription (if applicable)",
              "Deleting your account through the App",
              "Uninstalling the App from your device"
            ]} />
          </SubSection>

          <SubSection title="11.2 Termination by Us">
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach this Agreement.
            </p>
          </SubSection>

          <SubSection title="11.3 Effects of Termination">
            <p className="mb-3">Upon termination:</p>
            <BulletList items={[
              "Your license to use the App will immediately cease",
              "You must delete all copies of the App from your devices",
              "Any provisions of this Agreement that by their nature should survive termination shall survive, including ownership, disclaimers, indemnification, and limitations of liability"
            ]} />
          </SubSection>
        </Section>

        {/* Section 12: Changes */}
        <Section id="changes" title="12. CHANGES TO THIS AGREEMENT" icon={FileText}>
          <p className="mb-3">
            We reserve the right to modify this Agreement at any time. We will notify you of material changes by:
          </p>
          <BulletList items={[
            "Posting a notice in the App",
            "Sending an email to your registered email address",
            "Updating the 'Last Updated' date at the top of this Agreement"
          ]} />
          <p className="mt-3">
            Your continued use of the App after such modifications constitutes your acceptance of the revised Agreement.
          </p>
        </Section>

        {/* Section 13: Governing Law */}
        <Section id="law" title="13. GOVERNING LAW AND DISPUTE RESOLUTION" icon={Scale}>
          <SubSection title="13.1 Governing Law">
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where the Company is established, without regard to its conflict of law principles.
            </p>
          </SubSection>

          <SubSection title="13.2 Dispute Resolution">
            <p>
              Any disputes arising from or relating to this Agreement shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved through negotiation, it shall be resolved through binding arbitration or in the courts of competent jurisdiction.
            </p>
          </SubSection>

          <SubSection title="13.3 Class Action Waiver">
            <p>
              You agree that any dispute resolution proceedings will be conducted on an individual basis and not in a class, consolidated, or representative action.
            </p>
          </SubSection>
        </Section>

        {/* Section 14 & 15: Platform Terms */}
        <Section id="platforms" title="14 & 15. APPLE AND GOOGLE PLAY TERMS" icon={ExternalLink}>
          <SubSection title="14. Apple-Specific Terms">
            <p className="mb-3">If you access or download the App from the Apple App Store, you acknowledge and agree that:</p>
            <BulletList items={[
              "This Agreement is between you and the Company, not Apple Inc.",
              "Apple has no obligation to provide maintenance or support services for the App",
              "Apple is not responsible for addressing any claims by you or any third party relating to the App",
              "Apple is a third-party beneficiary of this Agreement and may enforce this Agreement against you"
            ]} />
          </SubSection>

          <SubSection title="15. Google Play-Specific Terms">
            <p className="mb-3">If you access or download the App from Google Play, you acknowledge and agree that:</p>
            <BulletList items={[
              "This Agreement is between you and the Company, not Google LLC",
              "Google has no obligation to provide maintenance or support services for the App",
              "Google is not responsible for addressing any claims by you or any third party relating to the App"
            ]} />
          </SubSection>
        </Section>

        {/* Section 16: General */}
        <Section id="general" title="16. GENERAL PROVISIONS" icon={FileText}>
          <SubSection title="16.1 Entire Agreement">
            <p>
              This Agreement, together with the Privacy Policy, constitutes the entire agreement between you and the Company regarding your use of the App.
            </p>
          </SubSection>

          <SubSection title="16.2 Severability">
            <p>
              If any provision of this Agreement is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect.
            </p>
          </SubSection>

          <SubSection title="16.3 Waiver">
            <p>
              The failure of the Company to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.
            </p>
          </SubSection>

          <SubSection title="16.4 Assignment">
            <p>
              You may not assign or transfer this Agreement without our prior written consent. We may assign this Agreement without restriction.
            </p>
          </SubSection>

          <SubSection title="16.5 Notices">
            <p>
              We may provide notices to you through the App, by email to your registered email address, or by other reasonable means.
            </p>
          </SubSection>
        </Section>

        {/* Section 17: Contact */}
        <Section id="contact" title="17. CONTACT INFORMATION" icon={Mail} defaultExpanded={true}>
          <p className="mb-4">If you have any questions about this Agreement, please contact us at:</p>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Cheeky Charting</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <a href="mailto:support@cheekycharting.com" className="text-purple-600 hover:text-purple-700 underline">
                  support@cheekycharting.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-purple-600" />
                <a href="https://cheekycharting.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                  https://cheekycharting.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-purple-600" />
                <a href="https://dashboard.cheekycharting.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                  https://dashboard.cheekycharting.com
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 18: Acknowledgment */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">18. ACKNOWLEDGMENT</h2>
          <p className="leading-relaxed text-lg">
            BY DOWNLOADING, INSTALLING, OR USING THE CHEEKY CHARTING APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT, UNDERSTAND IT, AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p className="font-semibold">Copyright © 2026 Cheeky Charting. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EULADocument;