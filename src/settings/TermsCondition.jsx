
import { Card } from 'antd';
import PublicLayout from '../layout/PublicLayout';

const TermsAndConditions = () => {
  return (
    <PublicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <Card className=" rounded-xl border-0">
          <div className="prose max-w-none">
            <h1 className="text-[40px] font-bold text-gray-800 mb-6">Terms and Conditions for Thera-Track App</h1>
            <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> September 15, 2025</p>

            <p className="mb-4">
              Please read these Terms and Conditions carefully before using the Thera-Track App mobile application Service operated by Cheeky Charting.
            </p>

            <p className="mb-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <p className="mb-4">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>

            <p className="mb-4">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Cheeky Charting and its licensors. The Service is protected by copyright, trademark, and other laws of both the USA and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Cheeky Charting.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Payments</h2>
            <p className="mb-4">
              We use a third-party payment processor, Stripe, to bill you for our services. The processing of payments will be subject to the terms, conditions, and privacy policies of Stripe in addition to these Terms. We are not responsible for any errors by the payment processor. By choosing to use our paid services, you agree to pay us, through Stripe, all charges at the prices then in effect for any use of such paid services in accordance with the applicable payment terms and you authorize us, through Stripe, to charge your chosen payment provider.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <p className="mb-4">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Cheeky Charting, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essence.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Disclaimer</h2>
            <p className="mb-4">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>

            <p className="mb-4">
              Cheeky Charting its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of USA, without regard to its conflict of law provisions.
            </p>

            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <p className="mb-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Cheeky Charting</p>
              <p>cheekycharting@gmail.com</p>
              <p>2070 Realwind Drive Fort Sumner NM 88119</p>
            </div>
          </div>
        </Card>
      </div>
    </PublicLayout>
  );
};

export default TermsAndConditions;