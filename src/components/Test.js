import React, { useMemo, useState } from "react";
import Test2 from "./Test2";

function nthPrime(n) {
  var P = 0;

  function isPrime(x) {
    var isPrime = true;

    for (var d = 2; d <= Math.sqrt(x); d++) {
      if ((x / d) % 1 === 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }

  for (var i = 1; 0 < n; i++) {
    if (isPrime(i)) {
      P = i;
      n--;
    }

    // we can skip the even numbers
    if (3 <= i) {
      i++;
    }
  }

  return P;
}
function Factorial() {
  const [theme, setTheme] = useState(true);

  const [value, setvalue] = useState(0);
  const Prime = useMemo(() => nthPrime(value), [value]);
  return (
    <>
      <div
        className={
          "flex flex-col gap-5 justify-evenly items-center p-7 m-10 w-60 h-80 border border-black rounded-md " +
          (theme && "bg-[#3d405b] text-white")
        }>
        <input
          type="number"
          className="bg-[#b8b8ff] border border-black rounded"
          value={value}
          onChange={(value) => setvalue(value.target.value)}
        />

        <h1>Prime: {Prime}</h1>
        <button
          className="bg-[#9381ff] rounded px-1"
          onClick={() => setTheme(!theme)}>
          Theme
        </button>
      </div>
      <Test2 />
    </>
  );
}

export default Factorial;
