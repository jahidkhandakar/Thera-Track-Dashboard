import { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "antd";
import { useGetAboutQuery } from "../../../redux/features/setting/settingSlice";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const About = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const { data: aboutus } = useGetAboutQuery();

  useEffect(() => {
    if (aboutus?.data?.attributes) {
      const decodedContent = decodeHtml(aboutus.data.attributes?.aboutUs);
      setContent(decodedContent);
    }
  }, [aboutus]);

  return (
    <div className=" mt-8 mx-6">
      <Link to="/dashboard/settings" className="flex items-center gap-2">
        <FaCircleArrowLeft className=" text-primaryBg w-8 h-8" />
        <p className=" font-semibold text-[30px]">About Us</p>
      </Link>
      <div className="mt-4">
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
        {/* <p>about us heare</p> */}
      </div>
      <div className=" text-right mt-16">
        <Button
          onClick={() => navigate(`/dashboard/settings/editabout`)}
          className="h-[44px] w-[260px] !text-white !bg-[#8FCAF8] rounded-[8px]"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default About;
