"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validPassword = "password123";
    if (password === validPassword) {
      router.push("/newspaper");
    } else {
      setError("Invalid password");
    }
  };

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
