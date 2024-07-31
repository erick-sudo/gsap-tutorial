import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  const [greenBoxRef, purpleBoxRef, blueBoxRef] = new Array(3).fill(useRef());

  useEffect(() => {
    gsap.to(".green", { x: 400, rotation: 360, duration: 1 });
  }, []);

  return (
    <>
      <div className="h-[70vh] flex flex-col gap-4">
        <div
          ref={greenBoxRef}
          className="green h-24 w-24 rounded-lg border bg-gradient-to-tr from-green-700 to-green-400"
        ></div>
        <div
          ref={purpleBoxRef}
          className="purple h-24 w-24 rounded-lg border bg-gradient-to-tr from-purple-700 to-purple-400"
        ></div>
        <div
          ref={blueBoxRef}
          className="blue h-24 w-24 rounded-lg border bg-gradient-to-tr from-blue-700 to-blue-400"
        ></div>
      </div>
    </>
  );
}

export default App;
