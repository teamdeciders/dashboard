import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdminProfile from "../pages/Admin-Profile/Profile/AdminProfile";
import ChangePassword from "../pages/Admin-Profile/Profile/ChangePassword/ChangePassword";
import ProfileDetails from "../pages/Admin-Profile/Profile/ProfileDetails/ProfileDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "admin-profile",
        element: <AdminProfile />,
        children: [
          {
            path: "",
            element: <ProfileDetails />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin-login",
    element: <Login />,
  },

]);

export default routes;
