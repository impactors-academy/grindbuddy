import { createBrowserRouter, Navigate } from "react-router";
import { HomepageV2 as Homepage } from "./components/HomepageV2";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { BuddyChoice } from "./components/BuddyChoice";
import { Demo } from "./components/Demo";
import { Onboarding } from "./components/Onboarding";
import { Matching } from "./components/Matching";
import { Workspace } from "./components/Workspace";
import { Marketplace } from "./components/Marketplace";
import { Dashboard } from "./components/Dashboard";
import { TeamPage } from "./components/TeamPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/demo",
    Component: Demo,
  },
  {
    path: "/team",
    Component: TeamPage,
  },
  {
    path: "/app",
    children: [
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "buddy-choice",
        Component: BuddyChoice,
      },
      {
        path: "onboarding",
        Component: Onboarding,
      },
      {
        path: "matching",
        Component: Matching,
      },
      {
        path: "workspace",
        Component: Workspace,
      },
      {
        path: "marketplace",
        Component: Marketplace,
      },
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
], {
  basename: "/grindbuddy"
});
