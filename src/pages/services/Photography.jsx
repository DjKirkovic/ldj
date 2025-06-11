import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";

const Photography = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Photography" />
        </div>
   </div>

    <p><b>Subheader</b><br />
        abc.<br />def 
    </p>
   
    </Container>
  );
};

export default Photography;