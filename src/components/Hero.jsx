import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Life Coach",
    "Photographer",
    "Specialist in IT",
    "Project Manager",
  ];

  return (
    <div className="w-full bg-hero-image bg-cover">
      <Container className="py-20">
        <div className="w-1/2 flex flex-col gap-y-5">
          <h2 className="text-7xl font-bold text-white">
            Hi, I’m <span className="text-designColor">Martin Kirk</span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            a{" "}
            <Typewriter
              words={words}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base text-lightText pr-32 font-medium">
            Explore the site to learn, get advice and start benefitting!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;