"use client";

import Comparison from "@/components/Comparison";
import Scenario1 from "@/components/Scenario1";
import Scenario2 from "@/components/Scenario2";
import Scenario3 from "@/components/Scenario3";
import Scenario4 from "@/components/Scenario4";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState(0);

  console.log(screen);

  return (
    <div className="relative w-full h-full">
      {screen === 0 && <Scenario1 setScreen={setScreen} />}
      {screen === 1 && <Scenario2 setScreen={setScreen} />}
      {screen === 2 && <Scenario3 setScreen={setScreen} />}
      {screen === 3 && <Scenario4 setScreen={setScreen} />}
      {screen === 4 && <Comparison setScreen={setScreen} />}
    </div>
  );
}
