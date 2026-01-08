import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-primaryColour">
      <Container className="flex items-center text-lightText justify-between py-5">
        <p className="text-sm hover:text-white duration-300 ">
          All rights reserved {'\u00A9'} 2026
        </p>
      </Container>
    </div>
  );
};

export default Footer;