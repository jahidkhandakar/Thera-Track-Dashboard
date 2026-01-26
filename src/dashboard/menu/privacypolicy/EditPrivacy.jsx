import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { Button, Form } from "antd";
import toast from "react-hot-toast";
import "../../../index.css";
import {
  useGetPrivacyQuery,
  useUpdatePrivacyMutation,
} from "../../../redux/features/setting/settingSlice";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const EditPrivacy = () => {
  const [updatePrivacy] = useUpdatePrivacyMutation();
  const { data: privacy } = useGetPrivacyQuery();
  const editor = useRef(null);
  const navigate = useNavigate();

  const [content, setContent] = useState("");

  useEffect(() => {
    if (privacy?.data?.attributes) {
      // Decode the HTML content before setting it
      const decodedContent = decodeHtml(
        privacy?.data?.attributes?.privacyPolicy,
      );
      setContent(decodedContent);
    }
  }, [privacy]);

  const handlePostPrivacy = async () => {
    try {
      const res = await updatePrivacy(content).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate("/dashboard/settings/privacypolicy");
      }, 1000);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="w-full mx-auto bg-white rounded-xl p-8">
        <Link
          to="/dashboard/settings/privacypolicy"
          className="flex items-center gap-2"
        >
          <FaCircleArrowLeft className=" text-blue-400 w-8 h-8" />
          <p className=" font-semibold text-[30px]">Edit Privacy Policy</p>
        </Link>
        <Form
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handlePostPrivacy}
        >
          <div className="mt-6">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
          <div className="text-right mt-6">
            <Form.Item>
              <Button
                htmlType="submit"
                className="h-[44px] w-[260px] !text-white !bg-[#8FCAF8] rounded-[8px]"
              >
                Update Privacy
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditPrivacy;
