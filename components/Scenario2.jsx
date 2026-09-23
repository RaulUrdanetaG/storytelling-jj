"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario2({ setScreen }) {
  const scenes = [
    {
      background: "/background/bg2.png",
      elements: [
        {
          type: "image",
          src: "/scenario2/question.png",
          top: "461px",
          left: "764px",
          width: "945px",
          height: "255px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario2/title.png",
          top: "93px",
          left: "132px",
          width: "1524px",
          height: "108px",
        },
        {
          type: "image",
          src: "/scenario2/map1.png",
          top: "281px",
          left: "301px",
          width: "1317px",
          height: "583px",
        },
        {
          type: "image",
          src: "/scenario2/grey.png",
          top: "872px",
          left: "0px",
          width: "1910px",
          height: "55px",
        },
        {
          type: "image",
          src: "/scenario2/bib.png",
          top: "939px",
          left: "251px",
          width: "1002px",
          height: "71px",
        },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [elementStep, setElementStep] = useState(0);
  const [currentElements, setCurrentElements] = useState(scenes[0].elements);
  const [middleChanged, setMiddleChanged] = useState(false); // para controlar si ya se cambió

  const containerRef = useRef(null);

  function handleNext() {
    const currentScene = scenes[step];

    // Si ya se vieron todos los elementos de la segunda escena y no se cambió la imagen
    if (
      step === 1 &&
      elementStep === currentElements.length &&
      !middleChanged
    ) {
      const updated = [...currentElements];
      const middleIndex = 1; // la imagen del medio
      updated[middleIndex] = {
        ...updated[middleIndex],
        src: "/scenario2/map2.png",
      };
      setCurrentElements(updated);
      setMiddleChanged(true);
      return; // no avanzar aún
    }

    if (elementStep < currentScene.elements.length) {
      setElementStep((prev) => prev + 1);
    } else {
      if (step < scenes.length - 1) {
        const nextStep = step + 1;
        setStep(nextStep);
        setElementStep(0);
        setCurrentElements(scenes[nextStep].elements);
        setMiddleChanged(false); // reset para la siguiente escena
      } else {
        setScreen((prev) => prev + 1);
      }
    }
  }

  // Animación solo del último elemento que aparece
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current.querySelectorAll(".scene-el");
      const lastElement = elements[elements.length - 1];

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
    setCurrentElements(scenes[0].elements);
    setMiddleChanged(false);
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
      {currentElements.slice(0, elementStep).map((el, i) => {
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
