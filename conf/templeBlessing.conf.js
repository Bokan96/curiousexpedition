config.entities.add([

// fixtures

  {
    id: 'fxt-blessingTemple',
    name: "txt-fxt-blessingTemple-name",
    reqBiomeFlags: '-arctic',
    flags: '+shrineBlessing +dreamVisions +ruins',
    sprite: "res_fxt_templeBlessing_1.png",
    worldMap: true,
    dist: 5,
    setTile: 'tl-mountain',
    setNeighbors: [
      {count:4, ref:'tl-jungle-thick', reqBiomeFlags: '+grass | +prehistoric -desert'},
      {count:4, ref:'tl-dry-jungle-thick', reqBiomeFlags: '+dry'},
      {count:4, ref:'tl-cactusForest', reqBiomeFlags: '+desert'},
    ],
    actions: 'evt-blessingTemple-approach',
    debugCategory: 'special',
    debugColor: 'red',
  },
  {
    id: 'fxt-blessingTemple-noNeighbors',
    extends: 'fxt-blessingTemple',
    setNeighbors: [],
  },
  {
    id: 'fxt-blessingTemple-secret',
    extends: 'fxt-blessingTemple',
    setTile: [],
    setNeighbors: [],
    actions: 'evt-blessingTemple-secret-approach'
  },
  {
    id: 'fxt-blessingTemple-closed',
    name: "txt-fxt-blessingTemple-name-name",
    debugCategory: 'shrine',
    debugColor: 'red',
    sprite: "res_fxt_templeBlessing_2.png",
    showHint: false,
    dist: 5,
  },

// events	
  {
    id: 'evt-blessingTemple-secret-approach',
    actionText: "txt-evt-altar-approach-action",
    incAchievement: "ach-mountain-explode-stoneface",
    events: "evt-blessingTemple-approach"
  },
  {
    id: 'evt-blessingTemple-approach',
    actionText: "txt-evt-altar-approach-action",
    showImage: {src: 'evt_fxt_temple_blessing_1.png', type:'day'},
    text: "txt-evt-blessingTemple-approach",
    report: "txt-evt-blessingTemple-approach-report",
    actions: [
      'evt-blessingTemple-enter',
      'evt-leave',
    ],
  },
  {
    id: 'evt-blessingTemple-enter',
    actionText: "txt-evt-blessingTemple-enter-action",
    showImage: {src: 'evt_fxt_temple_blessing_int_1.png', type:'day'},
    text: "txt-evt-blessingTemple-enter",
    charEffects: [
      {
        optional: true,
        count: "any",
        actions: 'evt-blessingTemple-drink'
      },
    ],
    actions: 'evt-leave'
  },
  {
    id: 'evt-blessingTemple-drink', 
    actionText: "txt-evt-blessingTemple-drink-action",
    reqCharFlags: {special:false, humanoid:true},
    chat: 'cl-cave-sendIn',
    report: "txt-evt-blessingTemple-drink-report",
    text: "txt-evt-blessingTemple-drink",
    events: [
      {
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingPureMind',
        setStatus: '+blessingPureMind',
        removeStatusWithFlags: '+ailment',
        text: "txt-evt-blessingTemple-drink-1",
        report: "txt-evt-blessingTemple-drink-report-1",
      },
      { 
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingRegeneration',
        setStatus: '+blessingRegeneration -infected',
        text: "txt-evt-blessingTemple-drink-2",
        health: +10,
        report: "txt-evt-blessingTemple-drink-report-2",
      },
      { 
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingHoly',
        setStatus: '+blessingHoly',
        text: "txt-evt-blessingTemple-drink-3",
        standing: +3,
        report: "txt-evt-blessingTemple-drink-report-3",
      },
      { 
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingInhumanStrength',
        setStatus: '+blessingInhumanStrength',
        text: "txt-evt-blessingTemple-drink-4",
        report: "txt-evt-blessingTemple-drink-report-4",
      },
      { 
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingLeatherskin',
        setStatus: '+blessingLeatherskin',
        text: "txt-evt-blessingTemple-drink-5",
        report: "txt-evt-blessingTemple-drink-report-5",
      },
      { 
        prio: 1,
        slots: 1, 
        reqStatus: '-blessingClaws',
        setStatus: '+blessingClaws',
        text: "txt-evt-blessingTemple-drink-6",
        report: "txt-evt-blessingTemple-drink-report-6",
      },
      {
        prio: 2,
        text: "txt-evt-blessingTemple-drink-7",
        report: "txt-evt-blessingTemple-drink-report-7",
      },
    ],
    actions: 'evt-blessingTemple-leave',
  },
  {
    id: 'evt-blessingTemple-leave',
    showImage: {src: 'evt_fxt_temple_blessing_1_closed.png', type:'day'},
    text: "txt-evt-blessingTemple-leave",
    replaceFixtures: {new:'fxt-blessingTemple-closed'},
    actions: 'evt-leave',
  },


// ----------------- BLESSINGS


  { 
    id: 'st-blessingInhumanStrength',
    title: "txt-st-blessingInhumanStrength-title",
    important: true,
    debugCategory: 'blessing',
    description: "txt-st-blessingInhumanStrength",
    sprite: "res_status_heavyCarrier.png",
    bonus: {capacity: 2},
  },
  { 
    id: 'st-blessingClaws',
    title: "txt-attack-name-53",
    important: true,
    debugCategory: 'blessing',
    description: "txt-st-blessingClaws",
    sprite: "res_status_claws.png",
    bonus: {dice: 'dc-attack-blessingClaws'},
  },
  { 
    id: 'st-blessingRegeneration',
    title: "txt-st-blessingRegeneration-title",
    important: true,
    debugCategory: 'blessing',
    description: "txt-st-blessingRegeneration",
    sprite: "res_status_regeneration.png",
    bonus: {healthRegen: 0.6}
  },
  { 
    id: 'st-blessingHoly',
    title: "txt-st-blessingHoly-title",
    important: true,
    description: "txt-st-blessingHoly",
    sprite: "res_status_loneSurvivor.png",
    debugCategory: 'blessing',
    bonus: {startStanding: 3}
  },
  { 
    id: 'st-blessingPureMind',
    title: "txt-st-blessingPureMind-title",
    important: true,
    debugCategory: 'blessing',
    description: "txt-st-blessingPureMind",
    sprite: "res_status_pureMind.png",
    dayEvents: {reqAge: 1, removeStatusWithFlags: '+ailment'} // hack
  },
  { 
    id: 'st-blessingLeatherskin',
    title: "txt-st-blessingLeatherskin-title",
    important: true,
    debugCategory: 'blessing',
    description: "txt-st-blessingLeatherskin",
    sprite: "res_status_extraHealth.png",
    bonus: {health:+6},
  },

])