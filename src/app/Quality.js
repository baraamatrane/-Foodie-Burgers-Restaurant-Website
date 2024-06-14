import Image from "next/image";
import Shape from "../../public/sale-shape.png";
import Banner from "../../public/cta-banner.png";

const Quality = () => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/hero-bg.jpg")`,
      }}
    >
      <div className="relative w-full flex md:flex-row flex-col justify-center items-center pt-10">
        <div
          className="absolute top-0 left-0 w-full h-5 bg-cover bg-top bg-no-repeat rotate-180"
          style={{
            backgroundImage: `url("/shape-grey.png")`,
          }}
        ></div>
        <div className="flex flex-col md:items-start items-center md:w-[44%] w-10/12 space-y-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            The Foodie Have Excellent Of
            <span className="text-[#ff9d2e]"> Quality Burgers!</span>
          </h1>
          <p className="text-xs md:text-base text-[#dedede] text-start w-full">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>
          <button className="relative z-10 w-32 p-3 text-sm font-semibold text-center text-white bg-[#ff8d29] group overflow-hidden">
            Order Now
            <div className="absolute top-1 left-1 w-0 h-0 bg-black rounded-full transition-all -z-10 transform group-hover:h-72 group-hover:w-80 -translate-x-1/2 -translate-y-1/2"></div>
          </button>
        </div>
        <div className="relative">
          <Image
            src={Shape}
            alt="Shape"
            layout="intrinsic"
            width={400}
            height={400}
            className="absolute left-12 lg:top-16 md:w-56 w-36 animate-pulse"
          />
          <Image
            src={Banner}
            alt="About"
            layout="intrinsic"
            width="500"
            height="600"
            className="md:w-[800px] w-[650px] h-auto"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-6 bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url("/shape-white.png")`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Quality;
