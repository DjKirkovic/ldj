import React from "react";
import Container from "./Container";
import AboutMeImg from "../assets/aboutMe.jpg";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const AboutMe = () => {
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="About Me" />
      </div>
      <div className="flex justify-between pt-10">
        {/* Left part */}
        <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutMeImg}
              alt="aboutMeImage"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
        {/* Right part */}
        <div className="w-[61%] flex flex-col gap-7 text-black">
          
          <p><b>Background</b><br />
            Based in Denmark, I'm not your typical Dane. I am half Egyptian, spent half my life in the UK, 'represent' three further nationalities via marriage, and have travelled across four continents.<br />&#60; That's me in Tokyo by the way... 
          </p>
          <p><b>Outlook</b><br />
            So, how does the above shape me?! I suppose it makes me understand diversity and differences...more?...than most people.
          </p>
          <p><b>This site</b><br />
            OK, so - what does this mean for this website?! Well, the site encapsulates and communicates my viewing angles and knowledge through insights into culture, logic application & decision making.  
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;