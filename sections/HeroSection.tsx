import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="flex items-center justify-center py-16 mx-auto w-full px-2 md:px-4">
      <div className="flex flex-col space-y-8 px-2">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug tracking-wide text-brown-satu max-w-xl xl:max-w-2xl">
          Aren Nation local product going to export
        </h1>
        <div className="space-y-3">
          <p className="text-secondary-blue">
            International quality local products and 100% of natural ingredients
          </p>
        </div>
        <div className="space-x-3 sm:space-x-4">
          <motion.button
            className="bg-brown-tiga hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
            whileHover={{ y: -4 }}
          >
            Get a quote
          </motion.button>
        </div>
      </div>
      <div className="relative w-[680px] h-[550px] flex-shrink-0 hidden xl:block">
        <Image
          src="/images/services/aren_logi.jpeg"
          className="w-full h-full inset-0"
          blurDataURL="/svgs/hero.svg"
          layout="fill"
          placeholder="blur"
          alt="hero-icon"
        />
      </div>
    </section>
  );
};

export default HeroSection;
