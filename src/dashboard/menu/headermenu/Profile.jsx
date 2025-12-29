import { Card, Image, Input, Button, Space, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import user from '../../../../public/image/randomuser.jpg';
import url from "./../../../redux/api/baseUrl";
import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
import { Spin } from 'antd';

const { Title, Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();
  const { data: admin, isLoading, isError } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
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

  const userData = admin?.data?.attributes;

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Title level={2} className="text-2xl md:text-3xl font-bold text-gray-800">
            Profile Information
          </Title>
          <Text className="text-gray-600">Manage your personal information</Text>
        </div>
        <Button
          type="primary"
          onClick={() => navigate(`/dashboard/editprofile`)}
          className="mt-4 md:mt-0 bg-[#2E7D32] hover:bg-[#1B5E20] text-white flex items-center gap-2"
        >
          <FaEdit />
          <span>Edit Profile</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card 
            className="shadow-lg rounded-xl border-0"
            bodyStyle={{ padding: '24px' }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image 
                    src={url + userData?.profileImage} 
                    fallback={user}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    preview={false}
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 border-2 border-white">
                  <div className="w-3 h-3 rounded-full bg-green-300"></div>
                </div>
              </div>
              
              <Title level={3} className="text-xl font-semibold text-gray-800">
                {userData?.firstName} {userData?.lastName}
              </Title>
              <Text className="text-gray-600 mb-2">{userData?.role}</Text>
              <div className="flex items-center text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <Text>{userData?.location || 'Location not specified'}</Text>
              </div>
              
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <Text className="text-gray-600">Account Status</Text>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <Text className="text-gray-600">Member Since</Text>
                  <Text className="font-medium">{new Date(userData?.createdAt || Date.now()).toLocaleDateString()}</Text>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Information Card */}
        <div className="lg:col-span-2">
          <Card 
            className="shadow-lg rounded-xl border-0"
            title={
              <Title level={4} className="text-lg font-semibold text-gray-800">
                Personal Information
              </Title>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Text className="text-gray-600 block mb-1">Full Name</Text>
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-3" />
                    <Input
                      value={`${userData?.firstName || ''} ${userData?.lastName || ''}`}
                      className="bg-gray-50 border-0 rounded-lg p-3"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <Text className="text-gray-600 block mb-1">Email Address</Text>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <Input
                      value={userData?.email || ''}
                      className="bg-gray-50 border-0 rounded-lg p-3"
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <Text className="text-gray-600 block mb-1">Phone Number</Text>
                  <div className="flex items-center">
                    <FaPhone className="text-gray-400 mr-3" />
                    <Input
                      value={userData?.phoneNumber || ''}
                      className="bg-gray-50 border-0 rounded-lg p-3"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Text className="text-gray-600 block mb-1">Position</Text>
                  <Input
                    value={userData?.role || ''}
                    className="bg-gray-50 border-0 rounded-lg p-3"
                    readOnly
                  />
                </div>

                <div>
                  <Text className="text-gray-600 block mb-1">Department</Text>
                  <Input
                    value={userData?.department || 'Not specified'}
                    className="bg-gray-50 border-0 rounded-lg p-3"
                    readOnly
                  />
                </div>

                <div>
                  <Text className="text-gray-600 block mb-1">Location</Text>
                  <Input
                    value={userData?.location || 'Not specified'}
                    className="bg-gray-50 border-0 rounded-lg p-3"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <Divider className="my-6" />

            <div>
              <Text className="text-gray-600 block mb-1">Bio</Text>
              <Input.TextArea
                value={userData?.bio || 'No bio provided'}
                className="bg-gray-50 border-0 rounded-lg p-3"
                rows={4}
                readOnly
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Additional Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card 
          className="shadow-lg rounded-xl border-0"
          title={
            <Title level={4} className="text-lg font-semibold text-gray-800">
              Account Security
            </Title>
          }
        >
          <Space direction="vertical" size="middle">
            <div className="flex justify-between items-center">
              <Text>Password</Text>
              <Button 
                type="link" 
                onClick={() => {/* Handle password change */}}
                className="text-blue-600 hover:text-blue-800"
              >
                Change Password
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <Text>Two-Factor Authentication</Text>
              <Button 
                type="link" 
                className="text-blue-600 hover:text-blue-800"
              >
                Configure
              </Button>
            </div>
          </Space>
        </Card>

        <Card 
          className="shadow-lg rounded-xl border-0"
          title={
            <Title level={4} className="text-lg font-semibold text-gray-800">
              Privacy Settings
            </Title>
          }
        >
          <Space direction="vertical" size="middle">
            <div className="flex justify-between items-center">
              <Text>Profile Visibility</Text>
              <Text className="text-gray-600">Public</Text>
            </div>
            <div className="flex justify-between items-center">
              <Text>Email Notifications</Text>
              <Text className="text-gray-600">Enabled</Text>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default Profile;