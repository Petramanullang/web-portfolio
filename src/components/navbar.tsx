"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-full -translate-y-44">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold">
          tra.
        </motion.div>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex gap-10 text-xl font-[500]">
          <Link href="/">Work</Link>
          <Link href="/About">About</Link>
          <Link href="#">Experience</Link>
          <Link href="/Contact">Contact</Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
