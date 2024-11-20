import React from "react";
import Animation from "./Animation.json";
import Lottie from "lottie-react";

const style = {
  height: 450,
  width: "auto",
};
const LottieExample = () => {
  return (
    <div>
      <Lottie style={style} animationData={Animation} />
    </div>
  );
};

export default LottieExample;
 