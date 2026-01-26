import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../dashboard/home/DashboardHome";
import EditProfiel from "../dashboard/menu/headermenu/EditProfile";
import Notification from "../dashboard/menu/headermenu/Notification";
import Profile from "../dashboard/menu/headermenu/Profile";
import EditPrivacy from "../dashboard/menu/privacypolicy/EditPrivacy";
import Home from "../home/Home";
import Main from "../layout/Main";
import ForgotPassword from "./../auth/ForgotPassword";
import UpdatePassword from "./../auth/UpdatePassword";
import VerifyOtp from "./../auth/VerifyOtp";
import EditTermCondition from "../dashboard/menu/termsCondition/EditTermCondition";
import About from "../dashboard/menu/about/About";
import EditAbout from "../dashboard/menu/about/EditAbout";
import AddSubAdmin from "../dashboard/menu/sidebarMenu/AddSubAdmin";
import Earning from "../dashboard/menu/sidebarMenu/Earning";
import EditSubAdmin from "../dashboard/menu/sidebarMenu/EditSubAdmin";
import Feedback from "../dashboard/menu/sidebarMenu/Feedback";
import Settings from "../dashboard/menu/sidebarMenu/Settings";
import SubAdmin from "../dashboard/menu/sidebarMenu/SubAdmin";
import User from "../dashboard/menu/sidebarMenu/User";
import Addsubscripton from "../dashboard/menu/subscription/Addsubscripton";
import Editsubscription from "../dashboard/menu/subscription/Editsubscription";
import Subscription from "../dashboard/menu/subscription/Subscription";
import PrivacyPolicyy from "../settings/PrivacyPolicyy";
import ErrorPage from "./ErrorPage";

import PrivacyPolicy from "../dashboard/menu/privacypolicy/PrivacyPolicy";
import TermConditions from "../dashboard/menu/termsCondition/TermConditions";
import EULADocument from "../settings/EULADocument";
import SupportPage from "../settings/Support";
import TermsAndConditions from "../settings/TermsCondition";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "verifyotp",
    element: <VerifyOtp></VerifyOtp>,
  },
  {
    path: "updatepassword",
    element: <UpdatePassword />,
  },
  {
    path: "privacypolicy",
    element: <PrivacyPolicyy />,
  },
  {
    path: "termscondition",
    element: <TermsAndConditions />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "documents",
    element: <EULADocument />,
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editprofile",
        element: <EditProfiel />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "user",
        element: <User />,
      },

      {
        path: "earning",
        element: <Earning />,
      },
      {
        path: "subadmin",
        element: <SubAdmin />,
      },
      {
        path: "subadmin/add",
        element: <AddSubAdmin />,
      },
      {
        path: "subadmin/edit/:id",
        element: <EditSubAdmin />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/editprivacypolicy",
        element: <EditPrivacy />,
      },
      {
        path: "settings/termcondition",
        element: <TermConditions />,
      },
      {
        path: "settings/edittermcondition",
        element: <EditTermCondition />,
      },
      {
        path: "settings/about",
        element: <About />,
      },
      {
        path: "settings/editabout",
        element: <EditAbout />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "subscription/addsubscription",
        element: <Addsubscripton />,
      },
      {
        path: "subscription/editsubscription/:id",
        element: <Editsubscription />,
      },
    ],
  },
]);
