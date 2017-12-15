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
    type: 'Weapons',
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
        { key: 2,
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
  { key: 4,
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
      name: "Hunter's Armour",
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
  
  ],
  aranea: [
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
      name: "Hunter's Armour",
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
  
  ],
  undertaker: [
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
      name: "Hunter's Armour",
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
  
  ],
  reaper: [
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
      name: "Hunter's Armour",
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
  
  ],

}
export default gears