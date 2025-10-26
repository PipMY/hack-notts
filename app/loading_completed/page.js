"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");

  const fullMessage = "You have found the gateway.\nProceed when ready.";

  // Progress bar logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowMessage(true);
          return 100;
        }
        const increment = Math.random() * 15 + 10; // Random jump between 10–25%
        return Math.min(prev + increment, 100);
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  // "Loading..." dots animation
  useEffect(() => {
    if (!showMessage) {
      let i = 0;
      const dotsInterval = setInterval(() => {
        i = (i + 1) % 4;
        setLoadingDots(".".repeat(i));
      }, 400);
      return () => clearInterval(dotsInterval);
    }
  }, [showMessage]);

  // Typewriter effect (fixed version)
  useEffect(() => {
    if (showMessage) {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullMessage.length) {
          setTypedText(fullMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTypingDone(true);
        }
      }, 70);
      return () => clearInterval(typeInterval);
    }
  }, [showMessage]);

  const handleContinue = () => {
  const audio = new window.Audio("/audio/scary.mp3");
  audio.play();
  audio.onended = () => {
    window.location.href = "/castle";
  };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c0c0c] text-white">
      {/* Loading bar */}
      <div className="w-96 bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="bg-gray-500 h-3 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading... animation */}
      {!showMessage && (
        <p className="text-md mt-4 text-gray-400 font-mono tracking-widest">
          Loading{loadingDots}
        </p>
      )}

      {/* Typewriter message */}
      {showMessage && (
        <div className="mt-6 text-center">
          <p className="text-lg whitespace-pre-line font-mono">{typedText}</p>

          {/* Button fades in slowly */}
          {typingDone && (
            <button
              onClick={handleContinue}
              className="mt-6 bg-gray-600 px-5 py-2 rounded hover:bg-gray-700 opacity-0 animate-slowFadeIn transition cursor-pointer"
            >
              Continue
            </button>
          )}
        </div>
      )}

      {/* Fade animation */}
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
          animation: slowFadeIn 1.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

