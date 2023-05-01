import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element";
import TextTransition, { presets } from "react-text-transition";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroContainer = () => {
  register();
  const TEXT = ["Click", "Try", "Upload", "UShare"];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative">
      <div
        className="w-full h-full z-10 absolute top-0 left-0"
        style={{
          backgroundImage: "linear-gradient(45deg, #a1a1a1ad, #00000096)",
        }}
      ></div>
      <Swiper
        loop={true}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={3000}
        effect="fade"
        className="z-0"
      >
        <SwiperSlide>
          <img
            src="/images/slider1.jpg"
            alt="slider-img"
            style={{ height: "100vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider2.jpg"
            alt="slider-img"
            style={{ height: "100vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider3.jpg"
            alt="slider-img"
            style={{ height: "100vh" }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-3 absolute top-1/2 z-20 right-0 mx-6 text-6xl text-teal-400 font-bold">
        Let's{" "}
        <span className="text-slate-300">
          <TextTransition>{TEXT[index % TEXT.length]}</TextTransition>
        </span>
      </div>
    </div>
  );
};

export default HeroContainer;
