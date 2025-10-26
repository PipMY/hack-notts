"use client";

"use client";
import "@fontsource/im-fell-english"; // Regular
import "@fontsource/im-fell-english/400-italic.css"; // Italic
import React from "react";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1209] bg-[url('/dark-texture-bg.jpg')] bg-cover bg-center p-10">
      {/* Font styling */}
      <style jsx>{`
        .font-fell {
          font-family: "IM Fell English", serif;
        }
        .font-fell-italic {
          font-family: "IM Fell English", serif;
          font-style: italic;
        }
        .font-old-english {
          font-family: "Old English Text MT", serif;
        }
        .font-cloister {
          font-family: "Cloister Black", serif;
        }
      `}</style>

      {/* Centered parchment page */}
      <div className="relative w-full max-w-3xl bg-[url('/grunge-paper-background.jpg')] bg-cover bg-center shadow-2xl border-8 border-[#d4b886] rounded-lg p-12">
        {/* Slight inner parchment texture overlay for depth */}
        <div className="absolute inset-0 bg-[#fdf4e3]/70 mix-blend-overlay rounded-lg pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="font-old-english text-5xl text-center text-[#2c1a00] mb-4 drop-shadow-md">
            REVELATION 23 — WEEKLY BULLETIN
          </h1>

          <h2 className="font-cloister text-2xl text-center text-[#3b2602] mb-8 italic">
            Issue VII · For Those Who See
          </h2>

          <div className="font-fell text-[#1c1307] leading-relaxed">
            <p className="text-lg mb-6">
              To those who stand at the edge and watch: the world of clattering
              certainties trembles. The outsider events — the fevered headlines
              passed between sleeping columns and frantic comment threads — have
              shown us what the world becomes when it forgets to look inward.
              They point, unintentionally, toward our work: the excavation of
              old truths buried beneath modern noise.
            </p>

            <p className="text-lg mb-6">
              You read in the papers how strangers gathered and whispered about
              “witches,” how a lake stilled under moonlight, how the town’s
              compass wavered. They call it chaos (keyword, glitches in and
              out). We call it revelation. Our message is spreading. The press
              writes what it can; we read what it means.
            </p>

            <p className="text-lg mb-6">
              We are opening the Circle. New hearts are needed — practical,
              patient, persistent. We ask neither blind faith nor loud
              proclamation. We ask curiosity, discretion, and a willingness to
              learn the language of signs.
            </p>

            <p className="text-lg mb-6">
              Your first task is hidden within this message. Be watchful on your
              passage through; you never know who may be watching.
            </p>

            <p className="text-lg mb-6">
              Remember: the Circle moves softly. Curiosity opens the door;
              discretion keeps it closed. Speak quietly. Watch the page.
            </p>
          </div>

          <div className="font-fell-italic text-right text-lg mt-10 text-[#5b3e08]">
            — Revelation 23, Editorial
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
