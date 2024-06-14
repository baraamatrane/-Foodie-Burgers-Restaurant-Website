import Image from "next/image";
import Bg from "../../public/footer-illustration.png";
import Boy from "../../public/delivery-boy.svg";

const Footer = () => {
  return (
    <div className="relative xl:h-[500px] flex flex-col items-center justify-end">
      <div className="w-full relative z-10 p-4">
        <div className="flex xl:flex-row flex-col items-start justify-center xl:gap-16 gap-6">
          <div className="space-y-4 xl:w-72 w-full">
            <h1 className={`font-bold md:text-3xl text-xl text-black`}>
              Foodie<span className="text-[#ff9d2e]">.</span>
            </h1>
            <p className="md:text-sm text-xs text-[#787878]">
              Financial experts support or help you to to find out which way you
              can raise your funds more.
            </p>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
                className="bg-[#ff9d2e] p-1.5 transition-all duration-500 hover:bg-black cursor-pointer"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
                className="bg-[#ff9d2e] p-1.5 transition-all duration-500 hover:bg-black cursor-pointer"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
                className="bg-[#ff9d2e] p-1.5 transition-all duration-500 hover:bg-black cursor-pointer"
              >
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
                className="bg-[#ff9d2e] p-1.5 transition-all duration-500 hover:bg-black cursor-pointer"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z"></path>
              </svg>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className={`font-bold text-xl text-black`}>Contact Info</h1>
            <p
              className="md:text-base text-sm text-[#787878]"
              style={{ lineHeight: "38px" }}
            >
              +1 (062) 109-9222 <br />
              Info@YourGmail24.com
              <br />
              153 Williamson Plaza,
              <br /> Maggieberg, MT 09514
            </p>
          </div>
          <div className="space-y-4">
            <h1 className={`font-bold text-xl text-black`}>Opening Hours</h1>
            <p
              className="md:text-base text-sm text-[#787878]"
              style={{ lineHeight: "38px" }}
            >
              Monday-Friday: 08:00-22:00
              <br />
              Tuesday 4PM: Till Mid Night
              <br />
              Saturday: 10:00-16:00
            </p>
          </div>
          <div className="bg-white xl:-translate-y-32 w-auto translate-y-0 shadow-xl border-2 p-6 border-gray-200 space-y-4">
            <h1 className={`font-bold text-xl text-black`}>Book a Table</h1>
            <div className="flex items-center gap-2">
              <input
                className="p-2 w-1/2 border-2 border-gray-200 focus:outline-none"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="p-2 w-1/2 border-2 border-gray-200 focus:outline-none"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                name="total_person"
                aria-label="Total person"
                class="p-2 w-1/2 border-2 border-gray-200 focus:outline-none"
              >
                <option value="person">Person</option>
                <option value="2 person">2 Person</option>
                <option value="3 person">3 Person</option>
                <option value="4 person">4 Person</option>
                <option value="5 person">5 Person</option>
              </select>
              <input
                className="p-2 w-1/2 border-2 border-gray-200 focus:outline-none"
                type="date"
              />
            </div>
            <input
              className="p-2 w-full border-2 h-14 text-start border-gray-200 focus:outline-none"
              placeholder="Message"
              type="text"
            />
            <button
              className="w-32 p-3 text-sm font-semibold text-center text-white hover:bg-black bg-[#ff8d29]"
              style={{ transition: "all .5s" }}
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
      <Image
        src={Bg}
        alt="blog1"
        width="1700"
        height="1700"
        className="w-full border-b-2 border-gray-200 z-0 xl:absolute relative xl:bottom-16 -bottom-2 h-auto"
      />
      <Image
        src={Boy}
        alt="blog1"
        width="1000"
        height="1000"
        className="xl:w-44 md:w-28 w-24 z-10 absolute xl:bottom-[61px] -left-40 animate-move bottom-12 h-auto"
      />
      <p className="md:text-base text-center text-sm mt-5 text-[#787878] pb-4">
        © 2022 codewithsadee All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
