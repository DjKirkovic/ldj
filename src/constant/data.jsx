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
    title: "Communications",
    description:
      "Articles, reviews and insights.",
    //link: onClick={()=>console.log(item)}
    link: "#/services/comms",
  },
  {
    id: 2,
    icon: <AiOutlineMenu />,
    title: "Project Management",
    description:
      "Certified guidance on various projects.",
    link: "#/services/projects",
  },
  {
    id: 3,
    icon: <IoBookOutline />,
    title: "Photography",
    description:
      "Coverage of wide use cases.",
    link: "#/services/photography",
  },
  {
    id: 4,
    icon: <AiOutlineMenu />,
    title: "Life Coaching",
    description:
      "Serving of useful advice.",
    link: "#/services/life",
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