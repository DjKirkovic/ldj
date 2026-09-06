import React, {useState, useCallback} from "react";
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

/*
const portfolioImages = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', {
   eager: true,
   query: '?url',
   import: 'default',
});
*/
//const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:

const Photos = () => {

const [index, setIndex] = useState(-1);

 return (
    <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>


      <div> 
      
{/*         <button type="button" onClick={() => setOpen(true)}>Open Lightbox</button>
 */}
      <Pics data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />

      <Lightbox
      plugins={[Counter, Captions, Fullscreen, Zoom, Thumbnails, Slideshow]}
      //title={{ container: {style: {top: 100, bottom: 100}}}}
      
      styles={{ 
        //maxWidth: 600,
        //margin: "20px auto",
        //maxChars: 100,

        captionsTitle: { 
          //color: "blue",
          //overflow: "visible",
          fontSize: "0.7rem",
        //  marginRight: "0%",
        //  marginLeft: "2%",
          textAlign: "center",
          width: "100vw",
          //toolbarWidth 
        },
        captionsTitleContainer: { 
          backgroundColor: "rgba(100, 100, 100, 1)",
          width: "158vw",
          //maxWidth: "100vw",
          top: "88%",
          //left: "50%",
          //right: "-57.5%",          
          padding: "1px",
         },

        captionsDescription: { color: "red" },
        captionsDescriptionContainer: { 
          backgroundColor: "rgba(0, 0, 0, 100)",
          top: "92.5%",
          //bottom: "98%",
          //right: "-70%",
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
   
        /*  
        ref: thumbnailsRef,
          width: 120,
          height: 80,
          position: "bottom",
          border: 1,
          borderColor: "blue",
          borderStyle: "dashed",
          borderRadius: 4,
          padding: 4,
          gap: 16,
          imageFit: "contain",
          vignette: true,
          hidden: true,
          showToggle: true,
          */
        }}
      counter={{ container: {style: {top: 0, bottom: 0, left: 0}}}} //image number counter position, top left
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
      
          
      </div>


      
    </Container>
  );
};

export default Photos;

/*
MIT License

Copyright (c) 2022 Igor Danchenko
*/