config.entities.add([

// outside biomes

  {
    id: 'bio-outside-mountains', 
    name: "txt-bio-outside-mountains-name",
    debugColor: 'gray',
    dist: 1,
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.55, tile: 'tl-mountain'},
      {perlin: 0.50, tile: 'tl-dry'},
      {perlin: 0.00, tile: 'tl-mountain'},
    ]
  }, 
  {
    id: 'bio-outside-sea', 
    name: "txt-bio-outside-sea-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.80, tile: 'tl-grass'},
      {perlin: 0.78, tile: 'tl-beach'},
      {perlin: 0.67, tile: 'tl-river'},
      {perlin: 0.65, tile: 'tl-river-shallow'},
      {perlin: 0.60, tile: 'tl-mountain'},
      {perlin: 0.59, tile: 'tl-river-shallow'},
      {perlin: 0.12, tile: 'tl-river'},
      {perlin: 0.07, tile: 'tl-river-shallow'},
      {perlin: 0.00, tile: 'tl-mountain'},
    ]
  },
  {
    id: 'bio-outside-jungle', 
    name: "txt-bio-outside-jungle-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.40,  tile: 'tl-jungle-thick'},
      {perlin: 0.35,  tile: 'tl-mountain'},
      {perlin: 0.33,  tile: 'tl-jungle-thick'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.25,  tile: 'tl-jungle-thick'},
      {perlin: 0.20,  tile: 'tl-river-shallow'},
      {perlin: 0.04,  tile: 'tl-jungle-thick'},
      {perlin: 0.00,  tile: 'tl-mountain'},
    ],
  },
  {
    id: 'bio-outside-pits-grass', 
    name: "txt-bio-outside-pits-grass-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    clearUnconnected: 'tl-pit-grass',
    terrain: [
      {perlin: 0.60,  tile: 'tl-pit-grass'},
      {perlin: 0.53,  tile: 'tl-grass'},
      {perlin: 0.35,  tile: 'tl-mountain'},
      {perlin: 0.33,  tile: 'tl-pit-grass'},
      {perlin: 0.30,  tile: 'tl-river'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.25,  tile: 'tl-river'},
      {perlin: 0.20,  tile: 'tl-river-shallow'},
      {perlin: 0.04,  tile: 'tl-pit-grass'},
      {perlin: 0.00,  tile: 'tl-mountain'},
    ],
  },
  {
    id: 'bio-outside-pits-dry', 
    name: "txt-bio-outside-pits-grass-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    clearUnconnected: 'tl-pit-dry',
    terrain: [
      {perlin: 0.60,  tile: 'tl-pit-dry'},
      {perlin: 0.53,  tile: 'tl-dry'},
      {perlin: 0.35,  tile: 'tl-mountain'},
      {perlin: 0.33,  tile: 'tl-pit-dry'},
      {perlin: 0.30,  tile: 'tl-river'},
      {perlin: 0.27,  tile: 'tl-jungle-light'},
      {perlin: 0.25,  tile: 'tl-river'},
      {perlin: 0.20,  tile: 'tl-river-shallow'},
      {perlin: 0.04,  tile: 'tl-pit-dry'},
      {perlin: 0.00,  tile: 'tl-mountain'},
    ],
  },
  {
    id: 'bio-outside-corrupted-sea', 
    name: "txt-bio-outside-sea-name",
    debugColor: 'gray',
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.80, tile: 'tl-corrupted-plains'},
      {perlin: 0.67, tile: 'tl-corrupted-river'},
      {perlin: 0.65, tile: 'tl-corrupted-river-shallow'},
      {perlin: 0.60, tile: 'tl-corrupted-mountain'},
      {perlin: 0.59, tile: 'tl-corrupted-river-shallow'},
      {perlin: 0.12, tile: 'tl-corrupted-river'},
      {perlin: 0.07, tile: 'tl-corrupted-river-shallow'},
      {perlin: 0.00, tile: 'tl-corrupted-mountain'},
    ]
  },
  {
    id: 'bio-outside-corrupted-mountains', 
    name: "txt-bio-outside-mountains-name",
    debugColor: 'gray',
    dist: 1,
    eventImg: {
      day:'evt_bio_grasslands_1.png',
      night:'evt_bio_grasslands_1_night.png'
    },
    terrain: [
      {perlin: 0.55, tile: 'tl-corrupted-mountain'},
      {perlin: 0.50, tile: 'tl-corrupted-plains'},
      {perlin: 0.00, tile: 'tl-corrupted-mountain'},
    ]
  }, 
  {
    id: 'bio-outside-void', 
    name: "txt-bio-outside-void-name",
    flags: '+warped',
    debugColor: 'gray',
    dist: 1,
    terrain: [
      {perlin: 0.00, tile: 'tl-void'},
    ]
  }, 

])