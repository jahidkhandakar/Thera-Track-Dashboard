import { BellOutlined, DownOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Form, Input, Menu, Modal } from 'antd';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import url from "../redux/api/baseUrl";
import { useGetProfileQuery } from "../redux/features/auth/profile/getProfile";
 
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useChangePasswordMutation } from "../redux/features/auth/changePassword";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const { data: admin } = useGetProfileQuery();

   const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      
      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000
        });
        navigate('/');
      }
    });
  };

  const [passwordChange] = useChangePasswordMutation();
  
  const changePassword = async (values) => {
    const { ...ChangePassword } = values;
    console.log("Form values: ", ChangePassword);

    try {
      const res = await passwordChange(ChangePassword).unwrap();
      console.log(res);
      if (res?.code == 200) {
        setIsModalOpen(false);
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate('/dashboard/home');
      }, 1000);
    } catch (error) {
      console.log(error.data);
      toast.error(error?.data?.message || "Failed to change password");
    }
  };

  const handleMenuVisibility = (visible) => {
    setMenuVisible(visible);
  };

  const menu = (
    <Menu className={`transition ease-in-out duration-300 transform ${menuVisible ? 'custom-dropdown-menu-visible' : 'custom-dropdown-menu'}`}>
      <Menu.Item className="hover:!bg-[#193664]" key="1">
        <Link to="/dashboard/profile" className="hover:!bg-[#193664] hover:!text-white">Profile</Link>
      </Menu.Item>
      <Menu.Item className="hover:!bg-[#193664]" key="2">
        <p onClick={() => setIsModalOpen(true)} className="hover:!bg-[#193664] hover:!text-white">Change Password</p>
      </Menu.Item>
      <Menu.Item className="hover:!bg-[#193664]" key="3">
        <p onClick={() => {
         
         handleLogOut();
        }} className="hover:!bg-[#193664] hover:!text-white">Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className=" flex justify-between items-center p-3 md:p-5 rounded-md !bg-[#2196F3]"> 
     <Toaster />
     <div className="flex items-center gap-2 md:gap-4">
       <Button 
         type="text" 
         icon={<MenuOutlined className="text-white text-xl" />} 
         onClick={toggleMobileMenu} 
         className="lg:hidden"
       />
       <div className="text-white hidden sm:block">
        <p className="text-header text-whiteText font-medium text-xs md:text-base">Welcome !</p>
        
        <h1 className="text-[#dcddad] text-sm md:text-[20px] font-semibold">{admin?.data?.attributes.fullName}</h1>  
       </div>   
     </div>
  

      <div className="flex items-center gap-3 md:gap-5">
        {/* Notifications */}
        <div
          onClick={() => navigate("/dashboard/notification")}
          className="relative flex items-center"
        >
          <Badge style={{ backgroundColor: "red", marginTop: '10px', marginRight: '5px' }}>
            <BellOutlined
              style={{ cursor: "pointer" }}
              className={`bg-primary text-2xl md:text-3xl text-[#Ffffffff] p-1.5 md:p-2 border border-[#e7e0e0] rounded`}
            />
          </Badge>
        </div>
        
        {/* User dropdown */}
        <div className="border p-1 rounded">
        <Dropdown className="px-1 md:px-2" overlay={menu} trigger={['click']} onVisibleChange={handleMenuVisibility}>
    <a className="flex items-center text-white cursor-pointer text-whiteText">
      <Avatar src={url + admin?.data?.attributes.profileImage} className="mr-0 md:mr-2 h-[32px] w-[32px] md:h-[42px] md:w-[42px]" />
      <span className="hidden md:inline">{admin?.data?.attributes.fullName}</span>
      <DownOutlined className="ml-1 text-xs" />
    </a>
  </Dropdown>
        </div>
      </div>

      {/* Change Password Modal */}
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
    </div>
  );
};

export default Header;