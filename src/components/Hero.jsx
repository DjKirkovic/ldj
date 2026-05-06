import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import AboutUsImg from "../assets/AboutUs.jpg";
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
    <Container className="border-b border-black">
      <div className="flex justify-between pt-10">
        {/* Left part */}
         <div>
         <h2 className="w-[35%] text-7xl font-bold text-black">
            Velkommen til <span className="text-deep-sea-green-50">foto247!</span>
          <br /></h2>
          </div>
          <div>
            <p><b>
          <h2 className="w-[35%] text-4xl font-bold text-blue-500">
            
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
              </b><br />
          </p>
          </div>
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
                  SOS / Krisefotohjælp
                </li>
                </ul>

              
              <p class="mb-8">
                Brug topmenuen for at navigere rundt på websiden.
              </p>

              <p class="mb-8">
                For akut fotoassistance, kontakt os via 'Om' siden.
              </p>
            </div>


        {/* Right part */}
        <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutUsImg}
              alt="AboutUsImage"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
          </div>
        
       
    
    
    
      </Container>
  );
};

export default Hero;