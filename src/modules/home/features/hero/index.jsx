import React from "react";
import Navbar from "../navbar";
import Slider from "../slider";
import Banner from "../banner";

export default function Hero() {
  return (
    <div className="relative w-full sm:h-[130vh] overflow-x-hidden">
      <Navbar />
      <Slider />
      {/* <Banner/> */}
    </div>
  );
}
