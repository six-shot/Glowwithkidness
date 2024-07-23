import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
export default function Navbar() {
  return (
    <div className="">
      <div className=" px-[5%] w-full bg-[#000000] h-[5vh] text-center text-white text-xs flex justify-center items-center text-semibold">
        <h6 className="sm:text-base text-xs">
          ALL APPOINTMENTS CAN BE RESCHEDULED ONLY ONCE! WITH YOUR
          NON-REFUNDABLE DEPOSIT
        </h6>
      </div>
      <div className="flex justify-between items-center w-full sm:h-[10vh] h-[8vh] px-[5%] bg-[#F1CEDD]">
        <div>
          <img className="sm:w-[100px] w-[70px]" src="/logo.png" />
        </div>
        <nav>
          <ul className="sm:flex hidden gap-7 items-center  text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Hair Guide</li>
            <li>For You</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <button className="sm:flex hidden bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5">
          Book Now
        </button>
        <div className="sm:hidden flex">
          <HiMenuAlt4  className="text-[30px] text-black" />
        </div>
      </div>
    </div>
  );
}
