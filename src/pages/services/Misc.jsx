import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import mi from "../../assets/pages/mi.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

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
                 src={mi}
                 alt="div. foto"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Andre billedgenrer<br /></b></p>

Vi tilbyder fotografering af mange andre genrer end hidtil nævnte, fx:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Luftfotos &#40;med drone&#41;
                </li>
                <li> 
                  PR / pressedækning
                </li>
                <li> 
                  Mode, inkl. tøj og livsstil
                </li>
                <li> 
                  Stock - billeder af lige netop det motiv du søger til projektet, udgivelsen eller at hænge på væggen 
                </li>
                <li> 
                  Research - fx. til supplement af skrevne værker
                </li>
                <li> 
                  Kultur - fx. religion, skikke eller ritualer
                </li>
                <li> 
                  Mad - anretninger, restaurantmenuer m.m.
                </li>
                <li> 
                  Dokumentar - alle former for seriebilleder over tema
                </li>
  </ol>

Endvidere tilbydes videofilmning efter dine behov. Kontakt os og hør nærmere om vores mange muligheder til dig.

    </Container>
  );
};

export default Misc;