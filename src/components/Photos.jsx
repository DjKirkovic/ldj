import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { imgTitles } from "../constant/imgTitles";

//import script from "../constant/script.js";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import PortfolioCard from "./ui/PortfolioCard";

//import { portfolioData } from "../constant/data";
// Dynamically import all images in the portfolioimages folder:
const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true });


const Photos = () => {

 

  return (
    <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-10">



        

        {
          Object.values(images).map((image, index) => (
            <img key={index} src={image.default} alt={'Image ${index + 1}'} title={''+imgTitles[index]} />
          ))}


      </div>
    </Container>
  );
};

export default Photos;