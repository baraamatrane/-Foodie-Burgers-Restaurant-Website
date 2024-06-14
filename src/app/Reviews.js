import Image from "next/image";
import Chef2 from "../../public/avatar-2.jpg";
import Chef1 from "../../public/avatar-1.jpg";
import Chef3 from "../../public/avatar-3.jpg";

const Reviews = () => {
  const Reviews = [
    { name: " Robert William", image: Chef1, job: "CEO Kingfisher" },
    { name: "Thomas Josef", image: Chef2, job: "CEO Getforce" },
    { name: "Charles Richard", image: Chef3, job: "CEO Angela" },
  ];
  return (
    <div className="w-full relative bg-[#f9f6f0] flex flex-col space-y-6 justify-center items-center md:p-20 p-6">
      <h3 className="md:text-base font-semibold text-sm text-[#f42f25]">
        Testimonials
      </h3>
      <h1 className="font-semibold text-black md:text-[41px] text-2xl">
        Our Customers
        <span className="text-[#ff9d2e]"> Reviews</span>
      </h1>
      <p className="md:text-base text-xs text-center text-[#787878]">
        Food is any substance consumed to provide nutritional support for an
        organism.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {Reviews.map((item, i) => (
          <div
            className="bg-white p-4 md:p-6 space-y-4 flex flex-col xl:w-96 w-full h-full"
            key={i}
          >
            <div className="flex space-x-4 items-center">
              <Image
                src={item.image}
                alt="Chef1"
                width="100"
                height="100"
                className="md:w-24 w-20 h-auto rounded-full"
              />
              <div>
                <h1 className="font-semibold text-black text-base">
                  {item.name}
                </h1>
                <p className="text-sm text-[#787878]">{item.job}</p>
              </div>
            </div>
            <p className="text-sm text-[#787878] flex-grow">
              "I would be lost without restaurant. I would like to personally
              thank you for your outstanding product."
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="gold"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
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

export default Reviews;
