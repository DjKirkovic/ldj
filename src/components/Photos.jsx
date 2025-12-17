import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import PortfolioCard from "./ui/PortfolioCard";
//import { portfolioData } from "../constant/data";
// Dynamically import all images in the portfolioimages folder:
const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true });
const imgTitles = [1,2,3,4,5,6,7,8,9,10,11,'a'];

const Photos = () => {

 

  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Photos" />
      </div>
      <div className="grid grid-cols-3 gap-10 pt-10">
        



        

        {
          Object.values(images).map((image, index) => (
            <img key={index} src={image.default} alt={'Image ${index + 1}'} title={''+imgTitles[index]} className="galleryImg" />
          ))}


      </div>
    </Container>
  );
};

export default Photos;