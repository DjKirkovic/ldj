import React from "react";
import Container from "./Container";
import AboutUsImg from "../assets/400400.png";
import FounderImg from "../assets/founder4x4.jpg";
import ComposeImg from "../assets/compose4x4.jpg";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";

const AboutUs = () => {
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Om foto247" />
      </div>
      <div className="flex justify-between pt-10">
        {/* Left part */}
        <div className="w-[35%] bg-[#212428] p-2 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden flex h-screen rounded-md">
            <div class="m-auto">
              <img
                src={AboutUsImg}
                alt="AboutUsImage"
                className="rounded-md"
              />
              <img
                src={FounderImg}
                alt="FounderImage"
                className="rounded-md"
              />
              <img
                src={ComposeImg}
                alt="composeImage"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        {/* Right part */}
        <div className="w-[61%] flex flex-col gap-7 text-black">
          
          <p><b>Hvem er vi? &#40;kort fortalt&#41;</b><br />
            Foto247 tilbyder professionelle fotos og foto-services.<br />
            Vi er 'on call' hele døgnet/ugen for bedre at kunne hjælpe dig / dit firma!
          </p>

          <p><b>Historie</b><br />
            Foto247 blev etableret i Danmark i 2014, med rødder tilbage til 2003. Da startede stifteren sin uddannelse.<br />
            Siden har alt fra privatpersoner til lokalsamfund - og endda NASA - fået skabt resultater med vores hjælp. 
          </p>

          <p><b>Stifter</b><br />
            Mød Martin. Han er dansker, men langtfra stereotypisk. Han taler 4 sprog og er i en 5-nationalitetsfamilie.<br /> 
            Bosat 11 år i Storbritannien, har han læst 3 videregående uddannelser, og har rejst i 40+ lande.<br />
            Martin har bl.a. en BSc Multimedieproduktion, været prof. fotograf i 7+ år og elsker top kundeservice.<br />
            Hans erfaring tæller mange fotogenrer, arbejde over 4 kontinenter, og kunder som VIPs, BBC, MIT og NASA.    
          </p>

          <p><b>Bookings</b><br />
            Bookings foretages nemt: Kontakt os, fortæl hvad du har brug for, og vi skaber sammen din fotovision.<br />
            Vi håndterer et utal af opgaver. Er du i tvivl om hvorvidt vi kan hjælpe, spørg da bare, så finder vi en løsning!<br />
          </p>

          <p><b>Priser</b><br />
            Vi har <i>konkurrencedygtige priser</i> til private og virksomheder. Prisen er en kombination af opgave, tid, sted osv.<br />
            Ikke to opgaver er ens, hermed er det umuligt nøjagtigt at angive. I stedet er her nogle guide-priser:<br />
            &#40;<i>OBS: Disse inkluderer ikke transport, aften-/weekendtillæg, særlige leveringsformer eller andre ekstraudgifter</i>&#41;<br /><br />
              <ol class="list-disc mb-1 ml-4">  
                <li>
                  Basisrate: 500kr / time &#40;fx Portrætter, Produkter, Foredrag og Rådgivning&#41; 
                </li>
                <li> 
                  Events: 700kr / time. 2.000 / 3 timer. 3.000 / 5 timer. 5.000 / 8 timer 
                </li>
                <li> 
                  Natur/Arkitektur/Stock fotos: Pris baseret på billedbehov, fremfor timepris
                </li>
                <li> 
                  Bryllup: Eventsrate plus 200kr / time &#40;for årsager, se Services - Events&#41;
                </li>
                <li> 
                  SOS/Krisefotohjælp: Basisrate plus eventuelt tillæg &#40;se Services - SOS&#41; 
                </li>
                <li> 
                  Rejser/Ture: Givet typisk længere varighed, tilbydes rater per tur fremfor tidsbaseret &#40;se Services - Ture&#41; 
                </li>
              </ol>
            </p>
          <p><b>Feedback</b><br />
            Feedback, positiv som negativ, er altid velkommen. Gå til Kontakt siden, og hjælp os til at hjælpe dig <i>bedre</i>! 
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;