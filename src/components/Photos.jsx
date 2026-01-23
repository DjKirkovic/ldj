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
const imgTitles = [
    'London Thames North Bank, England',
    'Tokyo Downtown, Japan',
    'Sydney Opera House & Harbour Bridge by sunset, Australia',
    'Biochemist, UK',
    'Egyptian statues, art museum, Denmark',
    'Spiral plant, Malaysia',
    'Griffon over coastline, Benalmádena, Spain',//Eurasian Griffon Vulture
    'Emus, Wilson\'s Promontory, Victoria, Australia',
    'Red Deer, Wollaton Park, Nottingham, England',
    'Ayers Rock / Uluru, Northern Territory, Australia',
    'Whitsunday Islands Beach, Queensland Waters, Australia',
    'Rub\' al Khali Desert / The \'Empty Quarter\', Arabia',
    'Burj Khalifa, Dubai, UAE - World\'s Tallest Building',
    'Petronas Towers, Kuala Lumpur, Malaysia',
    'St. Peter\'s Square, Rome / Vatican City, Italy',
  ];

const Photos = () => {

 

  return (
    <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Photos" />
      </div>
      <div className="grid grid-cols-3 gap-2 pt-10">



        

        {
          Object.values(images).map((image, index) => (
            <img key={index} src={image.default} alt={'Image ${index + 1}'} title={''+imgTitles[index]} className="galleryImg" />
          ))}


      </div>
    </Container>
  );
};

export default Photos;