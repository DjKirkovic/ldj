import { Link } from "react-router-dom";
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

<p><br /><b>Åbn øjnene for helt andre verdener!<br /></b>
Landskaber og dyr kan bare nogle ting som ikke findes andre steder.<br />
Måske trænger din firmavæg eller stue til nogle uimodståelige motiver og farver?!<br /><br />

Eksempler på natur:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Landskab &#40;fx solop-/nedgang, cityscape, bjerge&#41;
                </li>
                <li> 
                  Dyreliv 
                </li>
                <li> 
                  Planter
                </li>
                <li> 
                  Miljøer / habitater &#40;fx skov, strand, hav, plantage&#41;
                </li>
                <li> 
                  Geografi &#40;fx ørken, byliv, udsigt/vista&#41;
                </li>
                <li> 
                  Destinationer &#40;fx Rom, Tokyo, London&#41;
                </li>
                </ol>

Vi tilbyder:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Stock fotos / katalogbilleder
                </li>
                <li> 
                  Bestillinger &#40;'you order, we shoot'&#41;
                </li>
                <li> 
                  Rådgivning - tag dine egne fotos på din/jeres tur
                </li>
                </ol>

Hvadend dine behov, har vi altid nogle muligheder. Klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
</p>

    </Container>
  );
};

export default Nature;