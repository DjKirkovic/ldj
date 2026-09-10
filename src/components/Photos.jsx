import React, {useState} from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import Pics from "./Pics";
import { slides } from "../constant/slides";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Counter, Captions, Fullscreen, Zoom, Thumbnails} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";


const Photos = () => {
  
  const [index, setIndex] = useState(-1);
  
  const CATS = ['Arkitektur', 'Event', 'Bryllup', 'Portræt', 'Produkt', 'Marketing', 'Sport', 'Dyreliv', 'Landskab', 'Diverse', 'Alle'];
  // 01 Location / cityscapes, 02 Event, 03 Wedding, 04 Portrait, 05 Product, 06 Marketing (/Branding), 07 Sport, 08 Wildlife, 09 Landscape (/Nature incl. astro), 10 Cuisine (Food/drink)
  
  const [selectedCats, setSelectedCats] = useState([]);
  
  const [fslides, setSlides] = useState([]);

  const handleToggle = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat)
    ? prev.filter((item) => item !== cat) // Remove if already checked
        : [cat]                     // Add if unchecked
      );
      
      const changedCat = cat;
      const indexI = CATS.indexOf(changedCat)+1; //assign single int (1-10) representing 10 cats
      const newSlides = indexI == 11 ? //if 11 (1st/if statement), show all. Otherwise, show chosen cat's thumbnail images
        slides
        :
        slides.filter(slide => slide.cat === ""+indexI)
        
const modArray = newSlides.map(o => ({ ...o, width: 2100 }));
/*
        for (const s in newSlides)
            {
              newSlides[s].width = 1400,
              newSlides[s].height = 932
              //newSlides[s].src = newSlides.src,
              s.description = newSlides.description,
              s.width = 1400,
              s.height = 932
              
            }
          }

          */

        setSlides(modArray);


    };
       
    return (
      <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>
      <div> 
      
      {/* <button type="button" onClick={() => setOpen(true)}>Open Lightbox</button> */}
        <div style={{ display: 'inline-flex', color: 'green', width: '100vw', alignItems: "center", justifyContent: "center" }}> 
         {/*  <p>Vælg kategori(er):</p> */}
          {CATS.map((cat) => (
            <label key={cat} style={{ display: 'inline', padding: '0px', borderLeft: '0px', letterSpacing: '0px', fontWeight: cat === "Alle" ? "bold" : "unset"}}>
              <input type="radio" checked={selectedCats.includes(cat)} style={{display: 'inline-flex', marginRight: '0px'}} onChange={() => handleToggle(cat)}/>
              {cat}
            </label>
          ))}
          
          {/* <button type="button" visibility={fslides.length == 0 ? "hidden" : "visible"} onClick={() => setOpen(true)}>Open Lightbox</button> */}
        </div>
          <div style={{display:'flex', color: 'black', label: fslides.length == 0 ? "abc def" : "", visibility: fslides.length == 0 ? "hidden" : "visible", alignItems: "center", justifyContent: "center"}}>Antal billeder vist: {<span style={{color: "black", paddingLeft: '5px',}}>{" "+fslides.length.toString()}</span>}</div>
          <div style={{display:'flex', color: "white", width: fslides.length == 0 ? "100%" : "0px", height: fslides.length == 0 ? "100px" : "0px", backgroundColor:"grey", label: fslides.length == 0 ? "abc def" : "", visibility: fslides.length == 0 ? "visible" : "hidden", alignItems: "center", justifyContent: "center"}}>Vælg en kategori</div>
          
        <Pics data={fslides} onClick={(currentIndex) => setIndex(currentIndex)} />

        <Lightbox
        plugins={[Counter, Captions, Fullscreen, Zoom, Thumbnails, Slideshow]}
        //title={{ container: {style: {top: 100, bottom: 100}}}}
        styles={{ 
          display:'flex',
          
          //maxWidth: 10,
          //maxWidth: 600, margin: "20px auto", maxChars: 100, 
          captionsTitle: { 
            fontSize: "0.7rem", //color: "blue", overflow: "visible", marginRight, marginLeft: "2%",
            textAlign: "center",
            width: "100vw", //toolbarWidth 
          },
          captionsTitleContainer: { 
            backgroundColor: "rgba(100, 100, 100, 1)",
            width: "158vw", //maxWidth: "100vw",
            top: "88%", //left, right
            padding: "1px",
          },
          captionsDescription: { color: "red" },
          captionsDescriptionContainer: { 
            backgroundColor: "rgba(0, 0, 0, 100)",
            top: "92.5%", //bottom, right
            padding: "0px",
          }, 
        }}      
        captions={{ 
          "showToggle": true,
          //"titleTextAlign": "center", //title text alignment, can be "start", "center" or "end"
          "descriptionTextAlign": "center", //description text alignment, can be "start", "center" or "end"
        }}
        thumbnails={{
          borderRadius: 4,
          padding: 1,
          gap: 2,
          position: "center",//bottom gives film strip roll function
          }}
          /* counter={{ container: {style: {top: 0, bottom: 0, left: 0}}}} //image number counter position, top left */
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={fslides}
          />   
      </div>  
    </Container>
  );
};

export default Photos;

/*
Lightbox credit:
MIT License , Copyright (c) 2022 Igor Danchenko */