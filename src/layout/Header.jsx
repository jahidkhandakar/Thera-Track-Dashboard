import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import url from "../redux/api/baseUrl";
import { useGetProfileQuery } from "../redux/features/auth/profile/getProfile";
import user from "../../public/image/user.jpg";

import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
  const { data: admin } = useGetProfileQuery();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",

      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000,
        });
        navigate("/");
      }
    });
  };

  const items = [
    {
      key: "1",
      label: <Link to="/dashboard/profile">Profile</Link>,
    },
    {
      key: "2",
      label: (
        <button
          onClick={() => {
            handleLogOut();
          }}
        >
          Logout
        </button>
      ),
    },
  ];
  return (
    <div className=" flex justify-between items-center p-3 md:p-5 rounded-md !bg-[#2196F3]">
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          type="text"
          icon={<MenuOutlined className="text-white text-xl" />}
          onClick={toggleMobileMenu}
          className="lg:hidden"
        />
        <div className="text-white hidden sm:block">
          <p className="text-header text-whiteText font-medium text-xs md:text-base">
            Welcome !
          </p>

          <h1 className="text-[#dcddad] text-sm md:text-[20px] font-semibold">
            {admin?.data?.attributes.fullName}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-1.5 md:gap-5 min-w-0">
        {/* Notifications */}
        <div
          onClick={() => navigate("/dashboard/notification")}
          className="relative flex items-center shrink-0"
        >
          <Badge
            style={{
              backgroundColor: "red",
              marginTop: "8px",
              marginRight: "1px",
            }}
          >
            <BellOutlined
              style={{ cursor: "pointer" }}
              className={`bg-primary text-xl  text-[#Ffffffff] p-1 md:p-2 border border-[#e7e0e0] rounded`}
            />
          </Badge>
        </div>

        {/* User dropdown */}
        <Dropdown menu={{ items }} placement="topLeft" arrow>
          <a className="flex items-center text-white cursor-pointer text-whiteText min-w-0">
            {admin?.data?.attributes?.profileImage ? (
              <Avatar
                size={40}
                src={url + admin?.data?.attributes.profileImage}
                className="mr-0 md:mr-2 shrink-0"
              />
            ) : (
              <Avatar size={50} src={user} className="mr-0 md:mr-2 shrink-0" />
            )}
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
