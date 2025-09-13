"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario1({ setScreen }) {
  const scenes = [
    {
      background: "/background/questionBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario1/question.png",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario1/mage.gif",
          top: "184px",
          left: "1012px",
          width: "815px",
          height: "815px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen1/title.png",
          top: "83px",
          left: "73px",
          width: "1752px",
          height: "121px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/map.jpg",
          top: "247px",
          left: "411px",
          width: "932px",
          height: "510px",
        },
        {
          type: "image",
          src: "2.gif",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/bib.png",
          top: "906px",
          left: "273px",
          width: "1162px",
          height: "71px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/answer.png",
          top: "403px",
          left: "1421px",
          width: "381px",
          height: "198px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen2/title.png",
          left: "270px",
          top: "175px",
          width: "1361px",
          height: "70px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/colombia.png",
          left: "182px",
          top: "399px",
          width: "451px",
          height: "368px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/peru.png",
          left: "735px",
          top: "399px",
          width: "451px",
          height: "368px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/ecuador.png",
          left: "1288px",
          top: "399px",
          width: "451px",
          height: "368px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen3/title.png",
          top: "83px",
          left: "73px",
          width: "1752px",
          height: "121px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/map.jpg",
          top: "247px",
          left: "411px",
          width: "932px",
          height: "510px",
        },
        {
          type: "image",
          src: "6.gif",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/bib.png",
          top: "904px",
          left: "273px",
          width: "1162px",
          height: "71px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/answer.png",
          top: "442px",
          left: "1420px",
          width: "381px",
          height: "156px",
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
