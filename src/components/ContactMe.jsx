import React, { useState } from "react";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Container from "./Container";
import { contact1 } from "../assets/portfolioImages/contact1.png";

import SocialIcon from "./ui/SocialIcon";

const ContactMe = () => {

  const onSubmit = async (event) => {
    //console.log(event.target[0].value); //extract props
    
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c91e788-b808-4900-a164-b8bea6ee8467");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      document.getElementById("contact-form").reset();
      alert("Thank you for your message!"); 
    }   
  };
//console.log("Success", res);
const inputStyle = "flex-1 rounded-md bg-black text-white px-6 py-2  outline-none border border-lightText placeholder:text-gray-500 focus-within:border-designColor duration-300;"

  return (
    <Container className="border-b border-black">  
      <div className="flex flex-col items-center">
        <Title title="Contact Me" />
      </div>
      <div className="flex gap-10 pt-10">
        <div className="w-1/3 bg-stone-950/50 p-10 rounded-lg group">
          <div className="overflow-hidden rounded-lg">
            <img
              src={contact1}
              alt="contact image"
              className="rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="py-5 flex flex-col gap-2">
            <p className="text-lg text-white font-bold">Martin</p>
            <p className="text-lg font-medium">Founder, LifeDJ</p>
            <p className="uppercase">Find me on:</p>
          </div>
          <SocialIcon />
        </div>
        <form id="contact-form" onSubmit={onSubmit} className="w-2/3">
          <div className=" bg-stone-950/50 p-10 rounded-lg flex flex-col gap-10">
            <div className="flex justify-between gap-7">
              <div className="flex flex-1 flex-col gap-3">
                <p className="text-sm uppercase">Your name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputStyle}
                  name="name"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <p className="text-sm uppercase">Phone Number</p>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className={inputStyle}
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase">Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className={inputStyle}
                name="email"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase">Subject</p>
              <input
                type="text"
                placeholder="Define a subject"
                className={inputStyle}
                name="subject"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm uppercase">Your Message</p>
              <textarea
                type="text"
                placeholder="Enter your message..."
                className={inputStyle}
                cols={1}
                rows={3}
                name="message"
              />
            </div> 
            <button
              type="submit"
              className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColour duration-300 uppercase hover:text-white"
            >
              Send Message
            </button>
          
          </div>
        </form> 
      </div>
    </Container>
  );
};

export default ContactMe;