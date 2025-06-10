import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-5">
      <a href="https://github.com/DjKirkovic" className="portfolioIconStyle">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/martinkirk/" className="portfolioIconStyle">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcon;