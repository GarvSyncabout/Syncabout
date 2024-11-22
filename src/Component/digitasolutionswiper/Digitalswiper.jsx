import React from "react";
import "../digitasolutionswiper/digitalswiper.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../digitasolutionswiper/digitalswiper.css";

const Digitalswiper = () => {
  const slideImage = [
    {
      id: "1",
      src: "/digitalswiper/slide3.png",
    },
    {
      id: "2",
      src: "/digitalswiper/slide4.png",
    },
    {
      id: "3",
      src: "/digitalswiper/slide5.webp",
    },
    {
      id: "4",
      src: "/digitalswiper/slide6.webp",
    },
    {
      id: "5",
      src: "/digitalswiper/slide7.png",
    },
    {
      id: "6",
      src: "/digitalswiper/slide8.png",
    },
    {
      id: "7",
      src: "/digitalswiper/slide9.png",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mt-6 ">
      <Slider {...settings} className="p-5">
        {slideImage.map((image) => {
          return <img src={image.src} alt="Image Slider" key={image.id} />;
        })}
      </Slider>
    </div>
  );
};

export default Digitalswiper;
