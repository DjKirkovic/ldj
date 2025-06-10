import { AiOutlineMenu } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import {
  imgFive,
  imgFour,
  imgOne,
  imgSix,
  imgThree,
  imgTwo,
} from "../assets/getImage";

export const featuresData = [
  {
    id: 1,
    icon: <AiOutlineMenu />,
    title: "Life Coaching",
    descripton:
      "Serving of useful advice.",
  },
  {
    id: 2,
    icon: <IoBookOutline />,
    title: "Photography",
    descripton:
      "Coverage of wide use cases.",
  },
  {
    id: 3,
    icon: <AiOutlineMenu />,
    title: "Specialist IT Services",
    descripton:
      "Support, web and app needs.",
  },
  {
    id: 4,
    icon: <AiOutlineMenu />,
    title: "Project Management",
    descripton:
      "Certified guidance on various projects.",
  },

];

export const portfolioData = [
  {
    id: 101,
    title: "A",
    subtitle: "Gallery",
    img: imgOne,
    icon: <AiOutlineMenu />,
    link: "https://lifedj.net",
  },
  {
    id: 102,
    title: "B",
    subtitle: "Video",
    img: imgTwo,
    link: "https://lifedj.net",
  },
  {
    id: 103,
    title: "C",
    subtitle: "External Link",
    img: imgThree,
    icon: <AiOutlineMenu />,
    link: "https://lifedj.net",
  },
  {
    id: 104,
    title: "D",
    subtitle: "Gallery",
    img: imgFour,
    icon: <AiOutlineMenu />,
    link: "https://lifedj.net",
  },
  {
    id: 105,
    title: "E",
    subtitle: "Gallery",
    img: imgFive,
    icon: <AiOutlineMenu />,
    link: "https://lifedj.net",
  },
  {
    id: 106,
    title: "F",
    subtitle: "Gallery",
    img: imgSix,
    icon: <AiOutlineMenu />,
    link: "https://lifedj.net",
  },
];