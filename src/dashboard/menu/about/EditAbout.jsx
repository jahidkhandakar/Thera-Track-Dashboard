import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Button, Form } from "antd";
import {
  useGetAboutQuery,
  useUpdateAboutMutation,
} from "../../../redux/features/setting/settingSlice";
import toast, { Toaster } from "react-hot-toast";

const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const EditAbout = () => {
  const { data: aboutus } = useGetAboutQuery();
  const editor = useRef(null);
  const [content, setContent] = useState(" ");

  const navigate = useNavigate();

  const [updateAbout] = useUpdateAboutMutation();

  useEffect(() => {
    if (aboutus?.data?.attributes) {
      const decodedContent = decodeHtml(aboutus.data.attributes.aboutUs);
      setContent(decodedContent);
    }
  }, [aboutus]);

  const handleEditTermCondition = async () => {
    try {
      const res = await updateAbout(content).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate("/dashboard/settings/about");
      }, 1000);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 border-b border-gray-200 pb-6 mb-6">
          <Link
            to="/dashboard/settings/about"
            className="flex items-center hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <FaCircleArrowLeft className="text-[#2196F3] w-8 h-8" />
          </Link>
          <h1 className="font-bold text-3xl text-gray-800">Edit About Us</h1>
        </div>

        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleEditTermCondition}
        >
          <div className="mt-6 border rounded-lg overflow-hidden shadow-sm">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
          <div className="mt-8 flex justify-end">
            <Form.Item className="mb-0">
              <Button
                htmlType="submit"
                className="h-12 px-8 text-lg font-medium bg-[#2196F3] hover:bg-blue-600 rounded-lg shadow-md transition-all text-white border-none"
              >
                Update Content
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditAbout;
