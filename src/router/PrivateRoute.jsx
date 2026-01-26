/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/features/auth/profile/getProfile";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // Fetch the user profile
  const { data: mySelf } = useGetProfileQuery();
  const loggedInUser = mySelf?.data?.attributes;

  if (loggedInUser) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;
