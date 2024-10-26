"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion as m } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    y: "250%",
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.078 * i,
    },
  }),
};

const wrapperContainerVariants = {
  enter: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const subTextVariants = {
  initial: {
    opacity: 0,
    y: "250%",
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.95,
    },
  },
};

const titles = ["Elevate", "Your", "Fashion"];

const HeroText = () => {
  return (
    <section className="min-h-[40vh] text-center flex flex-col  justify-center gap-6 p-2 mid:gap-4 lg:text-left">
      <div className="overflow-hidden mid:flex flex-wrap justify-center gap-2 md:gap-4 items-center lg:block">
        {titles.map((title, idx) => (
          <div key={idx} className="mid:max-w-[250px]">
            <m.h1
              custom={idx}
              variants={textVariants}
              initial="initial"
              animate="enter"
              className="text-5xl leading-[50px] font-bold uppercase mid:text-6xl  lg:text-8xl xl:text-9xl xl:leading-[115px]"
            >
              {title}
            </m.h1>
          </div>
        ))}
      </div>

      <m.div
        variants={wrapperContainerVariants}
        initial="initial"
        animate="enter"
        className="flex flex-col gap-2 text-base mid:text-lg overflow-hidden"
      >
        <m.p variants={textVariants}>
          Shop our latest collections which are designed and produced by
          professionals.
        </m.p>
        <m.span variants={subTextVariants}>Made In Nepal</m.span>
      </m.div>
      <Link href="products">
        <div className="flex justify-center lg:w-full lg:justify-start">
          <m.button
            variants={buttonVariants}
            initial="initial"
            animate="enter"
            className="flex justify-center items-center gap-2 bg-text text-background p-3 rounded-md  font-medium text-lg "
          >
            Shop Now <GoArrowUpRight size={25} />
          </m.button>
        </div>
      </Link>
    </section>
  );
};

export default HeroText;
