import { BellOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Menu } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import url from "../redux/api/baseUrl";
import { useGetProfileQuery } from "../redux/features/auth/profile/getProfile";

import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();
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

  const handleMenuVisibility = (visible) => {
    setMenuVisible(visible);
  };

  const menu = (
    <Menu
      className={`transition ease-in-out duration-300 transform ${menuVisible ? "custom-dropdown-menu-visible" : "custom-dropdown-menu"}`}
    >
      <Menu.Item className="hover:!bg-[#193664]" key="1">
        <Link
          to="/dashboard/profile"
          className="hover:!bg-[#193664] hover:!text-white"
        >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item className="hover:!bg-[#193664]" key="3">
        <p
          onClick={() => {
            handleLogOut();
          }}
          className="hover:!bg-[#193664] hover:!text-white"
        >
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );
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
              className={`bg-primary text-xl md:text-3xl text-[#Ffffffff] p-1 md:p-2 border border-[#e7e0e0] rounded`}
            />
          </Badge>
        </div>

        {/* User dropdown */}
        <div className="border p-0.5 md:p-1 rounded shrink-0 min-w-0">
          <Dropdown
            className="px-1 md:px-2"
            overlay={menu}
            trigger={["click"]}
            onVisibleChange={handleMenuVisibility}
          >
            <a className="flex items-center text-white cursor-pointer text-whiteText min-w-0">
              <Avatar
                src={url + admin?.data?.attributes.profileImage}
                className="mr-0 md:mr-2 h-[26px] w-[26px] md:h-[42px] md:w-[42px] shrink-0"
              />
              <span className="hidden md:inline truncate">
                {admin?.data?.attributes.fullName}
              </span>
              <DownOutlined className="ml-1 text-[8px] md:text-xs shrink-0" />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
