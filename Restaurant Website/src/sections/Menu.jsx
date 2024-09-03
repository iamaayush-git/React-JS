import React, { useEffect } from "react";
import menu1 from "../assets/menu1.webp";
import menu2 from "../assets/menu2.webp";
import menu3 from "../assets/menu3.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="bg-slate-700 h-[60vh] flex justify-center items-center">
        <div className="w-full max-w-[95vw] h-full mx-auto flex justify-center items-center gap-6 ">
          <div
            className="relative flex-1 h-[80%] bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${menu1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
          >
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded-tl-lg">
              Menu 1
            </div>
          </div>
          <div
            className="relative flex-1 h-[80%] bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${menu2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded-tl-lg">
              Menu 2
            </div>
          </div>
          <div
            className="relative flex-1 h-[80%] bg-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${menu3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded-tl-lg">
              Menu 3
            </div>
          </div>
        </div>
      </div>
      <section className="bg-slate-700 -m-1 py-5">
     <div className="w-[90vw] mx-auto">
     <h2 data-aos="zoom-in" className="text-5xl font-bold text-white">
          About <span className="text-green-500"> <i>U</i>s</span> 
        </h2>
        <p data-aos="zoom-out" data-aos-delay="100" className="text-white mt-4 text-justify text-sm md:text-xl w-[90%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi earum similique illo quas unde non nam tenetur officiis mollitia?</p>
     </div>
      </section>
    </>
  );
};

export default Menu;
