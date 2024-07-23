import React from "react";
import Hero from "./features/hero";
import Footer from "./features/footer";
import Banner from "./features/banner";
import About from "./features/about us";
import { FaCalendarDays } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Banner />
      <About />
      {/* <Footer/>
       */}
      <div className="fixed bottom-[8%] py-3 px-5 rounded-[50px] right-[2%] bg-[#F1CEDD] font-semibold flex gap-2 items-center">
        <FaCalendarDays />
        <h5> Book an Appointment</h5>
      </div>
    </div>
  );
}
