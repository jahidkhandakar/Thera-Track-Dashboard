import { useNavigate } from 'react-router-dom';
import { Edit, User, Mail, Phone, User as UserIcon, Space } from 'lucide-react';
import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
import url from '../../../redux/api/baseUrl';
import { Button, Card, Form, Input, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";
import { useState } from 'react';
import { useChangePasswordMutation } from '../../../redux/features/auth/changePassword';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { data: admin, isLoading, isError } = useGetProfileQuery();
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl text-red-500">Error loading profile data</h2>
      </div>
    );
  }


    const [passwordChange] = useChangePasswordMutation();
  
  const changePassword = async (values) => {
    const { confirmPassword, ...ChangePassword } = values;
    console.log("Form values: ", ChangePassword);

    try {
      const res = await passwordChange(ChangePassword).unwrap();
      console.log(res);
      if (res?.code == 200) {
        setIsModalOpen(false);
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate('/dashboard/profile');
      }, 1000);
    } catch (error) {
      console.log(error.data);
      
    }
  };

  const userData = admin?.data?.attributes;

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <Toaster />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Profile Information
          </h2>
          <p className="text-gray-600">Manage your personal information</p>
        </div>
        <button
          onClick={() => navigate(`/dashboard/editprofile`)}
          className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Edit size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {userData?.profileImage ? (
                    <img 
                      src={url + userData.profileImage} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <UserIcon size={48} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {userData?.fullName || 'User'}
              </h3>
              <p className="text-gray-600">{userData?.role || 'User'}</p>
            </div>
             <Card
                              className="shadow-md rounded-xl border-0 mt-6"
                              title={
                                <h2 className="text-lg font-semibold text-gray-800">Account Security</h2>
                              }
                            >
                 
                                <Button 
                                  type="link" 
                                  onClick={() => setIsModalOpen(true)}
                                  className="text-left p-0 text-blue-600 hover:text-blue-800"
                                >
                                  Change Password
                                </Button> 
                      
                            </Card>
          </div>
        </div>
         <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="flex flex-col w-[80%] mx-auto">
          <h2 className="text-[28px] text-left font-semibold mb-4">Change Password</h2>
          <p className="mb-8 text-gray-600">Your password must be 8-10 character long.</p>
          <Form
            name="changePassword"
            layout="vertical"
            onFinish={changePassword}
          >
            <Form.Item
              name="currentPassword"
              label="Old Password"
              rules={[{ required: true, message: "Please enter your old password!" }]}
            >
              <Input.Password
                style={{
                  height: "40px",
                  background: "#E6F9EF",
                  outline: "none",
                  border: '1px solid green'
                }}
                placeholder="Old Password"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[{ required: true, message: "Please enter your new password!" }]}
            >
              <Input.Password
                style={{
                  height: "40px",
                  background: "#E6F9EF",
                  outline: "none",
                  border: '1px solid green'
                }}
                placeholder="New Password"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                style={{
                  height: "40px",
                  background: "#E6F9EF",
                  outline: "none",
                  border: '1px solid green'
                }}
                placeholder="Confirm Password"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-10 py-3 !bg-[#2196F3] !text-white text-[16px] rounded-md"
              >
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
        {/* Contact Information Card */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Personal Information
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-base font-medium text-gray-700 block mb-2">
                  Full Name
                </label>
                <div className="border border-gray-300 rounded-lg px-3 py-3 text-base flex items-center gap-2 bg-gray-50">
                  <User className="text-gray-400" size={16} />
                  <span>{userData?.fullName || 'Not provided'}</span>
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-700 block mb-2">
                  Email Address
                </label>
                <div className="border border-gray-300 rounded-lg px-3 py-3 text-base flex items-center gap-2 bg-gray-50">
                  <Mail className="text-gray-400" size={16} />
                  <span>{userData?.email || 'Not provided'}</span>
                </div>
              </div>

              {/* <div>
                <label className="text-base font-medium text-gray-700 block mb-2">
                  Phone Number
                </label>
                <div className="border border-gray-300 rounded-lg px-3 py-3 text-base flex items-center gap-2 bg-gray-50">
                  <Phone className="text-gray-400" size={16} />
                  <span>{userData?.phoneNumber || userData?.phone || 'Not provided'}</span>
                </div>
              </div> */}

              <div>
                <label className="text-base font-medium text-gray-700 block mb-2">
                  Role
                </label>
                <div className="border border-gray-300 rounded-lg px-3 py-3 text-base flex items-center gap-2 bg-gray-50">
                  <UserIcon className="text-gray-400" size={16} />
                  <span>{userData?.role || 'Not provided'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
