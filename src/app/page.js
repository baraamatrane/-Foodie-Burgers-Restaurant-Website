import Image from "next/image";
import Shape from "../../public/hero-bg-shape.png";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Cards from "./Cards";
import About from "./About";
import Dishes from "./Dishes";
import Quality from "./Quality";
import Delevery from "./Delevery";
import Reviews from "./Reviews";
import Images from "./Images";
import Blogs from "./Blogs";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div
        className="bg-cover bg-center bg-no-repeat h-auto w-full overflow-hidden"
        style={{
          backgroundImage: `url("/hero-bg.jpg")`,
        }}
      >
        <Image
          src={Shape}
          alt="Shape"
          width="400"
          height="400"
          className="absolute right-0 lg:top-[75px] md:block hidden lg:w-[900px] w-[700px] h-auto z-0"
        />
        <Navbar />
        <Hero />
      </div>
      <Cards />
      <About />
      <Dishes />
      <Quality />
      <Delevery />
      <Reviews />
      <Images />
      <Blogs />
      <Footer />
    </div>
  );
}
