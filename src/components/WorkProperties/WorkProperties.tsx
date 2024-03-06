import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface WorkProp {
  title: string;
}

const Work = ({ title }: any) => {
  return (
    <>
      <div className="flex mb-40 pb-36 border-b-2 border-[#606060] ">
        <div className="w-[50%] flex flex-col">
          <h1 className="text-2xl font-semibold mb-7">{title}</h1>
          <h2 className="w-3/4 text-xl mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium eveniet eum pariatur vero repellat?
          </h2>
          <p className=" text-gray-600 w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellendus ex sit possimus.
          </p>

          <Link
            className="flex items-center mt-auto w-[45%] text-xl border-b-2 border-black"
            href={""}>
            More shots from this project
            <FiArrowUpRight className="ml-1" />
          </Link>
        </div>

        <Image
          className="bg-[#606060] w-[50%] h-[365px] flex justify-center items-center"
          src="/Portfolio.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default Work;
