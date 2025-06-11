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
      <div className="text-black id='news1'">
        abc
      </div>

      <div className="text-black id='news2' pb-60">
        abc
      </div>

      <div className="text-black id='news3' pb-60">
        abc3
      </div>
      <div className="text-black id='news4' pb-60">
        abc4
      </div>
      <div className="text-black id='news' pb-30">
        abc5
      </div>
    </Container>
  );
};

export default Features;