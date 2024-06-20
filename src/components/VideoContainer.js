import React, { useEffect, useState } from "react";
import { videoApi } from "../utils/Constant";
import VideoCart from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videoData, setVideoData] = useState([]);
  const getVideoData = async () => {
    const apiData = await fetch(videoApi);
    const JSON = await apiData.json();
    setVideoData(JSON.items);
  };

  useEffect(() => {
    getVideoData();
  }, []);
  if (videoData.length === 0) {
    return <h1>Shimmer</h1>;
  } else {
    return (
      <div className="flex flex-row flex-wrap gap-5">
        {videoData.map((data) => (
          <Link to={"watch?v=" + data.id} key={data.id}>
            <VideoCart props={data} />
          </Link>
        ))}
      </div>
    );
  }
}

export default VideoContainer;
