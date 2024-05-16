"use client";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

export const DesignPreview = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => setShowConfetti(true));

  return (
    <>
      <div
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
        aria-hidden="true"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      
    </>
  );
};
