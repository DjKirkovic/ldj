import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import 2cams from "../assets/2cams.jpg";

const Photography = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Photography" />
        </div>
   </div>
  <div className="overflow-hidden rounded-lg">
            <img
              src={2cams}
              alt="Two camera systems"
              className="rounded-md group-hover:scale-110 duration-500"
            />
  </div>
     <p><b>Mirrorless vs. DSLR</b><br />
        Probably the single biggest photography decision of the 2010s and 2020s: {""}To Mirrorless or to DSLR?{""}, THAT is the question!
        <br /><br />Here are some arguments either way:<br />
        <ul class="list-disc mb-8 ml-4">  
              <li> Mirrorless is the future!</li>
              <li> Mirrorless is quieter / faster / cooler!</li>
              <li> DSLR is what I already have, why change?! </li>
              <li> DSLR is where the second hand value is right now! </li>
              <li> Pick whichever is best for exactly YOUR photography needs!</li>
               </ul>
        
      So which to pick? Well, one eternal winning strategy is to think <i>needs</i>, not wants/nice-to-haves!
      <br /><br />
      </p>
      
      <p><b>Resolution, resolution, resolution!</b><br />
        Sensors and megapixels aren't just catchphrases - they MATTER! Here are a few core reasons:<br />
        <ul class="list-disc mb-8 ml-4">  
              <li> Sensor size determines light pickup ability; the bigger the sensor, the more light can be captured </li>
              <li> Sensor characteristics limit factors like capture speed and dynamic range sensitivity</li>
              <li> The higher the megapixel count of your camera, the more detail can be captured </li>
               </ul>  
      Accordingly, when choosing your next camera start thinking about sensor and MP long before most other specs.
      </p>
   
    </Container>
  );
};

export default Photography;