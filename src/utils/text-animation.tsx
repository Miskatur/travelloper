/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const generateVariants = (
  direction: Direction,
  as: string
): { hidden: Variant; visible: Variant } => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "right" || direction === "down" ? 100 : -100;
  const duration = as === "p" ? 0.05 : 0.4;
  return {
    hidden: { filter: "blur(10px)", opacity: 0, [axis]: value },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      [axis]: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const defaultViewport = { amount: 0.3, margin: "0px 0px 0px 0px" };

// Create a map for different motion components
const MotionMap: { [key: string]: React.ElementType } = {
  h1: motion.h1,
  p: motion.p,
  span: motion.span,
  div: motion.div,
};

const TextAnimation = ({
  as = "h1",
  text,
  classname = "",
  viewport = defaultViewport,
  variants,
  direction = "down",
  letterAnime = false,
  lineAnime = false,
}: {
  text: string;
  classname?: string;
  as?: keyof JSX.IntrinsicElements;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  variants?: {
    hidden?: any;
    visible?: any;
  };
  direction?: Direction;
  letterAnime?: boolean;
  lineAnime?: boolean;
}) => {
  const baseVariants = variants || generateVariants(direction, as);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
    },
  };

  // Check if the provided element exists in MotionMap, fallback to div
  const MotionComponent =
    MotionMap[as] || motion.div; // Use div if the tag is not in the map

  return (
    <>
      <MotionComponent
        whileInView="visible"
        initial="hidden"
        variants={containerVariants}
        viewport={viewport}
        className={cn(`block text-primary uppercase`, classname)}
      >
        {lineAnime ? (
          <motion.span className="inline-block" variants={modifiedVariants}>
            {text}
          </motion.span>
        ) : (
          <>
            {text.split(" ").map((word: string, index: number) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterAnime === false ? modifiedVariants : {}}
              >
                {letterAnime ? (
                  <>
                    {word.split("").map((letter: string, letterIndex: number) => (
                      <motion.span
                        className="inline-block"
                        variants={modifiedVariants}
                        key={letterIndex}
                      >
                        {letter}
                      </motion.span>
                    ))}
                    &nbsp;
                  </>
                ) : (
                  <>{word}&nbsp;</>
                )}
              </motion.span>
            ))}
          </>
        )}
      </MotionComponent>
    </>
  );
};

export default TextAnimation;
