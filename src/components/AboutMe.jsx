import React from "react";
import Container from "./Container";
import AboutMeImg from "../assets/aboutMe.jpg";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const AboutMe = () => {
  return (
    <Container className="flex justify-between ">
      {/* Left part */}
      <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
        <div className="h-[500px] overflow-hidden rounded-md">
          <img
            src={AboutMeImg}
            alt="aboutMeImage"
            className="h-300 group-hover:scale-110 duration-200 rounded-md"
          />
        </div>
      </div>
      {/* Right part */}
      <div className="w-[55%] flex flex-col justify-center gap-7">
        <Subtitle title="" />
        <Title title="About Me" />
        <p>
          desc 1
        </p>
        <p>
          desc 2
        </p>
        <Button title="Learn more" className="w-40 h-14" />
      </div>
    </Container>
  );
};

export default AboutMe;