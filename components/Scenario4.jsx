"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario4({ setScreen }) {
  const scenes = [
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario4/screen1/title.png",
          left: "152px",
          top: "105px",
          width: "1324px",
          height: "130px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/1.png",
          left: "744px",
          top: "318px",
          width: "404px",
          height: "242px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/2.png",
          left: "1179px",
          top: "484px",
          width: "404px",
          height: "242px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/3.png",
          left: "751px",
          top: "675px",
          width: "405px",
          height: "242px",
        },
        {
          type: "image",
          src: "/scenario4/screen1/4.png",
          left: "343px",
          top: "503px",
          width: "404px",
          height: "242px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario4/screen2/title.png",
          top: "88px",
          left: "127px",
          width: "1452px",
          height: "148px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/1.png",
          top: "421px",
          left: "81px",
          width: "160px",
          height: "166px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/2.png",
          top: "433px",
          left: "264px",
          width: "187px",
          height: "128px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/3.png",
          top: "343px",
          left: "471px",
          width: "161px",
          height: "237px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/4.png",
          top: "298px",
          left: "651px",
          width: "256px",
          height: "282px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/5.png",
          top: "281px",
          left: "912px",
          width: "269px",
          height: "299px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/6.png",
          top: "288px",
          left: "1177px",
          width: "293px",
          height: "292px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/7.png",
          top: "346px",
          left: "1439px",
          width: "338px",
          height: "321px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/8.png",
          top: "603px",
          left: "261px",
          width: "1258px",
          height: "173px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/9.png",
          top: "795px",
          left: "506px",
          width: "264px",
          height: "100px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/10.png",
          top: "795px",
          left: "757px",
          width: "389px",
          height: "110px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/11.png",
          top: "795px",
          left: "1126px",
          width: "397px",
          height: "110px",
        },
        {
          type: "image",
          src: "/scenario4/screen2/bib.png",
          top: "977px",
          left: "263px",
          width: "1263px",
          height: "52px",
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
