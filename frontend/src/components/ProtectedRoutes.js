import { Outlet, Navigate } from "react-router-dom";
import UserChat from "./user/UserChat";
const ProtectedRoutes = ({ admin }) => {
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <UserChat /> <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }
};

export default ProtectedRoutes;
