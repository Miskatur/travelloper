import { NavBar } from "@/components/shared/Header/navbar";
import { Mouse, Linkedin, Youtube, Facebook, CalendarDays } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className=" h-screen"
      style={{
        background: `url(/image/banner-bg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <div className="w-11/12 xxl:w-[1500px] mx-auto  py-32 relative">
        <div className="text-secondary grid place-content-center ">
          <h1 className="text-9xl font-semibold text-center">Travelloper</h1>
          <div className="flex  justify-center gap-x-5 ">
            <Link
              href={"/album"}
              className="inline-block uppercase rounded-full border-2 border-secondary h-40 w-40 place-content-center hover:bg-secondary hover:text-primary transition-all duration-200 ease-in-out mt-5"
            >
              <p className="text-center p-5">View My Album</p>
            </Link>
            <p className="w-6/12 mt-5 text-xl text-balance">
              As a passionate web developer and digital nomad, I draw
              inspiration from exploring new places. My travels spark
              creativity, allowing me to blend the adventure of travel with the
              craft of development.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center text-secondary bottom-0 absolute left-[50%] cursor-pointer"
          onClick={scrollToNextSection}
        >
          <Mouse size={40} className="animate-bounce" />
        </div>
      </div>
      <div className="absolute left-10 top-56 text-white">
        <div
          className="flex flex-row items-center space-y-4"
          style={{ writingMode: "vertical-rl" }}
        >
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="w-0.5 h-12  bg-secondary"></div>
          <div className="flex flex-row items-center space-y-2">
            <Facebook
              size={32}
              className="cursor-pointer  transition-all duration-200 hover:bg-secondary hover:text-primary rounded-full px-1.5"
            />
            <Linkedin
              size={32}
              className="cursor-pointer  transition-all duration-200 hover:bg-secondary hover:text-primary rounded-full px-1.5"
            />
            <Youtube
              size={32}
              className="cursor-pointer  transition-all duration-200 hover:bg-secondary hover:text-primary rounded-full px-1.5"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-10 top-56 text-white">
        <p
          className="text-lg font-semibold flex space-x-2"
          style={{ writingMode: "vertical-rl" }}
        >
          <CalendarDays size={32} className="my-2" />{" "}
          {moment().format("MMMM Do, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Banner;
