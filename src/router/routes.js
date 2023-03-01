import { lazy } from "react";
const Login = lazy(() => import("@/views/login"));
import EmptyLayout from "@/layout/EmptyLayout";
export const constantRoutes = [
  {
    path: "/",
    name: "/",
    element: <EmptyLayout />,
    children: [
      {
        name: "login",
        path: "login",
        element: <Login />,
      },
    ],
  },
];
