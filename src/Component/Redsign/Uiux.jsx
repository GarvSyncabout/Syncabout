import React from "react";
import { Link } from "react-router-dom";
import "../Redsign/uiux.css";

const Uiux = () => {
  const cards = [
    {
      id: "1",
      iconUrl: "/uiuxsection/img1.png",
      title: "Strategic Planning",
      description:
        "Analyze goals, audience, and competition, then outline a strategic plan for website structure, content, and features.",
      bgColor: "#ef7f1b",
    },
    {
      id: "2",
      iconUrl: "/uiuxsection/img2.png",
      title: "Responsive Design",
      description:
        "Make sure your website looks good on different devices. This helps users and improves search rankings.",
      bgColor: "#abe0cd",
    },
    {
      id: "3",
      iconUrl: "/uiuxsection/img3.png",
      title: "Content Creation",
      description:
        "Create engaging content that tells your brand story, using clear messages, visuals, and easy navigation.",
      bgColor: "#fecf5b",
    },
    {
      id: "4",
      iconUrl: "/uiuxsection/img4.png",
      title: "Continuous Optimization",
      description:
        "Keep your website up-to-date and effective by using feedback, analytics, and industry trends.",
      bgColor: "#89aff0",
    },
  ];

  const companyValuesCards = [
    {
      id: "1",
      number: "01",
      title: "Innovation",
      description:
        "Constantly seek and implement new ideas and technologies to stay at the forefront of the industry.",
    },
    {
      id: "2",
      number: "02",
      title: "Customer-Centricity",
      description:
        "Prioritize understanding and meeting the needs of our clients to ensure their success and satisfaction.",
    },
    {
      id: "3",
      number: "03",
      title: "Integrity",
      description:
        "Uphold honesty and transparency in all our dealings, fostering trust with clients, partners, and team members.",
    },
    {
      id: "4",
      number: "04",
      title: "Collaboration",
      description:
        "Embrace teamwork and open communication, recognizing that collaboration enhances creativity and problem-solving.",
    },
    {
      id: "5",
      number: "05",
      title: "Quality Excellence",
      description:
        "Strive for excellence in every aspect of our work, delivering high-quality products and services.",
    },
    {
      id: "6",
      number: "06",
      title: "Adaptability",
      description:
        "Be flexible and adaptive to change, recognizing it as an opportunity for growth and improvement.",
    },
  ];

  return (
    <>
      <section className=" bg-[#091a38] lg:h-[500px]">
        <div className=" py-16 px-4">
          <div className=" grid place-content-center    gap-4 p-5 place-items-start grid-cols-1 md:grid-cols-2">
            <div>
              <span className="font-Rajdhani text-start text-lg font-bold text-[#ef7f1a] leading-[21.6px]">
                Redesign UI/UX
              </span>
              <h3 className="font-Rajdhani text-[43.95px] text-start leading-[52.74px] font-bold text-white">
                Build Your Business with the Right Website Strategy
              </h3>
            </div>
            <div className="gap-4 flex justify-center items-start flex-col">
              <span className="flex items-start  justify-center flex-col font-Pontano text-lg leading-7 font-medium text-white ">
                At Syncabout, we have a comprehensive process for website design
                that ensures we deliver high-quality websites that meet the
                specific needs of our clients. We believe in complete
                transparency with our clients.
              </span>
              <div className="flex justify-start items-start gap-5">
                <Link
                  className="font-Pontano font-bold text-[#091a38] text-base p-2 md:p-4 bg-white  rounded"
                  to={"/"}
                >
                  View Service
                </Link>
                <Link
                  className="font-Pontano font-bold text-white text-base p-2 md:p-4 bg-[#ef7f1a]  rounded"
                  to={"/"}
                >
                  Contact Now
                </Link>
              </div>
            </div>
          </div>
          <div className="translate-y-10 lg:translate-y-24 p-4 place-content-center place-items-center gap-12 grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4">
            {cards.map((card) => {
              return (
                <div
                  key={card.id}
                  className="relative flex justify-start gap-3 min-h-72 self-stretch p-5  items-center  rounded bg-[#fbf2e0] flex-col text-center shadow-md"
                >
                  <img
                    src={card.iconUrl}
                    alt="card Icon"
                    className={`absolute z-50 -top-8 p-1 h-20 rounded-full`}
                    style={{ backgroundColor: card.bgColor }}
                  />
                  <div className="card-content mt-16">
                    <span className="font-Rajdhani text-[1.4rem] leading-7 font-bold text-[#091a38] ">
                      {card.title}
                    </span>
                    <p className="font-Pontano text-lg mt-3 text-pretty leading-7 font-medium text-[#464646]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="  bg-[#fbf9f9] pb-10">
        <div
          id="wrapper"
          className="flex justify-center gap-16 flex-col items-center  pt-60 "
        >
          <div className="inherent-content flex justify-center gap-2 items-center flex-col">
            <span className="text-[#ef7f1a] font-Rajdhani  text-[18px] leading-5 font-bold">
              Inherent Ideals
            </span>
            <h3 className="font-Rajdhani text-[43px] leading-[52px]  font-bold text-[#091a38]">
              Our Company Core Values
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-16 p-5">
            {companyValuesCards.map((cards) => {
              return (
                <div
                  key={cards.id}
                  className="relative flex rounded justify-center items-start gap-2 flex-col border-dashed  border-[#dbdbdb] max-w-80 min-h-72 p-7 border-[2px] hover:border-[#ef7f1a] hover:border-solid "
                >
                  <div className="absolute -top-11 left-4  md:-left-7 px-3 z-50 bg-[#fbf2e0]  rounded-full">
                    <span
                      style={{ WebkitTextStroke: "1px #ef7f1a" }}
                      className="font-Rajdhani text-[54.93px] text-transparent font-bold"
                    >
                      {cards.number}
                    </span>
                  </div>
                  <div className="flex justify-center items-start flex-col gap-2">
                    <span className="text-[#091a38] font-Rajdhani font-bold text-[22px] leading-[27px] ">
                      {cards.title}
                    </span>
                    <p className="font-Pontano text-lg leading-[30px] font-medium text-gray-700">
                      {cards.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Uiux;
