import Image from "next/image";
import Meal1 from "../../public/promo-1.png";
import Meal2 from "../../public/promo-2.png";
import Meal3 from "../../public/promo-3.png";
import Meal4 from "../../public/promo-4.png";
import Meal5 from "../../public/promo-5.png";
const Dishes = () => {
  const Data = [
    {
      type: "Chicken",
      title: "Fried Chicken Unlimited",
      price: 49.0,
      returelPrice: 69.0,
      Imagemeal: Meal1,
    },
    {
      type: "Noddles",
      title: "Burger King Whopper",
      price: 39.0,
      returelPrice: 69.0,
      Imagemeal: Meal2,
    },
    {
      type: "Chicken",
      title: "Fried Chicken Unlimited",
      price: 49.0,
      returelPrice: 69.0,
      Imagemeal: Meal3,
    },
    {
      type: "Pizzas",
      title: "White Castle Pizzas",
      price: 49.0,
      returelPrice: 69.0,
      Imagemeal: Meal4,
    },
    {
      type: "Burrito",
      title: "Bell Burrito Supreme",
      price: 49.0,
      returelPrice: 69.0,
      Imagemeal: Meal5,
    },
    {
      type: "Chicken",
      title: "Wendy's Chicken",
      price: 49.0,
      returelPrice: 69.0,
      Imagemeal: Meal1,
    },
  ];
  return (
    <div
      className="relative md:p-20 p-8 bg-[#f9f6f0] flex flex-col items-center gap-5
  "
    >
      <h3 className="md:text-base font-semibold text-sm text-[#f42f25]">
        Popular Dishes
      </h3>
      <h1 className="font-semibold text-black md:text-[41px] text-2xl">
        Our Delicious
        <span className="text-[#ff9d2e]"> Foods</span>
      </h1>
      <p className="md:text-base text-xs text-center text-[#787878]">
        Food is any substance consumed to provide nutritional <br /> support for
        an organism.
      </p>
      <div className="w-full grid md:grid-cols-5 grid-cols-4 gap-4">
        <h3 className="md:text-base cursor-pointer font-medium p-1 px-3 text-center text-sm bg-[#ff9d2e] text-white">
          All
        </h3>
        <h3 className="md:text-base cursor-pointer border-2 border-[#efefee] font-medium p-1 px-3 text-center text-sm bg-white text-black">
          Pizza
        </h3>
        <h3 className="md:text-base cursor-pointer border-2 border-[#efefee] font-medium p-1 px-3 text-center text-sm bg-white text-black">
          Burger
        </h3>
        <h3 className="md:text-base cursor-pointer border-2 border-[#efefee] font-medium p-1 px-3 text-center text-sm bg-white text-black">
          Drinks
        </h3>
        <h3 className="md:text-base cursor-pointer border-2 border-[#efefee] font-medium p-1 px-3 text-center text-sm bg-white text-black">
          Sandwich
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {Data.map((item, i) => (
          <div
            className="bg-white relative shadow-xl space-y-2 p-10 group"
            key={i}
          >
            <Image
              src={item.Imagemeal}
              alt="Meal"
              width="500"
              height="500"
              className="w-72 h-auto"
            />
            <div className="flex items-center space-x-2">
              <h3 className="md:text-base font-semibold text-sm text-[#787878]">
                {item.type}
              </h3>
              <div className="flex items-center">
                <svg
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
                <svg
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
                <svg
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
                <svg
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
                <svg
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
              </div>
            </div>
            <h1 className="font-semibold text-black md:text-xl text-lg">
              {item.title}
            </h1>
            <div className="flex items-center">
              <h3 className="md:text-base font-semibold text-sm text-[#f42f25]">
                PRICE: <span className="text-[#ff9d2e]"> ${item.price}.00</span>
                <span className="text-[#787878] line-through">
                  {" "}
                  ${item.returelPrice}.00
                </span>
              </h3>
            </div>
            <h3 className="absolute text-sm font-semibold top-5 p-1 px-3 text-center w-auto bg-[#f42f25] text-white">
              -15%
            </h3>
            <button className="absolute text-white text-center group-hover:top-[40%] hover:bg-[#f42f25] group-hover:opacity-100 left-[28%] transition-all top-[45%] opacity-0 bg-[#ff8d29] p-3 font-semibold text-sm w-40">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
