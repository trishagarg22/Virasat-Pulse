export const HERITAGE_SITES = [
  {
    id: "delhi-zardozi-craft",
    name: "Zardozi Metallic Thread Embroidery",
    shortName: "Zardozi Craft",
    type: "Crafts",
    category: "Crafts",
    state: "Delhi (Old Delhi)",
    location: "Chandni Chowk, Shahjahanabad",
    coordinates: [28.6540, 77.2300],
    dynasty: "Mughal Empire (16th Century)",
    
    // Risk & Intelligence Metrics
    riskScore: 78,
    riskLevel: "AT_RISK",
    statusBadge: "🔴 High Risk (78%)",
    statusColor: "red",
    practitionersCount: "140 Master Artisans",
    youthInvolvement: "12% Youth Adoption",
    documentationScore: "42% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
    
    // Photo Gallery of the Heritage Craft
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
        caption: "Master artisan stitching gold zari wire on wooden Khaat frame"
      },
      {
        url: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=1000&q=80",
        caption: "Intricate metallic thread embroidery detail with pearls"
      },
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
        caption: "Traditional Shahjahanabad textile workshop in Old Delhi"
      }
    ],

    shortDescription: "The 400-year-old royal art of heavy gold and silver wire embroidery on silk and velvet is rapidly losing master craftsmen to modern machine factories.",
    fullDescription: "Zardozi (or Zar-dozi) is an intricate metal embroidery that reached its peak under Mughal Emperor Akbar. Crafters use real gold and silver threads, pearls, and precious stones sewn onto heavy silk or velvet. Today, high raw metal costs, machine imitation, and low wages threaten the survival of traditional karkhanas in Old Delhi.",
    
    // Timeline "Then vs Now" Journey Data
    timelineData: [
      {
        year: 1850,
        label: "1850 — Mughal Zenith",
        practitioners: "4,500+ Master Guild Artisans",
        youthAdoption: "85% Hereditary Apprenticeship",
        status: "Imperial Court Monopoly",
        summary: "Over 40 active royal workshops in Shahjahanabad producing ceremonial robes for royal courts across India and Central Asia.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1950,
        label: "1950 — Post-Independence Guilds",
        practitioners: "1,800 Active Crafters",
        youthAdoption: "50% Family Continuity",
        status: "Wedding & Festive Demand",
        summary: "Artisans adapted Zardozi to high-end bridal couture, preserving traditional wooden frame stitching (Khaat).",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Current Critical State",
        practitioners: "140 Remaining Masters",
        youthAdoption: "12% Youth Interest",
        status: "🔴 Critically Endangered",
        summary: "Wages dropped relative to living costs, prompting younger generations to seek digital jobs while synthetic machine replicas dilute authentic handcraft.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      }
    ],

    // Intelligence Risk Factors & AI Insight
    riskFactors: [
      "Rising costs of genuine gold and silver zari metallic wire",
      "Low wage return for 40+ hours of painstaking hand labor per garment",
      "Proliferation of cheap polyester machine-made counterfeit imitations",
      "Absence of direct digital marketplace connections for artisan families"
    ],
    aiInsight: "Virasat AI Risk Engine projects a 55% loss of master Zardozi hand-embroiderers in Old Delhi within 7 years unless fair-trade micro-grants and direct digital provenance verification are established.",

    highlights: [
      "Hand-sewn Gold & Silver Wire (Kalabattu) on Velvet",
      "Intricate Wooden Frame (Khaat) Tension Technique",
      "Shahjahanabad Royal Karkhana Lineage",
      "GI Tagged Intangible Cultural Heritage"
    ],
    tags: ["Crafts", "Mughal Legacy", "Embroidery", "Endangered Craft"],
    xpReward: 350,
    badgeUnlocked: "Zardozi Master Relic"
  },

  {
    id: "qutub-minar-complex",
    name: "Qutub Minar & Iron Pillar Sanctuary",
    shortName: "Qutub Minar",
    type: "Places",
    category: "Places",
    state: "Delhi (Mehrauli)",
    location: "Mehrauli, New Delhi",
    coordinates: [28.5245, 77.1855],
    dynasty: "Mamluk & Gupta Dynasties (12th Century)",

    // Risk & Intelligence Metrics
    riskScore: 32,
    riskLevel: "THRIVING",
    statusBadge: "🟢 Thriving (32% Risk)",
    statusColor: "green",
    practitionersCount: "Conservation ASI Team Active",
    youthInvolvement: "68% High Student Visits",
    documentationScore: "95% 3D Scanned",

    heroImage: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=600&q=80",
    
    // Photo Gallery
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=1000&q=80",
        caption: "The 72.5m fluted red sandstone Qutub Minar tower"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Intricate Arabic calligraphic stone carvings on Alai Darwaza"
      },
      {
        url: "https://images.unsplash.com/photo-1609946782782-b7b5f1a5cf44?auto=format&fit=crop&w=1000&q=80",
        caption: "The 1,600-year-old rustless Iron Pillar of Chandragupta II"
      }
    ],

    shortDescription: "The 72.5m brick minaret and 1,600-year-old rustless Iron Pillar of Mehrauli stand as world-renowned UNESCO architectural landmarks.",
    fullDescription: "Built in 1192 by Qutb-ud-din Aibak and expanded by Iltutmish and Alauddin Khalji, Qutub Minar remains one of South Asia's most visited monuments. The complex also shelters the 1,600-year-old Iron Pillar of Chandragupta II, which exhibits extraordinary corrosion resistance.",

    timelineData: [
      {
        year: 1800,
        label: "1800 — Colonial Survey Era",
        practitioners: "Local Custodians",
        youthAdoption: "Traditional Reverence",
        status: "Historical Ruins",
        summary: "Major structural survey and repair of the upper balcony after an 1803 earthquake.",
        image: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1993,
        label: "1993 — UNESCO World Heritage",
        practitioners: "ASI Archaeological Teams",
        youthAdoption: "45% School Tourism",
        status: "Global Landmark",
        summary: "Inscribed as a UNESCO World Heritage site, establishing strict buffer zones and conservation protocols.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Digital Twin Era",
        practitioners: "Digital Conservationists",
        youthAdoption: "68% High Engagement",
        status: "🟢 Stable & Thriving",
        summary: "High tourist footfall and complete LiDAR 3D spatial mapping ensure ongoing protection, though urban air pollution requires continuous monitoring.",
        image: "https://images.unsplash.com/photo-1609946782782-b7b5f1a5cf44?auto=format&fit=crop&w=600&q=80"
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
    tags: ["Places", "UNESCO World Heritage", "Delhi Sultanate"],
    xpReward: 300,
    badgeUnlocked: "Iron Pillar Guardian"
  },

  {
    id: "red-fort-lal-qila",
    name: "Red Fort (Lal Qila) Citadel",
    shortName: "Red Fort",
    type: "Places",
    category: "Places",
    state: "Delhi (Old Delhi)",
    location: "Chandni Chowk, Old Delhi",
    coordinates: [28.6562, 77.2410],
    dynasty: "Mughal Empire (17th Century)",

    // Risk & Intelligence Metrics
    riskScore: 45,
    riskLevel: "VULNERABLE",
    statusBadge: "🟠 Vulnerable (45% Risk)",
    statusColor: "orange",
    practitionersCount: "Mughal Heritage Guides",
    youthInvolvement: "55% Moderate Tourism",
    documentationScore: "88% Digitized",

    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",

    // Photo Gallery
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

    shortDescription: "Shah Jahan's 17th-century imperial red sandstone citadel enclosing royal marble pavilions and Nahr-i-Bihisht water canals.",
    fullDescription: "Constructed in 1638 by Mughal Emperor Shah Jahan, Lal Qila represents the zenith of Mughal fortress architecture. Its massive 33m high red sandstone walls enclose royal residential palaces, the Peacock Throne hall (Diwan-i-Khas), and intricate marble inlay works.",

    timelineData: [
      {
        year: 1850,
        label: "1850 — Late Mughal Imperial Era",
        practitioners: "Court Artisans & Poets",
        youthAdoption: "Royal Apprentice Lineage",
        status: "Imperial Seat",
        summary: "Bahadur Shah Zafar's court held poetry symposiums (mushairas) inside the marble Rang Mahal and Diwan-i-Khas.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1947,
        label: "1947 — National Flag Hoisting",
        practitioners: "National Custodians",
        youthAdoption: "National Identity Icon",
        status: "Independence Symbol",
        summary: "Pandit Jawaharlal Nehru hoisted the Indian National Flag from the Lahori Gate ramparts on August 15, 1947.",
        image: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Urban Conservation Era",
        practitioners: "ASI & Sound-Light Techs",
        youthAdoption: "55% Youth Tourism",
        status: "🟠 Moderate Vulnerability",
        summary: "High urban traffic around Chandni Chowk causes soot deposits on red sandstone facades, requiring chemical conservation washing.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Urban vehicular emissions staining red sandstone parapets",
      "High daily tourist footfall stressing timber floor supports in royal halls",
      "Humidity variations affecting inlay Pietra Dura stones"
    ],
    aiInsight: "Virasat AI Risk Engine projects a moderate 45% vulnerability index, recommending zero-emission electric shuttle buffers around Chandni Chowk to protect sandstone surfaces.",

    highlights: [
      "Lahori Gate Ramparts & Imperial Chhatta Chowk Bazaar",
      "Diwan-i-Khas Marble Pavilions & Inlaid Pietra Dura",
      "UNESCO World Heritage Mughal Citadel"
    ],
    tags: ["Places", "UNESCO World Heritage", "Mughal Empire"],
    xpReward: 350,
    badgeUnlocked: "Peacock Throne Sentinel"
  },

  {
    id: "agrasen-ki-baoli",
    name: "Agrasen Ki Baoli Stepwell",
    shortName: "Agrasen Baoli",
    type: "Places",
    category: "Places",
    state: "Delhi (Connaught Place)",
    location: "Hailey Road, Near Connaught Place",
    coordinates: [28.6260, 77.2250],
    dynasty: "Tomar Dynasty & Tughlaq Era (14th Century)",

    // Risk & Intelligence Metrics
    riskScore: 64,
    riskLevel: "VULNERABLE",
    statusBadge: "🟠 Vulnerable (64% Risk)",
    statusColor: "orange",
    practitionersCount: "Water Table Depleted",
    youthInvolvement: "42% Social Media Interest",
    documentationScore: "60% Documented",

    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",

    // Photo Gallery
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
        caption: "108 stone steps descending into the 60m deep stepwell"
      },
      {
        url: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=1000&q=80",
        caption: "Subterranean vaulted stone archways and cool alcoves"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Side perspective showing the three-tiered stepwell structure"
      }
    ],

    shortDescription: "A 108-step subterranean stepwell in central Delhi suffering from dry aquifer tables and urban high-rise encroachment.",
    fullDescription: "Agrasen Ki Baoli is a 60-meter long historic stepwell comprising 108 stone steps split across three levels. Built as a community water sanctuary and cool retreat, the stepwell's natural water table dried up in the 20th century due to heavy urban groundwater pumping.",

    timelineData: [
      {
        year: 1850,
        label: "1850 — Aquifer Active Era",
        practitioners: "Community Well Keepers",
        youthAdoption: "Daily Water Use",
        status: "Functional Water Well",
        summary: "Filled with fresh groundwater, providing subterranean air conditioning to local residents during summer months.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1980,
        label: "1980 — Urban Drying Era",
        practitioners: "None (Dried Well)",
        youthAdoption: "15% Local Awareness",
        status: "Dry Heritage Structure",
        summary: "Groundwater extraction in Connaught Place caused the baoli's water level to drop permanently below the lowest stone step.",
        image: "https://images.unsplash.com/photo-1597040663342-45b0fa8db95e?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Urban Tourism Oasis",
        practitioners: "ASI & Cultural Groups",
        youthAdoption: "42% Photography Youth",
        status: "🟠 Vulnerable (Structural Wear)",
        summary: "While popular for photography, subterranean humidity shifts and lack of active water filtration cause micro-cracks in the lower stone arcades.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Complete depletion of original subterranean aquifer water source",
      "Structural vibration stress from surrounding metro and urban traffic",
      "Unregulated visitor crowds climbing fragile lower tier stone arches"
    ],
    aiInsight: "Virasat AI Risk Engine identifies groundwater table collapse as the primary threat. Recommends installing a closed-loop rainwater recycling pool at the base to restore historic humidity balance and prevent stone salt efflorescence.",

    highlights: [
      "108 Descending Stone Steps across 3 Tiered Levels",
      "Subterranean Hydro-Thermal Cooling Architecture",
      "Central Delhi Urban Heritage Oasis"
    ],
    tags: ["Places", "Subterranean", "Stepwell", "Water Architecture"],
    xpReward: 250,
    badgeUnlocked: "Subterranean Explorer"
  },

  {
    id: "delhi-qawwali-tradition",
    name: "Nizamuddin Sufi Qawwali Tradition",
    shortName: "Sufi Qawwali",
    type: "Traditions",
    category: "Traditions",
    state: "Delhi (Nizamuddin West)",
    location: "Dargah Hazrat Nizamuddin Auliya",
    coordinates: [28.5910, 77.2420],
    dynasty: "Delhi Sultanate & Amir Khusrau Lineage (13th Century)",

    // Risk & Intelligence Metrics
    riskScore: 82,
    riskLevel: "AT_RISK",
    statusBadge: "🔴 High Risk (82%)",
    statusColor: "red",
    practitionersCount: "8 Master Qawwal Families",
    youthInvolvement: "15% Apprentice Continuity",
    documentationScore: "35% Audio Archived",

    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",

    // Photo Gallery
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
        caption: "Qawwals singing devotional Sufi Sama at Nizamuddin Dargah"
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
        caption: "Harmonium and Tabla rhythm accompaniment during Thursday evening Sama"
      },
      {
        url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80",
        caption: "Devotees gathered at the courtyard shrine of Amir Khusrau"
      }
    ],

    shortDescription: "The 750-year-old oral musical tradition of Amir Khusrau facing severe commercial dilution and loss of authentic Persian/Farsi vocal compositions.",
    fullDescription: "Pioneered in the 13th century by Sufi poet-musician Amir Khusrau at the shrine of Nizamuddin Auliya, Qawwali is a devotionally intense vocal music tradition blending Persian, Hindavi, and Arabic poetic forms. Traditional Qawwal families (Qawwal Bachche) report that commercial pop adaptations and shrinking shrine patronage threaten their classical repertoire.",

    timelineData: [
      {
        year: 1850,
        label: "1850 — Classical Shrine Era",
        practitioners: "35 Master Qawwal Lineages",
        youthAdoption: "90% Family Guild Transmission",
        status: "Sacred Oral Tradition",
        summary: "Over 300 classical Persian and Hindavi bandishes preserved purely through oral memory and weekly Thursday Sama gatherings.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1980,
        label: "1980 — Cinema & Global Spread",
        practitioners: "20 Active Lineages",
        youthAdoption: "40% Formal Training",
        status: "Popular Recognition",
        summary: "Bollywood adoption brought national fame, but simplified poetic structures over classical Sufi spiritual nuances.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Critical Transmission Threat",
        practitioners: "8 Traditional Families",
        youthAdoption: "15% Youth Apprentices",
        status: "🔴 High Risk of Loss",
        summary: "Fewer than 15 young musicians are currently mastering authentic Farsi vocal compositions, risking the permanent loss of rare historical ragas.",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
      }
    ],

    riskFactors: [
      "Loss of fluency in classical Farsi and Hindavi poetic dialects among younger Qawwals",
      "Shift towards shortened commercial stage performances vs traditional multi-hour spiritual Sama",
      "Lack of digital audio archiving for rare family ragas and notebook manuscripts (Bayaz)"
    ],
    aiInsight: "Virasat AI Risk Engine warns that 60% of rare Khusrau compositions exist only in unrecorded family memories. Priority action: Establish digital high-fidelity audio archiving and youth stipend residencies.",

    highlights: [
      "Amir Khusrau's 750-Year-Old Musical Lineage",
      "Intangible Oral Vocal Masterpiece",
      "Sufi Devotional Sama Tradition"
    ],
    tags: ["Traditions", "Oral Heritage", "Sufi Music", "Amir Khusrau"],
    xpReward: 400,
    badgeUnlocked: "Khusrau Melody Keeper"
  }
];

export const CATEGORIES = [
  { id: "All", label: "All Heritage", icon: "🌐" },
  { id: "Places", label: "Historic Places", icon: "🕌" },
  { id: "Crafts", label: "Ancient Crafts", icon: "🧵" },
  { id: "Traditions", label: "Oral Traditions", icon: "📜" },
  { id: "Art", label: "Performing Arts", icon: "🎨" }
];

export const REGIONS = [
  "All Delhi Regions",
  "Central Delhi (Connaught Place)",
  "Old Delhi (Shahjahanabad)",
  "South Delhi (Mehrauli & Nizamuddin)",
  "North Delhi"
];

export const RISK_FILTERS = [
  { id: "ALL", label: "All Risk Levels" },
  { id: "AT_RISK", label: "🔴 High Risk (70%+)" },
  { id: "VULNERABLE", label: "🟠 Vulnerable (40-69%)" },
  { id: "THRIVING", label: "🟢 Thriving (<40%)" }
];
