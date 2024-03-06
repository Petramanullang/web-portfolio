import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="h-screen m-20 mt-60">
        <Navbar />
        <div className="flex pb-36 mb-28 border-b-2 border-[#606060]">
          <div className="flex-col">
            <h1 className="text-6xl font-[600] w-[80%]">
              Hi, i&apos;m Petra Juliansen Manullang, FrontEnd Developer
            </h1>
            <p className="text-3xl font-light text-gray-500 w-[80%] translate-y-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              eveniet magni minima distinctio incidunt labore cumque pariatur
              quidem molestiae facilis suscipit praesentium, modi, aperiam
              dolores atque totam recusandae, architecto neque.
            </p>
            <p className="text-3xl font-light text-gray-500 w-[45%] translate-y-20 mt-24">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, eveniet?
            </p>
          </div>
          <Image
            width={500}
            height={500}
            src="/About.jpeg"
            alt=""
            className="rounded"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
