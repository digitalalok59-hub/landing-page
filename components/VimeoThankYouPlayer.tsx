"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const VIMEO_PLAYER_ORIGIN = "https://player.vimeo.com";
const VIMEO_SRC =
  "https://player.vimeo.com/video/1199524310?controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&player_id=thank-you-vimeo";

export default function VimeoThankYouPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lastPlayAtRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPause, setShowPause] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== VIMEO_PLAYER_ORIGIN) return;

      let data: { event?: string } | null = null;

      if (typeof event.data === "string") {
        try {
          data = JSON.parse(event.data);
        } catch {
          return;
        }
      } else if (typeof event.data === "object" && event.data !== null) {
        data = event.data as { event?: string };
      }

      if (data?.event === "play") {
        setIsPlaying(true);
        setShowPause(false);
      }

      if (data?.event === "pause" || data?.event === "ended") {
        setIsPlaying(false);
        setShowPause(false);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  function sendVimeoCommand(method: "play" | "pause") {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method }),
      VIMEO_PLAYER_ORIGIN
    );
  }

  function handlePlay() {
    lastPlayAtRef.current = Date.now();
    sendVimeoCommand("play");
    setIsPlaying(true);
    setShowPause(false);
  }

  function handlePause() {
    sendVimeoCommand("pause");
    setIsPlaying(false);
    setShowPause(false);
  }

  return (
    <div
      className="group relative mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-brand-line bg-black shadow-soft"
      onMouseMove={() => {
        if (isPlaying && Date.now() - lastPlayAtRef.current > 700) {
          setShowPause(true);
        }
      }}
      onMouseLeave={() => {
        if (isPlaying) setShowPause(false);
      }}
      onFocus={() => {
        if (isPlaying) setShowPause(true);
      }}
      onBlur={() => {
        if (isPlaying) setShowPause(false);
      }}
    >
      <iframe
        ref={iframeRef}
        id="thank-you-vimeo"
        src={VIMEO_SRC}
        title="Digital marketing consultation next steps"
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />

      {!isPlaying ? (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/55"
          aria-label="Play video"
        >
          <Play className="ml-1" size={34} fill="currentColor" aria-hidden="true" />
        </button>
      ) : null}

      {isPlaying && showPause ? (
        <button
          type="button"
          onClick={handlePause}
          className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-blue shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/55"
          aria-label="Pause video"
        >
          <Pause size={28} fill="currentColor" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
