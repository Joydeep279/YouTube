import React from "react";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

function MainComponent() {
  return (
    <div className="flex flex-row gap-5">
      <SideBar />
      <VideoContainer />
    </div>
  );
}

export default MainComponent;
