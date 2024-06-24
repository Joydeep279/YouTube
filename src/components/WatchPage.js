import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./Comments";

function WatchPage() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <iframe
        className="m-10 rounded-xl"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
      <CommentContainer />
    </div>
  );
}

export default WatchPage;
