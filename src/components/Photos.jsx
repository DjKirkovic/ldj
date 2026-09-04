import React, {useState, useCallback} from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { imgTitles } from "../constant/imgTitles";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import PortfolioCard from "./ui/PortfolioCard";

/*
const portfolioImages = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', {
   eager: true,
   query: '?url',
   import: 'default',
});
*/
/*
const portfolioImages = [
  '../assets/portfolioImages/01.jpg',
  '../assets/portfolioImages/02.jpg',
  '../assets/portfolioImages/03.jpg',
  '../assets/portfolioImages/04.jpg',
  '../assets/portfolioImages/05.jpg',
  '../assets/portfolioImages/06.jpg',
  ];

const gallery = document.getElementById('gallery');

Object.values(portfolioImages).forEach((src) => {
   const img = document.createElement('img');
   img.src = src;
   img.classList.add('w-full', 'h-auto', 'object-cover', 'rounded-lg');
   img.setAttribute('data-lightbox', 'mygallery');
   gallery.appendChild(img);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

gallery.addEventListener('click', (e) => {
   if (e.target.tagName === 'IMG') {
       lightboxImg.src = e.target.src;
       lightbox.classList.remove('hidden');
   }
});

lightbox.addEventListener('click', () => {
   lightbox.classList.add('hidden');
});
*/

//onClick={() => handleClick(index)

const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all images in the portfolioimages folder:

const Photos = () => {

  const [toggle, setToggle] = useState(true);
  
  const index = 0; // Initialize index to 0

  const handleClick = useCallback((index) => {
    setToggle(!toggle);
    console.log('Image clicked:', index);
    index = index; // Update the index with the clicked image's index
  }, [toggle]);
   



 

  return (
    <Container className="border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Fotos" />
      </div>


      <div className="display: toggle ? grid grid-cols-3 gap-2 pt-10 : none"> 
      {
                Object.values(images).map((image, index) => (
                  <img key={index} src={image.default} alt={'Image ${index + 1}'} title={''+index+imgTitles[index]} onClick={(index) => handleClick(index)} />
                ))
      }

          
      </div>

       <div className="display: toggle ? none : grid grid-cols-3 gap-2 pt-10"> 
      {
               
                  <img key={index} src={images.default} alt={'Image ${index + 1}'} title={''+index+imgTitles[index]} onClick={(index) => handleClick(index)} />
                
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
 

*/