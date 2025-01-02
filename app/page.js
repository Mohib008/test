"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-12 gap-2
     sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <h1>{advice}</h1>
      <button
        onClick={getAdvice}
        className="shadow-2xl bg-sky-500 hover:bg-sky-700 p-3 rounded-full text-white"
      >
        Get Advice!
      </button>
      <Message count={count} />
    </div>
  );
  function Message(props) {
    return (
      <p className="shadow-2xl bg-sky-500 hover:bg-sky-700 p-3 rounded-sm text-white">
        You have read <strong>{props.count} </strong>peices of Advice!
      </p>
    );
  }
}
