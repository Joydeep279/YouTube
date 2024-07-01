import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Insert } from "../utils/LiveChatSlice";
const ChatLayout = ({ data }) => {
  return (
    <div className="flex gap-2 border items-center rounded-md bg-slate-50">
      <img
        className="rounded-full w-5 h-5"
        src="https://avatars.githubusercontent.com/u/109482893?v=4"
        alt="User"
      />
      <div>
        <div className="font-medium">{data.name}</div>
        <div>{data.msg}</div>
      </div>
    </div>
  );
};

const Live = () => {
  const liveChatData = useSelector((Store) => Store.LiveChat.message);
  const dispatch = useDispatch();
  const [customMsg, setMsg] = useState("");
  async function apiCall() {
    const lorem = await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=2"
    );
    const genText = await lorem.json();
    dispatch(
      Insert({
        name: genText[0].substring(0, 10),
        msg: genText[1].substring(0, 35),
      })
    );
  }
  useEffect(() => {
    const liveChatApiCall = setInterval(() => {
      apiCall();
    }, 2000);

    return () => clearInterval(liveChatApiCall);
  }, []);

  return (
    <div className="mt-5 p-0">
      <div className="flex justify-center">
        <span className="font-bold">LiveChat</span>
      </div>
      <div className="flex flex-col-reverse justify-start gap-5 py-5 px-2 border w-96 h-[460px] rounded-lg overflow-y-scroll">
        {liveChatData.map((element, index) => (
          <ChatLayout data={element} key={index} />
        ))}
      </div>
      <form
        className="border w-96 h-10 rounded flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          if (customMsg.length !== 0) {
            dispatch(
              Insert({
                name: "Joydeep",
                msg: customMsg,
              })
            );
          }

          setMsg("");
        }}>
        <input
          value={customMsg}
          onChange={(data) => setMsg(data.target.value)}
          className="w-80 h-full rounded p-2"
          type="text"
          placeholder="Enter the Text"
        />

        <button className="px-2 bg-slate-100">Send</button>
      </form>
    </div>
  );
};

export default Live;
