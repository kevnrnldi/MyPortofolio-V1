"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto play saat komponen pertama kali dipasang (jika diizinkan browser)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay diblokir browser sebelum ada interaksi pengguna
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {/* Tag Audio dipasang di sini agar TIDAK MATI saat popup silang diklik */}
      <audio
        ref={audioRef}
        src="/myMusic.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio harus digunakan di dalam AudioProvider");
  }
  return context;
};
