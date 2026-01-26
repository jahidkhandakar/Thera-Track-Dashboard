// import { Button, Form, Input, Upload, Card, Space, message, Spin } from "antd";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-number-input";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { LuImagePlus } from "react-icons/lu";
// import "react-phone-number-input/style.css";
// import defaultUserImage from "../../../../public/image/randomuser.jpg";
// import url from "../../../redux/api/baseUrl";
// import toast, { Toaster } from "react-hot-toast";
// import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
// import { useUpdateProfileMutation } from "../../../redux/features/auth/profile/editProfile";
// import { UploadOutlined, UserOutlined } from '@ant-design/icons';

// const EditProfile = () => {
//   const navigate = useNavigate();
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [fileList, setFileList] = useState([]);
//   const [imageUrl, setImageUrl] = useState(defaultUserImage);
//   const [form] = Form.useForm();

//   const { data: profile, isLoading, isError } = useGetProfileQuery();
//   const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

//   useEffect(() => {
//     if (profile) {
//       const userData = profile?.data?.attributes;
//         console.log(userData)
//       setPhoneNumber(userData?.phoneNumber || "");
      
//       const profileImageUrl = userData?.profileImage
//         ? url + userData?.profileImage
//         : defaultUserImage;
      
//       setImageUrl(profileImageUrl);

//       // Update form fields dynamically
//       form.setFieldsValue({
//         name: profile?.data?.attributes.fullName || "",
//         email: profile?.data?.attributes.email || "",
//       });
//     }
//   }, [profile, form]);

//   const handleUploadChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     if (newFileList[0]?.originFileObj) {
//       const reader = new FileReader();
//       reader.readAsDataURL(newFileList[0].originFileObj);
//       reader.onload = () => setImageUrl(reader.result);
//     }
//   };

//   const handleUpdateProfile = async (values) => {
//     const formData = new FormData();
//     formData.append("fullName", values?.name);
//     formData.append("phoneNumber", phoneNumber);
    
//     if (fileList[0]?.originFileObj) {
//       formData.append("profileImage", fileList[0]?.originFileObj);
//     }

//     try {
//       const res = await updateProfile(formData).unwrap();
//       console.log(res);

//       if (res?.code === 200) {
//         toast.success(res?.message);
//         setTimeout(() => {
//           navigate("/dashboard/profile");
//         }, 1000);
//       }
//     } catch (error) {
//       toast.error(error?.data?.message || "Failed to update profile");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl text-red-500">Error loading profile data</h2>
//       </div>
//     );
//   }

//   const userData = profile?.data?.attributes;

//   return (
//     <div className="p-4 md:p-6">
//       <Toaster />
      
//       <div className="flex items-center mb-8">
//         <Button
//           type="text"
//           icon={<MdOutlineKeyboardArrowLeft size={24} />}
//           onClick={() => navigate("/dashboard/profile")}
//           className="text-gray-600 hover:text-gray-900 text-lg"
//         >
//           Back to Profile
//         </Button>
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <Card 
//           className="shadow-lg rounded-xl border-0"
//           title={
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
//               <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                 {userData?.role}
//               </span>
//             </div>
//           }
//         >
//           <Form
//             form={form}
//             layout="vertical"
//             autoComplete="off"
//             onFinish={handleUpdateProfile}
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Profile Picture Section */}
//               <div className="lg:col-span-1">
//                 <Card 
//                   className="shadow-md rounded-xl border-0"
//                   title={
//                     <h2 className="text-lg font-semibold text-gray-800">Profile Picture</h2>
//                   }
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="relative w-48 h-48 rounded-full flex justify-center items-center mt-4 bg-gray-100 border-2 border-dashed border-gray-300">
//                       <img 
//                         className="w-44 h-44 rounded-full object-cover" 
//                         src={imageUrl} 
//                         alt="Profile" 
//                       />
//                     </div>

//                     <div className="mt-6 w-full">
//                       <Upload 
//                         name="avatar" 
//                         showUploadList={false} 
//                         onChange={handleUploadChange}
//                         accept="image/*"
//                         maxCount={1}
//                       >
//                         <Button 
//                           className="w-full flex items-center justify-center gap-2 py-3"
//                           icon={<UploadOutlined />}
//                         >
//                           Change Picture
//                         </Button>
//                       </Upload>
//                       <p className="text-gray-500 text-sm mt-2 text-center">
//                         JPG, GIF or PNG. Max size of 800K
//                       </p>
//                     </div>
//                   </div>
//                 </Card>

//                 <Card 
//                   className="shadow-md rounded-xl border-0 mt-6"
//                   title={
//                     <h2 className="text-lg font-semibold text-gray-800">Account Security</h2>
//                   }
//                 >
//                   <Space direction="vertical" size="middle" className="w-full">
//                     <Button 
//                       type="link" 
//                       onClick={() => navigate('/dashboard/changepassword')}
//                       className="text-left p-0 text-blue-600 hover:text-blue-800"
//                     >
//                       Change Password
//                     </Button>
//                     <Button 
//                       type="link" 
//                       className="text-left p-0 text-blue-600 hover:text-blue-800"
//                     >
//                       Two-Factor Authentication
//                     </Button>
//                   </Space>
//                 </Card>
//               </div>

