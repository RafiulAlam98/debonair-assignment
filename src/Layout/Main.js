import React from "react";
import { Outlet } from "react-router-dom";
import NavigationDrawer from "../components/NavigationDrawer/NavigationDrawer";

const Main = () => {
  return (
    <React.Fragment>
      <NavigationDrawer />
      <Outlet />
    </React.Fragment>
  );
};

export default Main;
