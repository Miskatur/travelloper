import { NavBar } from "@/components/shared/Header/navbar";
import { Mouse } from "lucide-react";
import Link from "next/link";
import React from "react";

const Banner = () => {
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
      <div className="w-10/12 xxl:w-[1400px] mx-auto  py-32 relative">
        <div className="text-secondary grid place-content-center ">
          <h1 className="text-9xl font-semibold text-center">Travelloper</h1>
          <div className="flex  justify-center gap-x-5 ">
            <Link
              href={"/album"}
              className="inline-block uppercase rounded-full border-2 border-secondary h-40 w-40 place-content-center hover:bg-secondary hover:text-primary transition-all duration-200 ease-in-out mt-5"
            >
              <p className="text-center p-5">View My Album</p>
            </Link>
            <p className="w-6/12 mt-5">
              As a passionate web developer and digital nomad, I draw
              inspiration from exploring new places. My travels spark
              creativity, allowing me to blend the adventure of travel with the
              craft of development.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-secondary bottom-20 absolute left-[50%] ">
          <Mouse size={40} className="animate-bounce" />
        </div>
      </div>
      <div className="absolute -left-6 top-72 text-white rotate-90">
        <div className=" flex items-center justify-center">
          <p className="">Social Media</p>
          <div className="w-12  border-b-2 border-secondary mx-2"></div>
        </div>
      </div>
      <div className="absolute right-10 top-72 text-white">
        <ul>
          <li className="border-b-2 border-secondary px-2 text-lg font-semibold">
            1
          </li>
          <li className="border-b-2 border-secondary px-2 text-lg font-semibold">
            2
          </li>
          <li className="border-b-2 border-secondary px-2 text-lg font-semibold">
            3
          </li>
          <li className="border-b-2 border-secondary px-2 text-lg font-semibold">
            4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
