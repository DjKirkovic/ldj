import React from "react";
import Container from "../../components/Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import so from "../../assets/pages/so.jpg";
//const pics = [st, ar, na, pr, ev, mi, ta, ed, tr, co, te, so];

const SOS = () => {
  return (
    <Container className="border-b border-black">
    <div className="bg-primaryColour text-gray-200">  
        <Subtitle title="" />
        <div className="flex flex-col items-center mb-10">
            <Title title="Services: SOS" />
        </div>
   </div>

<div className="overflow-hidden rounded-lg">
               <img
                 src={so}
                 alt="SOS"
                 className="rounded-md group-hover:scale-110 duration-500"
               />
     </div>


<p><br /><b>SOS krisehjælp er guld værd...<br /></b>
Hvis du står med et SOS-behov, så læs videre!<br />
Bemærk at assistance/opgaver som ikke er af SOS kaliber &#40;hverken tidspressende eller tilstrækkeligt vigtige/alvorlige&#41; behandles særskilt.<br /><br />
Kontakt os på bedst mulige måde i forhold til din forespørgsels prioritet:<br />
              <ol class="list-decimal mb-8 ml-4">  
                <li> 
                  Akut behov - du behøver assistance NU!
                </li>
                <li> 
                  Haster - du skal bruge hjælp snarest muligt
                </li>
                <li> 
                  Vigtigt assistancebehov - den hjælp du søger har betydelig påvirkning eller følger
                </li>
                </ol>

De 3 beredskabsniveauer &#40;1=højeste og 3=laveste&#41; kræver alle typisk telefonisk henvendelse.<br />
Alternativt kan webformularen på 'Kontakt' siden bruges - skriv da prioritetsnummeret i emnefeltet.<br />
OBS: Sendes en besked, gives ingen garanti for hurtigt svar/assistance, især udenfor normal arbejdstid.<br /><br />

Eksempler på SOS assistance/opgaver er, at du:

<ol class="list-disc mb-8 ml-4">  
                <li> 
                  Behøver en fotograf som følge af fx underkendt behov &#40;din opgave kræver yderligere fotografer&#41;, udeblivelse eller sygdom
                </li>
                <li> 
                  Mangler hjælp/rådgivning eller udstyr
                </li>
                <li> 
                  Har brug for assistance ift. vigtig levering af billeder
                </li>
                <li> 
                  Er på vej på en tur/rejse, hvor den hjælp du behøver har vigtig impakt herpå
                </li>
                <li> 
                  Skal gennemføre en ordre eller et køb, som er tidspressende/korttidsbestemt
                </li>
                </ol>
Hvis du behøver hjælp/vejledning, kontakt os da endelig, hvormed vi kan guide dig sikkert videre/i mål.
</p>

    </Container>
  );
};

export default SOS;