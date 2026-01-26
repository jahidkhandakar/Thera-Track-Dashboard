import { useNavigate } from "react-router-dom";
import { Edit, User, Mail, User as UserIcon } from "lucide-react";
import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
import url from "../../../redux/api/baseUrl";
import { Button, Card } from "antd";
import { Toaster } from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { data: admin, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const userData = admin?.data?.attributes;

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
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
          <div className="bg-white  rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ">
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
                {userData?.fullName || "User"}
              </h3>
              <p className="text-gray-600">{userData?.role || "User"}</p>
            </div>
            <Card
              className="shadow-md rounded-xl border-0 mt-6"
              title={
                <h2 className="text-lg font-semibold text-gray-800">
                  Account Security
                </h2>
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
        {/* Contact Information Card */}
        <div className="lg:col-span-2">
          <div className="bg-white  rounded-xl p-6">
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
                  <span>{userData?.fullName || "Not provided"}</span>
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-700 block mb-2">
                  Email Address
                </label>
                <div className="border border-gray-300 rounded-lg px-3 py-3 text-base flex items-center gap-2 bg-gray-50">
                  <Mail className="text-gray-400" size={16} />
                  <span>{userData?.email || "Not provided"}</span>
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
                  <span>{userData?.role || "Not provided"}</span>
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
