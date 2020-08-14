import Home from "../pages/Home";
import Overview from "../pages/Overview";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Setting from "../pages/Setting";

export const MAIN_ROUTES = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/overview",
    name: "overview",
    component: Overview,
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting,
  },
];

export const AUTH_ROUTES = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];
