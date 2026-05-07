import React from "react";
import Container from "./Container";
import AboutUsImg from "../assets/400400.png";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const AboutUs = () => {
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Om foto247" />
      </div>
      <div className="flex justify-between pt-10">
        {/* Left part */}
        <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutUsImg}
              alt="AboutUsImage"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
        {/* Right part */}
        <div className="w-[61%] flex flex-col gap-7 text-black">
          
          <p><b>Historie</b><br />
            Foto247 blev officielt stiftet i 2026, men har rødder tilbage til 2003. Da startede dets stifter nemlig en medieproduktionsuddannelse.
          </p>

          <p><b>Stifter</b><br />
            Mød Martin. Han er baseret i Danmark, men er langtfra stereotypisk dansk. Med 50% egyptisk blod, var han endvidere bosat 11 år i England.<br />
            Han repræsenterer yderligere to nationaliteter via ægteskab, og har rejst i 40+ lande.<br />
            Martin har en BSc Multimedieproduktion & har arbejdet som prof. fotograf i 7+ år. Hans erfaring tæller en bred vifte af fotogenrer, han har arbejdet over fire kontinenter, og kunder inkluderer både private og VIPs, medieorganisationer og kendte firmaer som BBc og NASA.    
          </p>
          <p><b>Feedback</b><br />
            Feedback, positiv som negativ, er altid velkommen. Navigér til Kontakt siden, og hjælp os til at hjælpe dig <i>bedre</i>! 
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;