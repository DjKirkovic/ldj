const images = import.meta.glob('../assets/portfolioImages/*.{png,jpg,jpeg,svg}', { eager: true }); // Dynamically import all (image) files in the portfolioimages folder:

export const slides = [
   
  
          { src: images['../assets/portfolioImages/'+'0'+3+'.jpg'].default,
            title: 'London Thames North Bank, UK',
            description: 'London Thames North Bank, UK',
           },
          { src: images['../assets/portfolioImages/'+'0'+2+'.jpg'].default,
            title: 'London Thames North Bank, UK',
            description: 'London Thames North Bank, UK',
           },
          { src: images['../assets/portfolioImages/'+'0'+3+'.jpg'].default,
            title: 'London Thames North Bank, UK',
            description: 'London Thames North Bank, UK',
           },
          

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
    'Computer chip',
    'Burj Khalifa, Dubai, UAE - World\'s Tallest Building',
    'Petronas Towers, Kuala Lumpur, Malaysia',
    'St. Peter\'s Square, Rome / Vatican City, Italy',
    'Egyptian statues, art museum, Denmark',*/
  ];