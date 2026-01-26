/* eslint-disable react/no-unescaped-entities */

import { Button, Form, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../redux/features/auth/forgotPassword";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [forgotpassword, { isLoading }] = useForgotPasswordMutation();

  const handleForgotPassword = async (values) => {
    try {
      const res = await forgotpassword(values).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/verifyotp?email=${values?.email}`);
        }, 1000);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-400/10 to-blue-200 px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-2xl  border !border-[#2196F3] p-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MdOutlineArrowBackIos
              onClick={() => navigate("/")}
              className="text-xl cursor-pointer text-gray-700 hover:text-gray-900"
            />
            <h1 className="text-[32px] font-bold text-[#414141]">
              Forgot Password
            </h1>
          </div>
          <p className="text-gray-600 text-sm">
            Enter the email address associated with your account. We'll send you
            an OTP to your email.
          </p>
        </div>

        <Form
          name="forgot_password"
          layout="vertical"
          onFinish={handleForgotPassword}
        >
          <Form.Item
            name="email"
            label={<span className="text-gray-700 font-medium">Email</span>}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Email"
              name="email"
              style={{
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
            />
          </Form.Item>

          {error && error.trim() !== "" && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Form.Item className="mb-0">
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
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
