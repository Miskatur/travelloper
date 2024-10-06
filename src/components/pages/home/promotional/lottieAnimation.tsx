import React from "react";
import Lottie from "react-lottie";
import thinkingLottie from "../../../../../public/lottie/thinking.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: thinkingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={200} width={400} />
    </div>
  );
};

export default LottieAnimation;
