import React, { useRef, useState } from "react";

function Test2() {
  let X = 0;
  const [Y, setY] = useState(0);
  const Z = useRef(0);
  return (
    <div className="flex flex-col gap-5 justify-evenly items-center p-7 m-10 w-60 h-80 border border-black rounded-md bg-[#3d405b] text-white">
      <div className="flex gap-5">
        <button
          className="bg-[#9381ff] rounded px-1"
          onClick={() => {
            console.log("Value of X: ", X);
            X = X + 1;
          }}>
          Increment X
        </button>
        <span>{X}</span>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-[#9381ff] rounded px-1"
          onClick={() => {
            console.log("Value of Y: ", Y);
            setY(Y + 1);
          }}>
          Increment Y
        </button>
        <span>{Y}</span>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-[#9381ff] rounded px-1"
          onClick={() => {
            console.log("Value of Z: ", Z.current);
            Z.current = Z.current + 1;
          }}>
          Increment Z
        </button>
        <span>{Z.current}</span>
      </div>
    </div>
  );
}

export default Test2;
