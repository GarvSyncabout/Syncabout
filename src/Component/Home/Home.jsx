import React from "react";
import { Link } from "react-router-dom";
import LottieExample from "../aboutusanimation-image/LottieExample";
import OurServices from "../Our Services/OurServices";

const Home = () => {
  return (
    <section>
      <div className="grid place-content-center gap-1 place-items-center px-5  grid-cols-1 md:grid-cols-2 ">
        <div className="flex justify-center items-start flex-col gap-4">
          <span className="text-[#ef7f1a] text-xl  font-normal font-Pontano">
            Wellcome To Syncabout
          </span>
          <h1 className="font-Rajdhani font-bold text-[54px] leading-[65.916px] text-[#091a38]">
            Your Trusted Partner for Web design &<br /> Development Services
          </h1>
          <h4 className="font-Pontano text-xl font-light leading-[36px]">
            Grow Your Brand Online Through Expert Web Design and Development
            Services. Your Success, Our Priority.
          </h4>
          <Link
            className="font-Pontano text-base font-bold text-white hover:bg-[#ef7f1a]  bg-[#091a38] p-4 rounded"
            to={"/"}
          >
            Our Services
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <LottieExample />
        </div>
      </div>
      <OurServices />
    </section>
  );
};

export default Home;
