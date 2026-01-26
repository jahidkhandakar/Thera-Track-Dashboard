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
    <div className="mt-8 mx-6">
      <Toaster position="top-center" reverseOrder={false} />
      <Link to="/dashboard/settings/about" className="flex items-center gap-2">
        <FaCircleArrowLeft className=" !text-primaryBg w-8 h-8" />
        <p className=" font-semibold text-[30px]">Edit About</p>
      </Link>
      <Form
        labelCol={{ span: 22 }}
        wrapperCol={{ span: 40 }}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={handleEditTermCondition}
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
              Update AboutUs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditAbout;
