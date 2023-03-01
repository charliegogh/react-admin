import { useLocation, Navigate } from "react-router-dom";
import { getToken } from "./utils/auth";
/*
  高阶组件HOC
    本质上是一个函数，接受组件作为参数，返回一个新组件
*/
function permission(WrappedComponent) {
  WrappedComponent.displayName = "permission";
  return () => {
    console.log("~~~~");
    const { pathname } = useLocation();
    const token = getToken();
    if (token) {
      if (["/login", "/"].includes(pathname)) {
        return <Navigate to="/home" />;
      }
      return <WrappedComponent />;
    } else {
      if (pathname === "/login") {
        return <WrappedComponent />;
      }
      return <Navigate to="/login" />;
    }
  };
}
export default permission;