//               {/* Personal Information Section */}
//               <div className="lg:col-span-2">
//                 <Card 
//                   className="shadow-md rounded-xl border-0"
//                   title={
//                     <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
//                   }
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <Form.Item
//                       label="First Name"
//                       name="firstName"
//                       rules={[{ required: true, message: "Please input your first name!" }]}
//                     >
//                       <Input
//                         placeholder="Enter your first name"
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Last Name"
//                       name="lastName"
//                       rules={[{ required: true, message: "Please input your last name!" }]}
//                     >
//                       <Input
//                         placeholder="Enter your last name"
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Email"
//                       name="email"
//                     >
//                       <Input
//                         placeholder="Email"
//                         readOnly
//                         className="p-3 rounded-lg border-gray-300 bg-gray-100"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Role"
//                       name="role"
//                     >
//                       <Input
//                         placeholder="Role"
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Department"
//                       name="department"
//                     >
//                       <Input
//                         placeholder="Department"
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Location"
//                       name="location"
//                     >
//                       <Input
//                         placeholder="Location"
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         size="large"
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Phone Number"
//                       className="md:col-span-2"
//                     >
//                       <PhoneInput
//                         placeholder="Enter phone number"
//                         international
//                         value={phoneNumber}
//                         onChange={setPhoneNumber}
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                         style={{ 
//                           height: "48px", 
//                           border: "1px solid #d9d9d9",
//                           borderRadius: "6px"
//                         }}
//                       />
//                     </Form.Item>

//                     <Form.Item
//                       label="Bio"
//                       name="bio"
//                       className="md:col-span-2"
//                     >
//                       <Input.TextArea
//                         placeholder="Tell us about yourself"
//                         rows={4}
//                         className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </Form.Item>
//                   </div>

//                   <div className="flex justify-end gap-4 mt-8">
//                     <Button
//                       size="large"
//                       onClick={() => navigate("/dashboard/profile")}
//                       className="px-6 py-3 rounded-lg"
//                     >
//                       Cancel
//                     </Button>
//                     <Button
//                       htmlType="submit"
//                       type="primary"
//                       size="large"
//                       className="px-6 py-3 !bg-[#2E7D32] hover:!bg-[#1B5E20] rounded-lg"
//                       loading={isUpdating}
//                       disabled={isUpdating}
//                     >
//                       Update Profile
//                     </Button>
//                   </div>
//                 </Card>
//               </div>
//             </div>
//           </Form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;



import { Button, Form, Input, Upload, Card, Space, message, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";
import defaultUserImage from "../../../../public/image/randomuser.jpg";
import url from "../../../redux/api/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { useGetProfileQuery } from "../../../redux/features/auth/profile/getProfile";
import { useUpdateProfileMutation } from "../../../redux/features/auth/profile/editProfile";
import { UploadOutlined } from '@ant-design/icons';

const EditProfile = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(defaultUserImage);
  const [form] = Form.useForm();

  const { data: profile, isLoading, isError } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  useEffect(() => {
    if (profile) {
      const userData = profile?.data?.attributes;
      console.log(userData);
      
      // Set phone number - your data likely has 'phone' field, not 'phoneNumber'
      setPhoneNumber(userData?.phone || "");
      
      const profileImageUrl = userData?.profileImage
        ? url + userData?.profileImage
        : defaultUserImage;
      
      setImageUrl(profileImageUrl);

      // Set form values based on actual data structure
      form.setFieldsValue({
        fullName: userData?.fullName || "",
        email: userData?.email || "",
        role: userData?.role || "",
        bio: userData?.bio || ""
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
    formData.append("phone", phoneNumber); // Use 'phone' instead of 'phoneNumber'
    
    if (fileList[0]?.originFileObj) {
      formData.append("profileImage", fileList[0]?.originFileObj);
    }

    try {
      const res = await updateProfile(formData).unwrap();
      console.log(res);

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
    return (
      <div className="p-6 text-center">
      </div>
    );
  }

  const userData = profile?.data?.attributes;

  return (
    <div className="p-4 md:p-6">
      <Toaster />
      
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
          className="shadow-lg rounded-xl border-0"
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
                  className="shadow-md rounded-xl border-0"
                  title={
                    <h2 className="text-lg font-semibold text-gray-800">Profile Picture</h2>
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
                      >
                        <Button 
                          className="w-full flex items-center justify-center gap-2 py-3"
                          icon={<UploadOutlined />}
                        >
                          Change Picture
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
                  className="shadow-md rounded-xl border-0"
                  title={
                    <h2 className="text-lg font-semibold text-gray-800">Personal Information</h2>
                  }
                >
                  <div className="grid grid-cols-1 gap-6">
                    <Form.Item
                      label="Full Name"
                      name="fullName"
                      rules={[{ required: true, message: "Please input your full name!" }]}
                    >
                      <Input
                        placeholder="Enter your full name"
                        className="p-3 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Email"
                      name="email"
                    >
                      <Input
                        placeholder="Email"
                        readOnly
                        className="p-3 rounded-lg border-gray-300 bg-gray-100"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Role"
                      name="role"
                    >
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
                      className="px-6 py-3 !bg-[#2E7D32] hover:!bg-[#1B5E20] rounded-lg"
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
