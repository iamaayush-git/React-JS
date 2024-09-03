import React from "react";
import Header from "./sections/Header";
import Menu from "./sections/Menu";
import Items from "./sections/Items";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden w-screen">
      <Header />
      <Hero />
      <Menu />
      <Items />
      <Banner />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default App;
