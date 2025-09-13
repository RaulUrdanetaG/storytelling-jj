"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario3({ setScreen }) {
  const scenes = [
    {
      background: "/background/questionBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario3/question.png",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen1/title.png",
          top: "73px",
          left: "127px",
          width: "1644px",
          height: "230px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/boxes.png",
          top: "348px",
          left: "449px",
          width: "908px",
          height: "466px",
        },
        {
          type: "image",
          src: "4.gif",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/bib.png",
          left: "261px",
          top: "879px",
          width: "1336px",
          height: "132px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/1.png",
          left: "543px",
          top: "353px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/2.png",
          left: "543px",
          top: "431px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/3.png",
          left: "543px",
          top: "510px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/4.png",
          left: "543px",
          top: "589px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/5.png",
          left: "543px",
          top: "668px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/6.png",
          left: "543px",
          top: "747px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/7.png",
          left: "1053px",
          top: "353px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/8.png",
          left: "1053px",
          top: "431px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/9.png",
          left: "1053px",
          top: "510px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/10.png",
          left: "1053px",
          top: "589px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/11.png",
          left: "1053px",
          top: "668px",
          width: "342px",
          height: "64px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/12.png",
          left: "1053px",
          top: "747px",
          width: "342px",
          height: "64px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen2/title.png",
          left: "161px",
          top: "172px",
          width: "1578px",
          height: "192px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/bar.png",
          left: "463px",
          top: "650px",
          width: "972px",
          height: "46px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/1.png",
          left: "779px",
          top: "422px",
          width: "361px",
          height: "45px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/2.png",
          left: "779px",
          top: "464px",
          width: "361px",
          height: "45px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/3.png",
          left: "779px",
          top: "506px",
          width: "361px",
          height: "45px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/4.png",
          left: "779px",
          top: "548px",
          width: "361px",
          height: "45px",
        },
        {
          type: "image",
          src: "3.gif",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/bib.png",
          left: "273px",
          top: "872px",
          width: "1162px",
          height: "114px",
        },
      ],
    },
    {
      background: "/background/bg2.jpg",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen3/title.png",
          top: "175px",
          left: "225px",
          width: "1451px",
          height: "140px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/intestines.png",
          top: "402px",
          left: "347px",
          width: "1043px",
          height: "372px",
        },

        {
          type: "image",
          src: "/scenario3/screen3/1.png",
          left: "719px",
          top: "475px",
          width: "192px",
          height: "225px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/2.png",
          left: "1393px",
          top: "475px",
          width: "180px",
          height: "225px",
        },
        {
          type: "image",
          src: "5.gif",
          top: "0px",
          left: "0px",
          width: "1920px",
          height: "1080px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/bib.png",
          left: "273px",
          top: "872px",
          width: "1162px",
          height: "114px",
        },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [elementStep, setElementStep] = useState(0);
  const [currentElements, setCurrentElements] = useState(scenes[0].elements);

  const [titleChanged, setTitleChanged] = useState(false);
  const [imagesChanged, setImagesChanged] = useState(false);

  const containerRef = useRef(null);

  function animateReplacement(index, newElement) {
    const el = containerRef.current.querySelectorAll(".scene-el")[index];
    if (!el) return;

    // Animar salida
    gsap.to(el, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      onComplete: () => {
        // Reemplazar con el nuevo objeto completo (src + tamaño + posición)
        setCurrentElements((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], ...newElement };
          return updated;
        });

        // Animar entrada
        setTimeout(() => {
          const newEl =
            containerRef.current.querySelectorAll(".scene-el")[index];
          gsap.fromTo(
            newEl,
            { opacity: 0, scale: 1.2 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
          );
        }, 50);
      },
    });
  }

  function handleNext() {
    const currentScene = scenes[step];

    // Caso especial: escena 3
    if (step === 3) {
      // Cambiar título
      if (elementStep === currentScene.elements.length && !titleChanged) {
        animateReplacement(0, {
          type: "image",
          src: "/scenario3/screen3/title2.png",
          left: "75px",
          top: "175px",
          width: "1751px",
          height: "140px",
        });
        setTitleChanged(true);
        return;
      }

      // Cambiar imágenes 1 y 2 → 3 y 4
      if (
        elementStep === currentScene.elements.length &&
        titleChanged &&
        !imagesChanged
      ) {
        animateReplacement(2, {
          type: "image",
          src: "/scenario3/screen3/3.png",
          left: "735px",
          top: "565px",
          width: "147px",
          height: "45px",
        });

        animateReplacement(3, {
          type: "image",
          src: "/scenario3/screen3/4.png",
          left: "1406px",
          top: "565px",
          width: "147px",
          height: "45px",
        });
        setImagesChanged(true);
        return;
      }
    }

    // Normal
    if (elementStep < currentScene.elements.length) {
      setElementStep((prev) => prev + 1);
    } else {
      if (step < scenes.length - 1) {
        const nextStep = step + 1;
        setStep(nextStep);
        setElementStep(0);
        setCurrentElements(scenes[nextStep].elements);
        setTitleChanged(false);
        setImagesChanged(false);
      } else {
        setScreen((prev) => prev + 1);
      }
    }
  }

  // Animación inicial de aparición
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
    setTitleChanged(false);
    setImagesChanged(false);
    setScreen(0);
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative bg-black overflow-hidden"
      onClick={handleNext}
    >
      <img
        src={scenes[step].background}
        alt={`background-${step}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {currentElements.slice(0, elementStep).map((el, i) => {
        const style = {
          position: "absolute",
          top: el.top,
          left: el.left,
          width: el.width,
          height: el.height,
        };

        return el.type === "image" ? (
          <img key={i} src={el.src} alt="" className="scene-el" style={style} />
        ) : (
          <div key={i} className="scene-el" style={style}>
            {el.content}
          </div>
        );
      })}

      <button onClick={returnToStart} className="fixed top-4 right-4 z-50">
        <img src="/returnButton.png" alt="volver" className="w-12 h-12" />
      </button>
    </div>
  );
}
