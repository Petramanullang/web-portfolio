import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="mb-96">
        <div className="flex gap-44">
          <h1 className="text-6xl font-[500] text-shadow shadow-gray-500">
            Hello, i&apos;m <br />
            Petra Juliansen.
          </h1>

          <p className="text-3xl font-light text-gray-500 w-[45%] translate-y-20">
            A junior frontend-developer who tries to create innovative &
            attractive websites.
          </p>
        </div>

        <IoIosArrowRoundDown className="text-7xl translate-y-64" />
      </div>
    </>
  );
};

export default Hero;
