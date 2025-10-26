"use client"
import { useState } from "react";

export default function CastlePage() {

	// ...existing code...

	// Four toggle buttons state: [0,1,0,0] etc
	const [toggles, setToggles] = useState([0, 0, 0, 0]);

	// Button positions and sizes config (edit here)
	const buttonConfigs = [
		{ top: "20%", left: "10%", width: "20vw", height: "10vh" },
		{ top: "35%", left: "10%", width: "20vw", height: "10vh" },
		{ top: "50%", left: "10%", width: "20vw", height: "10vh" },
		{ top: "65%", left: "10%", width: "20vw", height: "10vh" },
	];

	// Integer value from binary toggles
	const castleIndex = parseInt(toggles.join(""), 2);
	const imageSrc = `/castles/castle${castleIndex}.png`;

	// Toggle button handler
	const handleToggle = (idx) => {
		setToggles((prev) => {
			const next = [...prev];
			next[idx] = next[idx] === 0 ? 1 : 0;
			return next;
		});
	};

	// ...existing code...

	// Binary string value
	const binaryValue = toggles.join("");

	return (
		   <main style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
			   <img
				   src={imageSrc}
				   alt={`Castle ${castleIndex}`}
				   style={{
					   position: "absolute",
					   top: 0,
					   left: 0,
					   width: "100vw",
					   height: "100vh",
					   objectFit: "cover",
					   zIndex: 0
				   }}
			   />
			   {/* Four invisible toggle buttons */}
			   {buttonConfigs.map((cfg, idx) => (
				   <button
					   key={idx}
					   onClick={() => handleToggle(idx)}
					   style={{
						   position: "absolute",
						   top: cfg.top,
						   left: cfg.left,
						   width: cfg.width,
						   height: cfg.height,
						   opacity: 1,
						   cursor: "pointer",
						   zIndex: 2,
						   border: toggles[idx] ? "2px solid #00f" : "2px solid #888",
						   background: toggles[idx] ? "rgba(0,0,255,0.2)" : "rgba(255,255,255,0.5)",
						   transition: "background 0.2s, border 0.2s"
					   }}
					   aria-label={`Toggle ${idx + 1}`}
				   >
					   {`Button ${idx + 1}`}
				   </button>
			   ))}
			   {/* ...existing code... */}
			   {/* Show binary value */}
			   <div style={{
				   position: "absolute",
				   bottom: "2rem",
				   left: "50%",
				   transform: "translateX(-50%)",
				   fontSize: "2rem",
				   color: "white",
				   textShadow: "0 0 8px #000",
				   zIndex: 4
			   }}>
				   {binaryValue}
			   </div>
		   </main>
	);
}
