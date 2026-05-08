import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import st from "../../assets/pages/st.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Studio = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Portræt" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={st}
                 alt="Studie"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Vis dig selv - eller dit kæreste eje - på den bedste måde, og skab mærkbare resultater...<br /></b>
Portrætbilleder handler ikke bare om smil, tøj og flygtige øjeblikke.<br />
Grib nogle af de uendelige muligheder for at skabe noget større!<br /><br />

Eksempler på portrætter, der kan give dig eller dine kære stor værdi, er:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Headshots &#40;hoved- og skulderindramning&#41;, som er gode til mange formål fx dine onlineprofiler, hilsner eller gavekort til venner/familie
                </li>
                <li> 
                  Parfotos - tag kæresten, vennen/veninden eller manden/konen med! 
                </li>
                <li> 
                  Gruppebilleder - familie, børn, sportsholdet eller de endnu større selskaber
                </li>
                <li> 
                  Kæledyret - hunden, katten, hamsteren eller hesten, du bare må have top billeder af!
                </li>
                <li> 
                  Bilen, motorcyklen, full-size outfittet, yndlingsmusikinstrumentet...eller noget helt femte!
                </li>
                </ol>
Når først drømmebilledet er taget, hjælper vi dig selvfølgelig hellere end gerne videre derfra.<br />
Det kan være mht. redigering/retouching, udgivelse på web/i print eller hvad der nu skal til.<br />
Først når du siger vi er i mål, er vi tilfredse og lader dig nyde resultatet! 

</p>

    </Container>
  );
};

export default Studio;