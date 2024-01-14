"use client";
import Hero from "@/components/Hero";
import React, { useRef, useState, useEffect } from "react";
import BackArrow from "@/components/BackArrow";
import TopArrow from "@/components/TopArrow";
import ContentContainer from "@/components/ContentContainer";

const Day1 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const secondDivOffset = targetRef.current?.offsetTop || 0;

      // Adjust the threshold value as needed
      const threshold = 100;

      setShowArrowUp(scrollPosition > secondDivOffset - threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-zinc-900">
      <BackArrow />
      <Hero
        title="Day 1"
        learningOutcome="Lorem ipsum dolor sit amet"
        scrollTo="flexbox"
      />
      <div ref={targetRef} id="flexbox">
        <ContentContainer title="CSS Flexbox" />
      </div>
      <ContentContainer title="CSS Grid" />
      {showArrowUp && <TopArrow />}
    </div>
  );
};

export default Day1;
