import { Form, Input, Button, message } from "antd";
import PublicLayout from "../layout/PublicLayout";

const SupportPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
    // Show success message
    message.success('Your message has been sent successfully!');
    // Reset form after submission
    form.resetFields();
  };

  return (
    <PublicLayout>
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Support</h1>

          <Form
            form={form}
            name="support_form"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Enter your name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea
                rows={6}
                placeholder="Enter your message"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-lg py-6 rounded-lg"
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default SupportPage;
