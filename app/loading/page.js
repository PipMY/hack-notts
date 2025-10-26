"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [glitchText, setGlitchText] = useState("");
  const [glitchDone, setGlitchDone] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");

  const fullMessage =
    "Passage only for one, I'm afraid.\nIt seems you are being followed...";

  // Progress logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 65 && !showMessage) {
          setShowMessage(true);
          return 65;
        }
        if (prev < 65) {
          const increment = Math.random() * 15 + 10; // Random jump between 10–25%
          return Math.min(prev + increment, 65);
        }
        return 65;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [showMessage]);

  // "Loading..." dots animation (before text)
  useEffect(() => {
    if (!showMessage) {
      let i = 0;
      const dotsInterval = setInterval(() => {
        i = (i + 1) % 4; // cycles between 0, 1, 2, 3
        setLoadingDots(".".repeat(i));
      }, 400); // speed of dot cycling
      return () => clearInterval(dotsInterval);
    }
  }, [showMessage]);

  // Glitch typing effect for full message
  useEffect(() => {
    if (showMessage) {
      let i = 0;
      let output = "";
      const glitchInterval = setInterval(() => {
        if (i < fullMessage.length) {
          const char = fullMessage[i];
          const glitchChar =
            Math.random() < 0.3
              ? String.fromCharCode(33 + Math.random() * 94)
              : "";
          output += char;
          setGlitchText(output + glitchChar);
          i++;
        } else {
          clearInterval(glitchInterval);
          setGlitchText(fullMessage);
          setGlitchDone(true);
        }
      }, 70);
      return () => clearInterval(glitchInterval);
    }
  }, [showMessage]);

  const handleResolve = () => {
    setShowMessage(false);
    setProgress(100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c0c0c] text-white">
      {/* Bigger loading bar */}
      <div className="w-96 bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="bg-gray-500 h-3 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading... animation (before glitch text) */}
      {!showMessage && (
        <p className="text-md mt-4 text-gray-400 font-mono tracking-widest">
          Loading{loadingDots}
        </p>
      )}

      {/* Glitching message */}
      {showMessage && (
        <div className="mt-6 text-center">
          <p className="text-lg whitespace-pre-line font-mono">{glitchText}</p>

          {/* Button fades in slowly after glitching */}
          {glitchDone && (
            <button
              onClick={handleResolve}
              className="mt-6 bg-gray-600 px-5 py-2 rounded hover:bg-gray-700 opacity-0 animate-slowFadeIn transition"
            >
              Prove I'm Alone
            </button>
          )}
        </div>
      )}

      {/* Fade animations */}
      <style jsx>{`
        @keyframes slowFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slowFadeIn {
          animation: slowFadeIn 1.8s ease-out forwards; /* slower fade */
        }
      `}</style>
    </div>
  );
}
