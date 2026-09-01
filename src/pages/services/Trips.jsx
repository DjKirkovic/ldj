import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import tr from "../../assets/pages/tr.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Trips = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Rejser / Ture" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={tr}
                 alt="Rejse"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Har du fototur- eller rejsebehov/-lyst? Så kig her...<br /></b>
Der er rigtig mange typer behov i denne kategori, og vi har løsninger til de fleste.<br />
Få hjælp til at opnå netop dine ønsker!<br /><br />

Eksempler på fototur-/rejseservices:

<ol class="list-disc mb-8 ml-4">  
                 <li> 
                  Workshop / On-location &#40;1-4 timers ture&#41;
                </li>
                <li> 
                  Udflugt &#40;1-2 dages ture&#41;
                </li>
                <li> 
                  Fotorejse &#40;2-4 dages rejser&#41;
                </li>
                <li> 
                  Arrangementrejse &#40;dækning af dit arrangement&#41;
                </li>
                </ol>

Vi tilbyder services ifm.:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Enkeltpersoner eller grupper
                </li>
                <li> 
                  Temaer / fotoemner
                </li>
                <li> 
                  Lokationer i Danmark eller udenlands
                </li>
                <li> 
                  Perioder fra halvdags- til flere dages varighed 
                </li>
                <li> 
                  Særbestillinger - dit særlige ønske &#40;alt fra personlig fotoreportage til drone-luftdækning&#41;
                </li>
                </ol>

Vi står klar og er fleksible, så kontakt os og hør nærmere!<br />
</p>
    </Container>
  );
};

export default Trips;