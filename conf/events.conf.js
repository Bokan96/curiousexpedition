config.entities.add([
  
  {
    id: 'evt-world-init',
    compassScore: 15,
    // Reset Party Flags
    setPartyFlags: {
      harborEventsRecruit: false, 
      harborEventsRecruit2: false, 
      harborEventsMap: false,
      imaginaryFriend: false,
      followedByNatives: false,
      nativeHelp: false,
      noSanityRacistFood: false,
      noSanitySexist: false,
      lostPersonalItem: false,
      expeditionDone: false,
      gorillaCombat: false,
      jingleFirstTimePlayed: false,
      playJingle: false,
    },
    charEffects: [
      { // reset character flags
        count: 'any',
        setCharFlags: '-homeWorld'
      },
      { // Reset lone survivor perk
        optional: true, reqPerk: '+loneSurvivor',
        setPartyFlags: '+loneSurvivor',
      },
    ],
    partyEffects: [ 
      { // Generic Gameplay Jingle is played from time to time
        reqTutorial: false,
        setPartyStatus: '+playJingle'
      },
      { // Ambient Particle
        setPartyStatus: '+ambientParticle',
      },
      { // Set starting sanity report
        optional: true,
        reqSanity: '111..999',
        reqTutorial: false,
        setPartyFlags: '+sanityReport',
        setPartyStatus: '+sanityReport-high',
      },
      {
        optional: true,
        reqSanity: '71..110',
        reqTutorial: false,
        setPartyFlags: '+sanityReport',
        setPartyStatus: '+sanityReport-medium',
      },
      {
        optional: true,
        reqSanity: '20..70',
        reqTutorial: false,
        setPartyFlags: '+sanityReport',
        setPartyStatus: '+sanityReport-low',
      },
      {
        optional: true,
        reqDifficulty: '0',
        compassScore: +99999,
      },
      { optional: true, ref: 'evt-occultVision-reveal' },
      { optional: true, ref: 'evt-occultVision-reveal' },
      { optional: true, ref: 'evt-occultVision-reveal' },
      
      { optional: true, ref: 'evt-polarStation-reveal' },
      { optional: true, ref: 'evt-polarStation-reveal' },
      { optional: true, ref: 'evt-polarStation-reveal' }
    ],
  },

// warped world

  {
    id: 'evt-warpedWorld-start',
    addFixture: {ref:'fxt-portal', range:0},
    incAchievement: "ach-portals",
  },

// ----- Start Events
  
  {
    id: 'evt-world-start',
    events: [
      {prio: 0, ref:'evt-tutorial-start-1'},
      {prio: 1, ref:'evt-ship-arrival'},
    ]
  },
  {
    id: 'evt-world-initQuests',
    partyEffects: [
      {
        optional: true,
        reqItems: {'it-quest-1-letter':1},
        text: "txt-evt-world-initQuests",
        posTile: {fixtureFlags:'+village', closest:true},
        revealTiles: {radius:1, fixture:true, centerCam:false},
        setFixtureFlags: '+questLetter',
      },
      {
        optional: true,
        reqWorld: '0',
        reqPartyStatus: '+missionary',
        charEffects: {
          reqCharFlags: '+missionary',
          text: "txt-evt-world-initQuests-1"
        },
        posTile: {fixtureFlags:'+village', closest:true},
        revealTiles: {radius:1, fixture:true, centerCam:false},
        setFixtureFlags: '+questMissionary',
      },
      {
        optional: true,
        reqWorld: '0',
        reqPartyStatus: '+escortVillager',
        text: "txt-evt-world-initQuests-2",
        posTile: {fixtureFlags:'+village', closest:true},
        revealTiles: {radius:1, fixture:true, centerCam:false},
      },
      {
        optional: true,
        reqPartyStatus: '+arcticClaim-4',
        events: 'evt-quest-arcticClaim-worldInit',
      },
      {
        optional: true,
        reqPartyStatus: '+husband',
        addFixture: {ref:'fxt-quest-husband', range:'world'},
      },
      {
        optional: true,
        reqPartyStatus: '+idol',
        posTile: {fixtureFlags:'+village'},
        setFixtureFlags: '+idolSet +idolVillage',
      },
      {
        optional: true,
        reqPartyStatus: '+blackHyena',
        addZone: {ref:'zn-hyena-black', range:50, reachable:true},
      },
      {
        optional: true,
        reqPartyStatus: '+konrad',
        posTile: {fixtureFlags:'+village'},
        setFixtureFlags: '+harborQuestKonrad',
      }
    ]
  },
  {
    id: 'evt-polarStation-reveal',
    reqBiomeFlags: '+arctic', // we need this to not accidently reveal some old ctx.pos
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+polarStation -mapped'},
    setFixtureFlags: '+mapped',
    revealTiles: {radius:1, fixture:true}
  },
  {
    id: 'evt-occultVision-reveal',
    charEffects: { reqPerk: '+occultVision' },
    posTile: {range:'..100', fixtureKnown:false, fixtureFlags:'+occultVision'},
    revealTiles: {radius:1, fixture:true, particle: 'pt-magic-reveal'}
  },

// ------ Special world unlocks
  {
    id: 'evt-unlock-specialWorld-withText',
    events: [
      {
        slots: 1,
        reqWorld: '1..',
        text: "txt-evt-unlock-specialWorld-withText",
        unlockPocket: 'pck-whiteTiger',
      },
      {
        slots: 1,
        reqWorld: '1..',
        text: "txt-evt-unlock-specialWorld-withText-1",
        unlockPocket: 'pck-waterTemple',
      },
      {
        slots: 1,
        reqWorld: '1..',
        text: "txt-evt-unlock-specialWorld-withText-2",
        unlockPocket: 'pck-volcano-dry',
      },
      {
        slots: 1,
        text: "txt-evt-unlock-specialWorld-withText-3",
        unlockPocket: 'pck-prehistoric',
      },
      {
        slots: 1,
        text: "txt-evt-unlock-specialWorld-withText-4",
        unlockPocket: 'pck-elephantGraveyard',
      },
    ],
  },
  {
    id: 'evt-unlock-specialWorld-noText',
    events: [
      {
        slots: 1,
        reqWorld: '1..',
        unlockPocket: 'pck-whiteTiger',
        popEvent: true,
      },
      {
        slots: 1,
        reqWorld: '1..',
        unlockPocket: 'pck-waterTemple',
        popEvent: true,
      },
      {
        slots: 1,
        reqWorld: '1..',
        unlockPocket: 'pck-volcano-dry',
        popEvent: true,
      },
      {
        slots: 1,
        unlockPocket: 'pck-prehistoric',
        popEvent: true,
      },
      {
        slots: 1,
        unlockPocket: 'pck-elephantGraveyard',
        popEvent: true,
      },
    ],
  },

// ----- Generic search area

  {
    id: 'evt-searchArea',
    actionText: "txt-evt-searchArea-action",
    text: "txt-evt-searchArea",
    turns: 1,
    setTileFlags: {explored:true},
    partyEffects: [
      {
        charEffects: {
          optional: true,
          reqStatus: {'st-cannibal':true}, 
          setPartyFlags: {cannibalSearch:true},
        },
      },
    ],
    chat: 'cl-generic',
    popEvent: true,
  },

// Combat

  { 
    id: 'evt-combat-loot',
    events: [
      { // Village Chief daughter event
        prio: 0,
        reqTileFlags: [{chiefDaughterVillage:true}],
        sanity: {base:0, bonus:'combatSanity'},
        standing: standingCostSacrilegLarge,
        replaceFixtures: [
          {range: 1, old:'fxt-village-1', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-2', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-3', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-4', new:'fxt-village-4-abandoned'},
        ],
        events: 'evt-village-abandoned',
      },
      { // Steal Idol village event
        prio: 0,
        reqFixtureFlags: '+idolVillageCombat',
        setFixtureFlags: '-idolVillageCombat',
        sanity: {base:0, bonus:'combatSanity'},
        standing: standingCostSacrilegLarge,
        replaceFixtures: [
          {range: 1, old:'fxt-village-1', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-2', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-3', new:'fxt-village-abandoned'},
          {range: 1, old:'fxt-village-4', new:'fxt-village-4-abandoned'},
        ],
        events: 'evt-village-abandoned',
      },
      { // Konrad quest
        prio: 0,
        reqFixtureFlags: {harborQuestKonrad:true},
        sanity: {base:0, bonus:'combatSanity'},
        events: 'evt-village-quest-konrad-loot',
      },
      { // Slaver combat
        prio: 0,
        reqFixtureFlags: '+slaverCombat',
        text: "txt-evt-combat-loot",
        sanity: {base:0, bonus:'combatSanity'},
        loot: {
          items: {},
          cancel: 'evt-slaver-combatOutcome',
          close: 'evt-slaver-combatOutcome',
        },
      },
      { // Mission abomination event
        prio: 0,
        reqPartyFlags: {missionFight:true},
        setPartyFlags: {missionFight:false}, 
        items: {'it-meat-raw':2},
        sanity: {base:0, bonus:'combatSanity'},
        events: 'evt-mission-sleep-event-5-win',
      },
      { 
        prio: 1,
        text: "txt-evt-combat-loot-1",
        loot: {
          items: {},
          close: {popEvent:true},
          cancel: {popEvent:true},
        },
        sanity: {base:0, bonus:'combatSanity'},
        report: "txt-evt-combat-loot-report",
        events: {
          reqDifficulty: '1..',
          standing: -1,
        }
      }
    ]
  },
  { 
    id: 'evt-combat-run',
    clearPushedEvents:true,
    actionText: "txt-evt-combat-run-action",
    text: "txt-evt-combat-run",
    report: "txt-evt-combat-run-report",
    incAchievement: "ach-flee",
    partyEffects: [
      { // Abomination dismiss combat
        reqPartyFlags: '+abominationCombat',
        setPartyFlags: '-abominationCombat',
        addZone: {ref:'zn-abomination', range:2},
      },
    ],
    events: [
      {
        prio: 0,
        reqTutorial: true,
        setPartyFlags: '+tutCombatDone',
        deactivateZones: {radius: 1, turns: 1000},
      },
      {
        prio: 1,
        reqDifficulty: '1..',
        charEffects: {
          count: 'any',
          reqCharFlags: '-special', reqHealth: '0',
          text: "txt-zn-abomination",
          storeCharacter: true,
          setCharFlags: '+dead',
          report: "txt-zn-abomination-report",
        }
      },
      {
        prio: 2, slots: 3, sanity: -10,
        reqDifficulty: '0',
        text: "txt-zn-abomination-1",
      },
      {
        prio: 2, slots: 3, sanity: -20,
        reqDifficulty: '1..',
        text: "txt-zn-abomination-2",
      },
      {
        prio: 2, slots: 2, sanity: -20,
        reqDifficulty: '1..',
        text: "txt-zn-abomination-3",
        reqItemsValue: '25..',
        dropItems: 25
      },
      {
        prio: 2, slots: 1, sanity: -20, 
        reqDifficulty: '1..',
        charEffects: {
          count:1, reqCharFlags: '-special',
          text: "txt-zn-abomination-4",
          storeCharacter: true,
          setCharFlags: '+dead',
          report: "txt-zn-abomination-report-1",
        },
      }
    ],
    deactivateZones: {radius: 1, turns: 3},
  },

// ----- Generic events

  {
    id: 'evt-trauma',
    events: [
      {
        slots: 1,
        charEffects: {
          reqStatus: '-paranoid -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: {'st-paranoid':true},
          chat: 'cl-apply-paranoid',
          text: "txt-evt-trauma",
          report: "txt-evt-trauma-report",
        },
      },
      {
        slots: 1,
        charEffects: {
          reqStatus: '-claustrophobic -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: {'st-claustrophobic':true},
          chat: 'cl-apply-claustrophobic',
          text: "txt-evt-trauma-1",
          report: "txt-evt-trauma-report-1",
        },
      },
      {
        slots:1, 
        charEffects: {
          reqStatus: '-lepidopterophobia -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: {'st-lepidopterophobia':true},
          chat: 'cl-apply-lepidopterophobia',
          text: "txt-evt-trauma-2",
          report: "txt-evt-trauma-report-2",
        },
      },
      {
        slots:1,
        charEffects: {
          reqStatus: '-kleptomania -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: {'st-kleptomania':true},
          chat: 'cl-apply-kleptomania',
          text: "txt-evt-trauma-3",
          report: "txt-evt-trauma-report-3",
        },
      },
      {
        slots:1,
        charEffects: {
          reqStatus: '-superstitious -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: {'st-superstitious':true},
          chat: 'cl-apply-superstitious',
          text: "txt-evt-trauma-4",
          report: "txt-evt-trauma-report-4",
        },
      },
      {
        slots:1,
        charEffects: {
          reqStatus: '-pyromaniac -blessingPureMind',
          reqCharFlags: {humanoid:true, special:false, abomination:false},
          setStatus: '+pyromaniac',
          chat: 'cl-apply-pyromaniac',
          text: "txt-evt-trauma-5",
          report: "txt-evt-trauma-report-5",
        },
      },
    ]
  },

// ---- Abomniation Events

// { 
//   id: 'evt-abomination-turnInto',
//   charEffects: [
//     {
//       reqCharFlags: '+cultist',
//       reqStatus: {'st-injured':true},
//       text: "txt-evt-abomination-turnInto",
//       removeCharacter: true,
//       addCharacter: 'pl-abomination',
//     },
//   ],
// },

  
  // Painting

  {
    id: 'evt-painting-create',
    items: {'it-canvas':-1},
    events: [
      {
        charEffects: [
          {
            optional: true,
            reqStatus: {'pk-artist-1':true},
            partyEffects: [
              {
                optional: true,
                reqTempFlags: {paintingNative:true},
                items: {'it-painting-native-1':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingLocation:true},
                items: {'it-painting-location-1':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingShrine:true},
                items: {'it-painting-shrine-1':+1},
              },
            ], 
          },
          {
            optional: true,
            reqStatus: {'pk-artist-2':true},
            partyEffects: [
              {
                optional: true,
                reqTempFlags: {paintingNative:true},
                items: {'it-painting-native-2':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingLocation:true},
                items: {'it-painting-location-2':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingShrine:true},
                items: {'it-painting-shrine-2':+1},
              },
            ], 
          },
          {
            optional: true,
            reqStatus: {'pk-artist-3':true},
            partyEffects: [
              {
                optional: true,
                reqTempFlags: {paintingNative:true},
                items: {'it-painting-native-3':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingLocation:true},
                items: {'it-painting-location-3':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingShrine:true},
                items: {'it-painting-shrine-3':+1},
              },
            ], 
          },
          {
            optional: true,
            reqStatus: {'pk-artist-4':true},
            partyEffects: [
              {
                optional: true,
                reqTempFlags: {paintingNative:true},
                items: {'it-painting-native-4':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingLocation:true},
                items: {'it-painting-location-4':+1},
              },
              {
                optional: true,
                reqTempFlags: {paintingShrine:true},
                items: {'it-painting-shrine-4':+1},
              },
            ], 
          },
        ], 
        popEvent: true,
      },
    ],
    incAchievement: "ach-painting-collect"
  },
  {
    id: 'evt-painting-angry',
    items: {'it-canvas':-1},
    chat: 'cl-angry',
    charEffects: {
      reqCharFlags: '+artist',
      text: "txt-evt-painting-angry",
      report: "txt-evt-painting-angry-report"
    },
    popEvent: true,
  },
  
  {
    id: 'evt-shrine-paint',
    actionText: "txt-evt-shrine-paint-action",
    reqFixtureFlags: '-painting',
    setFixtureFlags: '+painting',
    charEffects: [
      {
        reqCharFlags: '+artist', 
        reqItems: {'it-canvas':1},
      },
      {
        optional: true,
        reqStatus: {'st-angry':false},
        reqCharFlags: '+artist', 
        text: "txt-evt-shrine-paint",
        events: [
          {
            slots: 1,
            text: "txt-evt-shrine-paint-1",
            report: "txt-evt-shrine-paint-report",
            setTempFlags: {paintingShrine:true},
            events: 'evt-painting-create',
          },
        ],
      },
      {
        optional:true,
        reqCharFlags: '+artist', 
        reqStatus: {'st-angry':true},
        events: 'evt-painting-angry',
      },
    ],
  },
  
  // sprawl

  {
    id: 'evt-sprawl-fire',
    showImage: {src: 'evt_spec_fire.png', type: 'day'},
    chat: 'cl-sprawlFire',
    sanity: -10,
    events: [
      {
        prio: 0,
        reqTutorial: true,
      },
      {
        slots: 6
      },
      {
        reqPartyStatus: '-fireSafe',
        setPartyStatus: '+fireSafe',
        charEffects: [
          {
            reqCharFlags: '-special',
            text: "txt-evt-sprawl-fire",
            storeCharacter: true,
            setCharFlags: '+dead',
            consume: true,
          },
          {
            chance: 0.25, optional: true,
            reqCharFlags: '-special +humanoid',
            text: "txt-evt-sprawl-fire-1",
            setStatus: '+pyromaniac',
          }
        ]
      },
      {
        reqPartyCount:'0',
        reqPartyStatus: '-fireSafe',
        reqTutorial: false,
        text: "txt-evt-sprawl-fire-2",
      }
    ]
  },

  // tiles

  {
    id: 'evt-tile-river',
    text: "txt-evt-tile-river",
    posTile: {traversable:true, closest:true, range:'..10'},
    teleport: true,
    partyEffects: [
      {
        optional:true,
        chance:0.5,
        dropItems: 50,
        reqItemsValue: '25..',
        text:"txt-evt-tile-river-1"
      },
      {
        optional:true,
        chance:0.5,
        reqCharFlags: '-special',
        text:"txt-evt-tile-river-2"
      }
    ]
  },

  {
    id: 'evt-tile-pit',
    gameOver: "Your trek fell into a dark chasm.",
    report: "txt-evt-tile-pit-report",
  },

  // Night camp event image

  {
    id: 'evt-setImage-nightCamp',
    events: [
      {
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_spec_nightCamp_1.png', showCampfire:true, showMounted:false},
        playMusic: 'thm_nature_2',
      },
      {
        reqBiomeFlags: '+arctic',
        playMusic: 'thm_arctic_night_1',
        showImage: {
          src: 'evt_spec_nightCamp_arctic_1.png', type: 'day', showCampfire:true, showMounted: false,
          particles: ['pt-snow-1', 'pt-snow-2'], particlesChance: 0.5
        },
      },
      {
        reqBiomeFlags: '+arctic',
        playMusic: 'thm_arctic_night_1',
        showImage: {
          src: 'evt_spec_nightCamp_arctic_2.png', type: 'day', showCampfire:true, showMounted: false,
          particles: ['pt-snow-1', 'pt-snow-2'], particlesChance: 0.5
        }
      },
    ], 
  },

  // ------- celebration events

  {
    id: 'evt-celebration',
    text: "txt-evt-celebration",
    showImage: {
      src: 'evt_spec_celebration_1.png', 
      npcMovement: true,
      particles: ['pt-confetti-1']
    },
  },
])
