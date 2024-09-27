import { X } from "lucide-react";
import React from "react";
import TextAnimation from "@/utils/text-animation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1.5,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,

      ease: "easeOut",
    },
  },
};
const AboutTitle = () => {
  return (
    <div className="flex  justify-center items-center">
      <TextAnimation
        text="TRAVELER"
        direction="left"
        lineAnime={true}
        classname="xl:text-7xl text-xl sm:text-2xl md:text-4xl font-semibold text-center flex justify-center items-center px-4 text-black"
      />
      <motion.span
        className="flex justify-center items-center px-4"
        whileInView="visible"
        initial="hidden"
        variants={containerVariants}
      >
        <X height={72} width={72} className="font-semibold" />
      </motion.span>
      <TextAnimation
        text="DEVELOPER"
        direction="right"
        lineAnime={true}
        classname="xl:text-7xl text-xl sm:text-2xl md:text-4xl font-semibold text-center flex justify-center items-center px-4 text-black"
      />
    </div>
  );
};

export default AboutTitle;
