import { ArrowLeftOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Skeleton, Typography } from 'antd';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditSubAdminMutation, useGetSingleSubAdminQuery } from '../../../redux/features/otherApi/subAdmin';

const { Title, Text } = Typography;

const EditSubAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  
  const { data: subAdminData, isLoading: isFetching } = useGetSingleSubAdminQuery(id);
  const [editSubAdmin] = useEditSubAdminMutation();

  useEffect(() => {
    if (subAdminData?.data) {
      const admin = subAdminData.data;
      form.setFieldsValue({
        fullName: admin.fullName,
        email: admin.email,
        phoneNumber: admin.phoneNumber,
      });
    }
  }, [subAdminData, form]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await editSubAdmin({ id, data: values }).unwrap();
      if (res?.code === 200 || res?.status === "success") {
        toast.success(res?.message || "Sub Admin updated successfully");
        setTimeout(() => {
          navigate('/dashboard/subadmin');
        }, 1500);
      } else {
        toast.error(res?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update sub admin");
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Skeleton active paragraph={{ rows: 10 }} />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/dashboard/subadmin')}
            className="mb-4"
            type="text"
          >
            Back to Sub Admins
          </Button>
          <Title level={2} className="mb-0 flex items-center gap-3">
            <UserOutlined className="text-blue-600" />
            Edit Sub Admin
          </Title>
          <Text className="text-gray-600">
            Update the sub admin&apos;s information.
          </Text>
        </div>

        <Card className="shadow-lg">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            className="space-y-4"
          >
            <Form.Item
              label={<span className="text-base font-medium">Full Name</span>}
              name="fullName"
              rules={[{ required: true, message: 'Please enter full name' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="John Doe"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-base font-medium">Email</span>}
              name="email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="john@example.com"
                size="large"
                disabled // Usually email shouldn't be changed or needs special handling
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-base font-medium">Phone Number</span>}
              name="phoneNumber"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="+1234567890"
                size="large"
              />
            </Form.Item>

            <div className="flex gap-4 pt-6">
              <Button
                type="default"
                size="large"
                onClick={() => navigate('/dashboard/subadmin')}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default EditSubAdmin;
