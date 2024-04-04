"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
        className="lg:flex lg:justify-between flex flex-col justify-center items-center pb-5 border-t-2 border-[#606060] pt-2 lg:border-none lg:items-start lg:flex-row">
        <span className="text-xl font-[500] hidden lg:block">
          Petra Juliansen Manullang - 2024{" "}
        </span>
        <div className="gap-10 flex text-base lg:text-lg font-[500] mb-3">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/petra-juliansen/"}>
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/codewithpetra/"}>
            Instagram
          </Link>
          <Link target="_blank" href={"https://github.com/Petramanullang"}>
            Github
          </Link>
        </div>
        <span className="text-lg lg:text-xl font-[500] lg:hidden">
          Petra Juliansen Manullang - 2024{" "}
        </span>
      </motion.div>
    </>
  );
};

export default Footer;
