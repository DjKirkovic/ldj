import { Link } from "react-router-dom";
import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import co from "../../assets/pages/co.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const Coop = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: Samarbejde" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={co}
                 alt="Samarbejde"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>

<p><br /><b>Vi er klar til at hjælpe dig, dit firma eller din organisation!<br /></b>
Mangler du udstyr, ekstra fotograf, sparring eller ekstra hænder til workshop/foredrag?<br />
Vi kan hjælpe dig med at nå i mål!<br /><br />

Eksempler på vores samarbejdsservices:

<ol class="list-disc mb-8 ml-4">  
                 <li> 
                  Udstyrslån
                </li>
                <li> 
                  Fotografudlejning/-koordinering
                </li>
                <li> 
                  Rådgivning/sparring
                </li>
                <li> 
                  Arrangementbistand &#40;direktion, lyssætning, projektkoordinering, foredragstaler&#41;
                </li>
                <li> 
                  Reklamering &#40;mystery shopping, branding/kommunikation, visuelt materiale&#41;
                </li>
                </ol>

Vi tilbyder services til bl.a.:
<ol class="list-disc mb-8 ml-4">
                <li> 
                  Enkeltpersons- som større virksomheder
                </li>
                <li> 
                  Fotograf-/visuelle-/reklamevirksomheder
                </li>
                <li> 
                  Arrangementafholdere
                </li>
                <li> 
                  Uddannelsessteder og offentlige virksomheder  
                </li>
                <li> 
                  VIPs - dine specifikke behov dækket
                </li>
                </ol>

Med bred erfaring og fleksible løsninger, kan du stole trygt på vores ekspertise.<br />

Haster dit behov? Så klik på <Link to={"kontakt"} class="text-blue-500 hover:text-green-500">kontakt</Link> og ring/skriv!
</p>
    </Container>
  );
};

export default Coop;