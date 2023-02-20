import { Outlet, Navigate } from "react-router-dom";
import UserChat from "./user/UserChat";

import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";

const ProtectedRoutes = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios.get("/api/get-token").then(function (res) {
      if (res.data.token) {
        setIsAuth(res.data.token);
      }
      return isAuth;
    });
  }, [isAuth]);

  if (isAuth === undefined) return <LoginPage />;

  return isAuth && admin && isAuth !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <UserChat />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
