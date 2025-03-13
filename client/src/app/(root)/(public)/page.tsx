"use client";

import HeroSection from "@/components/home/HeroSection";
import React from "react";

const page = () => {
  // const { data } = useSession();
  return (
    <section className="flex flex-col justify-start items-center ">
      <HeroSection />
    </section>
  );
};

export default page;
