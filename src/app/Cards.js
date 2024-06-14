import Image from "next/image";
import Meal1 from "../../public/promo-1.png";

const Cards = () => {
  return (
    <div className="bg-[#f9f6f0] relative w-full md:p-28 p-16">
      <div className="flex gap-6 justify-center items-center">
        <div
          className="flex space-x-2 md:max-w-[86%] justify-start h-[120%] overflow-x-auto Scroll w-full items-center"
          style={{ paddingBlockEnd: "40px", scrollSnapAlign: "start" }}
        >
          {Array.from({ length: 7 }, (_, index) => (
            <div
              key={index}
              className="flex relative z-0 overflow-hidden bg-white p-8 md:min-w-[17rem] sm:min-w-96 min-w-full shadow-md h-[120%] group flex-col space-y-4 justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-10 h-auto group-hover:text-white text-orange-500"
              >
                <path d="M32 2C15.43 2 2 15.43 2 32s13.43 30 30 30 30-13.43 30-30S48.57 2 32 2zm0 4c7.56 0 14.41 2.93 19.53 7.74L12.74 51.53C7.93 46.41 4 39.56 4 32 4 16.54 16.54 4 32 4zm0 56c-7.56 0-14.41-2.93-19.53-7.74L51.26 12.47C56.07 17.59 60 24.44 60 32c0 15.46-12.54 28-28 28zM32 20a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm6 14a2 2 0 1 1-2-2 2 2 0 0 1 2 2zm-8 8a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" />
              </svg>
              <h4 className="font-semibold text-black group-hover:text-white md:text-2xl text-lg">
                Maxican Pizza
              </h4>
              <p className="md:text-base text-xs text-center group-hover:text-white text-[#787878]">
                Food is any substance consumed to provide nutritional support
                for an organism.
              </p>
              <Image
                src={Meal1}
                alt="Meal1"
                width="400"
                height="400"
                className="md:w-[210px] w-44 h-auto"
              />
              <div className="bg-[#ff9d2e] w-96 h-56 group-hover:h-[600px] -z-10 -rotate-12 absolute transition-all group-hover:rotate-0 -bottom-14 -left-6"></div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute w-full h-6 left-0 bg-cover bg-bottom bg-no-repeat bottom-0"
        style={{
          backgroundImage: `url("/shape-white.png")`,
        }}
      ></div>
    </div>
  );
};

export default Cards;
