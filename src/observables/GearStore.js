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
      name: "Gunslinger's Gaze",
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
      name: "Gunslinger's Armour",
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
  // SENTINEL
  sentinel: [
    { key: 0,
      name: "Sentinel's Gaze",
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
      name: "Sentinel's Armour",
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
    }, // end
  
  ],

arbiter: [
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