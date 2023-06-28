import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./superadmin/pages/login";
import Page404 from "./superadmin/pages/Page404";
import DashboardAppPage from "./superadmin/pages/DashboardAppPage";
import DashboardLayout from "./superadmin/layouts/dashboard";
import AddClub from "./superadmin/pages/AddClub";
import Member from "./superadmin/pages/Member";
import UpdateTC from "./superadmin/pages/UpdateTC";
import AddActivity from "./superadmin/pages/AddActivty";
import Gallery from "./superadmin/pages/Gallery";
import UpdatePrivacy from "./superadmin/pages/UpdatePrivacy";
import Slider from "./superadmin/pages/Slider";
import Contact from "./superadmin/pages/Contact";
import DownloadResource from "./superadmin/pages/DownloadResource";
export default function Router() {
  const isAdmin = useSelector((state) => state.auth.admin);
  const role = useSelector((state) => state.auth.role);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes([
      { path: "/superadmin", element: <Login /> },

      {
        path: "/404",
        element: <Page404 />,
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
      // {
      //   path: "/dashboard",
      //   element: <DashboardLayout />,
      //    children: [
      //     {
      //       path: "app",
      //   element: <DashboardAppPage />,
      //     },{
      //       path:"clubs",
      //       element:<AddClub/>,
      //     },{
      //       path:"members",
      //       element:<Member/>,

      //     },
      //     {path:"updateTC",
      //     element:<UpdateTC/>},
      //     ,
      //     {path:"privacy",
      //     element:<UpdatePrivacy/>},
      //     ,
      //     {
      //       path:'Download',
      //       element:<DownloadResource/>
      //     },
      //     {
      //       path:'activityType',
      //       element:<AddActivity/>,
      //     },
      //     {
      //       path:'gallery',
      //       element:<Gallery/>
      //     },
      //     ,
      //     {
      //       path:'slider',
      //       element:<Slider/>
      //     },
      //     {
      //       path:'contact',
      //       element:<Contact/>
      //     }
      //    ],
      // },
      ...(isAdmin
        ? [
            {
              path: "/superadmin/dashboard",
              element: <DashboardLayout />,
              children: [
                {
                  path: "app",
                  element: <DashboardAppPage />,
                },
                {
                  path: "clubs",
                  element: <AddClub />,
                },
                {
                  path: "members",
                  element: <Member />,
                },
                { path: "updateTC", element: <UpdateTC /> },
                ,
                { path: "privacy", element: <UpdatePrivacy /> },
                {
                  path: "activityType",
                  element: <AddActivity />,
                },
                {
                  path: "gallery",
                  element: <Gallery />,
                },
                ,
                {
                  path: "slider",
                  element: <Slider />,
                },
                {
                  path: "contact",
                  element: <Contact />,
                },
              ],
            },
          ]
        : []),
    ]);
  }, [isAdmin]);

  return useRoutes(routes);
}
