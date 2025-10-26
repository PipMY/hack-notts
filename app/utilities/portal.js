"use client";
import { useState } from "react";

export default function Portal({ onClose }) {
    // Almost fullscreen, with margin, not covering taskbar
    return (
        <div className="fixed top-6 left-6 right-6 bottom-16 bg-[#F8F8F8] border-2 border-gray-700 shadow-[4px_4px_0_#888] z-50 flex flex-col" style={{maxWidth: 'calc(100vw - 3rem)', maxHeight: 'calc(100vh - 5rem)'}}>
            {/* Title bar */}
            <div className="bg-[#22223B] text-white py-2 px-4 font-bold text-[1rem] border-b-2 border-gray-700 flex justify-between items-center shadow">
                Portal.exe - Web Explorer 2000
                <button
                    className="ml-2 px-2 py-0.5 bg-white text-black border border-gray-700 rounded cursor-pointer hover:bg-gray-300"
                    onClick={onClose}
                    aria-label="Close"
                >✖</button>
            </div>
            {/* Browser navigation bar */}
            <div className="bg-[#22223B] border-b border-gray-300 flex items-center px-2 py-1">
                <button className="px-2 py-1 bg-[#4A90E2] text-white border border-[#003366] rounded text-xs font-mono mr-2 hover:bg-[#357ABD]" style={{minWidth: 60}}>◀ Back</button>
                <button className="px-2 py-1 bg-[#4A90E2] text-white border border-[#003366] rounded text-xs font-mono mr-2 hover:bg-[#357ABD]" style={{minWidth: 60}}>Forward ▶</button>
                <span className="bg-[#393A6B] text-white border border-gray-400 px-2 py-1 rounded text-xs font-mono mr-2 flex-1">http://portal.exe/home</span>
                <button className="px-2 py-1 bg-blue-600 text-white border border-blue-800 rounded text-xs font-mono hover:bg-blue-700 mr-2" style={{minWidth: 60}}>Go</button>
                <button
                    className="px-2 py-1 bg-[#FFD700] text-[#22223B] border border-[#B8860B] rounded text-xs font-mono hover:bg-[#FFEA70] mr-2 font-bold"
                    style={{cursor: 'pointer', minWidth: 90}}
                    onClick={() => window.location.href = '/cultnews'}
                >★ FAVOURITES</button>
            </div>
            {/* Browser content */}
            <div className="bg-white flex-1 flex flex-col">
                <div className="p-4 text-black font-mono text-base flex-1 overflow-auto wrap-break-word whitespace-pre-line">
                    <b>Web Explorer 2000 - Home</b>
                    <br /><br />
                    <span className="text-gray-700">This is your retro browser window. It looks and feels like a classic Windows ME browser!</span>
                    <ul className="list-disc ml-4 mt-4">
                        <li>Navigation bar with Back, Forward, Go, and Favourites</li>
                        <li>Favourites button takes you to cultnews</li>
                        <li>Classic address bar and blue Go button</li>
                        <li>Enjoy the nostalgia!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
