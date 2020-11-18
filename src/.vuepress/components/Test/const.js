
export const pt1 = [{
  profile: {name:"AAA"},
  skill: [{
    Cmd: "test-cmd/smash",
    Arg: { Lv:1 },
    RID: "S1",
  }],
  ability: [{
    Cmd: "test-cmd/soul",
    Arg: { Lv:1 },
    RID: "A1",
  }],
  ai: [{
    "@call":"test-cmd/smash.ai",
    arguments: { rid: "S1", player: {"@arg":"player"} }
  }]
}]

export const pt2 = [{
  profile: {name:"BBB"},
  skill: [{
    Cmd: "test-cmd/fire",
    Arg: { Lv:1 },
    RID: "S1",
  }],
  ability: [{
    Cmd: "test-cmd/soul",
    Arg: { Lv:1 },
    RID: "A1",
  }],
  ai: [{
    "@call":"test-cmd/fire.ai",
    arguments: { rid: "S1", player: {"@arg":"player"} }
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

