import ScrollElement from "@/utils/scroll-element";
import React from "react";
import { PlayListData } from "./playlistData";
import Image from "next/image";

const Playlist = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <h2 className="text-4xl 2xl:text-7xl font-bold text-center tracking-wide py-5 text-secondary">
        Our Travel Stories
      </h2>
      <div className=" py-10 md:columns-3 w-11/12 xxl:w-[1500px] mx-auto overflow-hidden">
        {PlayListData.map((item, index) => (
          <ScrollElement
            key={index}
            direction={item.direction || undefined}
            viewport={{ amount: 0.5, margin: "0px 0px 0px 0px" }}
          >
            <Image
              src={item.src}
              alt={`image-${index}`}
              className="w-full h-full my-2"
              height={500}
              width={600}
            />
          </ScrollElement>
        ))}
      </div>
    </>
  );
};

export default Playlist;
