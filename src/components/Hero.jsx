import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import AboutUsImg from "../assets/topcams.jpg";
import CityImg from "../assets/city.jpg";
import Button from "./ui/Button";
import TitleHome from "./ui/TitleHome";

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
      <div className="flex flex-col items-center">
        <TitleHome title="foto247. Professionel fotograf. Fotos til virksomhed og private. " />
        <h2 className="text-7xl font-bold text-black">
            <span className="text-yellow-400">foto</span><span className="text-blue-500">24</span><span className="text-red-500">7</span>
            <br />
          </h2>
      </div>

      <div className="flex justify-between pt-10">
        {/* Left part */}
        <div className="w-[61%]">
         
<h4>Velkommen!</h4>

          <div className="text-base text-lightText pt-15 pr-32 font-medium">
            <p class="mb-8">Vi tilbyder professionelle fotos inden for:</p>
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
                  Produkt
                </li>
                <li> 
                  Events
                </li>
                <li> 
                  Med mere...
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
                  Teknisk / Udstyr
                </li>
                <li>
                  SOS / Krisefotohjælp
                </li>
                </ul>

              
              <p class="mb-8">
                Brug topmenuen for at navigere rundt på websiden.
              </p>

              <p class="mb-8">
                For akut fotoassistance, klik på 'kontakt' og ring/skriv!
              </p>
          </div>
        </div>

        {/* Right part */}
        <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutUsImg}
              alt="Kameraer"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
            <img
              src={CityImg}
              alt="Bybillede"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
          </div>
        
       
    
    
    
      </Container>
  );
};

export default Hero;