"use client";

import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { useAudio } from "./AudioProvider";

export function CustomAudioPlayer() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <div className="flex flex-col items-center justify-center p-4 text-white w-full">
      <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg mb-3">
        <FaMusic
          className={`text-2xl text-white ${isPlaying ? "animate-bounce" : ""}`}
        />
      </div>

      <div className="text-center mb-4">
        <h4 className="text-sm font-semibold truncate max-w-[150px]">
          My Music
        </h4>
        <p className="text-xs text-neutral-400">Audio Player</p>
      </div>

      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full hover:scale-105 transition active:scale-95 shadow-md"
      >
        {isPlaying ? (
          <FaPause className="text-sm" />
        ) : (
          <FaPlay className="text-sm ml-0.5" />
        )}
      </button>
    </div>
  );
}
