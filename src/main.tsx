import React from "react";
import ReactDOM from "react-dom/client";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CreateYourPlanPage from "./pages/create-your-plan/CreateYourPlanPage";
import ErrorPage from "./pages/ErrorPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/frontend-mentor-challenge-10/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="create-your-plan" element={<CreateYourPlanPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
