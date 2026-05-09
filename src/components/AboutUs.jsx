import React from "react";
import Container from "./Container";
import AboutUsImg from "../assets/400400.png";
import FounderImg from "../assets/founder.jpg";
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
        <div className="w-[35%] bg-[#212428] p-10 rounded-lg shadow-md shadow-black overflow-hidden group">
          <div className="overflow-hidden rounded-md">
            <img
              src={AboutUsImg}
              alt="AboutUsImage"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
            <img
              src={FounderImg}
              alt="FounderImage"
              className="group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
        {/* Right part */}
        <div className="w-[61%] flex flex-col gap-7 text-black">
          
          <p><b>Historie</b><br />
            Foto247 blev etableret i Danmark i 2014, med rødder tilbage til 2003. Da startede stifteren sin uddannelse.
            Firmaets filosofi er at tilbyde fantastiske foto-services til gode priser - og fleksibelt at tage hånd om dine kundeønsker.
            Heraf navnet foto247: vi er tilgængelige døgnet/ugen rundt for bedre at kunne hjælpe dig!<br /><br />
            Hvadend du er firmarepræsentant eller privatperson, er det vores fornøjelse at realisere dit næste foto-projekt. 
          </p>

          <p><b>Stifter</b><br />
            Mød Martin. Han er baseret i Danmark, men er langtfra stereotypisk dansk. Med 50% egyptisk blod, var han bosat 11 år i England.
            Han repræsenterer to nationaliteter mere via ægteskab, og har rejst i 40+ lande.<br /><br />
            Martin har en BSc Multimedieproduktion og har arbejdet som prof. fotograf i 7+ år. Hans erfaring tæller en bred vifte af fotogenrer, han har arbejdet over fire kontinenter, og kunder inkluderer private samt VIPs, medieorganisationer og kendte firmaer som BBC og NASA.    
          </p>

          <p><b>Bookings</b><br />
            Bookings foretages nemt: Kontakt os, fortæl hvad du vil have / har brug for, og vi skaber sammen din fotovision.<br />
            Vi håndterer et utal af opgaver, og er du i tvivl om hvorvidt vi kan hjælpe, spørg da bare - så finder vi en løsning!<br />
          </p>

          <p><b>Priser</b><br />
            Vi har <i>konkurrencedygtige priser</i> til både private og virksomheder. Prisen er en kombination af opgave, tid, sted osv.<br />
            Ikke to opgaver er ens. Hermed giver det ikke mening nøjagtigt at angive her på siden. I stedet er her nogle guide-priser:<br />
            OBS: Disse basisrater inkluderer ikke transport, aften/nattillæg, særlig billedleveringsformer eller andre ekstraudgifter.
              <ol class="list-disc mb-8 ml-4">  
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
                  SOS/Krisefotohjælp: Basisrate plus givent tillæg &#40;se Services - SOS&#41; 
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