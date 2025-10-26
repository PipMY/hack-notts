"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";

export default function Page() {
  const [history, setHistory] = useState([
    "RevelationOS [Version 26.10.25]",
    "© Revelation23. All rights reserved.",
    "",
    "C:\\Users\\Follower> system_check --trace-scan",
    "Tracking signature detected...",
    "Establishing counter-protocol...",
    "",
    "To stop the trace, copy and execute the following command:",
    "C:\\> terminate --session=ghost_protocol --force",
    "",
  ]);

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(100);
  const [isActive, setIsActive] = useState(true);
  const [redirecting, setRedirecting] = useState(false);
  const [dots, setDots] = useState("");

  const correctCommand = "terminate --session=ghost_protocol --force";
  const totalTime = 25000; // 25 seconds
  const tickInterval = 100; // ms
  const barLength = 30; // total "=" signs

  // Countdown effect
  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev - (100 * tickInterval) / totalTime;
        if (next <= 0) {
          clearInterval(timer);
          setIsActive(false);
          setHistory((prev) => [
            ...prev,
            "",
            ">>> TRACE COMPLETE: Connection compromised.",
            ">>> System lockdown initiated.",
          ]);
          return 0;
        }
        return next;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isActive]);

  // Animated "Redirecting..." dots
  useEffect(() => {
    if (!redirecting) return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 400);
    return () => clearInterval(interval);
  }, [redirecting]);

  // Input change handler
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const isPrefix = correctCommand
      .toLowerCase()
      .startsWith(value.toLowerCase());
    const isTooLong = value.length > correctCommand.length;

    setError(!isPrefix || isTooLong);
  };

  // Handle Enter key
  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const trimmedInput = input.trim();
      const isCorrect =
        trimmedInput.toLowerCase() === correctCommand.toLowerCase();

      if (isCorrect) {
        // Show success first
        setHistory((prev) => [
          ...prev,
          `C:\\> ${trimmedInput}`,
          ">>> Course realigned. The observer signal has been severed.",
        ]);
        setInput("");
        setError(false);
        setIsActive(false);
        setProgress(100);

        // Start "Redirecting..." after short delay
        setTimeout(() => {
          setRedirecting(true);
          setHistory((prev) => [...prev, "Redirecting"]);

          setTimeout(() => {
            setRedirecting(false);
            setHistory((prev) =>
              prev.map((line) =>
                line === "Redirecting" ? `Redirecting${dots}` : line
              )
            );
          }, 2000);
        }, 500); // 0.5s delay after success
      } else {
        setError(true);
        setHistory((prev) => [
          ...prev,
          `C:\\> ${trimmedInput}`,
          `'${trimmedInput}' is not recognized as an internal or external command, operable program or batch file.`,
        ]);
        setInput("");
      }
    }
  };

  // Generate ASCII bar where green gradually turns gray
  const filledLength = Math.floor((progress / 100) * barLength);
  const filled = "=".repeat(filledLength);
  const faded = "=".repeat(barLength - filledLength);

  const barDisplay = (
    <span>
      <span className="text-green-400">{filled}</span>
      <span className="text-gray-600">{faded}</span>
    </span>
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6 font-mono">
        <div className="w-full max-w-2xl bg-black border border-gray-600 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.7)]">
          {/* Title Bar */}
          <div className="flex items-center justify-between bg-[#1a1a1a] text-gray-300 px-3 py-1 text-xs">
            <span>RaSH</span>
            <div className="space-x-2">
              <span className="text-gray-500">▢</span>
              <span className="text-gray-500">🗕</span>
              <span className="text-gray-500">✕</span>
            </div>
          </div>

          {/* CMD content */}
          <div className="p-4 text-sm text-gray-100 h-[400px] overflow-y-auto">
            {history.map((line, i) => (
              <p
                key={i}
                className={
                  line.includes("not recognized")
                    ? "text-red-500"
                    : line.includes("TRACE COMPLETE")
                    ? "text-red-600 font-bold"
                    : line.includes("realigned")
                    ? "text-green-400"
                    : "text-gray-100"
                }
              >
                {line}
                {redirecting && line === "Redirecting" && (
                  <span className="text-gray-400">{dots}</span>
                )}
              </p>
            ))}

            {/* Input line */}
            {isActive && (
              <div className="flex items-center">
                <span className="text-green-400">C:\&gt;&nbsp;</span>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleCommand}
                  autoFocus
                  spellCheck={false}
                  className={`bg-transparent outline-none flex-1 ${
                    error
                      ? "text-red-500 underline decoration-red-500"
                      : "text-gray-100"
                  }`}
                />
              </div>
            )}

            {/* ASCII Progress Bar */}
            {isActive && (
              <div className="mt-3 text-gray-400">
                <p>Time left...</p>
                <p>[{barDisplay}]</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
