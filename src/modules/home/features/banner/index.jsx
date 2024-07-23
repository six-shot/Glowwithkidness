import React from 'react'

export default function Banner() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-6 px-[5%] mt-[500px] ">
      <div className="col-span-1">
        <div className="bg-[#F1CEDD] py-[12%] w-full px-[10%] flex justify-center items-center flex-col">
          <h5 className="uppercase">Book appointment</h5>
          <p className="py-[2%]">
            You may check our gallery for great styles or click to schedule an
            appointment with us
          </p>
          <button className="bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5 mt-5">
            Book Now
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-[#F1CEDD] py-[12%] w-full px-[10%] flex justify-center items-center flex-col">
          <h5 className="uppercase">Book appointment</h5>
          <p className="py-[2%]">
            You may check our gallery for great styles or click to schedule an
            appointment with us
          </p>
          <button className=" bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5 mt-5">
            Book Now
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-[#F1CEDD] py-[12%] w-full px-[10%] flex justify-center items-center flex-col">
          <h5 className="uppercase">Book appointment</h5>
          <p className="py-[2%]">
            You may check our gallery for great styles or click to schedule an
            appointment with us
          </p>
          <button className=" bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5 mt-5">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
