"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario1({ setScreen }) {
  const scenes = [
    {
      background: "/background/bg1.png",
      elements: [
        {
          type: "image",
          src: "/scenario1/title.png",
          top: "379px",
          left: "189px",
          width: "1019px",
          height: "219px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen1/title.png",
          top: "69px",
          left: "160px",
          width: "1553px",
          height: "151px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/map.jpg",
          top: "315px",
          left: "165px",
          width: "1030px",
          height: "563px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/answer.png",
          top: "450px",
          left: "1361px",
          width: "558px",
          height: "269px",
        },
        {
          type: "image",
          src: "/scenario1/screen1/bib.png",
          top: "962px",
          left: "236px",
          width: "913px",
          height: "29px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen2/title.png",
          left: "166px",
          top: "113px",
          width: "1241px",
          height: "70px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/colombia.png",
          left: "199px",
          top: "403px",
          width: "465px",
          height: "329px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/peru.png",
          left: "764px",
          top: "403px",
          width: "464px",
          height: "329px",
        },
        {
          type: "image",
          src: "/scenario1/screen2/ecuador.png",
          left: "1330px",
          top: "403px",
          width: "464px",
          height: "329px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario1/screen3/title.png",
          top: "74px",
          left: "151px",
          width: "1515px",
          height: "150px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/map.png",
          top: "312px",
          left: "216px",
          width: "996px",
          height: "554px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/answer.png",
          top: "487px",
          left: "1386px",
          width: "533px",
          height: "177px",
        },
        {
          type: "image",
          src: "/scenario1/screen3/bib.png",
          top: "960px",
          left: "236px",
          width: "1041px",
          height: "32px",
        }
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
