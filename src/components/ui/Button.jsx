import React from "react";

const Button = (props) => {
  return (
    <button
      className={`text-designColour/70 text-sm font-semibold bg-gradient-to-tr from-black to-primaryColour rounded-md hover:bg-gradient-to-tr hover:from-primaryColour hover:to-black hover:text-designColour duration-300 hover:-translate-y-1 ${props.className}`}
    >
      {props.title ? props.title : "Hire Me"}
    </button>
  );
};

export default Button;