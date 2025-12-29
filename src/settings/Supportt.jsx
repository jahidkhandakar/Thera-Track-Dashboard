import React from 'react';
import { Card, Button, Input, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons';
import PublicLayout from '../layout/PublicLayout';

const { Title, Text, Paragraph } = Typography;

const SupportPage = () => {
  return (
    <PublicLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg rounded-xl border-0 h-full">
              <Title level={3} className="text-xl font-semibold text-gray-800 mb-6">Contact Information</Title>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MailOutlined className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <Text className="font-medium block">Email Support</Text>
                    <Text className="text-gray-600">cheekycharting@gmail.com</Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <PhoneOutlined className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <Text className="font-medium block">Phone Support</Text>
                    <Text className="text-gray-600">+1 (555) 123-4567</Text>
                    <Text className="text-gray-500 text-sm mt-1">Mon-Fri, 9:00 AM - 5:00 PM EST</Text>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <EnvironmentOutlined className="text-purple-600 text-lg" />
                  </div>
                  <div>
                    <Text className="font-medium block">Office Address</Text>
                    <Text className="text-gray-600">2070 Realwind Drive</Text>
                    <Text className="text-gray-600">Fort Sumner NM 88119</Text>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Title level={4} className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</Title>
                <ul className="space-y-3">
                  <li>
                    <Text className="font-medium">How do I reset my password?</Text>
                    <Text className="text-gray-600 text-sm">Go to Settings > Account > Change Password</Text>
                  </li>
                  <li>
                    <Text className="font-medium">How do I update my profile?</Text>
                    <Text className="text-gray-600 text-sm">Visit your profile page and click "Edit Profile"</Text>
                  </li>
                  <li>
                    <Text className="font-medium">Where can I find billing information?</Text>
                    <Text className="text-gray-600 text-sm">Check Settings > Billing & Subscription</Text>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg rounded-xl border-0">
              <Title level={3} className="text-xl font-semibold text-gray-800 mb-6">Send us a Message</Title>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" size="large" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" size="large" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <Input placeholder="Enter your email" size="large" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What is this regarding?" size="large" />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <Input.TextArea
                    rows={6}
                    placeholder="Please describe your issue or question in detail..."
                    className="rounded-lg"
                  />
                </div>

                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  className="bg-[#2E7D32] hover:bg-[#1B5E20] px-8 py-3 rounded-lg"
                  size="large"
                >
                  Send Message
                </Button>
              </div>
            </Card>

            <div className="mt-8">
              <Card className="shadow-lg rounded-xl border-0">
                <Title level={3} className="text-xl font-semibold text-gray-800 mb-4">Support Resources</Title>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <Title level={5} className="text-lg font-medium text-gray-800 mb-2">User Guide</Title>
                    <Paragraph className="text-gray-600 mb-3">
                      Comprehensive guide on how to use Thera-Track App features and functionality.
                    </Paragraph>
                    <Button type="link" className="p-0 text-blue-600">
                      View Guide →
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <Title level={5} className="text-lg font-medium text-gray-800 mb-2">Video Tutorials</Title>
                    <Paragraph className="text-gray-600 mb-3">
                      Step-by-step video tutorials to help you get the most out of our platform.
                    </Paragraph>
                    <Button type="link" className="p-0 text-blue-600">
                      Watch Videos →
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <Title level={5} className="text-lg font-medium text-gray-800 mb-2">Community Forum</Title>
                    <Paragraph className="text-gray-600 mb-3">
                      Connect with other users and share tips, tricks, and solutions.
                    </Paragraph>
                    <Button type="link" className="p-0 text-blue-600">
                      Join Forum →
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <Title level={5} className="text-lg font-medium text-gray-800 mb-2">System Status</Title>
                    <Paragraph className="text-gray-600 mb-3">
                      Check the current status of our services and any ongoing maintenance.
                    </Paragraph>
                    <Button type="link" className="p-0 text-blue-600">
                      Check Status →
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SupportPage;