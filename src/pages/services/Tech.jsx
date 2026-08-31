import { Link } from "react-router-dom";
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
                 alt="Udstyr"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Søger du info og råd om fotoudstyr, -teknik og anvendelse?<br /></b>
Udstyr er et enormt bredt emne, og selvom vi aldrig kan komme 'helt rundt', kan vi hjælpe dig godt på vej.<br /><br />

Eksempler på tilbudt udstyrshjælp:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Kamera-/objektiv-/systemvalg
                </li>
                <li> 
                  Fotoanvendelser/områder/formål
                </li>
                <li> 
                  Teknikker/metoder/begreber i fotografering
                </li>
                <li> 
                  Billedbehandling/redigering
                </li>
                <li> 
                  Lyssætning
                </li>
                <li> 
                  Videooptagelse
                </li>
                <li> 
                  Køb/salg
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

Kontakt os og hør nærmere ift. hvad vi kan tilbyde dig eller dit firma!<br />

Haster dit behov? Så klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
</p>

    </Container>
  );
};

export default Tech;