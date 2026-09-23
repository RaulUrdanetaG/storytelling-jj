"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Scenario3({ setScreen }) {
  const scenes = [
    {
      background: "/background/bg3.png",
      elements: [
        {
          type: "image",
          src: "/scenario3/question.png",
          top: "375px",
          left: "689px",
          width: "985px",
          height: "257px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen1/title.png",
          top: "77px",
          left: "133px",
          width: "1565px",
          height: "2326x",
        },
        {
          type: "image",
          src: "/scenario3/screen1/boxes.png",
          top: "355px",
          left: "375px",
          width: "1039px",
          height: "527px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/1.png",
          left: "447px",
          top: "355px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/2.png",
          left: "447px",
          top: "444px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/3.png",
          left: "447px",
          top: "533px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/4.png",
          left: "447px",
          top: "624px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/5.png",
          left: "447px",
          top: "714px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/6.png",
          left: "447px",
          top: "804px",
          width: "379px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/7.png",
          left: "1049px",
          top: "355px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/8.png",
          left: "1049px",
          top: "445px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/9.png",
          left: "1049px",
          top: "535px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/10.png",
          left: "1049px",
          top: "624px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/11.png",
          left: "1049px",
          top: "715px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/12.png",
          left: "1049px",
          top: "804px",
          width: "398px",
          height: "80px",
        },
        {
          type: "image",
          src: "/scenario3/screen1/bib.png",
          left: "252px",
          top: "950px",
          width: "1289px",
          height: "79px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen2/title.png",
          left: "140px",
          top: "73px",
          width: "1260px",
          height: "148px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/bar.png",
          left: "104px",
          top: "672px",
          width: "1698px",
          height: "183px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/1.png",
          left: "729px",
          top: "338px",
          width: "260px",
          height: "39px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/2.png",
          left: "729px",
          top: "411px",
          width: "285px",
          height: "39px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/3.png",
          left: "729px",
          top: "482px",
          width: "413px",
          height: "51px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/4.png",
          left: "729px",
          top: "557px",
          width: "285px",
          height: "39px",
        },
        {
          type: "image",
          src: "/scenario3/screen2/bib.png",
          left: "239px",
          top: "969px",
          width: "478px",
          height: "52px",
        },
      ],
    },
    {
      background: "/background/defaultBg.png",
      elements: [
        {
          type: "image",
          src: "/scenario3/screen3/title.png",
          top: "75px",
          left: "152px",
          width: "1479px",
          height: "140px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/intestines.png",
          top: "400px",
          left: "165px",
          width: "1325px",
          height: "454px",
        },

        {
          type: "image",
          src: "/scenario3/screen3/1.png",
          left: "719px",
          top: "473px",
          width: "184px",
          height: "303px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/2.png",
          left: "1567px",
          top: "473px",
          width: "184px",
          height: "303px",
        },
        {
          type: "image",
          src: "/scenario3/screen3/bib.png",
          left: "269px",
          top: "959px",
          width: "1235px",
          height: "46px",
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
          left: "147px",
          top: "76px",
          width: "1290px",
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
          left: "673px",
          top: "576px",
          width: "223px",
          height: "62px",
        });

        animateReplacement(3, {
          type: "image",
          src: "/scenario3/screen3/4.png",
          left: "1511px",
          top: "564px",
          width: "226px",
          height: "62px",
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
