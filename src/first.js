import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const First = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    let style1 = document.createElement("style");
    let style2 = document.createElement("style");
    let after = document.getElementById("after-te1");
    let before = document.getElementById("before-te1");
    const setKeyframesRules = (n, start = 0) => {
      let steps = "";
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100;
        let random1 = `${Math.random() * 150}px`;
        let random2 = `${Math.random() * 150}px`;
        steps = steps.concat(
          `${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `
        );
      }
      return steps;
    };
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
    style1.innerHTML = keyframes1;
    style2.innerHTML = keyframes2;
    after.appendChild(style1);
    before.appendChild(style2);
    after.style.animation =
      "glitch-anim-1 2.5s infinite linear alternate-reverse";
    before.style.animation =
      "glitch-anim-2 3s infinite linear alternate-reverse";
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-900 to-emerald-100 h-screen flex justify-center items-center flex-col">
        <h1 className="m-[10px] font-sans  text-bolder text-5xl text-white flex justify-center text-left">Welcome To</h1>
      <h1 className="text-white text-8xl font-bold uppercase relative inline-block">
        <span
          id="before-te1"
          className="absolute top-0 left-0.5 w-full h-full bg-transparent"
          style={{
            textShadow: "-2px 0 #49FC00",
            clipPath: "rect(24px, 550px, 90px, 0)",
          }}
          aria-hidden="true"
        >
          SPARTA FEST
        </span>{" "}
        {/* glitch::before */}
        SPARTA FEST
        <span
          id="after-te1"
          className="absolute top-0 -left-0.5 w-full h-full bg-transparent"
          style={{
            textShadow: "-2px 0 spin(#49FC00, 180)",
            clipPath: "rect(85px, 550px, 140px, 0)",
          }}
          aria-hidden="true"
        >
          SPARTA FEST
        </span>{" "}
        {/* glitch::after */}
      </h1>
      <p className="mt-[20px] font-sans  text-bolder text-3xl text-white flex justify-center text-left">Indonesia Defense University</p><br />
      <button class="button-82-pushable" role="button" id="tombolfirst" onClick={() => { Navigate('/login') }}>
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        START NOW
                    </span>
                </button>
    </div>
    
  );
};

export default First;
