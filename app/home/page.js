"use client";
import React, { useState } from "react";
import Calculator from "../utilities/calculator";
import dynamic from "next/dynamic";
const Portal = dynamic(() => import("../utilities/portal"), { ssr: false });

export default function Desktop() {
				const notificationData = [
					"Emily - Oh my days did you hear about the girl who drowned on campus",
					"Jack - I bet your weird medieval mind killed that girl cus she was a witch",
					"UoN - We know people are distressed about what happened on campus yesterday but we are assuring all student campus security are finding who is responsible and making sure all our students are safe.",
					"New Nottingham Evening Post available!",
					"System update available."
				];

				const [notifications, setNotifications] = useState(
					notificationData.map(full => ({
						short: full.length > 30 ? full.slice(0, 30) + "..." : full,
						full
					}))
				);
	const [showDropdown, setShowDropdown] = useState(false);
		const [activeNotification, setActiveNotification] = useState(null);
		const [activeNotificationIdx, setActiveNotificationIdx] = useState(null);
	// File structure for dropdown
	const [hasOpenedNewspaper, setHasOpenedNewspaper] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("portalAvailable") === "true";
		}
		return false;
	});
	const [fileTree, setFileTree] = useState([
		{
			name: "My Documents",
			children: ["Resume.doc", "Budget.xls", "Notes.txt"],
		},
		{
			name: "Photos",
			children: ["Vacation.jpg", "evidence.png", "cult.jpg"],
		},
		{
			name: "Games",
			children: ["Minesweeper.exe", "Solitaire.exe"],
		},
		{
			name: "Utilities",
			children: ["Finance-Calculator.xlsx"],
		}
	]);
	const [openFolders, setOpenFolders] = useState({});
	const [showReadme, setShowReadme] = useState(false);
	const [showCalculator, setShowCalculator] = useState(false);
	const [showNewspaper, setShowNewspaper] = useState(false);
	const [showPortal, setShowPortal] = useState(false);
	const [showEvidence, setShowEvidence] = useState(false);
	const [showCult, setShowCult] = useState(false);

	const toggleFolder = (folder) => {
		setOpenFolders((prev) => ({
			...prev,
			[folder]: !prev[folder],
		}));
	};

		const handleFileClick = (folder, file) => {
			if (file === "README.txt") {
				setShowReadme(true);
			} else if (file === "Finance-Calculator.xlsx") {
				setShowCalculator(true);
			} else if (file === "portal.exe") {
				setShowPortal(true);
			} else if (file === "evidence.png") {
				setShowEvidence(true);
			} else if (file === "cult.jpg") {
				setShowCult(true);
			}
		};

		const handleNotificationClick = (noteObj, idx) => {
			setShowDropdown(false);
			// Check both short and full text for newspaper notification
			const isNewspaper =
				noteObj.short.includes("Nottingham Evening Post") ||
				noteObj.full.includes("Nottingham Evening Post");
			if (isNewspaper) {
				setShowNewspaper(true);
				if (!hasOpenedNewspaper) {
					setHasOpenedNewspaper(true);
					setFileTree((prev) => prev.map(folder =>
						folder.name === "Utilities"
							? { ...folder, children: [...folder.children, "portal.exe"] }
							: folder
					));
					if (typeof window !== "undefined") {
						localStorage.setItem("portalAvailable", "true");
					}
				}
			} else {
				setActiveNotification(noteObj.full);
				setActiveNotificationIdx(idx);
			}
		};

	// Ensure portal.exe stays available after reload
	React.useEffect(() => {
		if (hasOpenedNewspaper) {
			setFileTree((prev) => prev.map(folder =>
				folder.name === "Utilities" && !folder.children.includes("portal.exe")
					? { ...folder, children: [...folder.children, "portal.exe"] }
					: folder
			));
		}
	}, [hasOpenedNewspaper]);

		const handleCloseNotification = () => {
			// Only delete notification if it's not the newspaper one
			if (activeNotificationIdx !== null && notifications[activeNotificationIdx]?.short !== "New Nottingham Evening Post available!") {
				setNotifications((prev) => prev.filter((_, i) => i !== activeNotificationIdx));
			}
			setActiveNotification(null);
			setActiveNotificationIdx(null);
			setShowNewspaper(false);
		};

	return (
		<div className="min-h-screen bg-[#E0E0E0] font-mono relative">
				{/* File Explorer */}
								<div className="absolute top-6 left-6 w-[220px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888]">
									<div className="bg-[#A0A0A0] text-black py-2 px-3 font-bold text-[1rem] border-b-2 border-gray-700 tracking-wide">File Explorer</div>
									<ul className="py-3 px-3 text-black">
										{/* README.txt always visible at root */}
										<li className="mb-2">
											<div
												className="text-gray-700 bg-white border border-gray-300 px-2 py-1 rounded shadow-inner font-mono text-sm cursor-pointer hover:bg-gray-200"
												onClick={() => handleFileClick(null, "README.txt")}
											>
												README.txt
											</div>
										</li>
										{fileTree.map((folder, idx) => (
											<li key={idx} className="mb-2">
												<button
													className="w-full text-left pl-2 border-l-4 border-gray-700 bg-transparent hover:bg-[#E0E0E0] font-mono text-base cursor-pointer"
													onClick={() => toggleFolder(folder.name)}
													style={{ fontWeight: folder.children.length ? "bold" : "normal" }}
												>
													{folder.children.length ? (openFolders[folder.name] ? "▼ " : "► ") : ""}
													{folder.name}
												</button>
												{folder.children.length > 0 && openFolders[folder.name] && (
													<ul className="ml-6 mt-1">
														{folder.children.map((file, fidx) => (
															<li
																key={fidx}
																className="text-gray-700 bg-white border border-gray-300 px-2 py-1 mb-1 rounded shadow-inner font-mono text-sm cursor-pointer hover:bg-gray-200"
																onClick={() => handleFileClick(folder.name, file)}
															>
																{file}
															</li>
														))}
													</ul>
												)}
											</li>
										))}
									</ul>
								</div>

						{/* README.txt window */}
						{showReadme && (
							<div className="absolute top-32 left-1/2 -translate-x-1/2 w-[340px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50">
								<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center">
									README.txt
									<button
										className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
										onClick={() => setShowReadme(false)}
										aria-label="Close"
									>✖</button>
								</div>
											<div className="p-4 text-black font-mono text-sm bg-white min-h-[120px] max-h-[260px] overflow-auto wrap-break-word whitespace-pre-line">
												Welcome to your desktop!
												<br></br>
												<br></br>
												1. Click on notification from Nottingham Evening Post.<br></br>
												2. To help police with investigation go to files on desktop and open the dark web portal.<br></br>
												3. Here you can find a favourite tab for cultist news letter.<br></br>
												4. When you read it you find there is a way for you to find the cult chatroom.<br></br>
												5. To do this you must find the suspicious link in the cultist new letter.<br></br>
												6. Once you have clicked on it you will enter a loading screen.<br></br>
												7. But it appears you are being tracked and won't be able to continue further until you have dealt with your unwanted guest.<br></br>
												8. Once you complete the task you will finally be moved onto the next task.<br></br>
												9. Here you will need to click on the castle lights and find the right pattern to be allowed to enter the cultist chatroom.<br></br>
												10. Once you have completed that task you will be granted passage into the castle where the chatroom is.<br></br>
												11. You receive a message saying you have been acknowledged for you efforts and been granted a place at the cult.<br></br>
											</div>
							</div>
						)}

				{/* Taskbar */}
								<div className="fixed bottom-0 left-0 w-full h-11 bg-[#F8F8F8] border-t-2 border-gray-700 flex items-center justify-between px-4 shadow-[0_-2px_4px_#888] z-40">
									<div className="flex items-center gap-4">
										<div className="bg-[#A0A0A0] text-black px-3 py-1 rounded shadow border border-gray-700 cursor-pointer hover:bg-gray-300">Start</div>
									</div>
									<div className="flex items-center gap-2 relative">
										<div
											className="bg-white text-black border border-gray-700 px-2 py-1 rounded text-xs shadow cursor-pointer hover:bg-gray-200"
											onClick={() => setShowDropdown((prev) => !prev)}
										>
											You have {notifications.length} notification{notifications.length !== 1 ? "s" : ""}
										</div>
										{showDropdown && (
											<div className="absolute bottom-12 right-0 w-64 bg-[#F8F8F8] border-2 border-gray-700 shadow-lg rounded z-50">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-sm border-b-2 border-gray-700">Notifications</div>
												<ul className="py-2 px-2">
													{notifications.length === 0 ? (
														<li className="text-gray-500 px-2 py-1">No notifications</li>
													) : (
														notifications.map((noteObj, idx) => (
															<li
																key={idx}
																className="text-black bg-white border border-gray-300 px-2 py-1 mb-1 rounded shadow-inner font-mono text-xs cursor-pointer hover:bg-gray-200"
																onClick={() => handleNotificationClick(noteObj, idx)}
															>
																{noteObj.short}
															</li>
														))
													)}
												</ul>
											</div>
										)}
									</div>
								</div>

								{/* Notification window */}
										{activeNotification && (
											<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center">
													Notification
													<button
														className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
														onClick={handleCloseNotification}
														aria-label="Close"
													>✖</button>
												</div>
												<div className="p-4 text-black font-mono text-sm bg-white min-h-20 max-h-[260px] overflow-auto wrap-break-word whitespace-pre-line">
													{activeNotification}
												</div>
											</div>
										)}

										{/* Calculator window */}
										{showCalculator && (
											<div className="absolute top-32 left-1/2 -translate-x-1/2 w-[340px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center">
													Finance-Calculator.xlsx
													<button
														className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
														onClick={() => setShowCalculator(false)}
														aria-label="Close"
													>✖</button>
												</div>
												<div className="p-4 bg-white">
													<Calculator />
												</div>
											</div>
										)}

										{/* Evidence image window styled like OS */}
										{showEvidence && (
											<div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center">
													evidence.png
													<button
														className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
														onClick={() => setShowEvidence(false)}
														aria-label="Close"
													>✖</button>
												</div>
												<div className="p-2 bg-white flex items-center justify-center" style={{height: '70vh'}}>
													<img
														src="/photos/evidence.jpg"
														alt="Evidence"
														className="object-contain max-h-full max-w-full rounded shadow-lg border-4 border-gray-700"
													/>
												</div>
											</div>
										)}

										{/* Cult image window styled like OS */}
										{showCult && (
											<div className="absolute top-36 left-1/2 -translate-x-1/2 w-[600px] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center">
													cult.jpg
													<button
														className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
														onClick={() => setShowCult(false)}
														aria-label="Close"
													>✖</button>
												</div>
												<div className="p-2 bg-white flex items-center justify-center" style={{height: '70vh'}}>
													<img
														src="/photos/cult.jpg"
														alt="Cult"
														className="object-contain max-h-full max-w-full rounded shadow-lg border-4 border-gray-700"
													/>
												</div>
											</div>
										)}

										{/* Newspaper window fullscreen except taskbar */}
										{showNewspaper && (
											<div className="fixed top-0 left-0 w-full h-[calc(100vh-2.75rem)] bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50 flex flex-col">
												<div className="bg-[#A0A0A0] text-black py-2 px-4 font-bold text-[1.2rem] border-b-2 border-gray-700 flex justify-between items-center">
													Nottingham Evening Post
													<button
														className="ml-2 px-2 py-0.5 bg-white border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
														onClick={() => setShowNewspaper(false)}
														aria-label="Close"
													>✖</button>
												</div>
												<div className="flex-1 bg-white">
													{/* Newspaper content from newspaper route */}
													<iframe
														src="/newspaper"
														title="Nottingham Evening Post"
														className="w-full h-full border-none bg-white"
													/>
												</div>
											</div>
										)}

										{/* Portal window as a desktop app window */}
										{showPortal && (
											<Portal onClose={() => setShowPortal(false)} />
										)}
			</div>
		);
	}
