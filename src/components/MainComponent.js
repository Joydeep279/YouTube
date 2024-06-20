import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex flex-row gap-5">
      <SideBar />
      <Outlet/>
    </div>
  );
}

export default MainComponent;
