"use client";
import React from "react";
import Banner from "./banner/banner";
import About from "./about/about";
import { ReactLenis } from "lenis/react";
const HomePage = () => {
  return (
    <ReactLenis root>
      <main className=" ">
        <section className=" h-screen sticky top-0  overflow-hidden">
          <Banner />
        </section>
        <About />
      </main>
    </ReactLenis>
  );
};

export default HomePage;
