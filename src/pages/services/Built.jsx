import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import ar from "../../assets/pages/ar.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Built = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Byg" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={ar}
                 alt="Arkitektur"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Storartet bygningsværk, værdigt afbildet!<br /></b>
Hvadend du ønsker at annoncere salgs-/lejeboliger, dække bygningsopførelser eller noget helt tredje, har vi en løsning.<br />
Maksimér din indkomst, bygningshistorik, profil/indtryk eller andet med vores hjælp!<br /><br />

Eksempler på produkter:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Boliger &#40;leje/salg&#41;
                </li>
                <li> 
                  Bygningsværker &#40;projektopførelser, bygningsfaser, vedligehold,... &#41;
                </li>
                <li> 
                  Landemærker &#40;slot, kirke/katedral, tårn, bro,...&#41;
                </li>
                <li> 
                  Afbilding/Portrættering &#40;arkiv, historik,...&#41;
                </li>
                <li> 
                  Serie-/dokumentar &#40;bygningsrapportage&#41;
                </li>
                <li> 
                  Arkitektonisk &#40;aspekter, facetter osv.&#41; 
                </li>
                </ol>

Vi tilbyder:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  On-location engangsbesøg på din valgte lokation
                </li>
                <li> 
                  Serie-/Gentagen dækning &#40;din lokation, udvalgte datoer&#41;
                </li>
                <li> 
                  Særbestillinger - dit foretrukne motiv &#40;fx landemærket London Big Ben eller Eiffeltårnet &#41;
                </li>
                </ol>

Vi er fuldt fleksible mht. motiv, lokation og tid, så kontakt os og hør nærmere!<br />
</p>

    </Container>
  );
};

export default Built;