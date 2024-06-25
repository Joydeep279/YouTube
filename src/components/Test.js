import React, { useRef } from "react";

function Test() {
  const ref = useRef(0);
  console.log(ref.current);

  return <div>Test</div>;
}

export default Test;
