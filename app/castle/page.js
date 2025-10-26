"use client"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CastlePage() {
	// ...existing code...
	const mainRef = useRef(null);
	const [isFading, setIsFading] = useState(false);
	const router = useRouter();

	// ...existing code...

	// Four toggle buttons state: [0,1,0,0] etc
	const [toggles, setToggles] = useState([1, 0, 0, 0]);

	// Button positions and sizes config (edit here)
	const buttonConfigs = [
		{ top: "68%", left: "35%", width: "1vw", height: "5vh" },
		{ top: "64%", left: "45%", width: "2.3vw", height: "6vh" },
		{ top: "53.5%", left: "58.3%", width: "2vw", height: "7vh" },
		{ top: "65%", left: "58.3%", width: "2vw", height: "7vh" },
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

	// Navigate to /chatroom if binaryValue is '1011'
	useEffect(() => {
		if (binaryValue === "1011" && !isFading) {
			setIsFading(true);
			setTimeout(() => {
				router.push("/chatroom");
			}, 700); // 700ms fade duration
		}
	}, [binaryValue, router, isFading]);

	return (
		   <main
			   ref={mainRef}
			   style={{
				   position: "relative",
				   width: "100vw",
				   height: "100vh",
				   overflow: "hidden",
				   transition: "opacity 0.7s",
				   opacity: isFading ? 0 : 1
			   }}
		   >
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
						   opacity: 0,
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
		   </main>
	);
}
