"use client";
import Image from "next/image";
import Boy from "../../public/delivery-boy.svg";
import Banner from "../../public/delivery-banner-bg.png";
import { useEffect, useState } from "react";
const Delevery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > prevScrollPosition) {
      setScrollDirection(20);
    } else if (currentPosition < prevScrollPosition) {
      setScrollDirection(-20);
    }
    setPrevScrollPosition(currentPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative flex md:flex-row flex-col justify-center items-center md:p-20 p-4 md:gap-0 md:w-auto md:mb-0 mb-8 gap-6">
      <div className="flex flex-col md:items-start items-center space-y-4 md:w-[44%] w-10/12">
        <h1 className="text-2xl md:text-5xl font-semibold text-black">
          A Moments Of Delivered On{" "}
          <span className="text-[#ff9d2e]"> Right Time</span> & Place
        </h1>
        <p className="text-xs md:text-base text-[#9a9a9a] text-start w-full">
          The restaurants in Hangzhou also catered to many northern Chinese who
          had fled south from Kaifeng during the Jurchen invasion of the 1120s,
          while it is also known that many restaurants were run by families.
        </p>
        <button className="relative z-10 w-32 p-3 text-sm font-semibold text-center text-white bg-[#ff8d29] group overflow-hidden">
          Order Now
          <div className="absolute top-1 left-1 w-0 h-0 bg-black rounded-full transition-all -z-10 transform group-hover:h-72 group-hover:w-80 -translate-x-1/2 -translate-y-1/2"></div>
        </button>
      </div>
      <div className="relative z-10">
        <Image
          src={Boy}
          alt="About"
          width={500}
          height={600}
          className={`md:w-[600px] w-[550px] h-auto z-10 relative -translate-x-8`}
        />
        <Image
          src={Banner}
          alt="Shape"
          width={400}
          height={400}
          className="absolute top-10 md:w-[560px] w-80 h-auto z-0"
        />
      </div>
      <div
        className="absolute md:bottom-0 -bottom-10 left-0 w-full h-6 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url("/shape-grey.png")`,
        }}
      ></div>
    </div>
  );
};

export default Delevery;
