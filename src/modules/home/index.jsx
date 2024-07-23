import React from "react";
import Hero from "./features/hero";
import Footer from "./features/footer";
import Banner from "./features/banner";
import About from "./features/about us";
import Slider from "./features/slider";



export default function Home() {
  return (
    <div>
      <Hero />
   <Banner/>
      <About />
      {/* <Footer/>
       */}
    </div>
  );
}
