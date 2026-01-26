/* eslint-disable react/prop-types */

import { Spin } from "antd";
import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/features/auth/profile/getProfile";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // Fetch the user profile
  const { data: mySelf, isLoading } = useGetProfileQuery();
  const loggedInUser = mySelf?.data?.attributes;

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  if (loggedInUser) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;
