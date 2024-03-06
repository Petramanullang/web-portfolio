import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between pb-10">
        <span className="text-xl font-[500]">
          Petra Juliansen Manullang - 2024{" "}
        </span>
        <div className="gap-10 flex text-lg font-[500]">
          <Link href={""}>LinkedIn</Link>
          <Link href={""}>Instagram</Link>
          <Link href={""}>Github</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
