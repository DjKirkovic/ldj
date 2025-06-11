import React from "react";

const iconstyle = "text-2xl text-red-500";//designColor
const FeatureCard = ({ item }) => {
  return (
    <div className="w-full p-10 bg-black flex flex-col gap-5 rounded-lg shadow-lg shadow-gray-500/10">
      <span className={iconstyle}>{item.icon}</span>

      <p className="text-lg font-bold">{item.title}</p>
      <p className="text-base font-medium">{item.description}</p>
      <IoMdArrowRoundForward className={iconstyle} />
    </div>
  );
};

export default FeatureCard;