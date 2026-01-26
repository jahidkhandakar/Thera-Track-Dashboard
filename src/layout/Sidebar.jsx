import { BiSolidDashboard } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaDollarSign, FaSackDollar, FaUsers } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../public/image/logo.png";
import logo1 from "../../public/image/logo1.png";

const Sidebar = ({ closeDrawer }) => {
  const handleLinkClick = () => {
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <div className="flex flex-col justify-between bg-[#8FCAF8] h-full rounded-md shadow-lg overflow-y-auto">
      <div>
        <div className="p-6 flex flex-col items-center">
          <img
            className="rounded-lg mb-2"
            src={logo}
            alt="Logo"
          />
          <img
            className="rounded-lg h-8"
            src={logo1}
            alt="Logo Text"
          />
        </div>
        <div className="mt-4 px-2">
          <ul className="space-y-1">
            <NavLink
              to="home"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <BiSolidDashboard className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="user"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <FaUsers className="h-5 w-5 mr-3" />
              <span>Users</span>
            </NavLink>

            <NavLink
              to="subadmin"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <FaUsers className="h-5 w-5 mr-3" />
              <span>Sub Admins</span>
            </NavLink>

            <NavLink
              to="subscription"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <FaDollarSign className="h-5 w-5 mr-3" />
              <span>Subscription</span>
            </NavLink>

            <NavLink
              to="feedback"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <MdOutlineRateReview className="h-5 w-5 mr-3" />
              <span>Feed Back</span>
            </NavLink>

            <NavLink
              to="earning"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <FaSackDollar className="h-5 w-5 mr-3" />
              <span>Earning</span>
            </NavLink>

            <NavLink
              to="settings"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[15px] font-medium p-4 bg-gradient-to-r from-white to-[#2196F3] text-[#2196F3] rounded-lg"
                  : "flex text-[#2196F3] cursor-pointer items-center text-[15px] font-medium p-4 hover:bg-blue-50 transition-colors rounded-lg"
              }
            >
              <CiSettings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
