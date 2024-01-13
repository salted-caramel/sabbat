"use client";
import Hero from "@/components/Hero";
import React, { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const Day1 = () => {
  const targetRef = useRef(null);

  return (
    <div className="px-8">
      <Hero
        title="Day 1"
        learningOutcome="Lorem ipsum dolor sit amet"
        scrollTo="flexbox"
      />
      <div className="min-h-screen bg-base-200" ref={targetRef} id="flexbox">
        <div className="navbar">
          <a className="text-xl">CSS Flexbox</a>
        </div>
      </div>
    </div>
  );
};

export default Day1;
