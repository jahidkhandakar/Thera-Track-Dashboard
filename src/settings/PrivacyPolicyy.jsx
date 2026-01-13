/* eslint-disable react/no-unescaped-entities */
import { Card } from 'antd';
import PublicLayout from '../layout/PublicLayout';

const PrivacyPolicyy = () => {
  return (
    <PublicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <Card className="shadow-lg rounded-xl border-0">
          <div className="prose max-w-none">
            <h1 className="text-[40px] font-bold text-gray-800 mb-6">Privacy Policy for Thera-Track App</h1>
            <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> September 15, 2025</p>

            <p className="mb-4">
              Thank you for using Thera-Track App. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APP.
            </p>

            <p className="mb-4">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the App after the date such revised Privacy Policy is posted.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Collection of Your Information</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect via the App includes:
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Personal Data</h3>
            <p className="mb-4">
              Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the App.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Financial Data</h3>
            <p className="mb-4">
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you make a purchase. We use Stripe as a third-party payment processor. All payment information is stored by Stripe. You are encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Device Data</h3>
            <p className="mb-4">
              Information our servers automatically collect when you access the App, such as your mobile device ID, model, and manufacturer, and information about the location of your device.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Image and Camera Data</h3>
            <p className="mb-4">
              Our App may request access to your device's camera and photo library to allow you to upload and use images within the App.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Push Notifications</h3>
            <p className="mb-4">
              We may request to send you push notifications regarding your account or the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use of Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
            </p>

            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your payments and refunds.</li>
              <li>Email you regarding your account or order.</li>
              <li>Send you push notifications.</li>
              <li>Enable user-to-user communications.</li>
              <li>Improve the App and your user experience.</li>
              <li>Respond to your service requests.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disclosure of Your Information</h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">By Law or to Protect Rights</h3>
            <p className="mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Third-Party Service Providers</h3>
            <p className="mb-4">
              We may share your information with third parties that perform services for us or on our behalf, including payment processing (Stripe), data analysis (Firebase), email delivery, hosting services, and customer service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information. To exercise these rights, please contact us at cheekycharting@gmail.com.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyy;