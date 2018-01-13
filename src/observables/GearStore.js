const gears = {
  hunter: [
  { key: 0,
    name: "Hunter's Gaze",
    type: 'Helmet',
    desc: "The hunted adorn this grisly trophy.",
    attr: [
      { key: 0,
        name: "Troop Armor Bonus",
        value: [
          '12.12%', '20.2%', '31.31%', '43.43%', '58.58%', '73.73%'
        ]
      },
      { key: 1,
        name: "Hero Critical Hit",
        value: [
          '0.61%', '1.01%', '1.52%', '2.12%', '2.83%', '3.64%'
        ]
      },
      { key: 2,
        name: "Max MP",
        value: [
          '121', '202', '313', '434', '586', '737'
        ]
      }
    ]
  }, //
  { key: 1,
    name: "Hunter's Carapace",
    type: 'Armour',
    desc: "An impenetrable shell, fitting for master Hunter.",
    attr: [
      { key: 0,
        name: "Troop Armor Bonus",
        value: [
          '15%', '25%', '38%', '54%', '72%', '91%'
        ]
      },
      { key: 1,
        name: "Streak per Attack",
        value: [
          '1', '1%', '1%', '1%', '2%', '2%'
        ]
      },
      { key: 2,
        name: "Max MP",
        value: [
          '120', '200', '310', '430', '580', '730'
        ]
      }
    ]
  }, //
  { key: 2,
    name: "Hunter's Tracks",
    type: 'Footwear',
    desc: "Good things come to those who wait.",
    attr: [
      { key: 0,
        name: "Troop HP Bonus",
        value: [
          '2%', '3%', '5%', '7%', '9%', '11%'
        ]
      },
      { key: 1,
        name: "Gathering March Speed",
        value: [
          '5%', '6%', '9%', '12%', '15%', '18%'
        ]
      },
      { key: 2,
        name: "Monster March Speed",
        value: [
          '9%', '13%', '17%', '23%', '29%', '35%'
        ]
      }
    ]
  },
  { key: 3,
    name: "Hunter's Shears",
    type: 'Weapons',
    desc: "Twin claws that can bypass any defense.",
    attr: [
      { key: 0,
        name: "Loot Tile Gather Speed",
        value: [
          '3%', '4%', '6%', '9%', '12%', '15%'
        ]
      },
      { key: 1,
        name: "Hero Attack Bonus",
        value: [
          '2%', '3%', '4%', '6%', '8%', '10%'
        ]
      },
      { key: 2,
        name: "Max MP",
        value: [
          '190', '310', '490', '690', '920', '1,160'
        ]
      }
    ]
  },
  { key: 4,
    name: "Hunter's Insignia",
    type: 'Accessories',
    desc: "Twin claws that can bypass any defense.",
    attr: [
      { key: 0,
        name: "Max MP",
        value: [
          '240', '390', '610', '860', '1,150', '1,450'
        ]
      }
    ]
  },

  ],
  gunslinger: [
    { key: 0,
      name: "Gunslinger's Hat",
      type: 'Helmet',
      desc: "No gunslinger outfit would be complete without a stylish hat.",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '8%', '13%', '20%', '29%', '38%', '48%'
          ]
        },
        { key: 1,
          name: "Troop HP Bonus",
          value: [
            '4%', '7%', '10%', '15%', '20%', '25%'
          ]
        },
        { key: 2,
          name: "Loot Tile Gather Speed",
          value: [
            '2%', '3%', '4%', '6%', '8%', '10%'
          ]
        }
      ]
    }, //
    { key: 1,
      name: "Gunslinger's Coat",
      type: 'Armour',
      desc: "This coat is made from the hide of a Behemoth, making it extremely tough against piercing attacks",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '15%', '24%', '38%', '54%', '71%', '90%'
          ]
        },
        { key: 1,
          name: "Troop HP Bonus",
          value: [
            '5%', '8%', '13%', '18%', '24%', '31%'
          ]
        },
        { key: 2,
          name: "Troop Load",
          value: [
            '4%', '5%', '7%', '9%', '11%', '14%'
          ]
        }
      ]
    }, 
    { key: 2,
      name: "Gunslinger's Boots",
      type: 'Footwear',
      desc: "",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '2%', '3%', '5%', '7%', '9%', '12%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '6%', '10%', '16%', '23%', '30%', '38%'
          ]
        },
        { key: 2,
          name: "Troop HP Bonus",
          value: [
            '1%', '2%', '3%', '5%', '6%', '8%'
          ]
        },
        { key: 3,
          name: "Attack March Speed",
          value: [
            '7%', '10%', '14%', '18%', '24%', '29%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Gunslinger's Flame Gun",
      type: 'Weapon',
      desc: "A gunslinger never misses.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '12%', '19%', '30%', '43%', '57%', '70%'
          ]
        },
        { key: 1,
          name: "Loot Tile Gather Speed",
          value: [
            '3%', '5%', '8%', '12%', '16%', '20%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Gunslinger's Gloves",
      type: 'Accessories',
      desc: "Provides an excellent grip while holding any weapon.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '4%', '6%', '10%', '14%', '19%', '24%'
          ]
        },
        { key: 1,
          name: "Troop Load",
          value: [
            '3%', '4%', '6%', '8%', '11%', '13%'
          ]
        },
        { key: 2,
          name: "Loot Tile Gather Speed",
          value: [
            '4%', '6%', '9%', '13%', '17%', '21%'
          ]
        }
      ]
    },
  
  ],
  // SENTINEL
  sentinel: [
    { key: 0,
      name: "Sentinel's Watch",
      type: 'Helmet',
      desc: "All encompassing headgear at the price of acute visibility.",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '42%', '67%', '105%', '148%', '197%', '249%'
          ]
        },
        
      ]
    }, //
    { key: 1,
      name: "Sentinel's Plate",
      type: 'Armour',
      desc: "An imposing mantle worn by protectors of the Realm.",
      attr: [
        { key: 0,
          name: "Trap Attack",
          value: [
            '1%', '2%', '3%', '5%', '6%', '8%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '35%', '56%', '87%', '123%', '164%', '207%'
          ]
        },
        { key: 2,
          name: "Troop Load",
          value: [
            '4%', '5%', '8%', '10%', '13%', '16%'
          ]
        }
      ]
    },
    { key: 2,
      name: "Sentinel's Greaves",
      type: 'Footwear',
      desc: "Heavy boots for the sure-footed.",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '28%', '45%', '71%', '100%', '133%', '168%'
          ]
        },
        { key: 1,
          name: "Troop Load",
          value: [
            '3%', '3%', '5%', '6%', '8%', '10%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Sentinel's Auto Crossbow",
      type: 'Weapon',
      desc: "Machinery that fires a barrage of crossbow bolts.",
      attr: [
        { key: 0,
          name: "Trap Attack",
          value: [
            '7%', '11%', '17%', '24%', '32%', '41%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '12%', '20%', '31%', '43%', '58%', '73%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Sentinel's Belt",
      type: 'Accessories',
      desc: "Worn by elite warriors to withstand the heavy burden of their plated armor and massive weaponry.",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '5%', '7%', '11%', '16%', '21%', '27%'
          ]
        },
        { key: 1,
          name: "Troop HP Bonus",
          value: [
            '3%', '5%', '8%', '12%', '16%', '20%'
          ]
        },
        { key: 2,
          name: "Troop Load",
          value: [
            '4%', '5%', '8%', '10%', '13%', '16%'
          ]
        }
      ]
    },
    { key: 5,
      name: "Sentinel's Aegis",
      type: 'Accessories',
      desc: "Worn by elite warriors to withstand the heavy burden of their plated armor and massive weaponry.",
      attr: [
        { key: 0,
          name: "Troop Armor Bonus",
          value: [
            '21%', '34%', '52%', '74%', '99%', '125%'
          ]
        },
      ]
    },
  
  ], // END SENTINEL

