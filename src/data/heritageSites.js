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
    
    // Curated Photo Gallery of Zardozi Craft
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
        caption: "Master artisan stitching gold zari wire on wooden Khaat frame"
      },
      {
        url: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=1000&q=80",
        caption: "Intricate metallic thread embroidery detail with pearls and beads"
      },
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80",
        caption: "Traditional Shahjahanabad textile workshop in Old Delhi"
      }
    ],

    shortDescription: "The 400-year-old royal art of heavy gold and silver wire embroidery on silk and velvet is rapidly losing master craftsmen to modern machine factories.",
    fullDescription: "Zardozi (or Zar-dozi) is an intricate metal embroidery that reached its peak under Mughal Emperor Akbar. Crafters use real gold and silver threads, pearls, and precious stones sewn onto heavy silk or velvet. Today, high raw metal costs, machine imitation, and low wages threaten the survival of traditional karkhanas in Old Delhi.",
    
    // Timeline "Then vs Now" Journey Data with 10-15 Year Gaps
    timelineData: [
      {
        year: 1970,
        label: "1970 — Post-Imperial Master Guilds",
        practitioners: "1,400 Active Crafters",
        youthAdoption: "70% Family Guild Continuity",
        status: "Royal Guild Lineage",
        summary: "Old Delhi karkhanas produced bespoke ceremonial attire for high-end celebrations across North India.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1985,
        label: "1985 — Industrial Imitation Rise",
        practitioners: "950 Active Crafters",
        youthAdoption: "48% Youth Interest",
        status: "Machine Competition",
        summary: "First polyester metallic thread machines appeared in industrial hubs, creating cheap knockoffs.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1998,
        label: "1998 — Export & GI Tag Push",
        practitioners: "620 Active Masters",
        youthAdoption: "32% Apprenticeship",
        status: "Niche Export Market",
        summary: "Efforts began to register Geographical Indication (GI) tags for authentic hand-worked zari embroidery.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2010,
        label: "2010 — Raw Metal Inflation",
        practitioners: "340 Remaining Masters",
        youthAdoption: "20% Youth Retention",
        status: "Vulnerable Guilds",
        summary: "Surging silver and gold wire prices eroded artisan margins, forcing many family workshops to close.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — Fast Fashion Pressure",
        practitioners: "210 Active Masters",
        youthAdoption: "15% Youth Continuity",
        status: "🔴 Severe Decline",
        summary: "Younger generations pivoted toward digital and service sector employment due to low daily wages.",
        image: "https://images.unsplash.com/photo-1606744888344-493238951221?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Digital Archiving Intervention",
        practitioners: "140 Remaining Masters",
        youthAdoption: "12% Youth Interest",
        status: "🔴 Critical Risk (78%)",
        summary: "Virasat AI Risk Engine initiates micro-grant apprenticeships and blockchain provenance tagging for handcraft.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
      }
    ],

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

    // Verified Authentic High-Res Qutub Minar Images
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    
    // Curated Photo Gallery of Qutub Minar Complex
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

    shortDescription: "The 72.5m brick minaret and 1,600-year-old rustless Iron Pillar of Mehrauli stand as world-renowned UNESCO architectural landmarks.",
    fullDescription: "Built in 1192 by Qutb-ud-din Aibak and expanded by Iltutmish and Alauddin Khalji, Qutub Minar remains one of South Asia's most visited monuments. The complex also shelters the 1,600-year-old Iron Pillar of Chandragupta II, which exhibits extraordinary corrosion resistance.",

    // Timeline "Then vs Now" Journey Data with 10-15 Year Gaps
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
        status: "🟢 Stable & Thriving (32%)",
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

    // Timeline "Then vs Now" Journey Data with 10-15 Year Gaps
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
        summary: "Imperial quarters converted into museums showcasing freedom struggle artifacts and Mughal armor.",
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
        summary: "Non-invasive mud pack technology applied to remove 50 years of urban vehicular soot from sandstone walls.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Traffic Buffer & AI Tracking",
        practitioners: "ASI & Digital Twin Guilds",
        youthAdoption: "55% Youth Adoption",
        status: "🟠 Vulnerable (45%)",
        summary: "Pedestrianization of Chandni Chowk reduces air pollution impact on fort walls.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
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
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
        caption: "Subterranean vaulted stone archways and cool alcoves"
      },
      {
        url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
        caption: "Side perspective showing the three-tiered stepwell structure"
      }
    ],

    shortDescription: "A 108-step subterranean stepwell in central Delhi suffering from dry aquifer tables and urban high-rise encroachment.",
    fullDescription: "Agrasen Ki Baoli is a 60-meter long historic stepwell comprising 108 stone steps split across three levels. Built as a community water sanctuary and cool retreat, the stepwell's natural water table dried up in the 20th century due to heavy urban groundwater pumping.",

    // Timeline "Then vs Now" Journey Data with 10-15 Year Gaps
    timelineData: [
      {
        year: 1970,
        label: "1970 — Aquifer Depletion Stage",
        practitioners: "Local Custodians",
        youthAdoption: "15% Local Awareness",
        status: "Drying Stepwell",
        summary: "Groundwater extraction in Connaught Place caused the baoli's water level to drop permanently below the lowest stone step.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 1985,
        label: "1985 — Protected Heritage Status",
        practitioners: "ASI Conservation Officers",
        youthAdoption: "22% Student Visits",
        status: "Dry Monument",
        summary: "Declared a monument of national importance under the ASI, fencing off vulnerable upper alcoves.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2000,
        label: "2000 — Urban High-Rise Encroachment",
        practitioners: "Urban Planners",
        youthAdoption: "28% Heritage Walks",
        status: "Encapped by Modern Towers",
        summary: "Surrounding commercial construction altered subterranean drainage channels feeding the well shaft.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2014,
        label: "2014 — Youth Photography Renaissance",
        practitioners: "Cultural Photographers",
        youthAdoption: "40% High Social Interest",
        status: "Popular Youth Spot",
        summary: "Featured in Indian cinema and social media, bringing thousands of young visitors to Central Delhi's stepwell.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Micro-Aquifer Recharge Proposal",
        practitioners: "Hydrological Engineers",
        youthAdoption: "42% Youth Interest",
        status: "🟠 Vulnerable (64%)",
        summary: "Virasat AI proposes closed-loop rainwater recycling to restore natural humidity and protect stone arches from micro-fractures.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
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

    // Timeline "Then vs Now" Journey Data with 10-15 Year Gaps
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
        year: 2005,
        label: "2005 — Farsi Dialect Decline",
        practitioners: "14 Traditional Families",
        youthAdoption: "30% Farsi Fluency",
        status: "Loss of Oral Texts",
        summary: "Fewer young apprentices learned classical Persian pronunciation, leading to unrecorded manuscript loss.",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2018,
        label: "2018 — Shrinking Shrine Patronage",
        practitioners: "10 Master Families",
        youthAdoption: "18% Youth Apprentices",
        status: "🔴 Endangered Vocal Art",
        summary: "Shrinking honorariums forced young musicians to take non-music jobs to support their households.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        year: 2026,
        label: "2026 — Digital Sound Vault Rescue",
        practitioners: "8 Master Qawwal Families",
        youthAdoption: "15% Youth Apprentices",
        status: "🔴 Critical Risk (82%)",
        summary: "Virasat AI launches high-fidelity digital audio archiving for rare Khusrau compositions.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
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
