import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Newsletter = () => {
  return (
    <div className="min-h-[40vh] tracking-wide flex flex-col gap-4 justify-center md:items-center">
      {/* Text Section */}

      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[35px] mid:text-[55px] font-medium uppercase xl:text-[70px] mid:leading-[60px] leading-[40px]">
          Stay Updated
        </h1>
        <p className="md:text-lg leading-[22px] font-light midLg:leading-[18px]">
          By subscribing to our newsletter, you can get news about our latest
          drop right into your email.
        </p>
      </div>

      {/* CTA Button And Input */}
      <div className="flex items-center justify-center h-[5.2vh] md:w-[700px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[75%] mid:w-[65%] h-full px-4 text-background bg-text"
        />
        <div className="w-[25%] mid:w-[20%] flex items-center justify-center gap-2 h-full cursor-pointer bg-[#f3f4f9]/10">
          <GoArrowUpRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
