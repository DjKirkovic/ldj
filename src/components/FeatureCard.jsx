import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import st from "../assets/cats/studio.jpg";
import ar from "../assets/cats/archi.jpg";

const pics = [st, ar, "d"];

const FeatureCard = ({ item }) => {
//const iconstyle = "text-2xl text-green-500";//designColor
  return (
    <a href={item.link}>
    <div className="w-full p-10 bg-black flex flex-col gap-5 rounded-lg shadow-lg shadow-gray-500/10">
      <img src={pics[(item.id)-1]} />
      <p className="text-lg font-bold">{item.title}</p>
      <p className="text-base font-medium">{item.description}</p>
    </div>
    </a>
  );
};

export default FeatureCard;