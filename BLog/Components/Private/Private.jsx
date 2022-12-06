import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function Private({ children }) {
  const token = useSelector((store) => store.auth.token);
  // console.log(token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
