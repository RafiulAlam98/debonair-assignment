import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Shared/Navigation/Navigation";

const Main = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  );
};

export default Main;
