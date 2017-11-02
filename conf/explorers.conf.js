config.entities.add([
  {
    id: 'sp-base',
    debugCategory: 'Famous Explorer',
    capacity: 2,
    flags: { special:true, humanoid: true, },

  },
  {
    id: 'sp-darwin',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    alwaysUnlocked: true,
    name: "txt-sp-darwin-name", 
    title: "txt-sp-darwin-title", 
    description: "txt-sp-darwin",
    characters: 'pl-soldier-scottish pl-translator anm-donkey',
    health: 6,
    spawnEvents: {
      reqTutorial: false,
      items: {
        'it-whisky':4,
        'it-torch':3,
        'it-shotgun':1,
        'it-machete':10
      },
    },
    levels: [
      {statuses:'pk-butterflyEnthusiast', dice: 'dc-support-2 dc-defend-1'}
    ],
    variations: [
      {gender:'male', sprite:'res_expl_darwin.png', portrait:'res_face_darwin.png'}
    ],
    miniSprite: 'res_expl_darwin_mini.png',
  },
  {
    id: 'sp-curie',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    alwaysUnlocked: true,
    name: "txt-sp-curie-name", 
    title: "txt-sp-inventor-title", 
    description: "txt-sp-curie",
    characters: 'pl-missionary anm-dog-hunting anm-donkey',
    health: 2,
    spawnEvents: {
      items: {
        'it-chocolate':4,
        'it-torch':3,
        'it-firstAid':2,
        'it-ammo':5,
        'it-climbingGear':5
      },
    },
    levels: [
      {statuses:'pk-polymath', dice: 'dc-support-2 dc-support-1'}
    ],
    flags: {
      special:true,
      humanoid: true,
      scientist: true,
    },
    variations: [
      {gender:'female', sprite: 'res_expl_curie.png', portrait: 'res_face_curie.png'}
    ],
    miniSprite: 'res_expl_curie_mini.png', 
  }, 
  {
    id: 'sp-burton',
    extends: 'sp-base', 
    alwaysUnlocked: true,
    name: "txt-sp-burton-name", 
    shortName: "txt-sp-burton-shortname", 
    title: "txt-sp-burton-title", 
    description: "txt-sp-burton",
    health: 8,
    characters: 'pl-soldier-british pl-native-starting-scout',
    spawnEvents: {
      items: {
        'it-whisky':3,
        'it-torch':3,
        'it-rope':10,
        'it-spear':3,
      },
    },
    levels: [
      {statuses:'pk-polyglot', dice:'dc-attack-2 dc-attack-2'}
    ],
    variations: [
      {gender:'male', sprite: 'res_expl_burton.png', portrait: 'res_face_burton.png'}
    ],
    miniSprite: 'res_expl_burton_mini.png',
    debugCategory: 'Famous Explorer',
  }, 
  {
    id: 'sp-huizinga',
    extends: 'sp-base', 
    alwaysUnlocked: true,
    name: "txt-sp-huizinga-name", 
    title: "txt-sp-huizinga-title", 
    description: "txt-sp-huizinga", 
    health: 4,
    characters: ['pl-artist', 'pl-translator', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-torch':3,
        'it-canvas':5,
        'it-pistol':1,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-anthropology', dice:'dc-support-2 dc-support-1'}
    ],
    flags: '+special +humanoid +huizinga',
    variations: [
      {gender:'male', sprite:'res_expl_huizinga.png', portrait:'res_face_huizinga.png'}
    ],
    miniSprite: 'res_expl_huizinga_mini.png',
    debugCategory: 'Famous Explorer',
  },
  {
    id: 'sp-kingsley',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-kingsley-name", 
    title: "txt-sp-kingsley-title", 
    description: "txt-sp-kingsley",
    unlockHint: "txt-sp-kingsley-unlock",
    characters: ['pl-translator', 'pl-native-starting-warrior', 'anm-donkey'],
    health: 6,
    spawnEvents: {
      items: {
        'it-chocolate':8,
        'it-torch':3,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-pacifist', dice:'dc-support-2 dc-defend-1'}
    ],
    flags: {
      special:true,
      british:true,
      humanoid: true,
    },
    variations: [
      {gender:'female', sprite: 'res_expl_kingsley.png', portrait: 'res_face_kingsley.png'}
    ],      
    miniSprite: 'res_expl_kingsley_mini.png',
  },
  {
    id: 'sp-earhart',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-earhart-name", 
    title: "txt-sp-earhart-title", 
    description: "txt-sp-earhart",
    miniSprite: 'res_expl_earhart_mini.png',
    health: 6,
    unlockHint: "txt-sp-earhart-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_earhart.png', portrait: 'res_face_earhart.png'}
    ],      
    characters: ['pl-native-starting-animalHandler', 'pl-sailor', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-torch':5,
        'it-climbingGear':3,
        'it-pistol':1,
        'it-ammo':5,
      },
    },
    levels: [
      {statuses:'pk-navigator', dice:'dc-attack-2 dc-support-1'}
    ],
  },
  
  {
    id: 'sp-tesla',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-tesla-name", 
    title: "txt-sp-inventor-title", 
    description: "txt-sp-tesla",
    miniSprite: 'res_expl_tesla_mini.png',
    health: 4,
    unlockHint: "txt-sp-tesla-unlock",
    flags: {
      special:true,
      humanoid: true,
      scientist: true,
    },
    variations: [
      {gender:'male', sprite: 'res_expl_tesla.png', portrait: 'res_face_tesla.png'}
    ],      
    characters: ['pl-cook', 'pl-trader', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-dynamite':5,
        'it-fireworks':3,
        'it-teslaGun':1,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-strongMind', dice:'dc-support-2 dc-support-2'}
    ]
  },
  {
    id: 'sp-neel', 
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-neel-name", 
    title: "txt-sp-neel-title", 
    description: "txt-sp-neel",
    miniSprite: 'res_expl_neel_mini.png',
    health: 8,
    unlockHint: "txt-sp-neel-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_neel.png', portrait: 'res_face_neel.png'}
    ],      
    characters: 'anm-waterBuffalo anm-dog-hunting',
    spawnEvents: {
      items: {
        'it-chocolate':4,
        'it-fireworks':4,
        'it-rope':3,
        'it-torch':3,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-animalWhisperer', dice:'dc-defend-2 dc-defend-1'}
    ]
  }, 
  {
    id: 'sp-garvey',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-garvey-name", 
    title: "txt-sp-garvey-title", 
    description: "txt-sp-garvey",
    miniSprite: 'res_expl_garvey_mini.png', 
    health: 6,
    unlockHint: "txt-sp-garvey-unlock",
    variations: [
      {gender:'male', sprite:'res_expl_garvey.png', portrait: 'res_face_garvey.png'}
    ],
    characters: ['pl-translator', 'pl-native-starting-scout', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-rope':3,
        'it-machete':5,
        'it-ammo':5,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-naturalLeader', dice: 'dc-attack-1 dc-support-1'}
    ]
  },
  {
    id: 'sp-fortune',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-fortune-name", 
    title: "txt-sp-fortune-title", 
    description: "txt-sp-fortune",
    health: 4,
    miniSprite: 'res_expl_fortune_mini.png',
    unlockHint: "txt-sp-fortune-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_fortune.png', portrait: 'res_face_fortune.png'}
    ],      
    characters: ['pl-soldier-scottish', 'pl-missionary', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-cocaLeaves':5,
        'it-costonFlare':3,
        'it-torch':3,
        'it-ammo':3,
      },
    },
    levels: [
      {statuses:'pk-impetus', dice:'dc-support-1 dc-attack-1'}
    ]
  },
  {
    id: 'sp-selous',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-selous-name", 
    shortName: "txt-sp-selous-shortname", 
    title: "txt-sp-selous-title", 
    description: "txt-sp-selous",
    miniSprite: 'res_expl_selous_mini.png',
    health: 8,
    unlockHint: "txt-sp-selous-unlock",
    variations: [
      {gender:'male', sprite: 'res_expl_selous.png', portrait: 'res_face_selous.png'}
    ],
    characters: ['pl-trader', 'pl-cook', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-rope':3,
        'it-camp':1,
        'it-rifle':1,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-tacticalMastery', dice:'dc-attack-2 dc-support-1'}
    ]
  },
  {
    id: 'sp-stark',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-stark-name", 
    title: "txt-sp-burton-title", 
    description: "txt-sp-stark",
    miniSprite: 'res_expl_stark_mini.png',
    health: 8,
    unlockHint: "txt-sp-stark-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_stark.png', portrait: 'res_face_stark.png'}
    ],      
    characters: ['anm-camel', 'pl-bedouin', 'pl-cook'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-costonFlare':3,
        'it-rope':3,
        'it-rifle':1,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-desertExpert', dice:'dc-support-2 dc-attack-1'}
    ]
  },
  {
    id: 'sp-lovecraft',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-lovecraft-name", 
    title: "txt-sp-lovecraft-title", 
    description: "txt-sp-lovecraft",
    miniSprite: 'res_expl_lovecraft_mini.png',
    health: 2,
    unlockHint: "txt-sp-lovecraft-unlock",
    capacity: 1,
    flags: {
      special:true,
      english: true,
      humanoid: true,
      lovecraft: true,
    },
    variations: [
      {
        gender: 'male',
        sprite: 'res_expl_lovecraft.png',
        portrait: 'res_face_lovecraft.png',
      }
    ],      
    characters: ['pl-soldier-british', 'pl-soldier-scottish', 'anm-donkey'],
    spawnEvents: {
      items:{
        'it-necronomicon':1,
        'it-whisky':4,
        'it-torch':3,
        'it-pistol':1,
        'it-metalCube':1,
      }
    },
    levels: [
      {statuses:'pk-necronomicon', dice:'dc-support-2 dc-support-1'}
    ]
  },
  {
    id: 'sp-bird',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-bird-name", 
    title: "txt-sp-burton-title", 
    description: "txt-sp-bird",
    miniSprite: 'res_expl_bird_mini.png',
    health: 6,
    unlockHint: "txt-sp-bird-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_bird.png', portrait: 'res_face_bird.png'}
    ],      
    characters: ['pl-soldier-scottish', 'pl-native-starting-shaman', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-whisky':2,
        'it-dynamite':3,
        'it-torch':5,
        'it-pistol':1,
        'it-shovel':5,
      },
    },
    levels: [
      {statuses:'pk-biomeInfo', dice:'dc-support-1 dc-attack-2'}
    ]
  }, 
  {
    id: 'sp-tubman',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-tubman-name", 
    title: "txt-sp-tubman-title", 
    description: "txt-sp-tubman",
    miniSprite: 'res_expl_tubman_mini.png',
    health: 4,
    unlockHint: "txt-sp-tubman-unlock",
    variations: [
      {gender:'female', sprite: 'res_expl_tubman.png', portrait: 'res_face_tubman.png'}
    ],      
    characters: ['pl-missionary', 'pl-native-starting-warrior', 'anm-donkey'],
    spawnEvents: {
      items: {
        'it-chocolate':4,
        'it-torch':3,
        'it-fireworks':5,
        'it-ammo':7,
        'it-climbingGear':10,
      },
    },
    levels: [
      {statuses:'pk-dreamVisions', dice:'dc-attack-1 dc-support-2'}
    ]
  },
  {
    id: 'sp-crowley',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-crowley-name", 
    title: "txt-sp-fortune-title", 
    description: "txt-sp-crowley",
    miniSprite: 'res_expl_crowley_mini.png',
    health: 6,
    unlockHint: "txt-sp-crowley-unlock",
    variations: [
      {gender:'male', sprite:'res_expl_crowley.png', portrait: 'res_face_crowley.png'}
    ],
    characters: ['pl-cultist', 'pl-cultist', 'pl-cultist'],
    spawnEvents: {
      items: {
        'it-cocaLeaves':10,
        'it-dynamite':6,
        'it-shovel':4,
      },
    },
    levels: [
      {statuses:'pk-occultVision', dice:'dc-attack-2 dc-attack-1'}
    ]
  },
  {
    id: 'sp-lovelace',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    name: "txt-sp-lovelace-name", 
    title: "txt-sp-ee-mathematician-title", 
    description: "txt-sp-lovelace",
    miniSprite: 'res_expl_lovelace_mini.png',
    health: 4,
    unlockHint: "txt-sp-lovelace-unlock",
    flags: {
      special:true,
      british: true,
      humanoid: true,
    },
    variations: [
      {
        gender: 'female',
        sprite: 'res_expl_lovelace.png',
        portrait: 'res_face_lovelace.png',
      }
    ],      
    characters: ['pl-soldier-british', 'anm-dog-hunting', 'anm-donkey'],
    spawnEvents: {
      items:{
        'it-abacus':1,
        'it-chocolate':4,
        'it-torch':3,
        'it-ammo':5,
        'it-costonFlare':3,
      }
    },
    levels: [
      {statuses:'pk-polymath', dice:'dc-support-2 dc-defend-1'}
    ]
  },
  {
    id: 'sp-amundsen',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    alwaysUnlocked: true,
    name: "txt-sp-amundsen-name", 
    title: "txt-sp-amundsen-title", 
    description: "txt-sp-amundsen",
    characters: 'pl-native-animalHandler-inuit anm-dog-husky anm-dog-husky',
    health: 6,
    spawnEvents: {
      items: {
        'it-chocolate':5,
        'it-climbingGear':6,
        'it-shotgun':1,
        'it-snowshoe':10,
        'it-polarStation-ticket':10,
      },
    },
    levels: [
      {statuses:'pk-arcticExplorer', dice: 'dc-support-2 dc-defend-1'}
    ],
    variations: [
      {gender:'male', sprite:'res_expl_amundsen.png', portrait:'res_face_amundsen.png'}
    ],
    miniSprite: 'res_expl_amundsen_mini.png',
  },
  {
    id: 'sp-feihong',
    extends: 'sp-base', 
    debugCategory: 'Famous Explorer',
    alwaysUnlocked: true,
    name: "txt-sp-feihong-name", 
    title: "txt-sp-feihong-title", 
    description: "txt-sp-feihong",
    characters: 'anm-waterBuffalo pl-cook',
    health: 4,
    healthBonus: 1,
    spawnEvents: {
      items: {
        'it-chocolate':5,
        'it-torch':3,
        'it-rope':10,
        'it-firstAid':4,
      },
    },
    levels: [
      {statuses:'pk-healer', dice: 'dc-feihong dc-support-2'}
    ],
    variations: [
      {gender:'male', sprite:'res_expl_feihong.png', portrait:'res_face_feihong.png'}
    ],
    miniSprite: 'res_expl_feihong_mini.png',
  },
])