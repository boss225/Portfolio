"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      <span
        className="animate-pulse ml-1"
        style={{ animation: "pulse 1s infinite" }}
      >
        |
      </span>
    </span>
  );
}
