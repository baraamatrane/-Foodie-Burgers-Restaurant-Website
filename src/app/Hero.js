import Image from "next/image";
import Bangan from "../../public/hero-banner.png";
import BgBangan from "../../public/hero-banner-bg.png";

const Hero = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:justify-around justify-center items-center md:pt-32 pt-28 md:p-0 p-10 z-20">
      <div className="space-y-8 md:block flex-col flex justify-center items-center">
        <h1
          className={`font-bold lg:text-7xl md:text-start text-center md:text-4xl text-2xl text-[#f1d6c6]`}
        >
          Supper delicious <br />
          Burger in town!
        </h1>
        <h3
          className="font-normal text-[#f1d6c6] md:text-start text-center md:text-base text-sm hover:text-[#ff8d29] transition-colors"
          href="#Home"
        >
          Food is any substance consumed to provide nutritional <br /> support
          for an organism.
        </h3>
        <button className="text-white hover:text-black bg-[#ff8d29] hover:bg-white transition-all p-3 w-36 font-semibold md:text-sm text-xs">
          Book A Table
        </button>
      </div>
      <div className="md:block hidden">
        <Image
          src={BgBangan}
          alt="Burger"
          width="400"
          height="400"
          className="absolute right-0 top-32 lg:w-[750px] w-[450px] h-auto z-0"
        />
        <Image
          src={Bangan}
          alt="Burger"
          width="400"
          height="400"
          className="lg:w-[600px] w-96 h-auto relative z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
