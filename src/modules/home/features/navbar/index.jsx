import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  containerVars,
  menuVars,
  mobileLinkVars,
} from "../../../../utils/motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const nav = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Hair Guide" },
    { title: "For You" },
    { title: "Contact Us" },
  ];
  return (
    <div className="fixed z-[20] w-full ">
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
          <HiMenuAlt4 onClick={toggleMenu} className="text-[30px] text-black" />
        </div>
      </div>
      <div>
        {" "}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-[10000000] left-0 top-0 h-screen w-full origin-top bg-[#F1CEDD] text-black py-[7%] px-[5%] "
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Link href="/">
                    {" "}
                    <div>
                      <img className="w-[70px]" src="/logo.png" />
                    </div>
                  </Link>
                  <p className="text-md cursor-pointer " onClick={toggleMenu}>
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex h-full flex-col items-center justify-center gap-4"
                >
                  {nav.map((item) => (
                    <div>
                      <MobileNavLink title={item.title} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
const MobileNavLink = ({ title, href, onClick }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-black"
    >
      <Link href={href} onClick={onClick}>
        {title}
      </Link>
    </motion.div>
  );
};
