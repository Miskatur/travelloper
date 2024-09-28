import { ArrowRight } from "lucide-react";
import React from "react";

const Button = ({
  defaultText,
  hoveredText,
}: {
  defaultText: string;
  hoveredText: string;
}) => {
  return (
    <>
      <div className="group relative cursor-pointer px-10 py-4 inline-block border  rounded-full overflow-hidden bg-gray-900 text-secondary text-center font-semibold ">
        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block uppercase text-lg xl:text-3xl">
          {hoveredText}
        </span>
        <div className="flex gap-2 text-primary bg-secondary  z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full border border-primary group-hover:rounded-full uppercase text-lg xl:text-3xl">
          <span>{defaultText}</span>
          <div className="group-hover:translate-x-4 delay-100 duration-200 transition-all ease-linear">
            <ArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
