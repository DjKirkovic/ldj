const iLoc = import.meta.glob('../assets/portfolioImages/01/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iEve = import.meta.glob('../assets/portfolioImages/02/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iWed = import.meta.glob('../assets/portfolioImages/03/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iPor = import.meta.glob('../assets/portfolioImages/04/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iPro = import.meta.glob('../assets/portfolioImages/05/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iMar = import.meta.glob('../assets/portfolioImages/06/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iSpo = import.meta.glob('../assets/portfolioImages/07/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iWil = import.meta.glob('../assets/portfolioImages/08/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iLan = import.meta.glob('../assets/portfolioImages/09/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:
const iCui = import.meta.glob('../assets/portfolioImages/10/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:

const prefix = '../assets/portfolioImages/';
export const slides = [

// load in images in categories: 01 Location / cityscapes, 02 Event, 03 Wedding, 04 Portrait, 05 Product, 06 Marketing (/Branding), 07 Sport, 08 Wildlife, 09 Landscape (/Nature incl. astro), 10 Cuisine (Food/drink)
  
          { src: iLoc[`${prefix}01/01.jpg`].default,
            title: 'London Thames North Bank, UK',
            description: 'Panorama over byen, set fra London City Hall',
          },
          { src: iLoc[`${prefix}01/02.jpg`].default,
            title: 'Tokyo Downtown, Japan',
            description: 'Akabanebashi Crossing fodgængerfeltet set fra Tokyo Tower',
          },
          { src: iLoc[`${prefix}01/03.jpg`].default,
            title: 'Sydney Opera House & Harbour Bridge, Australia',
            description: 'Solnedgang over byens vartegn',
          },
          { src: iEve[`${prefix}02/31.jpg`].default,
            title: 'UFC championships, Birmingham, UK',
            description: 'UFC 89: Keith Jardine (tv) vs. Brandon Vera (th)',
          },
          { src: iEve[`${prefix}02/32.jpg`].default,
            title: 'The Warehouse Project nightclub, Manchester, UK', 
            description: 'DJ John Digweed hylder publikum'
          },
          { src: iEve[`${prefix}02/33.jpg`].default,
          title: 'Pokémon Championships, London, UK',
          description: 'Øjeblikket TontonBatteuse vandt EUIC i PoGo',
          },
          {
            src: iWed[`${prefix}03/61.jpg`].default,
            title: 'Umbrella',
            description: 'Sammen under paraplyen',
          },
          {
            src: iWed[`${prefix}03/62.jpg`].default,
            title: 'Bouquet',
            description: 'Stilhed ved solnedgang',
          },
          {
            src: iWed[`${prefix}03/63.jpg`].default,
            title: 'Confetti',
            description: 'Strøet med konfetti',
          },
          {
            src: iWed[`${prefix}03/64.jpg`].default,
            title: 'Girl with hairband',
            description: 'Pige med hårbøjle',
          },
          {
            src: iWed[`${prefix}03/65.jpg`].default,
            title: 'Ring on finger',
            description: 'Ring på fingeren',
          },
          {
            src: iWed[`${prefix}03/66.jpg`].default,
            title: 'Make-up',
            description: 'Sminkning',
          },
          {
            src: iWed[`${prefix}03/67.jpg`].default,
            title: 'Two hearts',
            description: 'Hjertepar',
          },
          {
            src: iWed[`${prefix}03/68.jpg`].default,
            title: 'Wedding layer cake',
            description: 'Bryllupslagkage',
          },
          {
            src: iPor[`${prefix}04/91.jpg`].default,
            title: 'Portrait, child',
            description: 'Klar til en dukkert',
          },
          {
            src: iPor[`${prefix}04/92.jpg`].default,
            title: 'Portrait, adult',
            description: 'Stilfuldt påklædt',
          },
          {
            src: iPro[`${prefix}05/121.jpg`].default,
            title: 'Nikon 70-200mm f2.8E FL VR',
            description: 'Zoomobjektiv',
          },
          {  src: iPro[`${prefix}05/122.jpg`].default,
            title: 'Computer chip',
            description: 'Forstørret kig på elektronisk kredsløb',
          },
          { src: iSpo[`${prefix}07/208.jpg`].default,
          title: '1972 Lotus Europa Twin Cam, Brighton, UK',
            description: 'Lavprofil sportsvogn, som blev produceret fra 1971-1975',
          },
          { src: iSpo[`${prefix}07/209.jpg`].default,
            title: 'Koenigsegg CC850, LEGO HQ, Denmark',
            description: 'Tophastighed på 450 km/t, lanceret i 2023, her kørt af Tom Cruise',
          },
          { src: iSpo[`${prefix}07/210.jpg`].default,
            title: '1982 Merlin Roadster Plus Two, Ruddington, UK',
            description: 'Klassisk sportsvogn (prod. 1982-1985) ved gammel benzinstander',
          },
          {
            src: iWil[`${prefix}08/211.jpg`].default,
            title: 'Griffon over coastline, Benalmádena, Spain',
            description: 'Højt at svæve...',
          },
          {
            src: iWil[`${prefix}08/212.jpg`].default,
            title: 'Emus, Wilsons Promontory, Victoria, Australia',
            description: 'Målfoto',
          },
          {
            src: iWil[`${prefix}08/213.jpg`].default,
            title: 'Red Deer, Wollaton Park, Nottingham, UK',
            description: 'Kronhjorte på vagt',
          },
          {
            src: iLan[`${prefix}09/241.jpg`].default,
            title: 'El Teide volcano, Tenerife, Canary Islands, Spain',
            description: 'Områdeudsigt højt oppefra',
          },
          {
            src: iLan[`${prefix}09/242.jpg`].default,
            title: 'Whitsunday Islands Beach, Queensland Waters, Australia',
            description: 'Whitehaven strands kridthvide sand',
          },
          {
            src: iLan[`${prefix}09/243.jpg`].default,
            title: 'Rub\' al Khali Desert / The \'Empty Quarter\', Arabia',
            description: 'Solnedgang i ørkenen',
          },
          {
            src: iCui[`${prefix}10/271.jpg`].default,
            title: 'Street food',
            description: 'Madservice på gadeplan',
          },
          {
            src: iCui[`${prefix}10/272.jpg`].default,
            title: 'Drinks reception',
            description: 'Champagne og juice',
          },
          {
            src: iCui[`${prefix}10/273.jpg`].default,
            title: 'Chocolate cake and ice cream dessert',
            description: 'Søde fristelser',
          },
          {
            src: iCui[`${prefix}10/274.jpg`].default,
            title: 'Blueberries',
            description: 'Blåbær',
          },
]
/*
          */

          /*{ src: images['../assets/portfolioImages/'+'0'+3+'.jpg'].default },*/
        
  /*
  'London Thames North Bank, UK',
    'Tokyo Downtown, Japan',
    'Sydney Opera House & Harbour Bridge, Australia',
    //'Sheikh Zayed Road, Dubai, United Arab Emirates',
    'UFC championships, Birmingham, UK',
    'DJ John Digweed at The Warehouse Project nightclub, Manchester, UK', 
    //'Big Ben, London, UK',
    //'St. Peter\'s Square, Vatican City, Rome, Italy',
    //'The Hemicycle, EU Parliament, Strasbourg, France',
    //'Legoland Resort, Billund, Denmark',
    'European Intl. Championships, Pokemon, London, UK',
    //'Der Reichstag, Platz der Republik, Berlin, Germany',
    '1972 Lotus Europa Twin Cam, Brighton, UK',
    'Koenigsegg CC850 driven by Tom Cruise, LEGO HQ, Denmark',
    '1982 Merlin Roadster Plus Two, Ruddington, UK',
    //'Optical laser assembly',
    //'Spiral plant',
    //'Swiss pocket clock, Zürich, Switzerland',
    'Wedding',
    'Portrait, child',
    'Portrait, adult',
    'Griffon over coastline, Benalmádena, Spain',//Eurasian Griffon Vulture
    'Emus, Wilsons Promontory, Victoria, Australia',
    'Red Deer, Wollaton Park, Nottingham, UK',
    'Aerial view from El Teide volcano, Tenerife, Canary Islands, Spain',
    'Whitsunday Islands Beach, Queensland Waters, Australia',
    'Rub\' al Khali Desert / The \'Empty Quarter\', Arabia',
    'Street food',
    'Drinks reception',
    'Chocolate cake and ice cream dessert',
    /*'Laboratory samples',
    'Biochemist, UK',
    'Burj Khalifa, Dubai, UAE - World\'s Tallest Building',
    'Petronas Towers, Kuala Lumpur, Malaysia',
    'St. Peter\'s Square, Rome / Vatican City, Italy',
    'Egyptian statues, art museum, Denmark',*/
  