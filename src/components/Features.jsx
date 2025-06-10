import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { featuresData } from "../constant/data";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <Container className="border-b border-black flex flex-col">
      <Subtitle title="" />
       <div className="flex flex-col items-center mb-10">
        <Title title="Services" />
      </div>
      
      <div className="grid grid-cols-3 gap-x-5 gap-y-7">
        {featuresData.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Features;