import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-4 md:mt-8 bg-white p-6 rounded-lg">
      <h1 className="font-semibold text-2xl md:text-[30px]">Settings</h1>
      <div className="space-y-4 md:space-y-8 mt-6">
        {/* Privacy policy */}
        <div
          onClick={() => navigate("/dashboard/settings/privacypolicy")}
          className="cursor-pointer flex justify-between bg-[#F7F7F7] rounded items-center w-full py-4 md:py-6 px-4 md:px-8 hover:bg-gray-100 transition-colors"
        >
          <p className="text-base md:text-[18px] font-medium">Privacy Policy</p>
          <Link
            to="/dashboard/settings/privacypolicy"
            className="text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
          onClick={() => navigate("/dashboard/settings/termcondition")}
          className="flex justify-between cursor-pointer bg-[#F7F7F7] rounded items-center w-full py-4 md:py-6 px-4 md:px-8 hover:bg-gray-100 transition-colors"
        >
          <p className="text-base md:text-[18px] font-medium">
            Terms and Condition
          </p>
          <Link
            to="/dashboard/settings/termcondition"
            className="text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
          onClick={() => navigate("/dashboard/settings/about")}
          className="cursor-pointer flex justify-between bg-[#F7F7F7] rounded items-center w-full py-4 md:py-6 px-4 md:px-8 hover:bg-gray-100 transition-colors"
        >
          <p className="text-base md:text-[18px] font-medium">About Us</p>
          <Link
            to="/dashboard/settings/about"
            className="text-[#193664] px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
