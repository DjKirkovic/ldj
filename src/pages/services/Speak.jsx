import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import ta from "../../assets/pages/ta.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Speak = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Foredrag" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={ta}
                 alt="Foredrag"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Foredrag om fotografering, fotografopgaver, oplevelser/erfaringer, udstyr og meget mere<br /></b>
Du mangler en foredragstaler på fotoområdet? Læs nærmere her!<br />
Vi har 10+ års professionel fotoerfaring på tværs af lande, kulturer, opgaver og kundespænd. Dét betyder gode historier, bred forståelse, stærk formidlingsevne og ikke mindst topkvalitets visuel inspiration.
Hermed kan du trygt stole på vores hjælp med levering fra en bred foredragsvifte ved dit næste arrangement!<br /><br />

Eksempler på foredragsservices:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Konference &#40;indslag som del i stort arrangement&#41;
                </li>
                <li> 
                  Foredrag &#40;tale over valgfrit fotoemne&#41;
                </li>
                <li> 
                  Stand-up &#40;humoristisk leverede fotoerfaringer&#41;
                </li>
                <li> 
                  International &#40;English lecture/talk on photography, in Denmark or overseas&#41;
                </li>
                </ol>

Vi tilbyder:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Enkelt indslag - 15 minutter til 1 time
                </li>
                <li> 
                  Serie-/Gentagen dækning &#40;din lokation, udvalgte datoer&#41;
                </li>
                </ol>

Hvadend ovenstående dækker dit behov eller du har andre ønsker, så kontakt os og hør nærmere!<br />
</p>

    </Container>
  );
};

export default Speak;