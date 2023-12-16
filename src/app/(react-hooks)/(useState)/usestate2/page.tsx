"use client";

import React, { useState } from "react";
export default function Usestate1() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <>
      <div className="bg-black grid place-content-center py-36 gap-6">
        <p className={`${color ? "text-red-500" : "text-green-500"} text-green-500`}>
          Welcome Here
        </p>
        <form>
          <input
            type="text"
            value={userInput}
            placeholder="Name"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </form>
        <p className="text-rose-600 text-center">{count}</p>
        <section className="text-black gap-6 flex">
          <button
            className="bg-white rounded-2xl px-6 py-2"
            onClick={(e) => setCount((prev) => prev + 1)}
          >
            -
          </button>
          <button
            className="bg-white rounded-2xl px-6 py-2"
            onClick={(e) => setCount((prev) => prev - 1)}
          >
            +
          </button>
          <button
            className="bg-white rounded-2xl px-6 py-2"
            onClick={(e) => setCount(0)}
          >
            reset
          </button>
          <button
            className="bg-white rounded-2xl px-4 py-2"
            onClick={(e) => setColor((prev) => !prev)}
          >
            Color
          </button>
        </section>
        <p className="text-rose-600 text-center">{userInput}</p>
      </div>
    </>
  );
}
