"use client";

import React, { useRef } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/heroes";
import Work from "../components/WorkProperties/WorkProperties";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="h-screen mx-5 lg:m-20 mt-52 lg:mt-60 scroll-smooth">
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
