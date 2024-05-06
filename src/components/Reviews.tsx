"use client";
import React, { useRef } from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Image from "next/image";
import { useInView } from "framer-motion";


function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    ></div>
  );
}

export const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
        width={8000}
        height={8000}
        alt="what people are buying"
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  );
};
