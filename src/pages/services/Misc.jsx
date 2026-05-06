import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import toplife from "../../assets/toplife.jpg";

const Misc = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Diverse Foto" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={toplife}
                 alt="div. foto"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>abc<br /></b></p>

    </Container>
  );
};

export default Misc;