import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { useAuth } from "../context/Auth.Context";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
