"use client";

import React, { useState, useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import video from '../../../public/video/edit.mp4';

const Info = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full  bg-gray-800 z-[10]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
  onClick={toggleMute}
  className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200 text-white"
  aria-label={isMuted ? "Unmute video" : "Mute video"}
>
  {isMuted ? (
    <MicOff className="h-[10px] w-[10px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]" />
  ) : (
    <Mic className="h-[10px] w-[10px] md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]" />
  )}
</button>
    </div>
  );
};

export default Info;