import React from "react";
import { Link } from "react-router-dom";

const Digitalsolution = () => {
  return (
    <section>
      <div className="gap-3 p-5 grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src="./digitalsolutions.jpg" className="rounded" />
        </div>
        <div className="flex justify-center items-start text-start flex-col gap-3">
          <span className="font-Rajdhani text-lg font-bold text-[#ef7f1a] leading-[21.6px]">
            Digital Solutions
          </span>
          <h3 className="font-Rajdhani text-[43.95px] leading-[52.74px] font-bold text-[#091a38]">
            Let’s Design, Develop & Launch Your brand Online Together
          </h3>
          <p className="font-Pontano text-[17px] leading-[30px] font-medium text-[#091a38]">
            At Syncabout Solutions, we specialize in comprehensive web design
            and development services. Join us as we design, develop, and launch
            your brand online, creating a digital footprint that stands out.
            Let’s embark on this exciting journey together.
          </p>
          <p className="font-Pontano text-[17px] leading-[30px] font-medium text-[#091a38]">
            With a dedicated team of professionals, We bring your vision to
            life, ensuring not just a website but digital But a digital
            experience that engages and converts. Enhance Your Online Presence
            with Syncabout – Where innovation meets design.
          </p>
          <Link
            className="font-Pontano font-bold text-white text-base p-2 md:p-4 bg-[#091a38] hover:bg-[#ef7f1a] rounded"
            to={"/"}
          >
            Let’s Discuss Your Idea
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Digitalsolution;
