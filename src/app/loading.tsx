"use client";
import React from "react";
import infiniteAnimation from "./_components/lottie/infinite-loader.json";
import { useLottie } from "lottie-react";
const LoadingPage = () => {
  const { View } = useLottie({
    animationData: infiniteAnimation,
    loop: true,
  });
  return (
    <div className="flex items-center justify-center h-[100dvh] w-full">
      {View}
      loading...
    </div>
  );
};

export default LoadingPage;
