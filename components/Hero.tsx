import React, { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  title: string;
  learningOutcome: string;
  scrollTo: string;
}

const Hero = ({ title, learningOutcome, scrollTo }: Props) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">What we are learning today: {learningOutcome}</p>
          <ScrollLink to={scrollTo} smooth={true} duration={500}>
            <button className="btn btn-primary">Get Started</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
