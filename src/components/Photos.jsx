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
  


/*



 const handleAddDel = (indexI) => {
  console.log("bb");
 
  //setSlides((prev) => {
  setSlides((preva) => {
//  for (const origElement of slides) { //for ea (img) object for this category's index (indexI) in the slides array
    //for (const destElement of prev) { //for ea (img) object in the State slides array
    preva.includes (slides[0]) ? 
 //   prev.includes (origElement)  
 // ? prev.filter((item) => item.cat !== indexI) // Remove if already checked
   console.log('dd') // Remove if already checked
  // : [...prev, slides.origElement]                     // Add if unchecked
  //: [...prev, slides[0]]                     // Add if unchecked
  : console.log('ee') // Remove if already checked
  //}
}
);

};

*/

  const handleToggle = (cat) => {
    setSelectedCats((prev) =>
      prev.includes(cat)
    ? prev.filter((item) => item !== cat) // Remove if already checked
        : [cat]                     // Add if unchecked
      );
      
      //Now that user has checked/unchecked a cat, update slides shown.
      //1: Find out which cat was clicked
      const changedCat = cat;
      //console.log('cat: '+changedCat); //as cat string
      const indexI = CATS.indexOf(changedCat)+1; //assign single int (1-10) representing 10 cats
//      console.log(indexI);
      const newSlides = indexI == 11 ? //if 11 (1st/if statement), show all. Otherwise, show chosen cat's thumbnail images
        slides
        //('sgl')
        :
        //('dual')
        slides.filter(slide => slide.cat === ""+indexI)
       setSlides(newSlides);
        //console.log(newSlides);
     
     // const catNumbers = indexI.toString().length == 1 ? '0'+indexI : indexI; // the two-digit no. for cat clicked
     
     
      //console.log('complete dig: '+catNumbers);
      /*  
       console.log('singl: '+indexI.toString().length)
       :
        console.log('dual?: '+indexI.toString().length)
      */

        //single int

      //console.log('IndexLocation?: '+indexLoc); //as integer
      

      //2: Find out if category was added or removed
 //     const catWasAdded = selectedCats.includes(changedCat) ? false : true; //if found in array, cat was already there and needs removing. Else, needs adding
      //console.log('was...: '+catWasAdded);

      //3: if added, add cat thumbnail images to array. Otherwise, remove them:      
      
      //if first added, stock up state slides from import slides to facilitate filtering
      
      //setSlides(selectedCats.length == 0 ? slides : slides);
      //console.log(selectedCats.length);
      
      //selectedCats.length == "0" & selectedCats.includes(changedCat)? setSlides(slides) : null
      //console.log(fslides);
//   const newSlides = catWasAdded ?
        //slides.filter(slide => slide.cat === ""+indexI)
        //fslides.append(slides.filter(slide => slide.cat === ""+indexI))
//    slides.filter(slide => slide.cat === ""+indexI)


//setSlides(prev => ({ fslides: [...fslides, slides.filter(slide => slide.cat === ""+indexI)] }))



//console.log("aa");
//handleAddDel(ind);
//console.log("cc");

//setSlides([...fslides, slides.filter(slide => slide.cat === ""+indexI)])
 //   :
//    slides.filter(slide => slide.cat !== ""+indexI)
        
 //       setSlides([...fslides, slides.filter(slide => slide.cat === ""+indexI)]);

  /*      slides.filter(slide => slide.src !== "/src/assets/portfolioImages/01/"+*+".jpg")
      //console.log('added')
      
      //const newSlides = slides.filter(slide => slide.src !== "/src/assets/portfolioImages/01/01.jpg");
      
        : 
        slides.filter(slide => slide.src !== "/src/assets/portfolioImages/01/02.jpg")
      

      setSlides(newSlides);
      //console.log('removed')
    */  
/*
      const newSlides = slides.filter(slide => slide.src !== "/src/assets/portfolioImages/01/01.jpg");
      
      setSlides(newSlides);
  */
    //  console.log(newSlides[1]);
    //  console.log(fslides[1]);
      //console.log(this.state.fslides.length());
    };
   
      
    
    return (
      <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>
      <div> 
      
      {/* <button type="button" onClick={() => setOpen(true)}>Open Lightbox</button> */}
        <div style={{ display: 'flex', width: '100vw', alignContent: 'center' }}>
          <p>Vælg kategori(er):</p>
          {CATS.map((cat) => (
            <label key={cat} style={{ display: 'inline', padding: '5px', letterSpacing: '1px'}}>
              <input
                type="radio"
                checked={selectedCats.includes(cat)}
                onChange={() => handleToggle(cat)}
                />
              {cat}
            </label>
          ))}
          {/* <p>Valgt: {selectedCats.join(', ') || 'Ingen'}</p> */}
        </div>

        <Pics data={fslides} onClick={(currentIndex) => setIndex(currentIndex)} />

        <Lightbox
        plugins={[Counter, Captions, Fullscreen, Zoom, Thumbnails, Slideshow]}
        //title={{ container: {style: {top: 100, bottom: 100}}}}
        
        styles={{ 
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
          counter={{ container: {style: {top: 0, bottom: 0, left: 0}}}} //image number counter position, top left
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
MIT License , Copyright (c) 2022 Igor Danchenko */

/*
const portfolioImages = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', {
   eager: true,
   query: '?url',
   import: 'default',
});
*/
//const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder: