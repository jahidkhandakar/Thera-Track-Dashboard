import { NavLink } from "react-router-dom";
import logo from "../../public/image/logo.png";
import logo1 from "../../public/image/logo1.png";
import { FaDollarSign, FaSackDollar, FaUsers } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] w-[120px] flex flex-col justify-between bg-primaryBg h-full min-h-screen rounded-md">
      <div>
        <div className="p-[10px] grid justify-items-stretch  sm:p-[16px]">
          <img
            className="h-24 rounded-lg justify-self-center"
            src={logo}
            alt="Logo"
          />
          <img
            className=" rounded-lg justify-self-center"
            src={logo1}
            alt="Logo"
          />

          {/* <hr className="w-full mt-4 text-[#54D496] hidden sm:block" /> */}
        </div>
        <div className="ml-5 mt-8">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="user"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium  rounded-lg"
              }
            >
              <FaUsers className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Users</span>
            </NavLink>

            <NavLink
              to="subscription"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium   rounded-lg"
              }
            >
              <FaDollarSign className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Subscription</span>
            </NavLink>

            <NavLink
              to="feedback"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px]  m-[6px] rounded-lg"
              }
            >
              <MdOutlineRateReview className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Feed Back</span>
            </NavLink>

            <NavLink
              to="earning"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px]  m-[6px] rounded-lg"
              }
            >
              <FaSackDollar className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Earning</span>
            </NavLink>

            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium   rounded-lg"
              }
            >
              <CiSettings className="h-8 w-8 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Settings</span>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* <div className="mb-[60px] mt-2">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#942020] font-medium"
        >
          <HiLogout className="h-8 w-8 lg:h-5 lg:w-5" />
          <span className="hidden sm:block text-[20px]">Log Out</span>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
