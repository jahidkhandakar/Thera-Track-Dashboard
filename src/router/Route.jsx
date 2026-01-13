import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import ForgotPassword from "./../auth/ForgotPassword";
import VerifyOtp from "./../auth/VerifyOtp";
import UpdatePassword from "./../auth/UpdatePassword";
import Main from "../layout/Main";
import DashboardHome from "../dashboard/home/DashboardHome";
import Notification from "../dashboard/menu/headermenu/Notification";
import Profile from "../dashboard/menu/headermenu/Profile";
import EditProfiel from "../dashboard/menu/headermenu/EditProfile";

import DashboardPrivacyPolicy from "../dashboard/menu/privacypolicy/PrivacyPolicy";
import EditPrivacy from "../dashboard/menu/privacypolicy/EditPrivacy";
import DashboardTermCondition from "../dashboard/menu/termsCondition/TermCondition";
import EditTermCondition from "../dashboard/menu/termsCondition/EditTermCondition";

import ErrorPage from "./ErrorPage";
import About from "../dashboard/menu/about/About";
import EditAbout from "../dashboard/menu/about/EditAbout";
import Subscription from "../dashboard/menu/subscription/Subscription";
import Addsubscripton from "../dashboard/menu/subscription/Addsubscripton";
import Editsubscription from "../dashboard/menu/subscription/Editsubscription";
import User from "../dashboard/menu/sidebarMenu/User";
import Feedback from "../dashboard/menu/sidebarMenu/Feedback";

import Settings from "../dashboard/menu/sidebarMenu/Settings";
import FeedbackDetails from "../dashboard/menu/sidebarMenu/FeedbackDetails";
import Earning from "../dashboard/menu/sidebarMenu/Earning";
import PrivacyPolicy from "../settings/PrivacyPolicyy";
import TermsAndConditions from "../settings/TermsCondition";
<<<<<<< HEAD
import SupportPage from "../settings/Supportt";
import EULADocument from "../settings/EULADocument";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />
    },
    {
        path: "forgotpassword",
        element: <ForgotPassword></ForgotPassword>
    },
    {
        path: "verifyotp",
        element: <VerifyOtp></VerifyOtp>
    },
    {
        path: "updatepassword",
        element: <UpdatePassword />
    },
     {
        path: "privacypolicy",
        element: <PrivacyPolicyy />
    },
     {
        path: "termscondition",
        element: < TermsAndConditions/>
    },
    {
        path: "support",
        element: < SupportPage/>
    },
    {
        path: "documents",
        element: < EULADocument/>
    },

    {
        path: "dashboard",
        element: <PrivateRoute><Main></Main></PrivateRoute>,
        children: [
            {
                path: "home",
                element: <DashboardHome />
            },
            {
                path: "notification",
                element: <Notification />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "editprofile",
                element: <EditProfiel />
            },
            {
                path: "feedback",
                element: <Feedback />
            },
            {
                path: "feedback/details",
                element: <FeedbackDetails />
            },
            {
                path:"user",
                element: <User />
            },
             
            {
                path: 'earning',
                element:<Earning />
            },
            {
                path: 'settings',
                element:<Settings />
            },
            {
                path:'settings/privacypolicy',
                element:<PrivacyPolicy />
            },
            {
                path:'settings/editprivacypolicy',
                element: <EditPrivacy />
            },
            {
                path:"settings/termcondition",
                element:<TermCondition />
            },
            {
                path: "settings/edittermcondition",
                element: <EditTermCondition />
            },
            {
                path:'settings/about',
                element: <About />
            },
            {
                path:'settings/editabout',
                element:<EditAbout />
            },
            {
                path:'subscription',
                element: <Subscription />
            },
            {
                path: 'subscription/addsubscription',
                element: <Addsubscripton />
            },
           {
  path: 'subscription/editsubscription/:id',
  element: <Editsubscription />
}
        ]
    }
])
=======
import SupportPage from "../settings/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
    element: <PrivacyPolicy />,
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
    path: "public/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "public/termscondition",
    element: <TermsAndConditions />,
  },
  {
    path: "public/support",
    element: <SupportPage />,
  },

  {
    path: "dashboard",
    element: <Main></Main>,
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
        path: "feedback/details",
        element: <FeedbackDetails />,
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
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/privacypolicy",
        element: <DashboardPrivacyPolicy />,
      },
      {
        path: "settings/editprivacypolicy",
        element: <EditPrivacy />,
      },
      {
        path: "settings/termcondition",
        element: <DashboardTermCondition />,
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
>>>>>>> f5d0235d4778e13792efc2d1e931734a2b766d8e
