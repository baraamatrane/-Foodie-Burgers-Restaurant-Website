"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [Search, setSearch] = useState(false);
  const [Menu, setMenu] = useState(false);
  const [Scroll, setScroll] = useState(false);
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if the click is outside the referenced div
    if (divRef.current && event.target.classList[0] !== "bg-transparent") {
      setSearch(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <>
        <motion.div
          ref={divRef}
          initial={
            Search
              ? { height: 0, opacity: 0 }
              : { height: "100%", opacity: 0.9 }
          }
          animate={
            Search
              ? { height: "100%", opacity: 0.9 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 1.5, type: "spring" }}
          className={`fixed bg-black z-50 w-full top-0 left-0 ${
            Search ? "flex Search" : "hidden"
          }  justify-center items-center gap-8`}
          style={{
            transition: "transform 0.3s ease",
          }}
          onClick={(e) => handleClickOutside(e)}
        >
          <div className="flex border-b-2 border-[#f1d6c6] p-1 md:w-auto w-10/12 justify-between">
            <input
              type="text"
              className="bg-transparent focus:focu p-2 placeholder:text-gray-400 md:text-3xl text-xl text-white border-none outline-none w-full"
              placeholder="Search..."
              onLoad={(e) => e.view.focus()}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-auto text-[#f1d6c6] cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
        <div
          className={` flex ${
            Scroll
              ? "fixed bg-white shadow-lg"
              : "absolute top-0 left-0 border-b-[1px] border-[#f1d6c633] space-y-2"
          } md:flex-row w-full transition-all h-20 flex-col md:p-0 p-6 z-40 overflow-hidden`}
        >
          <div className="w-full flex items-center md:justify-around justify-between">
            {" "}
            <h1
              className={`font-bold md:text-2xl text-xl ${
                Scroll ? "text-black" : "text-white"
              }`}
            >
              Foodie<span className="text-[#ff9d2e]">.</span>
            </h1>
            <div className="flex items-center md:gap-5 gap-3">
              <div
                className={`md:flex hidden items-center ${
                  Scroll ? "text-black" : "text-[#f1d6c6]"
                } gap-5`}
              >
                <a
                  className={`font-medium ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } text-base hover:text-[#ff8d29] transition-colors`}
                  href="#Home"
                >
                  Home
                </a>
                <a
                  className={`font-medium ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } text-base hover:text-[#ff8d29] transition-colors`}
                  href="#Home"
                >
                  About Us
                </a>
                <a
                  className={`font-medium ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } text-base hover:text-[#ff8d29] transition-colors`}
                  href="#Home"
                >
                  Shop
                </a>
                <a
                  className={`font-medium ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } text-base hover:text-[#ff8d29] transition-colors`}
                  href="#Home"
                >
                  Blog
                </a>
                <a
                  className={`font-medium ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } text-base hover:text-[#ff8d29] transition-colors`}
                  href="#Home"
                >
                  Contact Us
                </a>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => {
                  setSearch(true);
                }}
                fill="currentColor"
                className={`w-6 h-auto ${
                  Scroll ? "text-black" : "text-[#f1d6c6]"
                } cursor-pointer`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <button className="text-white bg-[#ff8d29] p-3 font-semibold md:text-sm text-[10px] text-center md:w-36 w-20 relative group overflow-hidden z-10">
                Reservation
                <div className="bg-black w-0 h-0 -z-10 rounded-full absolute transition-all group-hover:h-72 group-hover:w-80 top-1 left-1 transform -translate-x-1/2 -translate-y-1/2"></div>
              </button>
              {Menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => setMenu((prev) => !prev)}
                  className={`w-6 h-auto md:hidden ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } cursor-pointer`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-auto md:hidden ${
                    Scroll ? "text-black" : "text-[#f1d6c6]"
                  } cursor-pointer`}
                  onClick={() => setMenu((prev) => !prev)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div
          className={`bg-white fixed z-40 w-11/12 ml-4 shadow-md ${
            Menu ? "h-56" : "h-0"
          } overflow-hidden rounded-sm top-20 transition-all md:hidden`}
        >
          <div
            className={`md:hidden flex flex-col items-start gap-5 p-4 transition-all`}
          >
            <a
              className="font-medium text-black text-base hover:text-[#ff8d29] transition-colors"
              href="#Home"
            >
              Home
            </a>
            <a
              className="font-medium text-black text-base hover:text-[#ff8d29] transition-colors"
              href="#Home"
            >
              About Us
            </a>
            <a
              className="font-medium text-black text-base hover:text-[#ff8d29] transition-colors"
              href="#Home"
            >
              Shop
            </a>
            <a
              className="font-medium text-black text-base hover:text-[#ff8d29] transition-colors"
              href="#Home"
            >
              Blog
            </a>
            <a
              className="font-medium text-black text-base hover:text-[#ff8d29] transition-colors"
              href="#Home"
            >
              Contact Us
            </a>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
