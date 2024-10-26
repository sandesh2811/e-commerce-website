import Image from "next/image";
import React from "react";

const FirstSection = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-3 mid:flex-row mid:gap-6 lg:gap-10 h-full xl:justify-center">
      <div className="relative w-[250px] h-[350px] mid:w-[300px] mid:h-[380px] md:w-[350px] md:h-[450px] midLg:w-[400px]">
        <Image
          fill
          src="https://images.pexels.com/photos/13311417/pexels-photo-13311417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 text-center mid:w-[50%] mid:text-left md:min-h-[45vh] md:justify-around">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium mid:text-2xl midLg:text-3xl">
            We believe in quality over quantity.
          </h1>
          <p className="font-light midLg:text-lg leading-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            soluta voluptate ullam vitae reiciendis amet quia blanditiis commodi
            dolorum.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium mid:text-2xl midLg:text-3xl">
            We believe in customer satisfaction.
          </h1>
          <p className="font-light midLg:text-lg leading-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            soluta voluptate ullam vitae reiciendis amet quia blanditiis commodi
            dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
