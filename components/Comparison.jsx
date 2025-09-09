"use client";

import { useState } from "react";

export default function Comparison({ setScreen }) {
  const cards = [
    {
      id: 1,
      front: "/comparison/corti.png",
      back: "/comparison/corti_back.png",
    },
    { id: 2, front: "/comparison/il17.png", back: "/comparison/il17_back.png" },
    { id: 3, front: "/comparison/jak.png", back: "/comparison/jak_back.png" },
    { id: 4, front: "/comparison/tnf.png", back: "/comparison/tnf_back.png" },
    { id: 5, front: "/comparison/il23.png", back: "/comparison/il23_back.png" },
    { id: 6, front: "/comparison/anti.png", back: "/comparison/anti_back.png" },
  ];

  const [flipped, setFlipped] = useState([]);

  function toggleCard(id) {
    if (flipped.includes(id)) {
      setFlipped((prev) => prev.filter((c) => c !== id));
    } else {
      setFlipped((prev) => [...prev, id]);
    }
  }

  function returnToStart() {
    setScreen(0);
  }

  return (
    <div className="comparison-bg flex justify-center items-start h-screen w-screen">
      <div className="grid grid-cols-3 gap-10 pt-[150px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flipped.includes(card.id) ? "flipped" : ""}`}
            onClick={() => toggleCard(card.id)}
          >
            <div className="card-inner">
              {/* Parte delantera (se ve al voltear) */}
              <div className="card-front">
                <img
                  src={card.front}
                  alt="frontal"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Parte trasera (se ve al inicio) */}
              <div className="card-back">
                <img
                  src={card.back}
                  alt="trasera"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={returnToStart} className="fixed top-4 right-4 z-50">
        <img src="/returnButton.png" alt="volver" className="w-12 h-12" />
      </button>
    </div>
  );
}
