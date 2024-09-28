import { Sparkles } from "@/utils/sparkes";
import React from "react";

const Promotional = () => {
  return (
    <div className="w-10/12 xxl:w-[1400px] mx-auto grid place-content-center text-primary h-screen">
      <div className="min-h-screen w-screen overflow-hidden bg-primary">
        <div className="relative  h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100  after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/0.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
          <Sparkles
            density={1200}
            hover={true}
            mousemove={true}
            className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(100%_100%,black,transparent_85%)]"
          />
        </div>
        <div className="mx-auto -mt-32  w-screen max-w-2xl relative z-10">
          <div className="bg-white backdrop-blur-lg border border-gray-800 p-4  w-24 h-24 mx-auto grid place-content-center rounded-full">
            <div className="w-10 h-10 translate-x-1 translate-y-1 mx-auto bg-black rounded-lg before:absolute relative before:w-full before:h-full before:bg-black/50 before:rounded-lg before:-top-2 before:-left-2"></div>
          </div>
        </div>
        <article className="text-white  pt-2 w-2/3 mx-auto block text-center z-10 relative ">
          <h1 className="text-center text-5xl text-white font-medium py-3">
            Are you looking to make your own brand?
          </h1>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro voluptatibus quisquam maiores aspernatur mollitia, omnis velit iste error dolore, amet voluptatum. Esse, aliquid quasi quia quaerat voluptatibus distinctio at?
        </article>
      </div>
    </div>
  );
};

export default Promotional;
