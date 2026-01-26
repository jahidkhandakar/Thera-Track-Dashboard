import { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useGetPrivacyQuery } from "../../../redux/features/setting/settingSlice";

// Function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { data: privacy } = useGetPrivacyQuery();
  useEffect(() => {
    if (privacy?.data?.attributes) {
      // Decode the HTML content before setting it
      const decodedContent = decodeHtml(privacy.data.attributes?.privacyPolicy);
      setContent(decodedContent);
    }
  }, [privacy]);

  return (
    <div className="h-[575px]">
      <div className="mt-8 mx-6">
        <Link to="/dashboard/settings" className="flex items-center gap-2">
          <FaCircleArrowLeft className="text-primaryBg w-8 h-8" />
          <p className="font-semibold text-[30px]">Privacy Policy</p>
        </Link>
        <div className="mt-4">
          {/* Render the decoded content as HTML */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {/* <p>privacypolicy</p> */}
        </div>
        <div className="text-right mt-16">
          <button
            onClick={() => navigate(`/dashboard/settings/editprivacypolicy`)}
            className="h-[44px] w-[260px] !text-white !bg-[#8FCAF8] rounded-[8px]"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
