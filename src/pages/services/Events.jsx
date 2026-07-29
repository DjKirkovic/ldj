import { Link } from "react-router-dom";
import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import ev from "../../assets/pages/ev.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Events = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Events" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={ev}
                 alt="Studie"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Fang øjeblikkene - og del/gense dem!<br /></b>
Inden for eventgenren er der oceaner af muligheder ifm. foto/video.<br />
Hvorfor ikke få fotos og videoer af dit/jeres event, og lade lykken vare ved?!

Eksempler på events:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Bryllup
                </li>
                <li> 
                  Firmaarrangement 
                </li>
                <li> 
                  Konfirmation
                </li>
                <li> 
                  Udstilling / show
                </li>
                <li> 
                  Konference
                </li>
                <li> 
                  Koncert / optræden
                </li>
                </ol>

Vi tilbyder:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Enkeltarrangement
                </li>
                <li> 
                  Flerarrangementløsninger &#40;fx tour eller serieevents&#41;
                </li>
                <li> 
                  Verden - dit event dækket udenlands
                </li>
                </ol>

Med bred eventerfaring fra store arrangementer på tværs af Europa, styrer vi dig/jer sikkert i mål med dine/jeres ønsker.<br />

Haster dit event? Så klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
</p>

    </Container>
  );
};

export default Events;