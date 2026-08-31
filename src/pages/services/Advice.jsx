import { Link } from "react-router-dom";
import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import ed from "../../assets/pages/ed.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Advice = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Indsigt & Rådgivning" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={ed}
                 alt="Rådgivning"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Mangler du indsigt, rådgivning eller har undervisningsbehov?<br /></b>
Vi hjælper med en bred vifte af services, så du kan få fotorådgivning, -viden eller -undervisning til dit publikum.<br /><br />

Eksempler på fotoområder:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Udstyr
                </li>
                <li> 
                  Anvendelse 
                </li>
                <li> 
                  Rådgivning
                </li>
                <li> 
                  Undervisning &#40;fx foredrag, tutoring, 1:1 assistance&#41;
                </li>
                </ol>

Vi tilbyder flere leveringsformer:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Personligt fremmøde
                </li>
                <li> 
                  Telefonisk assistance
                </li>
                <li> 
                  Skriftlig leverance
                </li>
                </ol>

Med bred erfaring og fleksible løsninger, styrer vi dig/jer sikkert i mål med dine/jeres ønsker.<br />

Haster dit behov? Så klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
</p>

    </Container>
  );
};

export default Advice;