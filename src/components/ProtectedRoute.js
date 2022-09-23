import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase-config";

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
