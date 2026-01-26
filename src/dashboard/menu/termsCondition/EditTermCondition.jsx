import { Button, Form } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetTearmsQuery,
  useUpdateTearmsMutation,
} from "../../../redux/features/setting/settingSlice";

// import Swal from "sweetalert2";
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const EditTermCondition = () => {
  const { data: termcondition } = useGetTearmsQuery();
  const [updateTC] = useUpdateTearmsMutation();
  const editor = useRef(null);
  const [content, setContent] = useState(" ");
  const navigate = useNavigate();

  useEffect(() => {
    if (termcondition?.data?.attributes) {
      // Decode the HTML content before setting it
      const decodedContent = decodeHtml(
        termcondition.data.attributes?.termsConditions,
      );
      setContent(decodedContent);
    }
  }, [termcondition]);

  const handleEditTermCondition = async () => {
    try {
      const res = await updateTC(content).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);

        setTimeout(() => {
          navigate("/dashboard/settings/termcondition");
        }, 1000);
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="w-full mx-auto bg-white rounded-xl p-8">
        <Link
          to="/dashboard/settings/termcondition"
          className="flex items-center gap-2"
        >
          <FaCircleArrowLeft className=" !text-primaryBg w-8 h-8" />
          <p className=" font-semibold text-[30px]">Edit Term&Condition</p>
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
                Update termCondition
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditTermCondition;
