import { Link } from "react-router-dom";
import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import AboutUsImg from "../assets/topcams.jpg";
import CityImg from "../assets/city.jpg";
import ballroom from "../assets/ballroom.jpg";
import Button from "./ui/Button";
import TitleHome from "./ui/TitleHome";

const Hero = () => {
/*const words = ["Udforsk","Opdag","Nå dine fotomål","Communications Specialist","Project Manager","Life Coach","Content Creator",];*/
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

      <div className="flex justify-between pt-2">
        {/* Left part */}
        <div className="w-[70%]">
         
<h4>Velkommen!</h4>

          <div className="text-base text-lightText pt-4 font-medium">
            <p>Vi tilbyder professionelle fotos via:</p>
              <ul class="list-disc mb-4 ml-4">  
                <li><Link to={"studie"} class="text-blue-500 hover:text-green-500">Portræt</Link></li>
                <li><Link to={"event"} class="text-blue-500 hover:text-green-500">Events</Link></li>
                <li><Link to={"natur"} class="text-blue-500 hover:text-green-500">Natur</Link></li>
                <li><Link to={"produkt"} class="text-blue-500 hover:text-green-500">Produkt</Link></li>
                <li><Link to={"byg"} class="text-blue-500 hover:text-green-500">Arkitektur</Link></li>
                <li><Link to={"divfoto"} class="text-blue-500 hover:text-green-500">Mere / Div. Foto</Link></li>
              </ul>
            <p>...og råd/hjælp inden for:</p>
              <ul class="list-disc mb-8 ml-4">
                <li><Link to={"taler"} class="text-blue-500 hover:text-green-500">Foredrag</Link></li>
                <li><Link to={"raad"} class="text-blue-500 hover:text-green-500">Indsigt / Undervisning</Link></li>
                <li><Link to={"ture"} class="text-blue-500 hover:text-green-500">Rejser / Ture</Link></li>
                <li><Link to={"sammen"} class="text-blue-500 hover:text-green-500">Samarbejde</Link></li>
                <li><Link to={"teknik"} class="text-blue-500 hover:text-green-500">Teknik / Udstyr</Link></li>
                <li><Link to={"sos"} class="text-blue-500 hover:text-green-500">SOS / Krisefotohjælp</Link></li>
              </ul>
              
              <p class="mb-8">
                Brug topmenuen for at navigere rundt på websiden.
              </p>

              <p class="mb-8">
                For akut fotoassistance, klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
              </p>
          </div>
        </div>

        {/* Right part */}
        <div className="w-[30%] bg-[#212428] rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutUsImg}
              alt="Kameraer"
              className="rounded-md"
            />
            <img
              src={CityImg}
              alt="Bybillede"
              className="rounded-md"
            />
            <img
              src={ballroom}
              alt="Ballroom"
              className="rounded-md"
            />
          </div>
        </div>
          </div>
        
       
    
    
    
      </Container>
  );
};

export default Hero;