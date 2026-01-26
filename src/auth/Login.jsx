import { Button, Checkbox, Form, Input } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "../redux/features/auth/login";

const Login = () => {
  const navigate = useNavigate();

  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  const onFinish = async (values) => {
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
      toast.error(error?.data?.message || "Login failed");
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
              <Checkbox className="text-gray-700">Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgotpassword">
              <p className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
                Forgot password?
              </p>
            </Link>
          </div>

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