arbiter: [
  { key: 0,
    name: "Arbiter's Crown",
    type: 'Helmet',
    desc: "Those who carry the crown command the utmost respect.",
    attr: [
      { key: 0,
        name: "Troop Attack Bonus",
        value: [
          '4%', '6%', '10%', '14%', '19%', '24%'
        ]
      },
      { key: 1,
        name: "Troop Armor Bonus",
        value: [
          '17%', '27%', '42%', '59%', '78%', '99%'
        ]
      },
      { key: 2,
        name: "Attack March Speed",
        value: [
          '4%', '5%', '7%', '9%', '11%', '14%'
        ]
      }
    ]
  }, 
  { key: 1,
    name: "Arbiter's Raiment",
    type: 'Armour',
    desc: "Ornamented armor that sows seeds of envy in all who see it.",
    attr: [
      { key: 0,
        name: "Troop Attack Bonus",
        value: [
          '5%', '8%', '12%', '17%', '23%', '29%'
        ]
      },
      { key: 1,
        name: "Troop Armor Bonus",
        value: [
          '15%', '25%', '38%', '54%', '72%', '91%'
        ]
      },
      { key: 2,
        name: "Attack March Speed",
        value: [
          '5%', '7%', '10%', '13%', '17%', '21%'
        ]
      }
    ]
  },
  { key: 2,
    name: "Arbiter's Stance",
    type: 'Footwear',
    desc: "Ornamented armor that sows seeds of envy in all who see it.",
    attr: [
      { key: 0,
        name: "Troop Attack Bonus",
        value: [
          '9%', '15%', '24%', '33%', '44%', '56%'
        ]
      },
      { key: 1,
        name: "Troop Armor Bonus",
        value: [
          '4%', '6%', '10%', '14%', '19%', '24%'
        ]
      },
      { key: 2,
        name: "Attack March Speed",
        value: [
          '9%', '12%', '17%', '22%', '28%', '35%'
        ]
      }
    ]
  },
  { key: 3,
    name: "Arbiter's Judgement",
    type: 'Weapon',
    desc: "A polearm that unleashes its full potential in times of peril.",
    attr: [
      { key: 0,
        name: "Troop Attack Bonus",
        value: [
          '19%', '30%', '47%', '67%', '89%', '113%'
        ]
      }
    ]
  },
  { key: 4,
    name: "Arbiter's Ring",
    type: 'Accessories',
    desc: "Instills newfound vigor in its bearer.",
    attr: [
      { key: 0,
        name: "Attack March Speed",
        value: [
          '6%', '9%', '12%', '16%', '20%', '25%'
        ]
      }
    ]
  },
  { key: 5,
    name: "Arbiter's Talisman",
    type: 'Accessories',
    desc: "A shining medallion won by commanders of past battles.",
    attr: [
      { key: 0,
        name: "Troop Attack Bonus",
        value: [
          '5%', '7%', '11%', '16%', '21%', '27%'
        ]
      },
      { key: 1,
        name: "Troop HP Bonus",
        value: [
          '3%', '4%', '7%', '10%', '13%', '16%'
        ]
      }
    ]
  } // END ARBITER


  ],

  assasin: [
    { key: 0,
      name: "Assasin's Helm",
      type: 'Helmet',
      desc: "Vorpal Steel makes this menacing helm incredibly light for its durability.",
      attr: [
        { key: 0,
          name: "City Assault Attack Bonus",
          value: [
            '5%', '8%', '12%', '17%', '23%', '29%'
          ]
        },
        { key: 1,
          name: "City Assault Armor Bonus",
          value: [
            '19%', '30%', '47%', '66%', '88%', '111%'
          ]
        },
        { key: 2,
          name: "Troop Load",
          value: [
            '2%', '2%', '3%', '4%', '5%', '6%'
          ]
        },
        { key: 3,
          name: "Attack March Speed",
          value: [
            '4%', '5%', '7%', '9%', '11%', '14%'
          ]
        }
      ]
    }, 
    { key: 1,
      name: "Assasin's Blitz Garb",
      type: 'Armour',
      desc: "A light garb that favors freedom of movement and aggression over protection.",
      attr: [
        { key: 0,
          name: "City Assault Attack Bonus",
          value: [
            '6%', '9%', '14%', '20%', '26%', '33%'
          ]
        },
        { key: 1,
          name: "City Assault HP Bonus",
          value: [
            '6%', '10%', '16%', '23%', '30%', '38%'
          ]
        },
        { key: 2,
          name: "Troop Load",
          value: [
            '4%', '5%', '8%', '10%', '13%', '16%'
          ]
        },
        { key: 3,
          name: "Attack March Speed",
          value: [
            '6%', '8%', '11%', '15%', '19%', '23%'
          ]
        }
      ]
    }, 
    { key: 2,
      name: "Assasin's Sandals",
      type: 'Footwear',
      desc: "Bestows the fift of weightlessness upon its users feet.",
      attr: [
        { key: 0,
          name: "City Assault Attack Bonus",
          value: [
            '14%', '23%', '36%', '51%', '67%', '85%'
          ]
        },
        { key: 1,
          name: "Troop Load",
          value: [
            '2%', '3%', '4%', '6%', '7%', '9%'
          ]
        },
        { key: 2,
          name: "Attack March Speed",
          value: [
            '10%', '14%', '19%', '25%', '32%', '40%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Assasin's Haste Pin",
      type: 'Accessories',
      desc: "An extravagant pin fit for royalty.",
      attr: [
        { key: 0,
          name: "City Assault Attack Bonus",
          value: [
            '8%', '13%', '20%', '29%', '38%', '48%'
          ]
        },
        { key: 1,
          name: "Attack March Speed",
          value: [
            '4%', '6%', '8%', '11%', '14%', '17%'
          ]
        },
        { key: 2,
          name: "Gathering March Speed Bonus",
          value: [
            '4%', '5%', '7%', '10%', '12%', '15%'
          ]
        },
        { key: 3,
          name: "Hero Monster March Speed Bonus",
          value: [
            '8%', '11%', '15%', '20%', '25%', '31%'
          ]
        }
      ]
    },

  
  ],
  aranea: [
    { key: 0,
      name: "Aranea's Faceplate",
      type: 'Helmet',
      desc: "The hunted adorn this grisly trophy.",
      attr: [
        { key: 0,
          name: "Cavalry Attack",
          value: [
            '8%', '10%', '15%', '24%', '39%', '58%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '7%', '8%', '12%', '19%', '31%', '46%'
          ]
        },
        { key: 2,
          name: "War Spoils",
          value: [
            '2%', '3%', '4%', '7%', '11%', '17%'
          ]
        }
      ]
    }, 
    { key: 1,
      name: "Aranea's Armor",
      type: 'Armour',
      desc: "A breathable armor meticulously designed with aerodynamic in mind.",
      attr: [
        { key: 0,
          name: "Cavalry Attack",
          value: [
            '6%', '7%', '11%', '19%', '29%', '44%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '15%', '18%', '27%', '44%', '70%', '105%'
          ]
        },
        { key: 2,
          name: "War Spoils",
          value: [
            '2%', '2%', '3%', '5%', '8%', '12%'
          ]
        }
      ]
    },
    { key: 2,
      name: "Aranea's Jump Boots",
      type: 'Footwear',
      desc: "Signature boots of a Dragon.",
      attr: [
        { key: 0,
          name: "Cavalry Attack",
          value: [
            '13%', '15%', '24%', '39%', '61%', '92%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '3%', '3%', '5%', '8%', '12%', '18%'
          ]
        },
        { key: 2,
          name: "War Spoils",
          value: [
            '2%', '3%', '4%', '6%', '10%', '15%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Aranea's High Wind Lance",
      type: 'Weapon',
      desc: "As a Dragoons' weapon of choice, the lance is perfectly attuned for aerial combat.",
      attr: [
        { key: 0,
          name: "Cavalry Attack",
          value: [
            '20%', '27%', '36%', '59%', '93%', '140%'
          ]
        },
        { key: 1,
          name: "Armor Piercing",
          value: [
            '7%', '8%', '13%', '21%', '33%', '50%'
          ]
        },
        { key: 2,
          name: "War Spoils",
          value: [
            '3%', '4%', '5%', '9%', '14%', '21%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Aranea's Gauntlets",
      type: 'Accessories',
      desc: "Ensures for an effortless grip even while flying at high speeds.",
      attr: [
        { key: 0,
          name: "Cavalry Attack",
          value: [
            '8%', '9%', '14%', '22%', '35%', '53%'
          ]
        },
        { key: 1,
          name: "Troop Armor Bonus",
          value: [
            '2%', '2%', '3%', '5%', '9%', '13%'
          ]
        },
        { key: 2,
          name: "War Spoils",
          value: [
            '3%', '4%', '6%', '9%', '15%', '22%'
          ]
        }
      ]
    },
  
  ],
  undertaker: [
    { key: 0,
      name: "Undertaker's Hood",
      type: 'Helmet',
      desc: "Helps keep the head warm and dry while offering sufficient protection.",
      attr: [
        { key: 0,
          name: "City Defense HP Bonus",
          value: [
            '6%', '9%', '20%', '41%', '73%', '115%'
          ]
        },
        { key: 1,
          name: "Empire Intimidation",
          value: [
            '4%', '5%', '7%', '12%', '19%', '28%'
          ]
        }
      ]
    },
    { key: 1,
      name: "Undertaker's Customs",
      type: 'Armour',
      desc: "An unusually lavish coat for an undertaker, said to be a gift from a wealthy widow.",
      attr: [
        { key: 0,
          name: "City Defense HP Bonus",
          value: [
            '9%', '15%', '33%', '68%', '119%', '189%'
          ]
        },
        { key: 1,
          name: "Empire Intimidation",
          value: [
            '3%', '3%', '5%', '8%', '13%', '19%'
          ]
        }
      ]
    },
    { key: 2,
      name: "Undertaker's Boots",
      type: 'Footwear',
      desc: "Heavy duty boots you won't be afraid getting dirty.",
      attr: [
        { key: 0,
          name: "City Defense HP Bonus",
          value: [
            '4%', '7%', '15%', '31%', '54%', '86%'
          ]
        },
        { key: 1,
          name: "Empire Intimidation",
          value: [
            '2%', '2%', '3%', '5%', '9%', '13%'
          ]
        },
        { key: 2,
          name: "Gathering March Speed Bonus",
          value: [
            '6%', '7%', '10%', '16%', '26%', '39%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Undertaker's Last Word",
      type: 'Weapon',
      desc: "Heavy duty boots you won't be afraid getting dirty.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '3%', '5%', '11%', '23%', '41%', '65%'
          ]
        },
        { key: 1,
          name: "Banishment Portal Troop HP Bonus",
          value: [
            '5%', '8%', '18%', '36%', '63%', '100%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Undertaker's Memento",
      type: 'Accessories',
      desc: "A splendid ring likely once worn by nobility.",
      attr: [
        { key: 0,
          name: "City Defense HP Bonus",
          value: [
            '4%', '21%', '37%', '53%', '70%', '86%'
          ]
        },
        { key: 1,
          name: "Enemy Hero Banishment Bonus Duration",
          value: [
            '12:50', '28:20', '43:40', '59:10', '01:14:30', '01:30:00'
          ]
        }
      ]
    },
  
  ],
  reaper: [
    { key: 0,
      name: "Reaper's End",
      type: 'Helmet',
      desc: "The last face everyone sees.",
      attr: [
        { key: 0,
          name: "Warrior Attack",
          value: [
            '12%', '14%', '22%', '35%', '56%', '84%'
          ]
        },
        { key: 1,
          name: "Enemy Hero Banishment Bonus Duration",
          value: [
            '08:30', '10:00', '15:30', '25:20', '40:00', '01:00:00'
          ]
        }
        
      ]
    },
    { key: 1,
      name: "Reaper's Shadow",
      type: 'Armour',
      desc: "A cloak that turns it and its wearer invisible while in shadow.",
      attr: [
        { key: 0,
          name: "Warrior Attack",
          value: [
            '11%', '13%', '20%', '32%', '51%', '77%'
          ]
        },
        { key: 1,
          name: "Enemy Hero Banishment Bonus Duration",
          value: [
            '08:30', '10:00', '15:30', '25:20', '40:00', '01:00:00'
          ]
        }
        
      ]
    },
    { key: 2,
      name: "Reaper's Wake",
      type: 'Footwear',
      desc: "Plated boots that are absolutely silent while walking.",
      attr: [
        { key: 0,
          name: "Warrior Attack",
          value: [
            '14%', '17%', '26%', '43%', '67%', '101%'
          ]
        },
        { key: 1,
          name: "Enemy Hero Banishment Bonus Duration",
          value: [
            '08:30', '10:00', '15:30', '25:20', '40:00', '01:00:00'
          ]
        }
        
      ]
    },
    { key: 3,
      name: "Reaper's Touch",
      type: 'Weapon',
      desc: "Imparts the mark of the reaper as a fiery omen of doom.",
      attr: [
        { key: 0,
          name: "Warrior Attack",
          value: [
            '22%', '26%', '40%', '66%', '105%', '157%'
          ]
        },
        { key: 1,
          name: "Banishment Portal Troop Attack Bonus",
          value: [
            '14%', '17%', '26%', '42%', '67%', '100%'
          ]
        },
        { key: 2,
          name: "Visual Effect: City Burn",
          value: [
            '0', '0', '0', '0', '0', '1'
          ]
        }
        
      ]
    },
    { key: 4,
      name: "Reaper's Curse",
      type: 'Accessories',
      desc: "Cursed gauntlets, while extremely powerful, are said to shorten its wearer's lifespan... at least those are the rumors.",
      attr: [
        { key: 0,
          name: "Warrior Attack",
          value: [
            '9%', '10%', '16%', '26%', '41%', '61%'
          ]
        },
        { key: 1,
          name: "Enemy Hero Banishment Bonus Duration",
          value: [
            '17:10', '20:10', '30:50', '50:30', '01:20:10', '02:00:00'
          ]
        }
        
      ]
    }
  

  ], // END OF REAPER


  beastmaster: [
    { key: 0,
      name: "Beastmaster's Eyes",
      type: 'Helmet',
      desc: "Greatly enhances its wearer's eyesight, while some Beastmasters claim it even enables them to see in the dark.",
      attr: [
        { key: 0,
          name: "Hero Attack Bonus",
          value: [
            '2%', '2%', '3%', '5%', '8%', '12%'
          ]
        },
        { key: 1,
          name: "Hero Critical Hit",
          value: [
            '0.7%', '0.8%', '1%', '2%', '3%', '5%'
          ]
        },
        { key: 2,
          name: "Max MP",
          value: [
            '230', '270', '420', '690', '1,090', '1,630'
          ]
        }
      ]
    }, 
    { key: 1,
      name: "Beastmaster's Torso",
      type: 'Armour',
      desc: "Armor that embodies nature's grit.",
      attr: [
        { key: 0,
          name: "Hero Attack Bonus",
          value: [
            '1%', '1%', '2%', '3%', '5%', '8%'
          ]
        },
        { key: 1,
          name: "Max MP",
          value: [
            '230', '270', '420', '690', '1,090', '1,630'
          ]
        },
        { key: 2,
          name: "MP Recovery",
          value: [
            '2%', '3%', '4%', '7%', '11%', '16%'
          ]
        }
      ]
    }, 
    { key: 2,
      name: "Beastmaster's Legs",
      type: 'Footwear',
      desc: "The prowl of the Beastmaster is legendary.",
      attr: [
        { key: 0,
          name: "Hero Monster March Speed Bonus",
          value: [
            '7%', '8%', '13%', '21%', '33%', '50%'
          ]
        },
        { key: 1,
          name: "Hero Attack Bonus",
          value: [
            '1%', '2%', '3%', '4%', '7%', '10%'
          ]
        },
        { key: 2,
          name: "Max MP",
          value: [
            '290', '340', '520', '860', '1,360', '2,040'
          ]
        }
      ]
    },
    { key: 3,
      name: "Beastmaster's Claws",
      type: 'Weapons',
      desc: "Razor sharp claws perfect for tearing through prey.",
      attr: [
        { key: 0,
          name: "Hero Attack Bonus",
          value: [
            '4%', '4%', '6%', '11%', '17%', '25%'
          ]
        },
        { key: 1,
          name: "Additional Streak per Attack",
          value: [
            '1', '1', '1', '2', '3', '4'
          ]
        },
        { key: 2,
          name: "Max MP",
          value: [
            '290', '340', '520', '860', '1,360', '2,040'
          ]
        }
      ]
    },
    { key: 4,
      name: "Beastmaster's Spirit",
      type: 'Accessories',
      desc: "Beastial spirits stir from within.",
      attr: [
        { key: 0,
          name: "Hero Attack Bonus",
          value: [
            '2%', '3%', '4%', '6%', '10%', '15%'
          ]
        },
        { key: 1,
          name: "Recovery MP",
          value: [
            '3%', '4%', '6%', '10%', '15%', '23%'
          ]
        }
      ]
    },
  
  ], // END OF BEASTMASTER


  inquisitor: [
    { key: 0,
      name: "Inquisitor's Diadem",
      type: 'Helmet',
      desc: "This mesmerizing circlet bestows the user with a keen clairvoyance's.",
      attr: [
        { key: 0,
          name: "Basic Research Speed",
          value: [
            '6%', '7%', '10%', '21%', '65%', '7%'
          ]
        }
      ]
    }, 
    { key: 1,
      name: "Inquisitor's Robes",
      type: 'Armour',
      desc: "Faint stains from past experiments appear faded on this otherwise impeccable garb.",
      attr: [
        { key: 0,
          name: "Basic Research Speed",
          value: [
            '5%', '6%', '8%', '17%', '57%', '95%'
          ]
        }
      ]
    }, 
    { key: 2,
      name: "Inquisitor's Sandals",
      type: 'Footwear',
      desc: "Breathable and comfortable, one could forget they were even wearing them.",
      attr: [
        { key: 0,
          name: "Basic Research Speed",
          value: [
            '2%', '3%', '6%', '12%', '32%', '53%'
          ]
        }
      ]
    },
    { key: 3,
      name: "Inquisitor's Blade",
      type: 'Weapons',
      desc: "Time has been kind to this blade over the years as it still has that freshly-forged glisten.",
      attr: [
        { key: 0,
          name: "Basic Research Speed",
          value: [
            '3%', '5%', '7%', '13%', '42%', '71%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Inquisitor's Timepiece",
      type: 'Accessories',
      desc: "With this timepiece, one does not simply tell time - one alters it.",
      attr: [
        { key: 0,
          name: "Basic Research Speed",
          value: [
            '1%', '2%', '5%', '11%', '28%', '47%'
          ]
        }
      ]
    } 
  ],
  
  glacian: [
    { key: 0,
      name: "Glacian's Guise",
      type: 'Helmet',
      desc: "A protective facemask, capable of shielding from blistering cold winds and powerful attacks.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '8%', '10%', '23%', '48%', '91%', '154%'
          ]
        },
        { key: 1,
          name: "Mage Armor",
          value: [
            '13%', '17%', '37%', '79%', '149%', '251%'
          ]
        },
        { key: 2,
          name: "Mage Training Speed",
          value: [
            '7%', '8%', '11%', '19%', '32%', '50%'
          ]
        },
      ]
    }, 
    { key: 1,
      name: "Glacian's Plate",
      type: 'Armour',
      desc: "Tiny bits of diamond are encrusted in its metal and woven into its fabric.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '6%', '8%', '17%', '37%', '70%', '118%'
          ]
        },
        { key: 1,
          name: "Mage Armor",
          value: [
            '21%', '27%', '60%', '129%', '243%', '410%'
          ]
        },
        { key: 2,
          name: "Attack Resistance",
          value: [
            '4%', '5%', '7%', '11%', '19%', '30%'
          ]
        },
      ]
    }, 
    { key: 2,
      name: "Glacian's Ice Climbers",
      type: 'Footwear',
      desc: "Shining plated boots that make walking across ice effortless.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '8%', '11%', '24%', '51%', '96%', '162%'
          ]
        },
        { key: 1,
          name: "Mage Armor",
          value: [
            '10%', '13%', '29%', '63%', '119%', '201%'
          ]
        },
        { key: 2,
          name: "Attack March Speed",
          value: [
            '7%', '7%', '11%', '18%', '30%', '47%'
          ]
        },
      ]
    },
    { key: 3,
      name: "Glacian's Seraphim Rod",
      type: 'Weapons',
      desc: "Imbued with the power of the Goddes of Ice.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '23%', '31%', '69%', '148%', '278%', '469%'
          ]
        }
      ]
    },
    { key: 4,
      name: "Glacians's Necklace",
      type: 'Accessories',
      desc: "A delicate chocker that appears to tell a store through its intricate metalwork.",
      attr: [
        { key: 0,
          name: "Troop Attack Bonus",
          value: [
            '4%', '5%', '12%', '25%', '48%', '80%'
          ]
        },
        { key: 1,
          name: "Mage Attack",
          value: [
            '4%', '5%', '12%', '25%', '48%', '80%'
          ]
        },
        { key: 2,
          name: "Royal Research Speed",
          value: [
            '2%', '3%', '4%', '6%', '10%', '16%'
          ]
        },
      ]
    }, 
  
  ], // END OF GLACIAN


  mercenary: [
    { key: 0,
      name: "Mercenary Commander's Coif",
      type: 'Helmet',
      desc: "Protects the wearer and displays their importance.",
      attr: [
        { key: 0,
          name: "Mercenary Troop Attack",
          value: [
            '4%', '5%', '12%', '25%', '47%', '79%'
          ]
        },
        { key: 1,
          name: "Mercenary Troom Armor",
          value: [
            '9%', '11%', '25%', '54%', '102%', '171%'
          ]
        },
        { key: 2,
          name: "Mercenary Training Queue",
          value: [
            '730', '810', '1,170', '1,940', '3,220', '5,090'
          ]
        },
      ]
    }, 
    { key: 1,
      name: "Mercenary Commander's Guard",
      type: 'Armour',
      desc: "Lightweight for mobility but sturdy enogh to take a blow.",
      attr: [
        { key: 0,
          name: "Mercenary Troop Armor Bonus",
          value: [
            '24%', '32%', '70%', '151%', '284%', '479%'
          ]
        },
        { key: 1,
          name: "Mercenary Troop HP Bonus",
          value: [
            '2%', '3%', '7%', '15%', '29%', '49%'
          ]
        },
        { key: 2,
          name: "Mercenary Training Queue",
          value: [
            '730', '810', '1,170', '1,940', '3,220', '5,090'
          ]
        },
      ]
    }, 
    { key: 2,
      name: "Mercenary Commander's Treads",
      type: 'Foodwear',
      desc: "Earned as payment from a previous successful job.",
      attr: [
        { key: 0,
          name: "Mercenary Troop HP Bonus",
          value: [
            '9%', '12%', '25%', '55%', '103%', '174%'
          ]
        },
        { key: 1,
          name: "Mercenary Training Queue",
          value: [
            '690', '760', '1,110', '1,840', '3,050', '4,820'
          ]
        },
        { key: 2,
          name: "Mercenary Training Speed",
          value: [
            '1%', '1%', '2%', '3%', '6%', '9%'
          ]
        },
      ]
    }, 
    { key: 3,
      name: "Mercenary Commander's Bribe",
      type: 'Weapons',
      desc: "A Mercenary's best friend on the battlefield.",
      attr: [
        { key: 0,
          name: "Mercenary Troop Attack Bonus",
          value: [
            '26%', '35%', '77%', '165%', '312%', '525%'
          ]
        },
        { key: 1,
          name: "Mercenary Training Speed",
          value: [
            '2%', '2%', '3%', '4%', '7%', '11%'
          ]
        },
      ]
    },
    { key: 4,
      name: "Mercenary Commarnder's Band",
      type: 'Accessories',
      desc: "A strong leather arm band picked up from a defeated foe.",
      attr: [
        { key: 0,
          name: "Mercenary Troop Attack",
          value: [
            '4%', '5%', '11%', '24%', '46%', '77%'
          ]
        },
        { key: 1,
          name: "Mercenary Troom Armor",
          value: [
            '2%', '3%', '7%', '14%', '27%', '45%'
          ]
        },
        { key: 2,
          name: "Mercenary Training Speed",
          value: [
            '1%', '2%', '2%', '4%', '6%', '10%'
          ]
        },
      ]
    }, 
  
  ], // END OF MERCENARY

}
export default gears