import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <div className=" w-full bg-[#000000] h-[5vh] text-center text-white text-xs flex justify-center items-center text-semibold">
        <h6>
          ALL APPOINTMENTS CAN BE RESCHEDULED ONLY ONCE! WITH YOUR NON-REFUNDABLE DEPOSIT 
        </h6>
      </div>
      <div className="flex justify-between items-center w-full h-[10vh] px-[5%] bg-[#F1CEDD]">
        <div>
          <img className="w-[100px]" src="/logo.png" />
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
      </div>
    </div>
  );
}
