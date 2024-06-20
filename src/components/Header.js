import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/NavSlice";
import { Link } from "react-router-dom";
function Header() {
  const displatch = useDispatch();
  const toggleMenuHandler = () => {
    displatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex gap-5">
        <button
          onClick={() => {
            toggleMenuHandler();
          }}>
          <img
            className="w-6 h-7"
            src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
            alt="sidebar"
          />
        </button>
        <a href="/">
          <img
            className="w-28 h-14"
            src="https://1000logos.net/wp-content/uploads/2017/05/Black-YouTube-logo.png"
            alt="YouTube"
          />
        </a>
      </div>
      <div className="flex items-center rounded-2xl border p-0 m-0 h-10">
        <input
          type="text"
          className=" border w-[500px] h-10 rounded-l-2xl outline-1 outline-blue-500 px-5 py-2"></input>
        <button>
          <img
            className="w-16 h-10 rounded-r-2xl"
            alt="Search"
            src="https://w7.pngwing.com/pngs/403/380/png-transparent-computer-icons-youtube-symbol-information-black-dandelion-circle-symbol-magnifying-glass.png"
          />
        </button>
      </div>
      <div className="flex items-center gap-5">
        <img
          className="rounded-full w-7 h-7"
          src="https://www.pngall.com/wp-content/uploads/11/Youtube-Bell-Icon-Button-PNG-Images.png"
          alt="Notification"
        />
        <img
          className="rounded-full w-8 h-8"
          src="https://avatars.githubusercontent.com/u/109482893?v=4"
          alt="User"
        />
      </div>
    </div>
  );
}

export default Header;
