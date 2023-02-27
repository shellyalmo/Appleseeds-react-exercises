import React from "react";
import TopMenu from "./TopMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopMenu />
      <Outlet />
      <div>end of file</div>
    </>
  );
};

export default Layout;
