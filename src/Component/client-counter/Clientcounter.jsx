import React from "react";
import CountUp from "react-countup";
import "../client-counter/counter.css";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const Clientcounter = () => {
  const counterData = [
    { id: "1", title: "Active Clients", total: 18 },
    { id: "2", title: "Years Experience", total: 5 },
    { id: "3", title: "Projects Completed", total: 150 },
    { id: "4", title: "Team Advisors", total: 20 },
  ];
  return (
    <section>
      <div id="wrapper" className="grid md:grid-cols-2 bg-[#091a38]">
        <div className="grid grid-cols-2 grid-rows-2 ">
          {counterData.map((cards) => {
            return (
              <div
                className="counterGrid flex justify-center  gap-2 items-center flex-col"
                key={cards.id}
              >
                <div className="counter">
                  <CountUp
                    end={cards.total}
                    className="font-Rajdhani text-[54px]  text-center leading-[65px] font-bold text-white"
                  />
                </div>
                <span className="font-Rajdhani text-center text-lg leading-[21px] font-bold text-[#ef7f1a]">
                  {cards.title}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <img
            src="./counterImage.jpg"
            className="rounded"
            alt="counter section image"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 place-content-center gap-2 px-5 py-12 place-items-center">
        <div className="flex justify-between items-center text-start gap-3  ">
          <div className="bg-[#fecf5b] rounded-full p-5">
            <FaPaperPlane size={20} color="white" />
          </div>
          <h3 className="font-Rajdhani text-start text-balance text-2xl leading-[33px] font-bold text-[#091a38]">
            Syncabout Solutions - A Name You Can Trust Blindly
          </h3>
        </div>
        <div className="flex justify-center text-start items-start flex-col col-span-2 ">
          <p className=" text-start leading-[36px] font-normal font-Pontano text-xl text-[#464646]">
            Where trust meets reliability. Trust us for incredible digital
            excellence.
          </p>
          <p className=" text-start leading-[36px] font-normal font-Pontano text-xl text-[#464646]">
            Our commitment to quality and innovation makes us your steadfast
            partner on the journey to success.
          </p>
        </div>
        <div>
          <Link className="bg-[#091a38] text-white font-bold font-Pontano text-base leading-[28px] rounded p-4 hover:bg-[#ef7f1a]">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clientcounter;
