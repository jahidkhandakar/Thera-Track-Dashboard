/* eslint-disable react/no-unescaped-entities */
import { Button } from "antd";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineArrowBackIos } from "react-icons/md";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../redux/features/auth/verifyEmail";

const VerifyOtp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [error, setError] = useState("");
  const email = queryParams.get("email");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOtp, { isLoading }] = useVerifyEmailMutation();

  const verifyData = {
    oneTimeCode: otp,
    email: email,
  };

  const sendOtp = async () => {
    try {
      const res = await verifyOtp(verifyData).unwrap();
      if (res?.code == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/updatepassword?email=${email}`);
        }, 1000);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-400/10 to-blue-200  px-4 py-8">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-lg bg-white rounded-2xl border border-[#2196F3] p-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MdOutlineArrowBackIos
              onClick={() => navigate("/forgotpassword")}
              className="text-xl cursor-pointer text-gray-700 hover:text-gray-900"
            />
            <h1 className="text-[32px] font-bold text-gray-900">Verify OTP</h1>
          </div>
          <p className="text-gray-600 text-sm">
            We'll send a verification code to your email. Check your inbox and
            enter the code here.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-center items-center gap-4 mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                height: "48px",
                width: "48px",
                background: "transparent",
                border: "1px solid #99CFF9",
                borderRadius: "8px",
                marginRight: "8px",
                outline: "none",
                fontSize: "18px",
                fontWeight: "500",
              }}
              renderSeparator={<span className="w-2"> </span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>

        {error && error.trim() !== "" && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <Button
          onClick={sendOtp}
          loading={isLoading}
          type="primary"
          className="w-full h-12 text-base font-medium"
          style={{
            background: "#3B82F6",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Verify
        </Button>
      </div>
    </div>
  );
};

export default VerifyOtp;
