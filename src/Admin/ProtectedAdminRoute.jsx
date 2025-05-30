import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const isAdminAuthenticated = localStorage.getItem("adminToken"); 

  return isAdminAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoute;
