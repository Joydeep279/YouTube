import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between px-5">
      <div>
        <img
          className="w-28 h-14"
          src="https://1000logos.net/wp-content/uploads/2017/05/Black-YouTube-logo.png"
          alt="YouTube"
        />
      </div>
      <div className="flex items-center rounded-2xl border-[2px] p-0 m-0 h-10">
        <input
          type="text"
          className="bg-slate-100 w-[500px] h-10 rounded-l-2xl border-r-2"></input>
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
          className="rounded-full w-8 h-8"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW91dGxpbmUtMzRfMS5wbmc.png"
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
