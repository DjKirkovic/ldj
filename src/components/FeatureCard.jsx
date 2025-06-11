import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const FeatureCard = ({ item }) => {
const iconstyle = "text-2xl text-green-500";//designColor
  return (
    <a href={item.link}>
    <div className="w-full p-10 bg-black flex flex-col gap-5 rounded-lg shadow-lg shadow-gray-500/10">
      <span className={iconstyle}>{item.icon}</span>
      <p className="text-lg font-bold">{item.title}</p>
      <p className="text-base font-medium">{item.description}</p>
    </div>
    </a>
  );
};

export default FeatureCard;