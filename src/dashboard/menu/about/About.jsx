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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 border-b border-gray-200 pb-6 mb-6">
          <Link
            to="/dashboard/settings"
            className="flex items-center hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <FaCircleArrowLeft className="text-[#2196F3] w-8 h-8" />
          </Link>
          <h1 className="font-bold text-3xl text-gray-800">About Us</h1>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed min-h-[300px]">
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-400">No content available</p>
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
          <Button
            type="primary"
            onClick={() => navigate(`/dashboard/settings/editabout`)}
            className="h-12 px-8 text-lg font-medium bg-[#2196F3] hover:bg-blue-600 rounded-lg shadow-md transition-all"
          >
            Edit Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
