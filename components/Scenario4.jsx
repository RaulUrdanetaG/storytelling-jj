"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario4({ setScreen }) {
  const scenes = [
    {
      background: "/background/questionBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario4/screen1/title.png",
          left: "206px",
          top: "118px",
          width: "1508px",
          height: "160px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/1.png",
          left: "780px",
          top: "327px",
          width: "277px",
          height: "277px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/2.png",
          left: "1187px",
          top: "363px",
          width: "277px",
          height: "277px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/3.png",
          left: "890px",
          top: "640px",
          width: "277px",
          height: "277px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/4.png",
          left: "457px",
          top: "492px",
          width: "277px",
          height: "277px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario4/screen2/title.png",
          top: "70px",
          left: "140px",
          width: "1620px",
          height: "82px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/1.png",
          top: "278px",
          left: "76px",
          width: "144px",
          height: "243px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/2.png",
          top: "357px",
          left: "248px",
          width: "176px",
          height: "143px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/3.png",
          top: "275px",
          left: "445px",
          width: "184px",
          height: "246px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/4.png",
          top: "219px",
          left: "644px",
          width: "299px",
          height: "302px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/5.png",
          top: "189px",
          left: "943px",
          width: "316px",
          height: "332px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/6.png",
          top: "189px",
          left: "1246px",
          width: "302px",
          height: "332px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/7.png",
          top: "197px",
          left: "1549px",
          width: "293px",
          height: "324px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/8.png",
          top: "534px",
          left: "116px",
          width: "1353px",
          height: "116px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/9.png",
          top: "674px",
          left: "409px",
          width: "423px",
          height: "83px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/10.png",
          top: "674px",
          left: "810px",
          width: "437px",
          height: "85px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/11.png",
          top: "674px",
          left: "1225px",
          width: "514px",
          height: "85px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/bib.png",
          top: "820px",
          left: "60px",
          width: "1799px",
          height: "231px",
        },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [elementStep, setElementStep] = useState(0);
  const containerRef = useRef(null);

  function handleNext() {
    const currentScene = scenes[step];

    if (elementStep < currentScene.elements.length) {
      setElementStep((prev) => prev + 1);
    } else {
      if (step < scenes.length - 1) {
        setStep((prev) => prev + 1);
        setElementStep(0);
      } else {
        setScreen((prev) => prev + 1);
      }
    }
  }

  // Animación con GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.querySelectorAll(".scene-el");
      const lastElement = elements[elements.length - 1]; // el que acaba de aparecer

      if (lastElement) {
        gsap.fromTo(
          lastElement,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [elementStep, step]);

  function returnToStart() {
    setStep(0);
    setElementStep(0);
    setScreen(0);
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative bg-black overflow-hidden"
      onClick={handleNext}
    >
      {/* Fondo */}
      <img
        src={scenes[step].background}
        alt={`background-${step}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Elementos */}
      {scenes[step].elements.slice(0, elementStep).map((el, i) => {
        const style = {
          position: "absolute",
          top: el.top,
          left: el.left,
          width: el.width,
          height: el.height,
          transform: el.translateX ? `translateX(${el.translateX})` : undefined,
        };

        if (el.type === "text") {
          return (
            <div key={i} className="scene-el" style={style}>
              {el.content}
            </div>
          );
        }

        if (el.type === "image") {
          return (
            <img
              key={i}
              src={el.src}
              alt=""
              className="scene-el"
              style={style}
            />
          );
        }
      })}
      <button onClick={returnToStart} className="fixed top-4 right-4 z-50">
        <img src="/returnButton.png" alt="volver" className="w-12 h-12" />
      </button>
    </div>
  );
}
