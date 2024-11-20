import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const OurServices = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Your website has to impress your visitors within just a few seconds at Syncabout.",
      iconColor: "#ea7414",
    },
    {
      title: "Software Development",
      description:
        "We help our partners accelerate disruption both within their organization and industries.",
      iconColor: "#ade0cd",
    },
    {
      title: "Mobile App Development",
      description:
        "We develop ideas into mobile applications that make someone's business easier.",
      iconColor: "#fecf5c",
    },
    {
      title: "Custom ERP Development",
      description:
        "Syncabout excels in end-to-end ERP development and dedicated support.",
      iconColor: "#fecf5c",
    },
    {
      title: "SEO Services",
      description:
        " Unlock increased website traffic, attract more customers, and elevate online visibility with our powerful SEO services.",
      iconColor: "#ea7414",
    },
    {
      title: "Social Media Marketing",
      description:
        "Social marketing is useful when it used with the right method and algorithm.",
      iconColor: "#ade0cd",
    },
    {
      title: "AWS",
      description:
        "In addition to offering a robust set of AWS services, our IT company specializes in guiding clients through every phase of their cloud journey.",
      iconColor: "#fecf5c",
    },
  ];

  const video =
    "https://syncaboutsolutions.com/wp-content/uploads/2024/04/Sync_Video.mp4";

  return (
    <section className="bg-[#091a38] h-auto py-9">
      <div className=" flex justify-center items-center flex-col gap-7">
        <div className="mb-20 grid grid-cols-1  md:grid-cols-4 place-items-center p-4 gap-2 place-content-between text-center">
          <div className="flex items-start justify-center flex-col">
            <h3 className="font-Rajdhani text-lg leading-5 text-[#ef7f1a] font-bold">
              Innovative Custom Solutions
            </h3>
            <h1 className="text-[43.95px] leading-[52.74px] font-Rajdhani font-bold text-white">
              Our Services
            </h1>
          </div>
          <div className="col-span-2">
            <span className="flex items-start justify-center flex-col font-Pontano text-xl leading-9 font-normal text-white ">
              Custom Solutions to Meet Your Unique Requirements to enhance your
              business. Explore Our Customized Services for a Seamless
              Experience.
            </span>
          </div>
          <div className="p-4">
            <Link
              className="font-Pontano font-bold text-white text-base p-2 md:p-4 bg-[#ef7f1a] rounded"
              to={"/"}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className=" mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  content-center place-content-center w-full place-items-center text-center gap-5">
          {cards.map((card, index) => {
            return (
              <div
                className="bg-white rounded hover:bg-[#f9f2e4] hover:translate-y-[-10px] hover:ease-in-out duration-500  shadow-sm p-4 h-[280px] gap-3 flex justify-center items-center flex-col w-[310px]"
                key={index}
              >
                <FaCircleArrowRight
                  size={"32px"}
                  cursor={"pointer"}
                  color={card.iconColor}
                />
                <h2 className="font-Rajdhani text-[22.5px]  leading-7 text-[#091a38] font-bold">
                  {card.title}
                </h2>
                <p className="text-lg leading-[30.6px] font-Pontano font-medium text-[##464646] ">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#fbf2e0]  p-5  md:px-32 py-10 flex justify-center items-center">
          <video
            src={video}
            className=" w-auto   md:w-[800px]  "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            controls="controls"
            autoplay="true"
            loop="true"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
