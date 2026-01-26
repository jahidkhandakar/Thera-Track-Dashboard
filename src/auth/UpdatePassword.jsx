import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../redux/features/auth/resetPassword";

const UpdatePassword = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const handlePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const handleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const validateConfirmPassword = (rule, value) => {
    const { password } = form.getFieldsValue();
    if (value && value !== password) {
      return Promise.reject("Passwords do not match!");
    }
    return Promise.resolve();
  };

  const [reset, { isLoading }] = useResetPasswordMutation();

  const resetPassword = async (values) => {
    const { password } = values;
    const resetData = {
      newPassword: password,
      confirmPassword: password,
      email,
    };
    try {
      const res = await reset(resetData).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-400/10 to-blue-200 px-4 py-8">


      <div className="w-full max-w-md bg-white rounded-2xl border border-blue-400 p-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MdOutlineArrowBackIos
              onClick={() => navigate(-1)}
              className="text-xl cursor-pointer text-gray-700 hover:text-gray-900"
            />
            <h1 className="text-3xl font-bold text-gray-900">
              Update Password
            </h1>
          </div>
          <p className="text-gray-600 text-sm">
            Please enter your new password below.
          </p>
        </div>

        <Form form={form} layout="vertical" onFinish={resetPassword}>
          <Form.Item
            label={
              <span className="text-gray-700 font-medium">New Password</span>
            }
            name="password"
            rules={[
              { required: true, message: "Please input your new password!" },
            ]}
          >
            <Input.Password
              placeholder="New password"
              style={{
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined onClick={handlePasswordVisibility} />
                ) : (
                  <EyeInvisibleOutlined onClick={handlePasswordVisibility} />
                )
              }
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-gray-700 font-medium">
                Confirm Password
              </span>
            }
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your new password!" },
              { validator: validateConfirmPassword },
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              style={{
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined onClick={handleConfirmPasswordVisibility} />
                ) : (
                  <EyeInvisibleOutlined
                    onClick={handleConfirmPasswordVisibility}
                  />
                )
              }
            />
          </Form.Item>

          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="w-full h-12 text-base font-medium"
            style={{
              background: "#3B82F6",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Update Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
