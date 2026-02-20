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
        <Title title="About LifeDJ" />
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
          
          <p><b>Foundation</b><br />
            LifeDJ was officially founded in 2025, but has roots dating back to 2016. It is based on philosophies of health, well-being and knowledge sharing. <br />&#60;In the form of a growing online repository, it helps people gain inspiration and advice.
          </p>

          <p><b>The Founder</b><br />
            Meet Martin. Based in Denmark, he's not your typical Dane. He is half Egyptian, spent half his life in the UK, 'represents' three further nationalities via marriage, and has travelled across four continents. 
          </p>
          <p><b>Why/Why Not...?</b><br />
            Feedback, good as bad, is always welcome! Drop us a line via the Contact page to help us help you <i>better</i>! 
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;