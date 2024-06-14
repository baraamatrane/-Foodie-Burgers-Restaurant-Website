import Image from "next/image";
import BG1 from "../../public/banner-1.jpg";
import BG2 from "../../public/banner-2.jpg";
import BG3 from "../../public/banner-1.jpg";
import BG4 from "../../public/banner-4.jpg";

const Images = () => {
  return (
    <div className="relative w-full lg:p-32 p-4 lg:h-[700px] flex lg:flex-row flex-col justify-center gap-2">
      <div className="relative lg:w-1/2 w-full shadow-md lg:h-full group overflow-hidden h-96">
        <div className="absolute top-1/4 right-5 left-5 z-10 space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            50% Off Now! <br /> Discount For Delicious <br /> Tasty Burgers!
          </h1>
          <p className="text-xs md:text-base text-white text-start w-full">
            Sale off 50% only this week
          </p>
          <button
            className="w-32 p-3 text-sm font-semibold text-center text-white hover:bg-black bg-[#ff8d29]"
            style={{ transition: "all .5s" }}
          >
            Order Now
          </button>
        </div>
        <Image
          src={BG1}
          alt="bg"
          width="400"
          height="400"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
      </div>
      <div className="lg:w-1/2 w-full h-full space-y-2 flex flex-col">
        <div className="flex lg:flex-row flex-col w-full lg:h-[45%] gap-2">
          <div className="relative lg:w-1/2 w-full lg:h-auto h-52 shadow-md group overflow-hidden">
            <div className="absolute top-1/4 right-5 left-5 z-10 space-y-2">
              <h1 className="text-2xl md:text-4xl font-semibold text-white">
                Delicious Pizza{" "}
              </h1>
              <p className="text-xs md:text-base text-white text-start w-full">
                Sale off 50% only this week
              </p>
              <button
                className="w-32 p-3 text-sm font-semibold text-center text-white hover:bg-black bg-[#ff8d29]"
                style={{ transition: "all .5s" }}
              >
                Order Now
              </button>
            </div>
            <Image
              src={BG2}
              alt="bg"
              width="400"
              height="400"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          <div className="relative lg:w-1/2 w-full lg:h-auto h-52 shadow-md group overflow-hidden">
            <div className="absolute lg:top-5 top-1/4 right-5 left-5 z-10 space-y-2">
              <h1 className="text-2xl md:text-4xl font-semibold text-white">
                American Burgers
              </h1>
              <p className="text-xs md:text-base text-white text-start w-full">
                Sale off 50% only this week
              </p>
              <button
                className="w-32 p-3 text-sm font-semibold text-center text-white hover:bg-black bg-[#ff8d29]"
                style={{ transition: "all .5s" }}
              >
                Order Now
              </button>
            </div>
            <Image
              src={BG3}
              alt="bg"
              width="400"
              height="400"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
        <div className="relative w-full lg:h-[53%] h-64 shadow-md group overflow-hidden">
          <div className="absolute lg:top-10 top-1/4 lg:-right-8 right-1 lg:w-1/2 z-10 space-y-2">
            <h1 className="text-2xl md:text-4xl font-semibold text-white">
              Tasty Buzzed Pizza
            </h1>
            <p className="text-xs md:text-base text-white text-start w-full">
              Sale off 50% only this week
            </p>
            <button
              className="w-32 p-3 text-sm font-semibold text-center text-white hover:bg-black bg-[#ff8d29]"
              style={{ transition: "all .5s" }}
            >
              Order Now
            </button>
          </div>
          <Image
            src={BG4}
            alt="bg"
            width="400"
            height="400"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
        </div>
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

export default Images;
