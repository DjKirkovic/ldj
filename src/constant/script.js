/*const images = [
    './1.jpg',
    './2.jpg',
    './3.jpg',
    './4.jpg',
    './5.jpg',
    './6.jpg',
];
*/
const portfolioImages = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', {
   eager: true,
   query: '?url',
   import: 'default',
});
 
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

/*
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Image Gallery</title>
<script src=https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">
<div class="md-:container md:mx-auto px-40 bg-gray-200">
<div id="gallery" class="grid grid-cols-1 sm:frid-cols-2 md:grid-cols-3 gap-6">

</div>
<div id="lightbox" class="fised inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden">
</div>
</body>
</html>
*/