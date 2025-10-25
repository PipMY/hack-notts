"use client";
import React, { useEffect, useState } from "react";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showJoinButton, setShowJoinButton] = useState(false);
  const [shutdown, setShutdown] = useState(false);
  const [glitchText, setGlitchText] = useState("");

  // Fictional Revelation 23 chat transcript
  const chatScript = [
    { time: "[23:07]", user: "Listener13", text: "anyone here? the page flickered again", delay: 1500 },
    { time: "[23:07]", user: "P4leHour", text: "it means our leak worked", delay: 2000 },
    { time: "[23:07]", user: "Maven_Of_Death", text: "i heard the outsiders wrote about us. they never understand", delay: 2500 },
    { time: "[23:07]", user: "Listener13", text: "the lake thing? it’s everywhere now", delay: 2200 },
    { time: "[23:07]", user: "EchoGlass", text: "they say it’s us. not our interesting admirer", delay: 2400 },
    { time: "[23:07]", user: "Maven_Of_Death", text: "still no word from 23?", delay: 2000 },
    { time: "[23:07]", user: "Watcher23", text: "Patience. all messages come in silence.", delay: 3500 },
    // (2-second pause)
    { time: "[23:08]", user: "P4leHour", text: "the first task’s hidden, right? I think I found something in the last bulletin", delay: 2500 },
    { time: "[23:08]", user: "Listener", text: "the word glitch?", delay: 2000 },
    { time: "[23:08]", user: "Maven_Of_Death", text: "shh. not here. the watchers read everything", delay: 2500 },
    { time: "[23:08]", user: "Watcher23", text: "The door opens to those who see, not to those who speak.", delay: 3000 },
    // (screen distortion note)
    { time: "", user: "*System*", text: "(screen distortion recorded; external user detected)", delay: 2500 },
    // Final message
    { time: "[23:09]", user: "EdenDestructor", text: "You have walked through the noise and reached the quiet.", delay: 2500 },
    { time: "[23:09]", user: "EdenDestructor", text: "The eyes that lingered over the witch’s trial have been seen.", delay: 2500 },
    { time: "[23:09]", user: "EdenDestructor", text: "We are impressed by your recent work.", delay: 2500 },
    { time: "[23:09]", user: "EdenDestructor", text: "Observation is understanding; understanding is membership.", delay: 2500 },
    { time: "[23:09]", user: "EdenDestructor", text: "Welcome to REVELATION 23.", delay: 2500 },
    { time: "", user: "*System*", text: "(connection terminated)", delay: 2500 },
  ];

  // handle chat timing
  useEffect(() => {
    if (currentIndex < chatScript.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, chatScript[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, chatScript[currentIndex].delay);
      return () => clearTimeout(timer);
    } else if (currentIndex === chatScript.length) {
      // after last message
      setTimeout(() => setShowJoinButton(true), 2000);
    }
  }, [currentIndex]);

  // Handle Join Chat button click
  const handleJoin = () => {
    setShutdown(true);
    const text = "REVELATION 23 IS COMING";
    let output = "";
    let i = 0;

    // glitch animation
    const glitchInterval = setInterval(() => {
      if (i < text.length) {
        const glitchChar =
          Math.random() < 0.2
            ? String.fromCharCode(33 + Math.random() * 94)
            : "";
        output += text[i];
        setGlitchText(output + glitchChar);
        i++;
      } else {
        clearInterval(glitchInterval);
        setGlitchText(text);
      }
    }, 100);
  };

  // Shutdown screen
  if (shutdown) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-red-600 font-mono text-xl animate-flicker">
        <div className="glitch-text text-center scale-up">{glitchText}</div>

        <style>{`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
            }
            20%, 24%, 55% {
              opacity: 0.3;
            }
          }
          @keyframes scaleUp {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(0.5deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
          .animate-flicker {
            animation: flicker 2s infinite;
          }
          .scale-up {
            animation: scaleUp 1.5s ease-in-out infinite;
          }
          .glitch-text {
            text-shadow: 0 0 6px #ff0000, 0 0 12px #ff0000, 0 0 24px #660000;
          }
        `}</style>
      </div>
    );
  }

  // Main chat interface
  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-8 p-4 bg-black text-red-400 font-mono rounded-2xl shadow-lg h-[600px] border border-gray-700">
      <div className="text-center text-gray-500 text-sm mb-2">
        — Revelation 23, Chatroom —
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages.map((msg, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-xs text-gray-500">
              {msg.time} &lt;{msg.user}&gt;
            </span>
            <span className="text-sm">{msg.text}</span>
          </div>
        ))}
      </div>

      {showJoinButton ? (
        <button
          onClick={handleJoin}
          className="mt-4 bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded-md transition"
        >
          Join Chat
        </button>
      ) : (
        <div className="mt-4 border-t border-red-700 pt-2 flex">
          <input
            type="text"
            disabled
            placeholder="Chatroom locked..."
            className="flex-1 bg-black text-red-700 px-3 py-2 rounded-md focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
