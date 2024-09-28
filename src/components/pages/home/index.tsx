"use client";
import React from "react";
import Banner from "./banner/banner";
import About from "./about/about";
import Playlist from "./playlist/playlist";
import { ReactLenis } from "lenis/react";
import Promotional from "./promotional/promotional";
const HomePage = () => {
  return (
    <ReactLenis root>
      <main className=" ">
        <section className=" h-screen sticky top-0  overflow-hidden">
          <Banner />
        </section>
        <About />
        <section className="mt-20  sticky top-0  bg-primary w-full rounded-tr-2xl rounded-tl-2xl overflow-x-hidden">
          <Playlist />
        </section>
      </main>
      <section className="  w-full rounded-tr-2xl rounded-tl-2xl ">
        <Promotional />
      </section>
    </ReactLenis>
  );
};

export default HomePage;
