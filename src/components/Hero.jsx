import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "./ui/Button";

const Hero = () => {
  const words = [
    "Udforsk",
    "Opdag",
    "Nå dine fotomål",
    /*    "Communications Specialist",
    "Project Manager",
    "Life Coach",
    "Content Creator",*/
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
            Velkommen til <span className="text-deep-sea-green-50">foto247!</span>
          </h2>
          <h2 className="text-4xl font-bold text-blue-500">
            
            <Typewriter
              words={words}
              loop={3}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="text-base text-lightText pt-15 pr-32 font-medium">
          <p class="mb-8">Her tilbydes fotos inden for:</p>
            <ul class="list-disc mb-8 ml-4">  
              <li> 
                Portræt
              </li>
              <li> 
                Arkitektur
              </li>
              <li> 
                Natur
              </li>
              <li> 
                Ting
              </li>
              <li> 
                Events
              </li>
              <li> 
                Mere
              </li>
              </ul>
          <p class="mb-8">...og råd/hjælp med:</p>
            <ul class="list-disc mb-8 ml-4">  
              <li> 
                Foredrag
              </li>
              <li> 
                Indsigt / Undervisning
              </li>
              <li> 
                Rejser / Ture
              </li>
              <li> 
                Samarbejde
              </li>
              <li> 
                Teknisk
              </li>
              <li>
                SOS / Krisehjælp
              </li>
              </ul>

            
            <p class="mb-8">
              Brug topmenuen for at navigere rundt på websiden.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;