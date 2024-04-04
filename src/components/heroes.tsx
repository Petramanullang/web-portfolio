"use client";

import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="mb-40 lg:mb-96">
        <div className="lg:flex gap-44 -translate-y-24 lg:-translate-y-0 3xl:translate-y-10">
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-5xl lg:text-6xl font-[500] text-shadow shadow-gray-500 mb-5 lg:mb-0">
              Hello, i&apos;m <br />
              Petra Juliansen.
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-3xl font-light text-gray-500  lg:w-[45%] translate-y-20">
            A junior frontend-developer who tries to create innovative &
            attractive websites.
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: [0, 1], y: [-10, 0] }}
          transition={{ duration: 0.5, delay: 1 }}>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              repeat: Infinity,
            }}>
            <IoIosArrowRoundDown className="text-5xl lg:text-7xl lg:translate-y-40 2xl:translate-y-64" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
