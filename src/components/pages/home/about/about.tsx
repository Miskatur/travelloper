import React from "react";
import AboutContent from "./aboutContent";
const About = () => {
  return (
    <section className="bg-gray-300 grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden " id="about">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="w-11/12 xxl:w-[1500px] mx-auto">
        <AboutContent />
      </div>
    </section>
  );
};

export default About;
