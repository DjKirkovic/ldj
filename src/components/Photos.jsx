import React, {useState, useCallback} from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
//import { imgTitles } from "../constant/slides";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import PortfolioCard from "./ui/PortfolioCard";
import Pics from "./Pics";
import { slides } from "../constant/slides";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Counter, Captions, Download, Fullscreen, Zoom, Thumbnails} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

/*
const portfolioImages = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', {
   eager: true,
   query: '?url',
   import: 'default',
});
*/
//const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:

const Photos = () => {
 /* const [open, setOpen] = React.useState(false);
 */
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
      plugins={[Counter, Captions, Download, Fullscreen, Zoom, Thumbnails]}
      //title={{ container: {style: {top: 100, bottom: 100}}}}
      
      styles={{ 
        //captionsTitle: { color: "blue" },
        
        maxWidth: 600,
        margin: "20px auto",
        maxChars: 100,
        
        captionsTitle: { 
          maxChars: 100,
          color: "blue",
          toolbarWidth: "10px",
          toolbar: { style: { 
            //width: "10%",
            width: "100px",
           } },

        },
        captionsTitleContainer: { 
          top: "85%",
          //right: "10%",
          
          //left: "50%",
          textAlign: "center",
          toolbar: {  
            //width: "10%",
            width: "10px",
           } ,

         },
        captionsDescription: { color: "red" },
                  //captions: {title: { color: "blue" }},
        //description: { color: "red" },
        //title: { color: "red" } 
    }}      
      captions={{ 
  
      "showToggle": true,
    "descriptionTextAlign": "center", //description text alignment, can be "start", "center" or "end"
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

/*

var index; // Initialize index to 0
  var indexId = 2; // Initialize index to 0
  index = 0; // Initialize index to 0

  const [toggle, setToggle] = useState(true);
  
  


  const handleClick = useCallback((index) => {
    console.log('Image clicked:', index);
    index = index; // Update the index with the clicked image
    indexId = index.target.getAttribute('accessKey'); // Update the index with the clicked image's index
    console.log('iID '+indexId);
    console.log(index.target.getAttribute('accessKey'));
    setToggle(!toggle);
  }, [toggle]);
   



 

  return (
    <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>


      <div className="grid grid-cols-3 gap-2 pt-10" style={{ display: toggle ? 'grid' : 'none' }}> 
      {
                Object.values(images).map((image, index) => (
                  <img key={index} accessKey={index} src={image.default} alt={'Image ${index + 1}'} title={''+index+imgTitles[index]} onClick={(index) => handleClick(index)} />
                ))
      }

          
      </div>

       <div className="grid grid-cols-3 gap-2 pt-10" style={{ display: toggle ? 'none' : 'block' }}>
      {
                  <img key={index} src={images['../assets/portfolioImages/'+'0'+indexId+'.jpg'].default} alt={'Image ${index + 1}'} title={''+index+imgTitles[index]} onClick={(index) => handleClick(index)} />
      }
      
          
      </div>


      
    </Container>
  );
};

export default Photos;

/*
 <Container className="md-:container md:mx-auto px-40 bg-gray-200 border-black">

 <div id="gallery" class="grid grid-cols-1 sm:frid-cols-2 md:grid-cols-3 gap-6">

  </div>
  <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden">
    <img id="lightbox-img" src="" alt="Lightbox Image" class="max-w-full max-h-full" />
  </div> 
 
 
  <div className="grid grid-cols-3 gap-2 pt-10" style={{ display: toggle ? 'grid grid-cols-3 gap-2 pt-10' : 'none' }}> 
 

className="grid grid-cols-3 gap-2 pt-10"

*/