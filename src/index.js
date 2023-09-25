import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
const Layout = React.lazy(() => import("./Pages/Layout/Layout.jsx"));
const Home = React.lazy(() => import("./Pages/Home/Home.jsx"));
const AboutCourse = React.lazy(() =>
  import("./Pages/AboutCourse/AboutCourse.jsx")
);
const AboutUs = React.lazy(() => import("./Pages/AboutUs/AboutUs.jsx"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading..</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/aboutcourse",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutCourse />
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
