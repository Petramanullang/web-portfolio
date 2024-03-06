import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-full -translate-y-40">
        <span className="text-4xl font-semibold">tra.</span>
        <div className="flex gap-10 text-xl font-[500]">
          <Link href="/">Work</Link>
          <Link href="/About">About</Link>
          <Link href="#">Experience</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
