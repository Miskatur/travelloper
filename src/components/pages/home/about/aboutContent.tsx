import React from "react";
import TextAnimation from "@/utils/text-animation";
import AboutTitle from "./aboutTitle";
import Button from "@/components/shared/reusableComponent/button";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <div>
      <AboutTitle />
      <div className="text-center pt-8 ">
        <TextAnimation
          as="p"
          lineAnime={false}
          letterAnime={true}
          text="I'm Miskatur Rahman, a Software Developer and  Traveler."
          classname="sm:text-lg md:text-xl xl:text-4xl leading-5 md:tracking-wide pt-5 w-full text-center flex flex-wrap justify-center font-semibold"
          variants={{
            hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        />
        <TextAnimation
          as="p"
          letterAnime={false}
          text=" My dream is to explore many countries while helping people with their software solutions. As a Travelloper, I mix my love for travel with my skills in web development, working from different places around the world. I want to inspire others to live a life of freedom, where you can travel and work at the same time. I believe you don’t have to choose between your passion for travel and your career in tech—you can do both."
          classname="sm:text-lg md:text-xl xl:text-2xl leading-5 md:tracking-wide pt-5 w-full flex flex-wrap justify-center text-center"
          variants={{
            hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.1,
              },
            },
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="flex justify-center items-center w-full mt-16"
      >
        <Button
          defaultText="Let's make it happen"
          hoveredText="Need Your Own Website ?"
        />
      </motion.div>
    </div>
  );
};

export default AboutContent;
