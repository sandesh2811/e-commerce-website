import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-3 mid:flex-row mid:gap-6 lg:gap-10 h-full xl:justify-center">
      <div className="relative w-[250px] h-[350px] mid:w-[300px] mid:h-[425px] md:w-[350px] md:h-[450px] midLg:w-[400px] midLg:h-[500px] xl:h-[530px]">
        <Image
          fill
          src="https://images.pexels.com/photos/27658392/pexels-photo-27658392/free-photo-of-a-man-wearing-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-center mid:text-left md:min-h-[45vh] mid:items-start mid:justify-start md:justify-around mid:w-[50%]">
        <div className="flex justify-center items-center gap-2">
          <div className="relative w-[150px] h-[150px] mid:h-[220px] md:w-[175px] md:h-[300px] midLg:w-[220px] midLg:h-[350px] lg:w-[250px] xl:w-[305px] lg:h-[380px]">
            <Image
              fill
              src="https://images.pexels.com/photos/27919184/pexels-photo-27919184/free-photo-of-a-man-with-his-hands-in-pockets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-[150px] h-[150px] mid:h-[220px] md:w-[175px] md:h-[300px] midLg:w-[220px] midLg:h-[350px] lg:w-[250px] xl:w-[305px] lg:h-[380px]">
            <Image
              fill
              src="https://images.pexels.com/photos/20715516/pexels-photo-20715516/free-photo-of-african-man-posing-in-denim-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              className="object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium mid:text-2xl midLg:text-3xl">
            Clothes for every season.
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

export default SecondSection;
