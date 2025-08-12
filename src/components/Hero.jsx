import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Communications Specialist",
    "Project Manager",
    "Photographer",
    "Life Coach",
  ];

  const BG = '../banner.jpg';

  return (
    <div className="w-full h-200 bg-hero-image bg-cover">
      {/* Background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${BG})` }}
        ></div>
      <Container className="absolute py-20 pl-160 z-5">
        <div className="w-full flex flex-col gap-y-5">
          <h2 className="text-7xl font-bold text-black">
            Hi, I’m <span className="text-black">Martin</span>
          </h2>
          <h2 className="text-4xl font-bold text-blue-500">
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
          <div className="text-base text-lightText pt-15 pr-32 font-medium">
          <p class="mb-8">If you're after:</p>
            <ul class="list-disc mb-8 ml-4">  
              <li> 
                ANYTHING and everything TECH
              </li>
              <li> 
                GRAPHS, data and analytics JUICE 
              </li>
              <li> 
                PHOTOS that'll blow your socks OFF
              </li>
              <li> 
                TIPS on improving your LIFE
              </li>
              </ul>
            <p class="mb-8">
              ...then THIS site is for YOU!
            </p> 
            <p class="mb-8">
              Use the top menu items to navigate between contents.
            </p> 
            <p>
              Explore the site to learn, get advice and start benefitting!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;