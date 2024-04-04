"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorkProp {
  title: string;
}

const Work = ({ title }: any) => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="lg:flex mb-10 lg:mb-40 pb-28 lg:pb-36 lg:border-b-2 border-[#606060]">
        <div className="flex flex-col w-full lg:w-[54%]">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <h1 className="text-2xl font-semibold mb-7">{title}</h1>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Image
              className="bg-[#606060] w-full flex justify-center items-center lg:hidden mb-5"
              src="/Portfolio.png"
              alt=""
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-10, 0] }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            <h2 className="lg:w-3/4 text-lg font-semibold lg:font-normal lg:text-xl mb-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium eveniet eum pariatur vero repellat?
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], x: [-10, 0] }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className=" text-gray-600 lg:w-3/5 mb-5 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellendus ex sit possimus.
          </motion.div>

          <Link
            className="flex gap-4 items-center mt-auto w-[83%] lg:w-[50.5%] 2xl:w-[45%] text-lg lg:text-xl border-b-2 border-black"
            href={""}>
            More shots from this project
            <FiArrowUpRight className="ml-1" />
          </Link>
        </div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [50, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Image
            className="bg-[#606060] w-full hidden lg:flex justify-center items-center "
            src="/Portfolio.png"
            alt=""
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Work;
