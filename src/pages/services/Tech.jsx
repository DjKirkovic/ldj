import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import te from "../../assets/pages/te.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Tech = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Teknik / Udstyr" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={te}
                 alt="Studie"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Info på vej...<br /></b></p>

    </Container>
  );
};

export default Tech;