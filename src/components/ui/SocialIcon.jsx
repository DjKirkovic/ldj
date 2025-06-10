import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const portfolioIconStyle = "bg-stone-800 w-10 h-10 inline-flex text-white text-base justify-center items-center rounded-md hover:text-designColor duration-500 hover:-translate-y-2 hover:bg-black shadow-md shadow-gray-200/10 hover:shadow-designColor/10;"
const SocialIcon = () => {
  return (
    <div className="flex items-center gap-5">
      <a title="Github" href="https://github.com/DjKirkovic" target="_blank" rel="noopener noreferrer" className={portfolioIconStyle}>
        <FaGithub />
      </a>
      <a title="LinkedIn" href="https://www.linkedin.com/in/martinkirk/" target="_blank" rel="noopener noreferrer" className={portfolioIconStyle}>
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcon;