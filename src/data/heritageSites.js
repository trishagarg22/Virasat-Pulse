export const HERITAGE_SITES = [
  // 1. MEHRAULI (🔴 Needs Attention)
  {
    id: "mehrauli-heritage-traditions",
    name: "Mehrauli Ancient Village & Archaeological Park",
    shortName: "Mehrauli",
    type: "Traditions",
    category: "Heritage & Traditions",
    state: "Delhi (South Delhi)",
    location: "Mehrauli Archaeological Park",
    coordinates: [28.5200, 77.1820],
    dynasty: "Tomar Rajputs & Delhi Sultanate (1060 AD)",
    
    // Heritage Health Classification
    riskScore: 80,
    riskLevel: "NEEDS_ATTENTION", // "NEEDS_ATTENTION" 🔴 | "WATCH_CLOSELY" 🟡 | "WELL_PROTECTED" 🟢
    statusBadge: "🔴 Needs Attention (80% Risk)",
    statusColor: "red",
    healthStatus: "NEEDS_ATTENTION",

    practitionersCount: "45 Traditional Families",
    youthInvolvement: "11% Youth Participation",
    documentationScore: "40% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
        caption: "Jamali Kamali Mosque & Tomb inside Mehrauli Archaeological Park"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Balban's Tomb and ancient stone archways"
      },
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Rajon ki Baoli historic stepwell in Mehrauli"
      }
    ],

    // Curiosity Hook & Age Guessing Game
    surprisingFact: "Mehrauli is Delhi's oldest continuously inhabited settlement, older than Shahjahanabad by 600 years!",
    ageGuessQuiz: {
      question: "Can you guess how old Mehrauli's settlement is?",
      options: [
        "Around 400 years old (Mughal Era)",
        "Over 950 years old (1060 AD Tomar Dynasty)",
        "Around 200 years old (British Era)"
      ],
      correctIndex: 1,
      explanation: "Correct! 🎉 Founded by Tomar Rajput King Anangpal II in 1060 AD at Lal Kot, Mehrauli has been continuously inhabited for nearly 1,000 years!"
    },

    // Story Swipe Chapters (THEN -> WHAT CHANGED? -> TODAY -> WHAT COULD BE LOST?)
    storySwipe: [
      {
        phase: "THEN",
        title: "The Cradle of Imperial Delhi (1060–1850)",
        content: "Mehrauli was the fortified stronghold of Rajput kings, Mamluk sultans, and Sufi saints. Over 100 stone monuments stood amongst lush forests and natural stepwells.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Unchecked Urban Encroachment (1970–2010)",
        content: "Modern residential high-rises encroached right up to the stone walls of Rajon Ki Baoli and Balban's tomb, choking green buffer zones.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Archaeological Park & Endangered Traditions",
        content: "While the 200-acre park protects major tombs, surrounding traditional Pankha floral weavers for Phool Walon Ki Sair face severe income loss.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "An 800-Year Inter-Faith Memory",
        content: "Without active youth apprenticeships, Mehrauli's 800-year-old floral fan weaving heritage and unrecorded Sufi oral legends risk extinction.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      }
    ],

    // Then vs Now Image Comparison Slider Data
    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Unrestricted concrete residential construction abutting 14th-century stepwell walls",
        "Loss of natural rainwater feeding channels into Rajon Ki Baoli",
        "85% reduction in traditional Pankha floral fan artisan families"
      ]
    },

    shortDescription: "Delhi's oldest continuously inhabited settlement containing over 100 monuments and the annual inter-faith floral fan festival of Phool Walon Ki Sair.",
    fullDescription: "Founded by Tomar King Anangpal II in 1060 AD, Mehrauli is the cradle of Delhi's urban history. The 200-acre Mehrauli Archaeological Park holds monuments spanning 1,000 years, including Balban's Tomb and Rajon Ki Baoli.",

    timelineData: [
      {
        year: 1972,
        label: "1972 — Traditional Festival Zenith",
        practitioners: "350 Artisan Families",
        youthAdoption: "85% Community Involvement",
        status: "Vibrant Local Traditions",
        summary: "Phool Walon Ki Sair saw participation from all local Delhi communities carrying giant woven floral fans.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1988,
        label: "1988 — Park Encroachment Concerns",
        practitioners: "220 Artisan Families",
        youthAdoption: "55% Youth Engagement",
        status: "Urban Encroachment",
        summary: "Uncontrolled construction threatened green buffer zones around Rajon Ki Baoli stepwell.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2002,
        label: "2002 — Archaeological Park Notification",
        practitioners: "140 Artisan Families",
        youthAdoption: "38% Youth Participation",
        status: "Protected Park Zone",
        summary: "Delhi Development Authority and DNT notified the 200-acre Mehrauli Archaeological Park.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2015,
        label: "2015 — Floral Weaver Decline",
        practitioners: "80 Artisan Families",
        youthAdoption: "22% Apprentice Continuity",
        status: "🔴 High Vulnerability",
        summary: "Traditional Pankha floral fan weavers struggled with low financial returns during non-festival months.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Inter-faith Festival Rescue",
        practitioners: "45 Traditional Families",
        youthAdoption: "11% Youth Participation",
        status: "🔴 High Risk (80%)",
        summary: "Virasat AI proposes youth heritage fellowships to preserve Mehrauli's 800-year-old inter-faith oral traditions.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Declining numbers of traditional Pankha floral fan weaving masters",
      "Illegal urban encroachments along Mehrauli Archaeological Park boundary walls",
      "Neglect of subterranean stepwells like Rajon Ki Baoli"
    ],
    aiInsight: "Virasat AI Risk Engine identifies Mehrauli at 80% critical risk. Immediate action: Demarcate monument buffer boundaries and fund year-round artisanal stipends for Phool Walon Ki Sair weavers.",

    highlights: [
      "800-Year Inter-Faith Phool Walon Ki Sair Floral Festival",
      "Mehrauli Archaeological Park (100+ Monuments)",
      "Rajon Ki Baoli 16th Century Stepwell"
    ],
    tags: ["Traditions", "Living Culture", "Mehrauli", "Festivals"],
    xpReward: 400,
    badgeUnlocked: "Mehrauli Heritage Sentinel"
  },

  // 2. CHANDNI CHOWK (🔴 Needs Attention)
  {
    id: "chandni-chowk-living-culture",
    name: "Chandni Chowk Living Bazaar & Crafts",
    shortName: "Chandni Chowk",
    type: "Crafts",
    category: "Living Culture & Crafts",
    state: "Delhi (Old Delhi)",
    location: "Chandni Chowk, Shahjahanabad",
    coordinates: [28.6506, 77.2303],
    dynasty: "Mughal Empire (1650 AD)",
    
    riskScore: 76,
    riskLevel: "NEEDS_ATTENTION",
    statusBadge: "🔴 Needs Attention (76% Risk)",
    statusColor: "red",
    healthStatus: "NEEDS_ATTENTION",

    practitionersCount: "320 Master Artisans",
    youthInvolvement: "14% Youth Adoption",
    documentationScore: "45% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
        caption: "Historic Dariba Kalan silver and gold zari artisans in Old Delhi"
      },
      {
        url: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=1000&q=80",
        caption: "Kinari Bazaar traditional metallic lace and embroidery looms"
      },
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
        caption: "Heritage streetscapes of Chandni Chowk"
      }
    ],

    surprisingFact: "Chandni Chowk originally had a moonlight-reflecting water canal running right down its center in 1650 AD!",
    ageGuessQuiz: {
      question: "Who designed the iconic layout of Chandni Chowk?",
      options: [
        "Emperor Shah Jahan",
        "Princess Jahanara Begum (Shah Jahan's daughter)",
        "Architect Ustad Ahmad Lahori"
      ],
      correctIndex: 1,
      explanation: "Correct! 🎉 Princess Jahanara Begum designed Chandni Chowk in 1650 AD with a central water pool reflecting the full moon!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Moonlight Canal of Jahanara (1650)",
        content: "A grand 40-meter wide avenue lined with silver shops and a central water canal reflecting the midnight moon.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "British Trams & Wholesale Warehouses (1860–1980)",
        content: "The central canal was filled in for tram tracks, and historic haveli courtyards were turned into commercial godowns.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Pedestrian Plaza & Endangered Guilds",
        content: "Redeveloped into a pedestrian corridor, but rising rents threaten 300-year-old silver smiths and zari lace makers.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Living Heritage Displaced by Wholesale Stores",
        content: "Without protected craft incubators, ancestral family workshops will be permanently replaced by factory clothing stores.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Replacement of central water canal with paved pedestrian boulevard",
        "Loss of ancestral residential havelis to wholesale textile warehouses",
        "70% drop in traditional hand-spun silver zari workshops"
      ]
    },

    shortDescription: "The 370-year-old living bazaar designed by Princess Jahanara, facing severe overcrowding, loss of traditional havelis, and commercial displacement.",
    fullDescription: "Designed in 1650 AD by Princess Jahanara Begum, Chandni Chowk was originally bisected by a silver-reflecting canal.",

    timelineData: [
      {
        year: 1970,
        label: "1970 — Traditional Guild Era",
        practitioners: "2,500 Active Artisans",
        youthAdoption: "75% Family Lineage",
        status: "Living Heritage Hub",
        summary: "Over 2,000 family workshops engaged in silver minting, zardozi embroidery, and traditional perfumery.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1985,
        label: "1985 — Commercialization Surge",
        practitioners: "1,600 Active Artisans",
        youthAdoption: "50% Family Continuity",
        status: "Commercial Pressure",
        summary: "Residential havelis converted into wholesale garment warehouses, displacing traditional artisan living quarters.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1998,
        label: "1998 — Heritage Conservation Warning",
        practitioners: "1,100 Active Crafters",
        youthAdoption: "35% Youth Interest",
        status: "Structural Wear",
        summary: "Heritage conservationists highlighted structural damage to timber-framed haveli courtyards.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2012,
        label: "2012 — Infrastructure Overload",
        practitioners: "650 Active Masters",
        youthAdoption: "22% Youth Retention",
        status: "🔴 High Vulnerability",
        summary: "Overhead wiring and traffic congestion severely reduced visitor access to traditional artisan lanes.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2021,
        label: "2021 — Pedestrianization Project",
        practitioners: "420 Active Masters",
        youthAdoption: "18% Youth Continuity",
        status: "Pedestrianized Corridor",
        summary: "Redevelopment transformed main thoroughfare into non-motorized pedestrian zone.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — AI Living Heritage Protection",
        practitioners: "320 Master Artisans",
        youthAdoption: "14% Youth Adoption",
        status: "🔴 High Risk (76%)",
        summary: "Virasat AI tracks artisan displacement and proposes micro-space incubators inside restored havelis.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Conversion of ancestral artisan havelis into commercial wholesale godowns",
      "Rising rent costs driving master silver-smiths and lace makers out of Old Delhi",
      "Absence of direct digital marketplace connections for artisan families"
    ],
    aiInsight: "Virasat AI Risk Engine projects a 76% vulnerability index. Recommends designating Dariba Kalan and Kinari Bazaar as protected Cultural Craft Zones.",

    highlights: [
      "Dariba Kalan 300-Year Silver Smithing Guilds",
      "Kinari Bazaar Traditional Metallic Zari Lace",
      "Khari Baoli Asia's Largest Heritage Spice Market"
    ],
    tags: ["Crafts", "Living Culture", "Old Delhi", "Mughal Bazaar"],
    xpReward: 350,
    badgeUnlocked: "Chandni Chowk Custodian"
  },

  // 3. NIZAMUDDIN (🟡 Watch Closely)
  {
    id: "nizamuddin-living-culture",
    name: "Nizamuddin Basti & Sufi Living Culture",
    shortName: "Nizamuddin",
    type: "Traditions",
    category: "Living Cultural Heritage",
    state: "Delhi (South Delhi)",
    location: "Nizamuddin West, Delhi",
    coordinates: [28.5910, 77.2420],
    dynasty: "Delhi Sultanate & Nizamuddin Auliya (13th Century)",
    
    riskScore: 68,
    riskLevel: "WATCH_CLOSELY",
    statusBadge: "🟡 Watch Closely (68% Risk)",
    statusColor: "orange",
    healthStatus: "WATCH_CLOSELY",

    practitionersCount: "8 Master Qawwal Lineages",
    youthInvolvement: "18% Apprentice Continuity",
    documentationScore: "65% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
        caption: "Devotional Sufi Qawwali assembly at Nizamuddin Dargah courtyard"
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
        caption: "Aga Khan Trust urban renewal in Nizamuddin Basti lanes"
      },
      {
        url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
        caption: "Historic Baoli water pool restored inside Nizamuddin shrine"
      }
    ],

    surprisingFact: "Sufi poet Amir Khusrau invented the Sitar and Tabla right here in Nizamuddin in the 13th century!",
    ageGuessQuiz: {
      question: "Which iconic musical instruments were invented by Amir Khusrau in Nizamuddin?",
      options: [
        "Sitar and Tabla",
        "Veena and Mridangam",
        "Harmonium and Shehnai"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Amir Khusrau invented the Sitar (adapting the Persian Seh-tar) and Tabla in 13th-century Nizamuddin!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Cradle of Indian Classical Sufi Music (1300 AD)",
        content: "Amir Khusrau blended Persian and Hindavi music, creating Qawwali and Khayal singing at the shrine of Nizamuddin Auliya.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Commercial Pop Adaptation (1980–2010)",
        content: "Commercial stage shows abbreviated 3-hour spiritual Sama assemblies into short pop tracks, diluting Farsi poetic nuances.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Restored Urban Basti & Active Shrine",
        content: "Aga Khan Trust urban renewal restored Nizamuddin Baoli and stepwells, but young Qawwals face declining Farsi literacy.",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Unrecorded Medieval Vocal Compositions",
        content: "Fewer than 15 young musicians are currently mastering authentic Khusrau bandishes, risking unrecorded oral memory loss.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "70% reduction in young singers fluent in classical Farsi Sufi poetry",
        "Aga Khan Trust ecological restoration of 14th-century Nizamuddin Baoli",
        "Commercial stage performances replacing multi-hour shrine Sama"
      ]
    },

    shortDescription: "A 700-year-old living medieval settlement harboring Amir Khusrau's Qawwali music, Mughal stepwells, and traditional Sufi culinary heritage.",
    fullDescription: "Nizamuddin Basti is one of Delhi's most vibrant living heritage neighborhoods, established in the 14th century.",

    timelineData: [
      {
        year: 1975,
        label: "1975 — Master Lineage Continuity",
        practitioners: "28 Traditional Families",
        youthAdoption: "80% Family Apprenticeship",
        status: "Sacred Shrine Heritage",
        summary: "Master singers held multi-hour spiritual Sama assemblies preserving rare Farsi compositions.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1990,
        label: "1990 — Commercial Stage Era",
        practitioners: "18 Active Lineages",
        youthAdoption: "45% Formal Training",
        status: "Stage & Cinema Influence",
        summary: "Film adaptations brought global visibility, but shortened traditional 3-hour spiritual arrangements into 5-minute stage acts.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2007,
        label: "2007 — Aga Khan Urban Renewal",
        practitioners: "14 Traditional Families",
        youthAdoption: "35% Youth Engagement",
        status: "Community Renewal",
        summary: "Major conservation project restored Nizamuddin Baoli, Chausath Khamba, and local alley sanitation.",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — Farsi Vocal Loss Warning",
        practitioners: "10 Master Families",
        youthAdoption: "22% Farsi Fluency",
        status: "🟡 Moderate Risk",
        summary: "Loss of classical Farsi language fluency among young singers threatened rare 14th-century Khusrau bandishes.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Digital Sound Archive",
        practitioners: "8 Master Qawwal Families",
        youthAdoption: "18% Apprentice Continuity",
        status: "🟡 Watch Closely (68%)",
        summary: "Virasat AI initiates high-fidelity audio archiving for rare Khusrau compositions and youth vocal residencies.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Loss of classical Farsi language literacy among younger Qawwal apprentices",
      "High urban density causing structural stress on medieval basti dwellings",
      "Unrecorded loss of rare devotional musical compositions"
    ],
    aiInsight: "Virasat AI Risk Engine rates Nizamuddin at 68% vulnerability, recommending digital sound archiving of unrecorded family ragas and community heritage walks.",

    highlights: [
      "Amir Khusrau's 750-Year Qawwali Music Heritage",
      "Restored 14th-Century Nizamuddin Baoli",
      "Chausath Khamba Marble Pavilion"
    ],
    tags: ["Traditions", "Living Culture", "Nizamuddin", "Sufi Music"],
    xpReward: 350,
    badgeUnlocked: "Nizamuddin Lore Keeper"
  },

  // 4. SHAHJAHANABAD (🟡 Watch Closely)
  {
    id: "shahjahanabad-urban-heritage",
    name: "Shahjahanabad Walled City & Haveli Architecture",
    shortName: "Shahjahanabad",
    type: "Places",
    category: "Historic Urban Heritage",
    state: "Delhi (Old Delhi)",
    location: "Old Delhi Citadel Area",
    coordinates: [28.6540, 77.2330],
    dynasty: "Mughal Empire (1638 AD)",
    
    riskScore: 62,
    riskLevel: "WATCH_CLOSELY",
    statusBadge: "🟡 Watch Closely (62% Risk)",
    statusColor: "orange",
    healthStatus: "WATCH_CLOSELY",

    practitionersCount: "Haveli Conservation Trust",
    youthInvolvement: "35% Youth Walks",
    documentationScore: "70% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Ornate carved doorway of a 19th-century Shahjahanabad haveli"
      },
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Courtyard and lakhori brick arches of Chunnamal Haveli"
      },
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "Ghalib ki Haveli in Ballimaran"
      }
    ],

    surprisingFact: "Shahjahanabad had 14 massive imperial gates, out of which only 5 remain standing today!",
    ageGuessQuiz: {
      question: "Which famous Urdu poet lived in Ballimaran, Shahjahanabad?",
      options: [
        "Mirza Ghalib",
        "Allama Iqbal",
        "Mir Taqi Mir"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Mirza Ghalib lived in a Lakhori brick haveli in Gali Qasim Jan, Ballimaran during the 19th century!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Imperial Walled City of Shah Jahan (1638)",
        content: "Enclosed by 14 colossal stone gates and crescent moats, housing royal courtiers, Urdu mushaira halls, and flower gardens.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Demolition of City Walls & Commercial Godowns (1857–1980)",
        content: "British military cleared large swathes around Red Fort after 1857, and central haveli courtyards became wholesale storage godowns.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Restored Havelis & Bustling Gali-Kuchas",
        content: "Adaptive reuse projects like Haveli Dharampura showcase heritage tourism, though many residential havelis remain endangered.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "The Architecture of Courtyard Life",
        content: "Uncontrolled commercialization risks erasing the distinct Lakhori brick jali screens and domestic courtyard architecture.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Loss of 9 out of 14 historic imperial gates around the city perimeter",
        "Subdivision of open haveli courtyards into commercial wholesale stores",
        "Adaptive reuse projects restoring high-end boutique havelis"
      ]
    },

    shortDescription: "The 17th-century Mughal capital built by Emperor Shah Jahan, famous for its Lakhori brick havelis, courtyard architecture, and poetry karkhanas.",
    fullDescription: "Founded in 1638 by Shah Jahan, Shahjahanabad was a grand walled city enclosed by 14 historic gates.",

    timelineData: [
      {
        year: 1970,
        label: "1970 — Intact Haveli Neighborhoods",
        practitioners: "Traditional Haveli Families",
        youthAdoption: "70% Family Living",
        status: "Historic Residential Citadel",
        summary: "Over 500 historic Lakhori brick havelis remained occupied as single-family ancestral homes.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1988,
        label: "1988 — Commercial Subdivision",
        practitioners: "Local Heritage Associations",
        youthAdoption: "42% Youth Migration",
        status: "Commercial Pressure",
        summary: "Haveli courtyards were partitioned into commercial storage rooms for wholesale cloth and electronics traders.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2004,
        label: "2004 — Ghalib Haveli Restoration",
        practitioners: "Delhi Tourism & ASI",
        youthAdoption: "35% Literary Tourism",
        status: "Heritage Museum Site",
        summary: "Mirza Ghalib's haveli in Ballimaran was restored into a museum celebrating 19th-century Urdu poetry.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2017,
        label: "2017 — Haveli Adaptive Reuse",
        practitioners: "Heritage Hotel Operators",
        youthAdoption: "32% Youth Walks",
        status: "Adaptive Reuse Era",
        summary: "Haveli Dharampura converted into a boutique luxury heritage hotel, showcasing adaptive reuse potential.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Urban Heritage By-Laws",
        practitioners: "Shahjahanabad Rediscovery Guild",
        youthAdoption: "35% Youth Walks",
        status: "🟡 Watch Closely (62%)",
        summary: "Virasat AI advocates for tax incentives for home-owners preserving Lakhori brick facades.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Unauthorized structural alterations destroying Lakhori brick courtyards",
      "Overloaded electrical wiring creating fire hazards in narrow alleys",
      "Out-migration of ancestral families due to lack of modern amenities"
    ],
    aiInsight: "Virasat AI Risk Engine projects a 62% vulnerability rating for Shahjahanabad havelis. Recommends heritage-linked low-interest repair loans and strict commercial zoning enforcement.",

    highlights: [
      "17th-Century Walled City Urban Grid",
      "Lakhori Brick Haveli Courtyard Architecture",
      "Ghalib Ki Haveli & Dharampura Restoration"
    ],
    tags: ["Places", "Historic Urban Heritage", "Shahjahanabad", "Architecture"],
    xpReward: 300,
    badgeUnlocked: "Shahjahanabad Explorer"
  },

  // 5. HAUZ KHAS (🟡 Watch Closely)
  {
    id: "hauz-khas-complex",
    name: "Hauz Khas Complex & Medieval Reservoir",
    shortName: "Hauz Khas",
    type: "Places",
    category: "Historical + Cultural",
    state: "Delhi (South Delhi)",
    location: "Hauz Khas Village, Delhi",
    coordinates: [28.5494, 77.2001],
    dynasty: "Khalji & Tughlaq Dynasties (1295 AD)",
    
    riskScore: 58,
    riskLevel: "WATCH_CLOSELY",
    statusBadge: "🟡 Watch Closely (58% Risk)",
    statusColor: "orange",
    healthStatus: "WATCH_CLOSELY",

    practitionersCount: "INTACH & ASI Active Teams",
    youthInvolvement: "75% High Youth Footfall",
    documentationScore: "80% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Firoz Shah Tughlaq tomb pavilion overlooking Hauz Khas lake"
      },
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
        caption: "Medieval Madrasa stone arcades and royal reservoir"
      },
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "Hauz Khas village urban art galleries and heritage hub"
      }
    ],

    surprisingFact: "Hauz Khas means 'Royal Tank', built by Alauddin Khalji to supply water to his Siri Fort citadel in 1295 AD!",
    ageGuessQuiz: {
      question: "Why was the Hauz Khas reservoir originally excavated in 1295 AD?",
      options: [
        "To supply water to Siri Fort citadel",
        "As a swimming pool for royal princes",
        "To create a decorative lotus pond"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Alauddin Khalji dug the massive royal tank to supply fresh water to his military citadel at Siri Fort!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Royal Water Reservoir & Islamic Academy (1295–1352)",
        content: "A massive stone-lined lake surrounded by Firoz Shah Tughlaq's multi-story Islamic seminary and tomb complex.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Bohemian Village & Boutique Explosion (1988–2010)",
        content: "Fashion designers and art galleries moved into the rural Jat village, creating Delhi's most popular bohemian cultural quarter.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Restored Lake & Youth Hangout",
        content: "INTACH eco-restored the lake water, making it a favorite sunset spot for young explorers and photography groups.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Disconnect Between Nightlife & Medieval History",
        content: "Without interactive historical storytelling, visitors enjoy the lake view without realizing they sit amidst a 700-year-old royal academy.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Ecological water restoration of 13th-century dry reservoir lake",
        "Transformation of quiet Jat village into art boutique corridor",
        "Structural reinforcement of Tughlaq madrasa stone pavilions"
      ]
    },

    shortDescription: "The 13th-century Royal Tank of Alauddin Khalji and Firoz Shah Tughlaq's madrasa, now a unique intersection of ancient ruins and modern Gen Z art culture.",
    fullDescription: "Built by Alauddin Khalji in 1295 AD to supply water to his Siri Fort citadel, Hauz Khas stands as a unique urban cultural nexus.",

    timelineData: [
      {
        year: 1970,
        label: "1970 — Rural Village Oasis",
        practitioners: "Jat Villagers & ASI",
        youthAdoption: "20% Local Visits",
        status: "Quiet Monument Ruins",
        summary: "Dry lakebed surrounded by traditional agricultural farmland and stone ruins.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1988,
        label: "1988 — Designer Boutique Arrival",
        practitioners: "Fashion Designers & Artists",
        youthAdoption: "45% Youth Footfall",
        status: "Bohemian Urban Hub",
        summary: "Fashion pioneer Bina Ramani opened early boutiques, transforming Hauz Khas into Delhi's premier art village.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2004,
        label: "2004 — Lake Eco-Restoration",
        practitioners: "INTACH Hydro-Ecologists",
        youthAdoption: "60% High Footfall",
        status: "Restored Eco-Reservoir",
        summary: "INTACH treated secondary sewage water to refill Hauz Khas lake, reviving birdlife and public parks.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2016,
        label: "2016 — Commercial Nightlife Strain",
        practitioners: "ASI & Village Association",
        youthAdoption: "80% High Nightlife Visits",
        status: "Commercial Wear",
        summary: "Unregulated restaurant rooftop additions caused structural and noise concerns near monument walls.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Heritage Buffer & Art Trail",
        practitioners: "Digital Conservationists",
        youthAdoption: "75% High Youth Footfall",
        status: "🟡 Watch Closely (58%)",
        summary: "Virasat AI recommends interactive AR history signage to connect youth café visitors with medieval Tughlaq history.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Vibration and structural stress on medieval madrasa walls from high commercial activity",
      "Eutrophication and algae management issues in Hauz Khas artificial lake",
      "Disconnect between young nightlife visitors and the site's rich 14th-century history"
    ],
    aiInsight: "Virasat AI Risk Engine rates Hauz Khas at 58% vulnerability, recommending gamified heritage trails and strict structural weight audits on adjacent buildings.",

    highlights: [
      "1295 AD Royal Tank of Alauddin Khalji",
      "Firoz Shah Tughlaq L-shaped Medieval Madrasa & Tomb",
      "Intersection of Ancient Architecture & Modern Gen Z Art Culture"
    ],
    tags: ["Places", "Historical + Cultural", "Hauz Khas", "Tughlaq"],
    xpReward: 300,
    badgeUnlocked: "Hauz Khas Scholar"
  },

  // 6. RED FORT (🟢 Well Protected)
  {
    id: "red-fort-lal-qila",
    name: "Red Fort (Lal Qila) Citadel",
    shortName: "Red Fort",
    type: "Places",
    category: "Monument",
    state: "Delhi (Old Delhi)",
    location: "Chandni Chowk, Old Delhi",
    coordinates: [28.6562, 77.2410],
    dynasty: "Mughal Empire (1638 AD)",

    riskScore: 35,
    riskLevel: "WELL_PROTECTED",
    statusBadge: "🟢 Well Protected (35% Risk)",
    statusColor: "green",
    healthStatus: "WELL_PROTECTED",

    practitionersCount: "Mughal Heritage Guides & ASI",
    youthInvolvement: "55% High Tourism",
    documentationScore: "88% Digitized",

    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",

    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Lahori Gate entrance of the red sandstone Mughal fortress"
      },
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Diwan-i-Khas white marble pavilion and inlaid arches"
      },
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "Chhatta Chowk covered bazaar inside the fort entrance"
      }
    ],

    surprisingFact: "The Red Fort was originally white! It was built with limestone plaster before the British painted it red.",
    ageGuessQuiz: {
      question: "Which Mughal Emperor commissioned the Red Fort in 1638?",
      options: [
        "Shah Jahan",
        "Akbar the Great",
        "Aurangzeb"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Emperor Shah Jahan commissioned the Red Fort in 1638 when moving the Mughal capital from Agra to Shahjahanabad!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Mughal Throne of Shahjahanabad (1648)",
        content: "A 33-meter high red sandstone citadel housing the Peacock Throne and stream of paradise water channels.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "British Army Barracks & Independence Flag (1857–1947)",
        content: "Converted into military barracks after 1857, then became the independence symbol where Nehru raised the tricolor.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "UNESCO World Heritage Citadel",
        content: "Maintained under high ASI protection, with modern museums and sound-and-light shows.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Sandstone Weathering from Urban Soot",
        content: "Airborne pollution requires continuous non-invasive mudpack cleaning to preserve delicate stone inscriptions.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Conversion of royal gardens into public heritage parklands",
        "Non-invasive mud-pack conservation removing 50 years of vehicular soot",
        "UNESCO World Heritage conservation buffer protocols"
      ]
    },

    shortDescription: "Shah Jahan's 17th-century imperial red sandstone citadel enclosing royal marble pavilions and Nahr-i-Bihisht water canals.",
    fullDescription: "Constructed in 1638 by Mughal Emperor Shah Jahan, Lal Qila represents the zenith of Mughal fortress architecture.",

    timelineData: [
      {
        year: 1975,
        label: "1975 — National Monument Protection",
        practitioners: "ASI Archaeological Guides",
        youthAdoption: "38% School Trips",
        status: "National Citadel",
        summary: "Major restoration of Lahori Gate ramparts and Chhatta Chowk vaulted ceilings.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1988,
        label: "1988 — Museum Complex Development",
        practitioners: "Curators & Historians",
        youthAdoption: "44% Tourism Engagement",
        status: "Cultural Hub",
        summary: "Imperial quarters converted into museums showcasing freedom struggle artifacts.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2007,
        label: "2007 — UNESCO World Heritage Inscription",
        practitioners: "Global Preservation Teams",
        youthAdoption: "50% Youth Interest",
        status: "UNESCO Landmark",
        summary: "Recognized internationally for its synthesis of Persian, Timurid, and Hindu architectural traditions.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — Red Sandstone Chemical Washing",
        practitioners: "Stone Chemists",
        youthAdoption: "54% Digital Tourism",
        status: "Facade Restoration",
        summary: "Non-invasive mud pack technology applied to remove urban vehicular soot.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Traffic Buffer & AI Tracking",
        practitioners: "ASI & Digital Twin Guilds",
        youthAdoption: "55% Youth Adoption",
        status: "🟢 Well Protected (35%)",
        summary: "Pedestrianization of Chandni Chowk reduces air pollution impact on fort walls.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Urban vehicular emissions staining red sandstone parapets",
      "High daily tourist footfall stressing timber floor supports in royal halls",
      "Humidity variations affecting inlay Pietra Dura stones"
    ],
    aiInsight: "Virasat AI Risk Engine projects a stable 35% index for Red Fort, recommending zero-emission electric shuttle buffers around Chandni Chowk to protect sandstone surfaces.",

    highlights: [
      "Lahori Gate Ramparts & Imperial Chhatta Chowk Bazaar",
      "Diwan-i-Khas Marble Pavilions & Inlaid Pietra Dura",
      "UNESCO World Heritage Mughal Citadel"
    ],
    tags: ["Places", "Monument", "UNESCO World Heritage", "Mughal Empire"],
    xpReward: 350,
    badgeUnlocked: "Peacock Throne Sentinel"
  },

  // 7. QUTUB MINAR (🟢 Well Protected)
  {
    id: "qutub-minar-complex",
    name: "Qutub Minar & Iron Pillar Sanctuary",
    shortName: "Qutub Minar",
    type: "Places",
    category: "Monument",
    state: "Delhi (Mehrauli)",
    location: "Mehrauli, New Delhi",
    coordinates: [28.5245, 77.1855],
    dynasty: "Mamluk & Gupta Dynasties (12th Century)",

    riskScore: 32,
    riskLevel: "WELL_PROTECTED",
    statusBadge: "🟢 Well Protected (32% Risk)",
    statusColor: "green",
    healthStatus: "WELL_PROTECTED",

    practitionersCount: "Conservation ASI Team Active",
    youthInvolvement: "68% High Student Visits",
    documentationScore: "95% 3D Scanned",

    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
        caption: "The 72.5m fluted red sandstone Qutub Minar tower in Mehrauli"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Alai Darwaza calligraphic stone archways and carved screens"
      },
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Ancient Quwwat-ul-Islam architectural courtyard pillars"
      }
    ],

    surprisingFact: "The 1,600-year-old Iron Pillar of Mehrauli has stood in open air for 16 centuries without rusting!",
    ageGuessQuiz: {
      question: "How tall is the Qutub Minar tower?",
      options: [
        "72.5 meters (238 feet)",
        "45 meters (147 feet)",
        "100 meters (328 feet)"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Qutub Minar stands 72.5 meters tall, making it the world's tallest fluted brick minaret!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Victory Tower of Delhi Sultanate (1192 AD)",
        content: "Commissioned by Qutb-ud-din Aibak to mark the seat of the Slave Dynasty in Mehrauli.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Colonial Restoration & UNESCO Status (1803–1993)",
        content: "Repaired after an 1803 earthquake and inscribed as a UNESCO World Heritage site in 1993.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "LiDAR Scanned Digital Twin Landmark",
        content: "Fully mapped in 3D with high student footfall and active ASI conservation teams.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Sandstone Weathering from Airborne SO2",
        content: "Requires continuous pollution monitoring to protect delicate Kufic calligraphy.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "1,600-year-old Iron Pillar protected by low glass barrier",
        "Full millimeter-accurate 3D LiDAR spatial mapping completed",
        "Restricted staircase access to preserve interior stone steps"
      ]
    },

    shortDescription: "The 72.5m brick minaret and 1,600-year-old rustless Iron Pillar of Mehrauli stand as world-renowned UNESCO architectural landmarks.",
    fullDescription: "Built in 1192 by Qutb-ud-din Aibak and expanded by Iltutmish and Alauddin Khalji, Qutub Minar remains one of South Asia's most visited monuments.",

    timelineData: [
      {
        year: 1972,
        label: "1972 — ASI Conservation Masterplan",
        practitioners: "ASI Archaeological Officers",
        youthAdoption: "35% Educational Visits",
        status: "National Heritage Park",
        summary: "Archaeological Survey of India reinforced lower balconies and established structural monitoring meters.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1986,
        label: "1986 — Structural Safety Measures",
        practitioners: "Structural Engineers",
        youthAdoption: "40% Tourism Growth",
        status: "Protected Monument",
        summary: "Interior staircase access restricted to ensure safety and prevent vibration wear on historical stone treads.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1993,
        label: "1993 — UNESCO World Heritage Designation",
        practitioners: "Global Preservationists",
        youthAdoption: "52% Student Expeditions",
        status: "Global UNESCO Landmark",
        summary: "Inscribed as a UNESCO World Heritage site, establishing strict 300m development buffer zones around Mehrauli.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2008,
        label: "2008 — Lighting & Laser Restoration",
        practitioners: "Conservation Architects",
        youthAdoption: "60% High Engagement",
        status: "Illuminated Heritage Icon",
        summary: "Architectural night lighting installed, drawing evening cultural visits and international acclaim.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — LiDAR 3D Spatial Scanning",
        practitioners: "3D Digital Surveyors",
        youthAdoption: "65% Virtual Field Trips",
        status: "Digitally Twin Mapped",
        summary: "Complete millimeter-accurate LiDAR 3D laser scan created to preserve architectural geometry in digital archives.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Virasat AI Real-Time Tracking",
        practitioners: "AI Heritage Monitors",
        youthAdoption: "68% Youth Adoption",
        status: "🟢 Well Protected (32%)",
        summary: "Real-time atmospheric sensor nodes monitor air pollution corrosion rates on sandstone inscriptions.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Atmospheric sulfur dioxide weathering on delicate sandstone carvings",
      "Vibration impact from neighboring vehicular corridors",
      "Visitor footfall pressure during peak festival seasons"
    ],
    aiInsight: "Virasat AI Intelligence rates Qutub Minar as overall low risk (32%), recommending automated environmental sensor nodes to monitor airborne particulate corrosion rates on the Alai Darwaza sandstone.",

    highlights: [
      "72.5m Tall Fluted Red Sandstone Minaret",
      "1,600-Year-Old Rustless Metallurgy Iron Pillar",
      "Alai Darwaza Calligraphic Stone Inscriptions"
    ],
    tags: ["Places", "Monument", "UNESCO World Heritage", "Delhi Sultanate"],
    xpReward: 300,
    badgeUnlocked: "Iron Pillar Guardian"
  },

  // 8. HUMAYUN'S TOMB (🟢 Well Protected)
  {
    id: "humayun-tomb-delhi",
    name: "Humayun’s Garden Tomb",
    shortName: "Humayun's Tomb",
    type: "Places",
    category: "Monument",
    state: "Delhi (Nizamuddin)",
    location: "Mathura Road, Nizamuddin East",
    coordinates: [28.5849, 77.2507],
    dynasty: "Mughal Empire (1565 AD)",

    riskScore: 28,
    riskLevel: "WELL_PROTECTED",
    statusBadge: "🟢 Well Protected (28% Risk)",
    statusColor: "green",
    healthStatus: "WELL_PROTECTED",

    practitionersCount: "Aga Khan Trust & ASI Custodians",
    youthInvolvement: "72% High Student Footfall",
    documentationScore: "96% Digitized",

    heroImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80",

    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Symmetrical red sandstone and white marble dome of Humayun's Tomb"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Charbagh garden water channels and arched entryways"
      },
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "Isa Khan's octagonal tomb inside the Humayun tomb complex"
      }
    ],

    surprisingFact: "Humayun's Tomb is the resting place of over 150 Mughal royal family members!",
    ageGuessQuiz: {
      question: "In which year was Humayun's Tomb commissioned?",
      options: [
        "1565 AD (Empress Bega Begum)",
        "1638 AD (Shah Jahan)",
        "1707 AD (Aurangzeb)"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Commissioned in 1565 AD by Empress Bega Begum, 9 years after Humayun's death!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "First Mughal Charbagh Garden Tomb (1565)",
        content: "Built by Persian architect Mirak Mirza Ghiyas with 4 symmetrical garden quadrants and flowing water aqueducts.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Aga Khan Garden Restoration (1997–2004)",
        content: "Aga Khan Trust restored subterranean aqueducts, replanted historic orchards, and revived dried fountains.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "World-Class Heritage Facility",
        content: "Features a subterranean site museum and digital twin LiDAR scans for global researchers.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Marble Dome Discoloration",
        content: "Airborne pollution requires careful non-invasive water jet cleaning to preserve pure white marble tiles.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Restoration of 300 meters of subterranean Mughal water aqueducts",
        "Addition of modern underground visitor orientation facility",
        "Complete restoration of Isa Khan octagonal garden enclosure"
      ]
    },

    shortDescription: "Stroll through geometric Charbagh gardens surrounding the red sandstone and white marble tomb that inspired the Taj Mahal.",
    fullDescription: "Commissioned by Empress Bega Begum in 1565, Humayun’s Tomb is the first garden-tomb on the Indian subcontinent.",

    timelineData: [
      {
        year: 1970,
        label: "1970 — Early ASI Conservation",
        practitioners: "ASI Archaeological Teams",
        youthAdoption: "30% Educational Visits",
        status: "National Heritage Site",
        summary: "Maintenance focused on main dome structural integrity and surrounding garden pathways.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1993,
        label: "1993 — UNESCO World Heritage Inscription",
        practitioners: "Global Preservationists",
        youthAdoption: "48% Tourism Growth",
        status: "UNESCO Landmark",
        summary: "Inscribed as UNESCO World Heritage Site, highlighting its pioneering double-dome Charbagh design.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2003,
        label: "2003 — Aga Khan Garden Restoration",
        practitioners: "AKTC Landscape Architects",
        youthAdoption: "62% Student Footfall",
        status: "Model Restoration",
        summary: "Aga Khan Trust restored all 300 meters of subterranean water aqueducts feeding the Charbagh fountains.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2015,
        label: "2015 — Museum & Visitor Center Project",
        practitioners: "Curators & Conservators",
        youthAdoption: "68% Youth Visits",
        status: "World-Class Heritage Facility",
        summary: "Subterranean museum built to exhibit 500 years of Mughal dynasty artifacts.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Digital Twin & Eco-Monitoring",
        practitioners: "Digital Conservation Guild",
        youthAdoption: "72% High Student Footfall",
        status: "🟢 Well Protected (28%)",
        summary: "Virasat AI tracks garden water conservation and stone facade health with high precision.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Seasonal rainwater runoff management in lower garden terraces",
      "High weekend tourist numbers requiring managed pathway flows",
      "Airborne dust accumulation on white marble dome surfaces"
    ],
    aiInsight: "Virasat AI Intelligence rates Humayun's Tomb as overall low risk (28%), commending the AKTC Charbagh water recycling system as a model for urban heritage sites.",

    highlights: [
      "First Monumental Charbagh Garden Tomb in South Asia",
      "42-Meter High White Marble Double Dome",
      "Isa Khan Octagonal Tomb & Barber's Pavilion"
    ],
    tags: ["Places", "Monument", "UNESCO World Heritage", "Mughal Empire"],
    xpReward: 300,
    badgeUnlocked: "Charbagh Guardian"
  },

  // 9. PURANA QILA (🟡 Watch Closely)
  {
    id: "purana-qila-historical-site",
    name: "Purana Qila (Old Fort & Indraprastha)",
    shortName: "Purana Qila",
    type: "Places",
    category: "Historical Site",
    state: "Delhi (Central Delhi)",
    location: "Mathura Road, Central Delhi",
    coordinates: [28.6095, 77.2437],
    dynasty: "Sur Empire & Mughal Dynasty (1538 AD)",
    
    riskScore: 52,
    riskLevel: "WATCH_CLOSELY",
    statusBadge: "🟡 Watch Closely (52% Risk)",
    statusColor: "orange",
    healthStatus: "WATCH_CLOSELY",

    practitionersCount: "ASI Excavation Teams",
    youthInvolvement: "48% Youth Visitors",
    documentationScore: "75% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
        caption: "Bada Darwaza stone ramparts and massive red sandstone walls of Purana Qila"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Qila-i-Kuhna Mosque red sandstone and white marble Mihrab"
      },
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "Sher Mandal octagonal observatory library where Emperor Humayun studied"
      }
    ],

    surprisingFact: "Excavations at Purana Qila unearthed Painted Grey Ware pottery dating back to 1000 BC, linking it to the ancient city of Indraprastha!",
    ageGuessQuiz: {
      question: "Which ancient epic city is Purana Qila believed to be built upon?",
      options: [
        "Indraprastha (Mahabharata Era)",
        "Hastinapur",
        "Pataliputra"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Archaeologists found pottery layers from 1000 BC identifying Purana Qila mound as ancient Indraprastha!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Mound of Ancient Indraprastha & Sher Shah Fortress (1538)",
        content: "Sher Shah Suri built the colossal Bada Darwaza gates and Qila-i-Kuhna mosque atop the ancient 3,000-year-old Indraprastha mound.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Humayun's Observatory & ASI Digs (1556–1970)",
        content: "Sher Mandal became Humayun's library. ASI excavations in 1970 revealed 9 distinct historical strata down to 1000 BC.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Active Dig Site & Central Park",
        content: "Popular for lake boating and ongoing archaeological digs uncovering Maurya, Gupta, and Rajput artifacts.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Unmapped Subterranean Artifact Layers",
        content: "Requires digital 3D stratigraphy archiving to protect fragile unexcavated pottery layers.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Excavation of 9 distinct historical strata spanning 3,000 years",
        "Installation of modern sound-and-light history show",
        "Restoration of Sher Mandal observatory tower"
      ]
    },

    shortDescription: "One of Delhi's oldest fortresses built by Sher Shah Suri and Humayun, sitting atop ancient mounds identified with Mahabharata's Indraprastha.",
    fullDescription: "Constructed on the ancient mound of Indraprastha by Mughal Emperor Humayun and Afghan ruler Sher Shah Suri in the 1530s.",

    timelineData: [
      {
        year: 1970,
        label: "1970 — ASI Archeological Excavations",
        practitioners: "ASI Excavators",
        youthAdoption: "25% History Walks",
        status: "Excavation Mound",
        summary: "Excavations unearthed Painted Grey Ware pottery dating back to 1000 BC.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1985,
        label: "1985 — Lake Boating & Sound Show",
        practitioners: "Delhi Tourism Officers",
        youthAdoption: "42% Recreational Tourism",
        status: "Public Heritage Park",
        summary: "Boating lake created around moat walls, drawing daily family recreation visits.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2005,
        label: "2005 — Sher Mandal Conservation",
        practitioners: "Stone Conservators",
        youthAdoption: "45% Student Visits",
        status: "Restored Tower",
        summary: "Restoration of Sher Mandal observatory staircase where Humayun spent his final days.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — Deep Stratigraphy Digs",
        practitioners: "Archeological Scientists",
        youthAdoption: "48% High Interest",
        status: "Continuous Dig Zone",
        summary: "New excavations revealed 9 cultural levels spanning Maurya, Gupta, Rajput, Sultanate, and Mughal epochs.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Indraprastha Digital Center",
        practitioners: "Digital Archaeologists",
        youthAdoption: "48% Youth Visitors",
        status: "🟡 Watch Closely (52%)",
        summary: "Virasat AI advocates for immersive 3D AR reconstruction of Mahabharata era Indraprastha structures.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Moat wall erosion due to water table fluctuations in artificial lake",
      "Weathering of delicate red sandstone carvings on Qila-i-Kuhna mosque facade",
      "Need for upgraded interpretive signage explaining pre-Mughal archaeological layers"
    ],
    aiInsight: "Virasat AI Risk Engine rates Purana Qila at 52% vulnerability, highlighting the urgency of digitally preserving 3,000 years of unearthed pottery artifacts.",

    highlights: [
      "3,000-Year-Old Archaeological Mound of Indraprastha",
      "Qila-i-Kuhna Mosque Architectural Masterpiece",
      "Sher Mandal Octagonal Observatory Tower"
    ],
    tags: ["Places", "Historical Site", "Purana Qila", "Indraprastha"],
    xpReward: 300,
    badgeUnlocked: "Indraprastha Historian"
  },

  // 10. DILLI HAAT (🟢 Well Protected)
  {
    id: "dilli-haat-crafts-artisans",
    name: "Dilli Haat Crafts Village & Artisan Guilds",
    shortName: "Dilli Haat",
    type: "Crafts",
    category: "Crafts + Artisans",
    state: "Delhi (INA, South Delhi)",
    location: "INA Market, Sri Aurobindo Marg",
    coordinates: [28.5731, 77.2081],
    dynasty: "Modern Living Craft Hub (1994 AD)",
    
    riskScore: 38,
    riskLevel: "WELL_PROTECTED",
    statusBadge: "🟢 Well Protected (38% Risk)",
    statusColor: "green",
    healthStatus: "WELL_PROTECTED",

    practitionersCount: "600+ Rotating Master Artisans",
    youthInvolvement: "82% High Youth Footfall",
    documentationScore: "85% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
        caption: "Master terracotta potters and handloom weavers at Dilli Haat stalls"
      },
      {
        url: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=1000&q=80",
        caption: "Traditional Indian handloom fabrics and brass craft exhibitions"
      },
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
        caption: "Open-air thatched craft stalls and regional food pavilions"
      }
    ],

    surprisingFact: "Master artisans rotate stalls every 15 days, allowing over 2,000 rural craft families direct sales in Delhi each year!",
    ageGuessQuiz: {
      question: "In what year was Dilli Haat INA established to empower rural artisans?",
      options: [
        "1994 AD",
        "1980 AD",
        "2005 AD"
      ],
      correctIndex: 0,
      explanation: "Correct! 🎉 Established in 1994 AD by Delhi Tourism and Ministry of Textiles!"
    },

    storySwipe: [
      {
        phase: "THEN",
        title: "Inauguration of Direct Artisan Market (1994)",
        content: "Created to provide rural weavers and woodcarvers a direct urban bazaar without middlemen.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT CHANGED?",
        title: "Fortnightly Rotation System (2004)",
        content: "Allowed over 2,000 rural families annually to showcase GI-tagged handlooms and pottery.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "TODAY",
        title: "Thriving Cultural & Food Hub",
        content: "Attracts thousands of young visitors daily, featuring authentic regional cuisines alongside living crafts.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      },
      {
        phase: "WHAT COULD BE LOST?",
        title: "Encroachment of Industrial Mass Replicas",
        content: "Requires digital QR provenance tagging to protect hand-spun goods from machine counterfeits.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      }
    ],

    thenVsNow: {
      thenImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      nowImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
      changes: [
        "Expansion of 150 original stalls to over 600 rotating artisan displays",
        "Implementation of digital UPI and fair-trade pricing guidelines",
        "Integration of regional culinary pavilions representing all Indian states"
      ]
    },

    shortDescription: "Delhi's open-air rural craft bazaar where rotating master weavers, woodcarvers, and potters from across India demonstrate traditional crafts.",
    fullDescription: "Established in 1994 by Delhi Tourism and Ministry of Textiles, Dilli Haat INA was created to provide rural Indian artisans a direct urban market.",

    timelineData: [
      {
        year: 1994,
        label: "1994 — Inauguration of Dilli Haat INA",
        practitioners: "150 Rotating Crafts Stalls",
        youthAdoption: "50% Youth Visitors",
        status: "Pioneering Craft Bazaar",
        summary: "Created by Jaya Jaitly and Delhi Tourism to offer rural artisans direct urban sales opportunities.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2004,
        label: "2004 — Fortnightly Rotation System",
        practitioners: "350 Rotating Master Crafters",
        youthAdoption: "65% High Youth Popularity",
        status: "National Craft Model",
        summary: "Fortnightly stall rotation system allowed over 2,000 rural artisan families per year to access Delhi's market.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2014,
        label: "2014 — GI Craft Festivals",
        practitioners: "500 Rotating Master Crafters",
        youthAdoption: "75% High Footfall",
        status: "GI Heritage Hub",
        summary: "Exhibitions focused on Geographical Indication (GI) tagged Indian crafts such as Pochampally Ikat and Blue Pottery.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Virasat Fair-Trade Digital Hub",
        practitioners: "600+ Rotating Master Artisans",
        youthAdoption: "82% High Youth Footfall",
        status: "🟢 Well Protected (38%)",
        summary: "Virasat AI integrates QR provenance tags on craft stalls, allowing buyers to verify authentic handcraft origins.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Need for digital payment and QR provenance training for older rural craft masters",
      "Competition from commercial machine-made imitations outside official stalls",
      "Ensuring fair fortnightly stall allocation for endangered tribal crafts"
    ],
    aiInsight: "Virasat AI Risk Engine rates Dilli Haat as overall thriving (38%), recommending digital QR provenance tagging to protect rural artisans from counterfeit resellers.",

    highlights: [
      "1994 Open-Air Rural Craft & Food Bazaar Model",
      "600+ Rotating Fortnightly Master Artisan Stalls",
      "National GI Handloom & Handicraft Showcase"
    ],
    tags: ["Crafts", "Artisans", "Dilli Haat", "Handloom"],
    xpReward: 300,
    badgeUnlocked: "Artisan Guild Patron"
  }
];

export const CATEGORIES = [
  { id: "All", label: "All Heritage", icon: "🌐" },
  { id: "Places", label: "Historic Places", icon: "🕌" },
  { id: "Crafts", label: "Crafts & Artisans", icon: "🧵" },
  { id: "Traditions", label: "Heritage & Traditions", icon: "📜" },
  { id: "Monument", label: "Monuments", icon: "🏰" },
  { id: "Historical Site", label: "Historical Sites", icon: "🏛️" }
];

export const REGIONS = [
  "All Delhi Regions",
  "Central Delhi (Connaught Place & Purana Qila)",
  "Old Delhi (Shahjahanabad & Chandni Chowk)",
  "South Delhi (Mehrauli, Nizamuddin & Hauz Khas)",
  "North Delhi"
];

export const RISK_FILTERS = [
  { id: "ALL", label: "All Risk Statuses" },
  { id: "NEEDS_ATTENTION", label: "🔴 Needs Attention" },
  { id: "WATCH_CLOSELY", label: "🟡 Watch Closely" },
  { id: "WELL_PROTECTED", label: "🟢 Well Protected" }
];
