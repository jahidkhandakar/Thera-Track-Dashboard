

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../redux/features/auth/profile/getProfile';
 

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  
  // Fetch the user profile
  const { data: mySelf, isLoading, isError } = useGetProfileQuery();

 
  const loggedInUser = mySelf?.data?.attributes;
 
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (isError) {
    return <div>Error: You are not authorized.</div>;
  }
 
  if (loggedInUser) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default PrivateRoute;