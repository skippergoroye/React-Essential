"use client";

import React, { useState } from "react";

export default function Usestate1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };


  




  return (
    <div className="py-10 grid place-content-center bg-green-400 gap-6">
      <button onClick={handleClick} className="bg-red-600 rounded-full w-full">
        Click Me
      </button>
      <p>Count is {count}</p>
    </div>
  );
}
