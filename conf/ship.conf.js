config.entities.add([

// fixtures
  {
    id: 'fxt-ship',
    name: "txt-fxt-ship-name",
    hasStash: true,
    initItems: {},
    mapScore: 0,
    keepReachable: true,
    sprite: "res_fxt_ship_idle.png",
    flags: '+ship',
    actions: ['evt-ship-return'],
    debugColor: 'DIMGRAY',
  },

// events

  {
    id: 'evt-ship-return',
    actionText: "txt-evt-ship-return-action",
    reqPartyFlags: '-shipDeny',
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_spec_ship_3.png', type: 'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_spec_ship_2.png', type: 'day'},
      },
    ],
    playMusic: 'thm_harbor_1',
    select: [
      {
        reqTutorial: false,
        text: "txt-evt-ship-return",
        select: 'evt-ship-actions',
      },
      {
        reqTutorial: true,
        setPartyFlags: '+shipDeny',
        select: 'evt-tutorial-shipReturn',
      },
    ],
  },
  {
    id: 'evt-ship-actions',
    actions: [
      'evt-ship-goHome',
      'evt-ship-goHome-success',
      'evt-ship-stash',
      'evt-ship-refillWater',
      'evt-nature-rest',
      'evt-ship-leave',
    ],
  },
  {
    id: 'evt-ship-actions-first',
    actions: [
      'evt-ship-stash-first',
      'evt-ship-refillWater-first',
      'evt-ship-beginExpedition'
    ],
  },
  {
    id: 'evt-ship-arrival',
    text: "txt-evt-ship-arrival",
    chat: 'cl-expedition-start',
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_spec_ship_3.png', type: 'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_spec_ship_2.png', type: 'day'},
      },
    ],
    select: 'evt-ship-actions-first',
  },
  {
    id: 'evt-ship-headOutFirst',
    text: "txt-evt-ship-headOutFirst",
    select: 'evt-ship-actions-first',
  },
  {
    id: 'evt-ship-beginExpedition',
    actionText: "txt-evt-ship-beginExpedition-action",
    partyEvents: [
      {
        optional: true,
        reqWorld: 2,
        reqPartyFlags: "-abortedExpedition",
        incAchievement: "ach-reach-world2",
      },
      {
        optional: true,
        reqWorld: 3,
        reqPartyFlags: "-abortedExpedition",
        incAchievement: "ach-reach-world3",
      },
      {
        optional: true,
        reqWorld: 4,
        reqPartyFlags: "-abortedExpedition",
        incAchievement: "ach-reach-world4",
      },
      {
        optional: true,
        reqWorld: 5,
        reqPartyFlags: "-abortedExpedition",
        incAchievement: "ach-reach-world5",
      },
      {
        optional: true,
        reqWorld: 6,
        reqPartyFlags: "-abortedExpedition",
        incAchievement: "ach-reach-world6",
      },
      'evt-world-initQuests'
    ]
  },
  {
    id: 'evt-ship-stash-first',
    actionText: "txt-evt-ship-stash-first-action",
    posTile: {fixtures: 'fxt-ship'},
    loot: {
      items: {},
      title: "txt-evt-ship-stash-first-title",
      slots: 10,
      close: {text: "txt-evt-ship-stash-first", select: 'evt-ship-headOutFirst'},
      cancel:{text: "txt-evt-ship-stash-first-1", select: 'evt-ship-headOutFirst'},
    },
  },
  {
    id: 'evt-ship-stash',
    actionText: "txt-evt-ship-stash-first-action",
    loot: {
      items: {},
      title: "txt-evt-ship-stash-first-title",
      slots: 10,
      close: 'evt-ship-return',
      cancel:'evt-ship-return',
    },
  },
  {
    id: 'evt-ship-refillWater',
    actionText: "txt-evt-cave-mushrooms-refillWater-action",
    select: [
      {
        reqItems: {'it-water':100},
        text: "txt-evt-ship-refillWater",
        select: 'evt-ship-actions',
      },
      {
        prio:1,
        text: "txt-evt-ship-refillWater-1",
        chat: 'cl-water-pack',
        items: {'it-water':10},
        select: 'evt-ship-actions',
      }
    ],
  },
  {
    id: 'evt-ship-refillWater-first',
    actionText: "txt-evt-cave-mushrooms-refillWater-action",
    select: [
      {
        reqItems: {'it-water':100},
        text: "txt-evt-ship-refillWater-first",
        select: 'evt-ship-headOutFirst',
      },
      {
        prio:1,
        text: "txt-evt-ship-refillWater-first-1",
        chat: 'cl-water-pack',
        items: {'it-water':10},
        select: 'evt-ship-headOutFirst',
      }
    ],
  },
  {
    id: 'evt-ship-goHome',
    actionText: "txt-evt-ship-goHome-action",
    reqPartyFlags: '-expeditionDone',
    text: "txt-evt-ship-goHome",
    actions: [
      {
        actionText: "txt-evt-ship-goHome-action-1",
        text: "txt-evt-ship-goHome-1",
        actions: {
          actionText: "txt-evt-ship-goHome-action-2",
          setPartyFlags: "+abortedExpedition",
          endWorld: {goalFame:false},
        },
      },
      {
        actionText: "txt-evt-ship-goHome-action-3",
      },
    ],
  },
  {
    id: 'evt-ship-goHome-success',
    actionText: "txt-evt-ship-goHome-success-action",
    reqPartyFlags: '+expeditionDone',
    text: "txt-evt-ship-goHome-success",
    select: 'evt-expedition-done'
  },
  {
    id: 'evt-ship-leave',
    actionText: "txt-evt-ship-leave-action",
    select: 'evt-leave',
  },
  {
    id: 'evt-ship-morning',
    playMusic: 'thm_harbor_1',
    partyEvents: [
      {
        optional: true,
        reqBiomeFlags: '+arctic',
        showImage: {src: 'evt_spec_ship_3.png', type: 'day'},
      },
      {
        optional: true,
        reqBiomeFlags: '-arctic',
        showImage: {src: 'evt_spec_ship_2.png', type: 'day'},
      },
    ],
    text: "txt-evt-ship-morning",
    chat: 'cl-newMorning',       
    select: 'evt-ship-actions',
  },
])
