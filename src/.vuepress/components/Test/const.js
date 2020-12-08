
export const pt1 = [{
  profile: {name:"パンチキャット"},
  skill: [{
    Cmd: "test-cmd/smash",
    Arg: { Lv:1 },
    RID: "S0",
  }],
  ability: [{
    Cmd: "test-cmd/soul",
    Arg: {
      Lv:1, HP:5,
      STR:1, INT:0,
      VIT:0, MND:0,
      DEX:0, AGI:0,
    },
    RID: "A1",
  }],
  ai: [{
    "@call":"test-cmd/smash.ai",
    arguments: { rid: "S0", player: {"@arg":"player"} }
  }]
}]

export const pt2 = [{
  profile: {name:"ワルドッグ"},
  skill: [{
    Cmd: "test-cmd/fire",
    Arg: { Lv:1 },
    RID: "S0",
  }],
  ability: [{
    Cmd: "test-cmd/soul",
    Arg: {
      Lv:1, HP:5,
      STR:0, INT:1,
      VIT:0, MND:0,
      DEX:0, AGI:0,
    },
    RID: "A1",
  }],
  ai: [{
    "@call":"test-cmd/fire.ai",
    arguments: { rid: "S0", player: {"@arg":"player"} }
  }]
}]

export const defSkill = [{
  Cmd: "test-cmd/normal-attack",
  Arg: { Lv:1 },
  RID: "normal-attack",
},{
  Cmd: "test-cmd/wait",
  Arg: { Lv:1 },
  RID: "wait",
}]

