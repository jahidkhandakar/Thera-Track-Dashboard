import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "../redux/features/auth/login";

const Login = () => {
  const [checkboxError, setCheckboxError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setCheckboxError("");
    }
  };

  const onFinish = async (values) => {
    if (!isChecked) {
      setCheckboxError("You must agree to the terms");
      return;
    }

    try {
      const res = await adminLogin(values).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
        localStorage.setItem("user", JSON.stringify(res?.data?.attributes));
        localStorage.setItem(
          "token",
          res?.data?.attributes?.tokens?.accessToken,
        );
      }
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-400/10 to-blue-200 px-4 py-8">
      <Toaster />
      <div className="w-full max-w-lg bg-white rounded-2xl  border border-[#2196F3] p-8">
        <div className="mb-8">
          <h1 className="!text-[32px] font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm">
            Please Enter Your Details Below to Continue
          </p>
        </div>

        <Form
          name="normal_login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            label={<span className="text-gray-700 font-medium">Email</span>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              placeholder="Email"
              style={{
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="text-gray-700 font-medium">Password</span>}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              style={{
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
            />
          </Form.Item>

          <div className="flex justify-between items-center mb-6">
            <Form.Item className="mb-0">
              <Checkbox
                className="text-gray-700"
                checked={isChecked}
                onChange={handleCheckboxChange}
              >
                Remember me
              </Checkbox>
              {checkboxError && (
                <p className="text-red-500 text-xs mt-1">{checkboxError}</p>
              )}
            </Form.Item>
            <Link to="/forgotpassword">
              <p className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
                Forgot password?
              </p>
            </Link>
          </div>

          {error && error.trim() !== "" && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Form.Item className="mb-0">
            <Button
              loading={isLoading}
              htmlType="submit"
              className="w-full h-12 text-base font-medium"
              type="primary"
              style={{
                background: "#3B82F6",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
