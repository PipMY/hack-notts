"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {


  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fade, setFade] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const router = useRouter();
  // All hooks above, no early returns
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setAccessGranted(true);
      }, 2600); // loading screen duration
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (accessGranted) {
      const timer = setTimeout(() => {
        setFade(true);
        setTimeout(() => {
          router.push("/home");
        }, 800); // fade duration
      }, 2200); // access granted duration
      return () => clearTimeout(timer);
    }
  }, [accessGranted, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validPassword = "Mithras";
    if (password === validPassword) {
      setLoading(true);
    } else {
      setAttempts((prev) => prev + 1);
      setError("Invalid password");
      if (attempts + 1 >= 3 && !showHint) {
        setShowHint(true);
        setError("");
        setPassword("");
      }
    }
  };

  let content;
  if (loading) {
    content = (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#E0E0E0] via-[#C0C0C0] to-[#A0A0A0] font-mono">
        <div className="border-2 border-gray-700 shadow-[4px_4px_0_#888] bg-[#F8F8F8] min-w-[340px] max-w-[360px] animate-fade-in">
          <div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold font-mono text-[1.1rem] border-b-2 border-gray-700 tracking-wide flex items-center gap-2">
            Loading Revelation OS
          </div>
          <div className="py-8 px-6 text-center text-black font-mono text-lg">
            <div className="flex justify-center items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-[#A0A0A0] animate-bounce"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-[#C0C0C0] animate-bounce delay-150"></span>
              <span className="inline-block w-4 h-4 rounded-full bg-[#E0E0E0] animate-bounce delay-300"></span>
            </div>
            <div className="mt-6 text-sm text-gray-700">Please wait while Revelation OS boots up...</div>
          </div>
        </div>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.7s;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-spin-slow {
            animation: spin 2.2s linear infinite;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          .animate-bounce {
            animation: bounce 1.1s infinite alternate;
          }
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-18px); }
          }
          .delay-150 {
            animation-delay: 0.15s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}</style>
      </div>
    );
  } else if (accessGranted) {
    // Desktop screen with file explorer
    content = (
      <div className={`min-h-screen flex items-center justify-center bg-[#E0E0E0] font-mono transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}>
        <div className="border-2 border-gray-700 shadow-[4px_4px_0_#888] bg-[#F8F8F8] min-w-[340px] max-w-[360px] animate-fade-in">
          <div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold font-mono text-[1.1rem] border-b-2 border-gray-700 tracking-wide flex items-center gap-2">
            <span className="bg-white border border-gray-700 px-2 py-1 rounded shadow">✔</span>
            Revelation OS Desktop
          </div>
          <div className="py-8 px-6 text-left text-black font-mono text-lg">
            <div className="mb-4 font-bold text-base">Documents</div>
            <ul className="space-y-2">
              <li>
                <button
                  className="w-full text-left px-3 py-2 bg-gray-100 border border-gray-400 rounded hover:bg-gray-200 cursor-pointer"
                  onClick={() => router.push("/games/calculator")}
                >🧮 Calculator</button>
              </li>
              <li>
                <button
                  className="w-full text-left px-3 py-2 bg-gray-100 border border-gray-400 rounded hover:bg-gray-200 cursor-pointer"
                  onClick={() => router.push("/chatroom")}
                >💬 Chatroom</button>
              </li>
              <li>
                <button
                  className="w-full text-left px-3 py-2 bg-gray-100 border border-gray-400 rounded hover:bg-gray-200 cursor-pointer"
                  onClick={() => router.push("/newspaper")}
                >📰 Newspaper</button>
              </li>
            </ul>
          </div>
          <div className="bg-[#A0A0A0] text-black py-1 px-4 border-t-2 border-gray-700 text-right text-xs">Windows ME Theme</div>
        </div>
        <style jsx>{`
          .animate-fade-in {
            animation: fadeIn 0.7s;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  } else {
    content = (
      <div className="min-h-screen flex items-center justify-center bg-gray-400 font-mono">
        <div className="border-2 border-gray-500 shadow-[4px_4px_0_#888] bg-gray-200 min-w-[340px] max-w-[360px]">
          <div className="bg-[#C0C0C0] text-white py-2 px-4 font-bold font-mono text-[1.1rem] border-b-2 border-gray-500 tracking-wide">
            Login
          </div>
          <form onSubmit={handleSubmit} className="py-6 px-4 flex flex-col gap-4 font-mono">
            <label className="text-gray-800 font-mono text-base mb-1">
              Password<br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-1 px-2 bg-white text-gray-800 border-2 border-gray-300 font-mono text-base shadow-inner"
              />
            </label>
            {error && (
              <div className="text-red-700 font-mono text-center text-sm bg-white border border-gray-500 py-1 mt-1">{error}</div>
            )}
            {showHint && (
              <div className="text-blue-700 font-mono text-center text-sm bg-white border border-blue-500 py-1 mt-1">
                Hint: Try the latin name of Roman mystery cult for the bull-slaying scene
              </div>
            )}
            <button type="submit" className="bg-gray-200 text-gray-800 border-2 border-gray-300 font-mono text-base py-1 px-4 mt-2 cursor-pointer shadow">Enter</button>
          </form>
        </div>
      </div>
    );
  }

  return content;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 font-mono">
      <div className="border-2 border-gray-500 shadow-[4px_4px_0_#888] bg-gray-200 min-w-[340px] max-w-[360px]">
        <div className="bg-[#C0C0C0] text-white py-2 px-4 font-bold font-mono text-[1.1rem] border-b-2 border-gray-500 tracking-wide">
          Login
        </div>
        <form onSubmit={handleSubmit} className="py-6 px-4 flex flex-col gap-4 font-mono">
          <label className="text-gray-800 font-mono text-base mb-1">
            Password<br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-1 px-2 bg-white text-gray-800 border-2 border-gray-300 font-mono text-base shadow-inner"
            />
          </label>
          {error && (
            <div className="text-red-700 font-mono text-center text-sm bg-white border border-gray-500 py-1 mt-1">{error}</div>
          )}
          <button type="submit" className="bg-gray-200 text-gray-800 border-2 border-gray-300 font-mono text-base py-1 px-4 mt-2 cursor-pointer shadow">Enter</button>
        </form>
      </div>
    </div>
  );
}
