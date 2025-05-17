
import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationPath: string | object;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) => {
  return (
    <div className={className}>
      <Lottie
        animationData={typeof animationPath === "string" ? undefined : animationPath}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
};

export default LottieAnimation;
