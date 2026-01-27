import { FileImageOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Spin, Upload } from "antd";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import url from "../../../redux/api/baseUrl";
import { useUpdateProfileMutation } from "../../../redux/features/auth/profile/editProfile";
import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
import userImage from "../../../../public/image/user.jpg";
const EditProfile = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [form] = Form.useForm();

  const { data: profile, isLoading, isError } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  useEffect(() => {
    if (profile) {
      const userData = profile?.data?.attributes;

      // Set phone number - your data likely has 'phone' field, not 'phoneNumber'
      setPhoneNumber(userData?.phone || "");

      const profileImageUrl = userData?.profileImage
        ? url + userData?.profileImage
        : userImage;

      setImageUrl(profileImageUrl);

      // Set form values based on actual data structure
      form.setFieldsValue({
        fullName: userData?.fullName || "",
        email: userData?.email || "",
        role: userData?.role || "",
        bio: userData?.bio || "",
      });
    }
  }, [profile, form]);

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList[0]?.originFileObj) {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => setImageUrl(reader.result);
    }
  };

  const handleUpdateProfile = async (values) => {
    const formData = new FormData();
    formData.append("fullName", values?.fullName);
    formData.append("phone", phoneNumber);

    if (fileList[0]?.originFileObj) {
      formData.append("profileImage", fileList[0]?.originFileObj);
    }

    try {
      const res = await updateProfile(formData).unwrap();

      if (res?.code === 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate("/dashboard/profile");
        }, 1000);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return <div className="p-6 text-center"></div>;
  }

  const userData = profile?.data?.attributes;

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center mb-8">
        <Button
          type="text"
          icon={<MdOutlineKeyboardArrowLeft size={24} />}
          onClick={() => navigate("/dashboard/profile")}
          className="text-gray-600 hover:text-gray-900 text-lg"
        >
          Back to Profile
        </Button>
      </div>

      <div className="max-w-6xl mx-auto">
        <Card
          className=" rounded-xl border-0"
          title={
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
              <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {userData?.role}
              </span>
            </div>
          }
        >
          <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            onFinish={handleUpdateProfile}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Picture Section */}
              <div className="lg:col-span-1">
                <Card
                  className=" rounded-xl border-0"
                  title={
                    <h2 className="text-lg font-semibold text-gray-800">
                      Profile Picture
                    </h2>
                  }
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full flex justify-center items-center mt-4 bg-gray-100 border-2 border-dashed border-gray-300">
                      <img
                        className="w-44 h-44 rounded-full object-cover"
                        src={imageUrl}
                        alt="Profile"
                      />
                    </div>

                    <div className="mt-6 w-full">
                      <Upload
                        name="avatar"
                        showUploadList={false}
                        onChange={handleUploadChange}
                        accept="image/*"
                        maxCount={1}
                        className="flex justify-center items-center"
                      >
                        <Button className="w-full flex mx-auto items-center justify-center gap-2 py-3 mb-5">
                          <FileImageOutlined /> Change Picture
                        </Button>
                      </Upload>
                      <p className="text-gray-500 text-sm mt-2 text-center">
                        JPG, GIF or PNG. Max size of 800K
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Personal Information Section */}
              <div className="lg:col-span-2">
                <Card
                  className=" rounded-xl border-0"
                  title={
                    <h2 className="text-lg font-semibold text-gray-800">
                      Personal Information
                    </h2>
                  }
                >
                  <div className="grid grid-cols-1 gap-6">
                    <Form.Item
                      label="Full Name"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your full name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your full name"
                        className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                      <Input
                        placeholder="Email"
                        readOnly
                        className="p-3 rounded-lg border-gray-300 bg-gray-100"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item label="Role" name="role">
                      <Input
                        placeholder="Role"
                        readOnly
                        className="p-3 rounded-lg border-gray-300 bg-gray-100"
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  <div className="flex justify-end gap-4 mt-8">
                    <Button
                      size="large"
                      onClick={() => navigate("/dashboard/profile")}
                      className="px-6 py-3 rounded-lg"
                    >
                      Cancel
                    </Button>
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="large"
                      className="px-6 py-3  rounded-lg"
                      loading={isUpdating}
                      disabled={isUpdating}
                    >
                      Update Profile
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;
