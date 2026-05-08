import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import na from "../../assets/pages/na.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Nature = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Natur" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={na}
                 alt="Natur"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Info på vej...<br /></b></p>

    </Container>
  );
};

export default Nature;