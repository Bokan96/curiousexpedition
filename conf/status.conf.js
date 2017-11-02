config.entities.add([
  
  {
    id: 'st-zeroSlot', // straight descriptive status
    title: "txt-st-zeroSlot-title",
    description: "txt-st-zeroSlot",
    debugCategory: 'generic',
    bonus: {unitCount: -1},
    sprite: "res_status_zeroSlot.png",
  }, 
  {
    id: 'st-homesick',
    title: "txt-st-homesick-title",
    debugCategory: 'generic',
    description: "txt-st-homesick",
    important: true,
    autoRemove: true,
    sprite: "res_status_homesick.png",
  },
  {
    id: 'st-followed-natives',
    debugCategory: 'generic',
    title: "txt-st-followed-natives-title",
    description: "txt-st-followed-natives",
    important: true,
    autoRemove: true,
    buffDays: '30..60',
    sprite: "res_status_followed.png",
  },

// ---------------- CURSES

  {
    id: 'st-aggro',
    debugCategory: 'internal',
    title: "txt-st-aggro-title",
    description: "txt-st-aggro",
    flags: '+ailment',
    important: true,
    sprite: "res_status_cannibal.png",
    autoRemove: true,
    bonus: {zoneEventChance: 0.3},
    buffDays: '15'
  },
  {
    id: 'st-abomination-eat',
    debugCategory: 'internal',
    title: "txt-st-cannibal-title",
    description: "txt-st-abomination-eat",
    sprite: "res_status_cannibal.png",
    tripEvents: [
      {slots:1, reqAge:4, resetStatusAge:true, events: 'evt-sanity-abomination-hungry'},
      {slots:5},
    ],
  },
  {
    id: 'st-curse-abomination',
    title: "txt-st-curse-abomination-title",
    description: "txt-st-curse-abomination",
    flags: '+ailment +affliction',
    debugCategory: 'Ailment',
    important: true,
    sprite: "res_status_bitingMarks.png",
    tripEvents: [
      'evt-become-abomination',
      { slots:6, reqAge: 4 }
    ]
  },
  {
    id: 'evt-become-abomination',
    reqAge: 4,
    partyEffects: { ref: 'evt-setImage-nightCamp' },
    playMusic: ['thm_nature_night_campfire_dark_2'],
    charEffects: {
      reqStatus: {'st-curse-abomination':true},
      text: "txt-st-curse-abomination-transform",
      removeCharacter: true,
      addCharacter: 'pl-abomination'
    }
  },
  {
    id: 'st-curse-flood',
    autoRemove: true,
    debugCategory: 'curse',
    flags: '+localCurse',
    dayEvents: [
      {startSprawl: {ref:'spr-flood', power:1}},
      {reqWorld:'..2', reqAge: 12, removeStatus: true},
      {reqWorld:'3',   reqAge: 16, removeStatus: true},
      {reqWorld:'4',   reqAge: 20, removeStatus: true},
      {reqWorld:'5..', reqAge: 24, removeStatus: true},
    ],
  },

// ---------------- ONE-SHOT & ITEMS

  {
    id: 'os-viewDistance',
    debugCategory: 'internal',
    important: true,
    bonus: {viewDist: +0.6},
    buffDays: '1'
  },
  {
    id: 'os-viewDistance-small',
    debugCategory: 'internal',
    important: true,
    bonus: {viewDist: +0.3},
    buffDays: '1'
  },
  {
    id: 'os-viewDistance-large',
    debugCategory: 'internal',
    important: true,
    bonus: {viewDist: +2},
    buffDays: '1'
  },
  // {
  //   id: 'os-cutting',
  //   bonus: {moveCost: -1, reqTiles: 'tl-set-jungle'},
  //   dayEvents: {
  //     replaceTiles: [
  //       {radius: 0, old: 'tl-jungle-thick', new: 'tl-jungle-light'},
  //       {radius: 0, old: 'tl-dry-jungle-thick', new: 'tl-dry-jungle-light'},
  //     ],
  //   },
  //   tripEvents: {removeStatus:true}
  // },
  {
    id: 'os-stealth',
    debugCategory: 'internal',
    bonus: {zoneEventChance: -1},
    tripEvents: {removeStatus:true}
  },

  {
    id: 'st-fireSafe',
    debugCategory: 'internal',
    // Prevents units from dying in fire for some rounds
    dayEvents: {reqAge: 2, removeStatus:true}
  },

  // Animals Mounts

  {
    id: 'st-mount-1',
    debugCategory: 'Animals',
    title: "txt-st-mount-1-title",
    description: "txt-st-mount-1",
    bonus: {tripCost: -0.25},
    sprite: "res_status_saddle.png",
  },
  {
    id: 'st-mount-2',
    extends: 'st-mount-1',
    title: "txt-st-mount-2-title",
    bonus: {tripCost: -0.35},
  },
  {
    id: 'st-mount-3',
    extends: 'st-mount-1',
    title: "txt-st-mount-3-title",
    bonus: {tripCost: -0.45},
  },

// Animals Capacity Improvements

  {
    id: 'st-animalCapacity-1',
    debugCategory: 'Animals',
    title: "txt-st-animalCapacity-1-title",
    description: "txt-st-animalCapacity-1",
    bonus: {capacity: +1},
    sprite: "res_status_animalCapacity.png",
  },
  {
    id: 'st-animalCapacity-2',
    extends: 'st-animalCapacity-1',
    title: "txt-st-animalCapacity-2-title",
    description: "txt-st-animalCapacity-2",
    bonus: {capacity: +2},
  },
  {
    id: 'st-animalCapacity-3',
    extends: 'st-animalCapacity-1',
    title: "txt-st-animalCapacity-3-title",
    description: "txt-st-animalCapacity-3",
    bonus: {capacity: +3},
  },

// code statuses

  {
    id: 'st-overburden',
    debugCategory: 'internal',
    title: "txt-st-overburden-title",
    description: "txt-st-overburden",
    important: true,
    sprite: "res_status_overburden.png",
    bonus: {moveCost: 10}
  },

// particle statuses

  {
    id: 'st-ambientParticle',
    debugCategory: 'internal',
    dayEvents: [
      {
        slots: 3,
        reqTiles: ['tl-jungle-thick', 'tl-dry-jungle-thick'],
        particle: 'pt-ambient-bird',
        playSound: ['sfx_ambient_jungle_birds_1', 'sfx_ambient_jungle_birds_2'],
      },
      {
        slots: 1,
        reqTiles: ['tl-jungle-thick', 'tl-dry-jungle-thick'],
        particle: 'pt-ambient-eagle',
        playSound: ['sfx_ambient_eagle',],
      },
      {
        slots: 8,
        reqItems: {'it-machete':1},
        reqTiles: ['tl-jungle-thick', 'tl-dry-jungle-thick'],
        particle: 'pt-ambient-bird',
        playSound: ['sfx_ambient_jungle_birds_1', 'sfx_ambient_jungle_birds_2'],
      },
      {
        slots: 5,
        reqItems: {'it-machete':1},
        reqTiles: ['tl-jungle-thick', 'tl-dry-jungle-thick'],
        particle: 'pt-ambient-eagle',
        playSound: ['sfx_ambient_eagle',],
      },
      {
        slots: 12,
      },
    ],
  },

// sanity report

  {
    id: 'st-sanityReport-high',
    debugCategory: 'internal',
    dayEvents: [
      {
        reqSanity: '0..110',
        setPartyFlags: {sanityReport: false, sanityReportTendency: false },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-medium':true} },
        removeStatus:true,
      },
      {
        reqPartyFlags: {sanityReport: false}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-high-report",
          },
          {slots: 2},
        ],
      },
    ],
  },
  {
    id: 'st-sanityReport-medium',
    debugCategory: 'internal',
    dayEvents: [
      {
        reqSanity: '..70',
        setPartyFlags: {sanityReport: false, sanityReportTendency: false },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-low':true} },
        removeStatus:true,
      },
      {
        reqSanity: '111..',
        setPartyFlags: {sanityReport: false, sanityReportTendency: true },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-high':true} },
        removeStatus:true,
      },
      {
        reqPartyFlags: {sanityReport: false, sanityReportTendency: false}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-medium-report",
          },
          {slots:4},
        ],
      },
      {
        reqPartyFlags: {sanityReport: false, sanityReportTendency: true}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-medium-report-1",
          },
          {slots:4},
        ],
      },
    ],
  },
  {
    id: 'st-sanityReport-low',
    debugCategory: 'internal',
    dayEvents: [
      {
        reqSanity: '..20',
        setPartyFlags: '-sanityReport -sanityReportTendency',
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-veryLow':true} },
        removeStatus:true,
      },
      {
        reqSanity: '71..',
        setPartyFlags: '-sanityReport +sanityReportTendency',
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-medium':true} },
        removeStatus:true,
      },
      {
        reqPartyFlags: '-sanityReport -sanityReportTendency',
        setPartyFlags: '+sanityReport',
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-low-report",
          },
          {slots:4},
        ]
      },
      {
        reqPartyFlags: '-sanityReport +sanityReportTendency',
        setPartyFlags: '+sanityReport',
        events: [
          {
            slots:1,
            report: "txt-st-sanityReport-low-report-1",
          },
          {slots:4},
        ],
      },
    ],
  },
  {
    id: 'st-sanityReport-veryLow',
    debugCategory: 'internal',
    dayEvents: [
      {
        reqSanity: '0',
        setPartyFlags: {sanityReport: false, sanityReportTendency: false  },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-0':true} },
        removeStatus:true,
      },
      {
        reqSanity: '21..',
        setPartyFlags: {sanityReport: false, sanityReportTendency: true  },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-low':true} },
        removeStatus:true,
      },
      {
        reqPartyFlags: {sanityReport: false, sanityReportTendency: false}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-veryLow-report",
          },
          {slots:4},
        ]
      },
      {
        reqPartyFlags: {sanityReport: false, sanityReportTendency: true}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-veryLow-report-1",
          },
          {slots:4},
        ],
      }
    ]
  },
  {
    id: 'st-sanityReport-0',
    debugCategory: 'internal',
    dayEvents: [
      {
        reqSanity: '1..',
        setPartyFlags: {sanityReport: false, sanityReportTendency: true  },
        charEffects: { reqCharFlags: '+special', setStatus: {'st-sanityReport-veryLow':true} },
        removeStatus:true,
      },
      {
        reqPartyFlags: {sanityReport: false}, 
        setPartyFlags: {sanityReport: true },
        events: [
          {
            slots: 1,
            report: "txt-st-sanityReport-0-report",
          },
          {slots: 2},
        ],
      },
    ]
  },
  {
    id: 'st-playJingle',
    debugCategory: 'internal',
    dayEvents: [
      {reqAge: 2, reqPartyFlags: '-jingleFirstTimePlayed', setPartyFlags: '+jingleFirstTimePlayed', playMusic: ['jgl_good_1', 'jgl_good_2', 'jgl_good_3']},
      {reqAge: 45, setPartyFlags: '+playJingle', reqPartyFlags: '-playJingle'},
      //{slots: 10, reqPartyFlags: '+playJingle'},
      {slots: 1, reqPartyFlags: '+playJingle', reqSanity: '..10', playMusic: ['jgl_bad_1', 'jgl_bad_2', 'jgl_bad_3'], resetStatusAge:true, setPartyFlags: '-playJingle'},
      {slots: 1, reqPartyFlags: '+playJingle', reqSanity: '65..', playMusic: ['jgl_good_1', 'jgl_good_2', 'jgl_good_3'], resetStatusAge:true, setPartyFlags: '-playJingle'},
      {slots: 10, reqPartyFlags: '+playJingle'},
    ],
  },

  // {
  //   id: 'st-playJingle_good',
  //   debugCategory: 'jingles',
  //   autoRemove: true,
  //   dayEvents: [
  //     {reqAge: 1, removeStatus: true, playSound: ['jgl_good_1', 'jgl_good_2', 'jgl_good_3']},
  //   ],
  // },
  // {
  //   id: 'st-playJingle_bad',
  //   debugCategory: 'jingles',
  //   autoRemove: true,
  //   dayEvents: [
  //     {reqAge: 1, removeStatus: true, playSound: ['jgl_bad_1', 'jgl_bad_2', 'jgl_bad_3']},
  //   ],
  // },

])