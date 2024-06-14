import Image from "next/image";
import Blog1 from "../../public/blog-1.jpg";
import Blog2 from "../../public/blog-2.jpg";
import Blog3 from "../../public/blog-3.jpg";

const Blogs = () => {
  return (
    <div
      className="relative md:p-20 p-8 bg-[#f9f6f0] flex flex-col items-center gap-10
  "
    >
      <h3 className="md:text-base font-semibold text-sm text-[#f42f25]">
        Latest Blog Posts
      </h3>
      <h1 className="font-semibold text-black md:text-[41px] text-2xl">
        This Is All About
        <span className="text-[#ff9d2e]"> Foods</span>
      </h1>
      <p className="md:text-base text-xs text-center text-[#787878]">
        Food is any substance consumed to provide nutritional <br /> support for
        an organism.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="bg-white shadow-md ">
          <div className="relative w-full h-auto">
            <Image
              src={Blog1}
              alt="blog1"
              width="400"
              height="400"
              className="w-[360px] h-auto"
            />
            <h3 className="text-sm absolute top-4 w-16 text-center right-4 font-semibold p-1 text-white bg-[#eb8314]">
              PIZZA
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  JAN 01 2025
                </h4>
              </div>
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  JONATHAN SMITH
                </h4>
              </div>{" "}
            </div>
            <h1 className="font-semibold text-black hover:text-gray-700 md:text-xl w-full text-lg cursor-pointer hover:underline">
              What Do You Think About Cheese
              <br /> Pizza Recipes?
            </h1>
            <p className="md:text-base text-xs md:w-80 w-64 text-[#787878]">
              Financial experts support or help you to to find out which way you
              can raise your funds more...
            </p>
            <div className="flex items-center cursor-pointer group gap-1">
              <h4 className="font-semibold text-black group-hover:text-[#ff9d2e] text-xs">
                READ MORE
              </h4>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:text-[#eb8314] group-hover:translate-x-2"
                style={{ transition: "all 0.4s" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md ">
          <div className="relative w-full h-auto">
            <Image
              src={Blog2}
              alt="blog1"
              width="400"
              height="400"
              className="w-[360px] h-auto"
            />
            <h3 className="text-sm absolute top-4 w-16 text-center right-4 font-semibold p-1 text-white bg-[#eb8314]">
              BURGER
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  MAY 10 2025
                </h4>
              </div>
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  JONATHAN SMITH
                </h4>
              </div>{" "}
            </div>
            <h1 className="font-semibold text-black hover:text-gray-700 md:text-xl w-full text-lg cursor-pointer hover:underline">
              Making Chicken Strips With <br /> New Delicious Ingridents.
            </h1>
            <p className="md:text-base text-xs md:w-80 w-64 text-[#787878]">
              Financial experts support or help you to to find out which way you
              can raise your funds more...
            </p>
            <div className="flex items-center cursor-pointer group gap-1">
              <h4 className="font-semibold text-black group-hover:text-[#ff9d2e] text-xs">
                READ MORE
              </h4>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:text-[#eb8314] group-hover:translate-x-2"
                style={{ transition: "all 0.4s" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md ">
          <div className="relative w-full h-auto">
            <Image
              src={Blog3}
              alt="blog1"
              width="400"
              height="400"
              className="w-[360px] h-auto"
            />
            <h3 className="text-sm absolute top-4 w-16 text-center right-4 font-semibold p-1 text-white bg-[#eb8314]">
              PIZZA
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-10">
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  JAN 01 2025
                </h4>
              </div>
              <div className="flex items-center cursor-pointer gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 text-[#eb8314]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <h4 className="font-semibold text-black hover:text-[#ff9d2e] text-xs">
                  JONATHAN SMITH
                </h4>
              </div>{" "}
            </div>
            <h1 className="font-semibold text-black hover:text-gray-700 md:text-xl w-full text-lg cursor-pointer hover:underline">
              Innovative Hot Chessyraw <br />
              Pasta Make Creator Fact.
            </h1>
            <p className="md:text-base text-xs md:w-80 w-64 text-[#787878]">
              Financial experts support or help you to to find out which way you
              can raise your funds more...
            </p>
            <div className="flex items-center cursor-pointer group gap-1">
              <h4 className="font-semibold text-black group-hover:text-[#ff9d2e] text-xs">
                READ MORE
              </h4>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:text-[#eb8314] group-hover:translate-x-2"
                style={{ transition: "all 0.4s" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute md:bottom-0 -bottom-10 left-0 w-full h-6 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url("/shape-white.png")`,
        }}
      ></div>
    </div>
  );
};

export default Blogs;
