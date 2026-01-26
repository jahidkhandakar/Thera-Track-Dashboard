/* eslint-disable react/prop-types */
import logo from "../../public/image/logo.png";
import logo1 from "../../public/image/logo1.png";

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#193664] flex flex-col md:flex-row justify-between items-center p-4 ">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <img src={logo1} alt="Logo" className="h-8 w-auto" />
        </div>
      </header>
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
};

export default PublicLayout;
