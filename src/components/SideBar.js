import React from "react";
const iconTailwindConfig = "w-6 h-6 mix-blend-multiply";
const parentTailwindConfig = "flex flex-row gap-5";
function SideBar() {

  return (
    <div className="flex flex-col gap-2 pl-5 bg-slate-50">
      <div className={parentTailwindConfig}>
        <img
          className={iconTailwindConfig}
          src="https://www.vhv.rs/dpng/d/423-4233698_thumb-image-home-button-icon-png-transparent-png.png"
          alt="Home"
        />
        <span>Home</span>
      </div>
      <div className={parentTailwindConfig}>
        <img
          className={iconTailwindConfig}
          src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
          alt="Shorts"
        />
        <span>Shorts</span>
      </div>
      <div className={parentTailwindConfig}>
        <img
          className={iconTailwindConfig}
          src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
          alt="Subscription"
        />
        <span>Subscriptions</span>
      </div>
    </div>
  );
}

export default SideBar;
