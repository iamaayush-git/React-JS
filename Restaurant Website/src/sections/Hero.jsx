import React, { useEffect } from "react";
import banner from "../assets/herobanner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: "ease-in-slide",
      delay: 100,
    });
  }, []);

  return (
    <div
      className="w-screen bg-cover bg-center py-10 px-10 min-h-[70vh]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div data-aos="slide-right" className="">
        <div className="h-40 w-40 md:h-44 md:w-44 rounded-full bg-green-500 flex justify-center items-center flex-col text-xl font-semibold text-left">
          <h2 className="font-bold text-4xl">40%</h2>
          <h2>
            Business <br /> Lunch
          </h2>
        </div>
        <div></div>
      </div>
      <div
        data-aos="zoom-in-up"
        className="mt-10 text-white font-bold flex flex-col justify-center gap-8 items-start"
      >
        <h3 className="text-xl md:text-2xl font-semibold">New Restaurant</h3>
        <h3 className="text-2xl md:text-3xl">
          Where every ingrediant <br /> tells a story
        </h3>
        <button className="bg-orange-500 px-5 py-2 rounded-md">Read ME</button>
      </div>
    </div>
  );
};

export default Hero;
