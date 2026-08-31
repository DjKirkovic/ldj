import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import pr from "../../assets/pages/pr.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Stuff = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Produkt" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={pr}
                 alt="Produkt"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Fremvis og sælg dit produkt bedre!<br /></b>
Du har det perfekte produkt, men mangler retfærdiggørende billeder?<br />
Udnyt potentialet ved at lade os hjælpe!<br /><br />

Eksempler på produkter:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Smykker
                </li>
                <li> 
                  Tøj/Mode 
                </li>
                <li> 
                  Boligudstyr
                </li>
                <li> 
                  Elektronik
                </li>
                <li> 
                  Skønhed/Helse
                </li>
                <li> 
                  Kreativt/Dekorationer
                </li>
                </ol>

Vi tilbyder:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Studie-baserede 'product shoots'
                </li>
                <li> 
                  On-location &#40;dit produkt på din foretrukne lokation&#41;
                </li>
                <li> 
                  In situ - dit produkt i brugssituationer &#40;i fremstilling, på udstilling, eller i brug&#41;
                </li>
                </ol>

Dine ønsker er vores prioritet, så kontakt os for en snak om muligheder.<br />
</p>
    </Container>
  );
};

export default Stuff;