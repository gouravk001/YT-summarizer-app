"use client";

import Lottie from "react-lottie-player";
import animationData from "@/public/loader.json";

export default function Loader({ size = 120 }) {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        play
        animationData={animationData}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
