import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import st from "../assets/cats/studio.jpg";
import ev from "../assets/cats/event.jpg";
import na from "../assets/cats/natur.jpg";
import pr from "../assets/cats/produ.jpg";
import ar from "../assets/cats/archi.jpg";
import mi from "../assets/cats/misc.jpg";
import ta from "../assets/cats/talks.jpg";
import ed from "../assets/cats/teach.jpg";
import tr from "../assets/cats/trips.jpg";
import co from "../assets/cats/coope.jpg";
import te from "../assets/cats/tech.jpg";
import so from "../assets/cats/sos.jpg";

const pics = [st, ev, na, pr, ar, mi, ta, ed, tr, co, te, so];

const FeatureCard = ({ item }) => {
//const iconstyle = "text-2xl text-green-500";//designColor
  return (
    <a href={item.link}>
    <div className="w-full p-10 bg-black flex flex-col gap-2 rounded-lg shadow-lg shadow-gray-500/10">
      <img src={pics[(item.id)-1]} />
      <p className="text-lg font-bold">{item.title}</p>
      <p className="text-base font-medium">{item.description}</p>
    </div>
    </a>
  );
};

export default FeatureCard;