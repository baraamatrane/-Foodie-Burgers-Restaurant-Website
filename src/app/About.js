import Image from "next/image";
import Shape from "../../public/sale-shape-red.png";
import Banner from "../../public/about-banner.png";

const About = () => {
  return (
    <div className="w-full relative flex md:flex-row flex-col items-center justify-center gap-16 md:p-24 p-8">
      <div className="relative">
        <Image
          src={Shape}
          alt="Shape"
          width="400"
          height="400"
          className="absolute left-0 animate-pulse lg:top-[5px] md:w-[240px] w-[130px] h-auto"
        />

        <Image
          src={Banner}
          alt="About"
          width="500"
          height="500"
          className="md:w-[500px] w-[400px] h-auto"
        />
      </div>
      <div className="md:w-[42%] w-full flex flex-col md:items-start items-center space-y-4">
        <h1 className="font-semibold text-black md:text-5xl text-2xl">
          Caferio, Burgers, and Best Pizzas
          <span className="text-[#ff9d2e]"> in Town!</span>
        </h1>
        <p className="md:text-base text-xs text-start w-full group-hover:text-white text-[#787878]">
          The restaurants in Hangzhou also catered to many northern Chinese who
          had fled south from Kaifeng during the Jurchen invasion of the 1120s,
          while it is also known that many restaurants were run by families.
        </p>
        <li className="flex space-x-2 list-none items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-auto text-[#ff9d2e]"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="md:text-base font-semibold text-sm text-black">
            Delicious & Healthy Foods
          </h3>
        </li>
        <li className="flex space-x-2 list-none items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-auto text-[#ff9d2e]"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="md:text-base font-semibold text-sm text-black">
            Spacific Family And Kids Zone
          </h3>
        </li>
        <li className="flex space-x-2 list-none items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-auto text-[#ff9d2e]"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="md:text-base font-semibold text-sm text-black">
            Music & Other Facilities
          </h3>
        </li>
        <li className="flex space-x-2 list-none items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-auto text-[#ff9d2e]"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="md:text-base font-semibold text-sm text-black">
            Fastest Food Home Delivery
          </h3>
        </li>
        <button className="text-white bg-[#ff8d29] p-3 font-semibold text-sm text-center w-32 relative group overflow-hidden z-10">
          Order Now
          <div className="bg-black w-0 h-0 -z-10 rounded-full absolute transition-all group-hover:h-72 group-hover:w-80 top-1 left-1 transform -translate-x-1/2 -translate-y-1/2"></div>
        </button>
      </div>
      <div
        className="absolute w-full h-6 left-0 bg-cover bg-bottom bg-no-repeat bottom-0"
        style={{
          backgroundImage: `url("/shape-grey.png")`,
        }}
      ></div>
    </div>
  );
};

export default About;
