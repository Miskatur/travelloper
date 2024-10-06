import React from "react";
import LottieAnimation from "./lottieAnimation";
import { motion } from "framer-motion";
import Button from "@/components/shared/reusableComponent/button";

const Promotional = () => {
  return (
    <div className="w-11/12 xxl:w-[1500px] mx-auto grid place-content-center text-primary">
      <div className="min-h-screen w-screen overflow-hidden bg-transparent  rounded-xl">
        <div className=" mt-12  relative z-10">
          <LottieAnimation />
        </div>
        <article className="text-white  pt-2 w-2/3 mx-auto block text-center z-10 relative ">
          <h1
            className="text-center text-7xl text-primary font-medium py-3 leading-[120%] font-lato"
            style={{
              fontFamily: "Lato",
            }}
          >
            Are You Ready To Create Your Unique Brand Identity?
          </h1>
          <p className="text-lg text-primary">
            {" "}
            Let&apos;s build a distinctive brand together! Our expert team
            supports you with customized development, engaging UI/UX design,
            eye-catching graphics, effective digital marketing, and SEO
            strategies to enhance your online presence.
          </p>

          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 1.5 }} 
        className="flex justify-center items-center w-full mt-16"
      >
        <Button
          defaultText="Let's make it happen"
          hoveredText="Need an unfair advantage?"
        />
      </motion.div>
        </article>
      </div>
    </div>
  );
};

export default Promotional;
