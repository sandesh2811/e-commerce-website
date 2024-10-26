"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";

const wrapperContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.33,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.66,
    },
  },
};

const HeroImages = () => {
  return (
    <m.div
      initial="initial"
      animate="enter"
      variants={wrapperContainerVariants}
      className="flex justify-center gap-4 lg:grid grid-cols-2 grid-rows-2"
    >
      <m.div
        variants={imageVariants}
        className="relative w-[290px] h-[350px] lg:w-full"
      >
        <Image
          fill
          src="https://images.pexels.com/photos/17049701/pexels-photo-17049701/free-photo-of-model-in-leather-jacket-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="displayImage"
          className="object-cover object-center rounded-lg"
        />
      </m.div>
      <m.div
        variants={imageVariants}
        className="relative w-[290px] h-[350px] lg:w-full"
      >
        <Image
          fill
          src="https://images.pexels.com/photos/28771409/pexels-photo-28771409/free-photo-of-moody-black-and-white-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="displayImage"
          className="object-cover object-center rounded-lg"
        />
      </m.div>
      <m.div
        variants={imageVariants}
        className="hidden md:block relative w-[290px] h-[350px] lg:w-full"
      >
        <Image
          fill
          src="https://images.pexels.com/photos/20520684/pexels-photo-20520684/free-photo-of-studio-shot-of-woman-kneeling-in-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="displayImage"
          className="object-cover object-center rounded-lg"
        />
      </m.div>
      <m.div
        variants={imageVariants}
        className="hidden md:block relative w-[290px] h-[350px] lg:w-full"
      >
        <Image
          fill
          src="https://images.pexels.com/photos/9558927/pexels-photo-9558927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="displayImage"
          className="object-cover object-left-bottom rounded-lg"
        />
      </m.div>
    </m.div>
  );
};

export default HeroImages;
