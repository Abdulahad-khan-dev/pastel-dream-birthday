import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music2 } from "lucide-react";

export default function MusicButton() {
  const audioRef = useRef(null);

  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/birthday.mp3");

    audio.loop = true;
    audio.volume = 0.45;

    audioRef.current = audio;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    startMusic();

    const startAfterClick = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }

      window.removeEventListener("click", startAfterClick);
    };

    window.addEventListener("click", startAfterClick);

    return () => {
      window.removeEventListener("click", startAfterClick);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);

      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  return (
    <button
      className={`music-button ${isPlaying ? "music-playing" : ""}`}
      onClick={toggleMusic}
      type="button"
    >
      <Music2 size={17} />

      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}

      <span className="music-text">
        {isMuted ? "Music Off" : "Music On"}
      </span>
    </button>
  );
}