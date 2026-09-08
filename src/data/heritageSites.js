export const HERITAGE_SITES = [
  // 1. CHANDNI CHOWK & ZARDOZI (🔴 Critical Risk)
  {
    id: "chandni-chowk-zardozi",
    name: "Zardozi Hand Embroidery & Silver Bazaars",
    shortName: "Chandni Chowk",
    category: "Art & Crafts",
    status: "Critical", // Thriving | Needs Attention | At Risk | Critical
    statusBadge: "🔴 Critical (88/100 Risk)",
    statusColor: "#EF4444",
    location: "Chandni Chowk, Delhi",
    state: "Delhi",
    coordinates: [28.6506, 77.2303],
    dynasty: "Shahjahanabad (1650 AD)",
    riskScore: 88,
    practitionersCount: "28 Active Master Weavers",
    youthInvolvement: "8% Youth Apprenticeship",
    documentationScore: "35% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80", caption: "Kinari Bazaar traditional embroidery looms" },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80", caption: "Archival Lakhori haveli courtyards in Ballimaran" }
    ],

    surprisingFact: "Designed in 1650 AD by Princess Jahanara Begum, Chandni Chowk had a central water pool that reflected the moonlight!",
    
    declineReasons: [
      "Rapid migration of youth away from hand-loom apprenticeships to digital jobs",
      "Factory-produced cheap metallic plastic imitations diluting authentic zari market",
      "Overhead wiring, commercial warehouse encroachment, and loss of haveli workshop space",
      "Lack of direct artisan-to-consumer digital marketplace channels"
    ],
    
    suggestedActions: [
      "Establish direct artisan guild stipend for youth apprentices",
      "Create high-resolution digital twin archive of traditional Zardozi motifs",
      "Organize curated heritage craft walking tours in Kinari Bazaar",
      "Launch verified 'CodeVirasat Authentic Craft' digital certification tag"
    ],

    // Before / After Comparison for Time Machine
    thenVsNow: {
      thenYear: "1860 AD",
      thenImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Replacement of central canal and shade trees with modern electric wiring & traffic",
        "Conversion of residential Lakhori brick havelis into wholesale electronics godowns",
        "Shift from hand-distilled Mitti Attar and real zari to synthetic commercial goods"
      ]
    },

    timelineEvents: [
      { year: 1650, title: "Royal Foundation by Princess Jahanara", description: "Moonlit pool canal and 1,560 arched shops constructed under Mughal Emperor Shah Jahan." },
      { year: 1857, title: "Post-Rebellion Transformation", description: "British forces dismantle central water canal and construct railway lines through Old Delhi." },
      { year: 1950, title: "Post-Independence Craft Hub", description: "Bazaar becomes South Asia's largest wholesale center for silver, spices, and hand embroidery." },
      { year: 2026, title: "Endangered Artisan Crisis", description: "Master weavers drop under 30 families; urgent digital archiving initiated." }
    ],

    communityStory: {
      author: "Ustad Rahimuddin",
      relation: "4th Generation Zardozi Master, Kinari Bazaar",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      quote: "When I was 10, my grandfather taught me how to feel the tension of pure gold wire on the wooden frame. Today, machine factories make plastic imitations, but true zari has a heartbeat."
    }
  },

  // 2. PHULKARI EMBROIDERY - PUNJAB (🟠 At Risk)
  {
    id: "phulkari-embroidery-punjab",
    name: "Traditional Craft – Phulkari Embroidery",
    shortName: "Phulkari (Punjab)",
    category: "Art & Crafts",
    status: "At Risk",
    statusBadge: "🟠 At Risk (82/100 Risk)",
    statusColor: "#F97316",
    location: "Patiala & Amritsar, Punjab",
    state: "Punjab",
    coordinates: [30.3398, 76.3869],
    dynasty: "Folk Craft Tradition (15th Century)",
    riskScore: 82,
    practitionersCount: "60 Artisan Women",
    youthInvolvement: "14% Youth Participation",
    documentationScore: "25% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80", caption: "Hand-stitched damask silk Phulkari geometric motifs" }
    ],

    surprisingFact: "Phulkari ('flower work') was traditionally embroidered from the reverse side of coarse cotton cloth without counting threads!",
    
    declineReasons: [
      "Fewer young women learning manual untwisted silk thread techniques",
      "Low financial returns compared to factory printed dupattas",
      "Documentation restricted to one region in Malwa Punjab"
    ],
    
    suggestedActions: [
      "Organize rural craft co-operatives in Patiala",
      "Create direct e-commerce museum sales for authentic Phulkari pieces",
      "Document geometric counting techniques on CodeVirasat platform"
    ],

    thenVsNow: {
      thenYear: "1920 AD",
      thenImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Shift from hand-spun khaddar cotton to machine polyester",
        "Loss of ceremonial Bagh heirlooms embroidered for weddings"
      ]
    },

    timelineEvents: [
      { year: 1500, title: "Mention in Waris Shah's Heer Ranjha", description: "Phulkari recognized as integral bride wedding dowry art." },
      { year: 1947, title: "Displacement & Revival", description: "Resettled women rebuild craft cooperatives across Punjab." },
      { year: 2026, title: "CodeVirasat Rescue Plan", description: "Active documentation of remaining 60 master embroiderers." }
    ],

    communityStory: {
      author: "Manjeet Kaur",
      relation: "Master Embroiderer, Patiala",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      quote: "Every stitch in a Bagh tells a mother's blessing for her daughter. Machine prints cannot replicate the prayer woven into every thread."
    }
  },

  // 3. MEHRAULI ARCHAEOLOGICAL PARK (🟡 Needs Attention)
  {
    id: "mehrauli-archaeological-park",
    name: "Mehrauli Ancient Settlement & Stepwells",
    shortName: "Mehrauli",
    category: "Monuments",
    status: "Needs Attention",
    statusBadge: "🟡 Needs Attention (65/100 Risk)",
    statusColor: "#EAB308",
    location: "Mehrauli, South Delhi",
    state: "Delhi",
    coordinates: [28.5200, 77.1820],
    dynasty: "Tomar Rajputs & Sultanate (1060 AD)",
    riskScore: 65,
    practitionersCount: "45 Heritage Guides",
    youthInvolvement: "22% Youth Engagement",
    documentationScore: "55% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80", caption: "Jamali Kamali Mosque & Tomb archways" },
      { url: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1000&q=80", caption: "Rajon ki Baoli historic 16th-century stepwell" }
    ],

    surprisingFact: "Mehrauli contains over 100 historical monuments spanning 1,000 years of continuous human settlement!",
    
    declineReasons: [
      "Uncontrolled urban construction encroaching on archaeological buffer zones",
      "Weathering of 16th-century plaster and unmaintained stepwell water levels",
      "Inadequate night lighting and security signage for visitors"
    ],
    
    suggestedActions: [
      "Implement AI-monitored perimeter protection",
      "Restoration of Rajon Ki Baoli subterranean rainwater catchment",
      "Develop youth heritage walking trails and interactive QR code guides"
    ],

    thenVsNow: {
      thenYear: "1910 AD",
      thenImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1592635196078-9fe17c295780?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Transformation from open forest groves into modern urban village boundaries",
        "Conservation of key Sultanate monuments by ASI and INTACH"
      ]
    },

    timelineEvents: [
      { year: 1060, title: "Construction of Lal Kot", description: "King Anangpal II builds Delhi's first fortified city wall." },
      { year: 1516, title: "Construction of Rajon Ki Baoli", description: "Daulat Khan builds 3-tiered stepwell during Sikandar Lodi's reign." },
      { year: 2026, title: "Digital Heritage Park Restoration", description: "3D scanning of stepwells and monuments underway." }
    ],

    communityStory: {
      author: "Vikram Singh",
      relation: "Heritage Walk Curator, Mehrauli",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "Walking through Mehrauli is like stepping through five imperial empires in 500 meters. We must protect this forest of monuments."
    }
  },

  // 4. SUFI QAWWALI - NIZAMUDDIN (🟢 Thriving)
  {
    id: "nizamuddin-sufi-qawwali",
    name: "Sufi Qawwali Music Lineage",
    shortName: "Nizamuddin Basti",
    category: "Music & Dance",
    status: "Thriving",
    statusBadge: "🟢 Thriving (25/100 Risk)",
    statusColor: "#10B981",
    location: "Nizamuddin Basti, Delhi",
    state: "Delhi",
    coordinates: [28.5912, 77.2410],
    dynasty: "Chishti Sufi Order (13th Century)",
    riskScore: 25,
    practitionersCount: "120 Qawwal Musicians",
    youthInvolvement: "65% Youth Participation",
    documentationScore: "85% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80", caption: "Thursday evening Sama qawwali courtyard gathering" }
    ],

    surprisingFact: "Amir Khusrau composed the first Qawwali bandish in Farsi and Hindavi in this courtyard over 750 years ago!",
    
    declineReasons: [
      "Commercial pressure to shorten traditional multi-hour spiritual Sama compositions for short video formats",
      "Acoustic noise pollution in historic courtyard lanes"
    ],
    
    suggestedActions: [
      "Archive multi-hour authentic courtyard recordings in spatial audio format",
      "Sponsor young qawwals preserving rare classical ragas",
      "Establish acoustic heritage protection zone around dargah courtyard"
    ],

    thenVsNow: {
      thenYear: "1890 AD",
      thenImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Continuous 750-year unbroken musical performance tradition",
        "Aga Khan Trust urban renewal restoring historic Basti water stepwell and shrines"
      ]
    },

    timelineEvents: [
      { year: 1275, title: "Amir Khusrau Compositions", description: "Creation of Qawwali repertoire at Hazrat Nizamuddin Auliya's courtyard." },
      { year: 1970, title: "Global Sufi Music Recognition", description: "Nizamuddin qawwals tour international stages." },
      { year: 2026, title: "High-Fidelity Audio Preservation", description: "CodeVirasat spatial audio archiving active." }
    ],

    communityStory: {
      author: "Meraj Ahmed Qawwal",
      relation: "Qawwal Bachche Lineage, Nizamuddin",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      quote: "When we sing Amir Khusrau's verses at sunset, 750 years disappear. Time dissolves between the 13th century and tonight."
    }
  },

  // 5. KUTIYATTAM SANSKRIT THEATRE - KERALA (🟠 At Risk)
  {
    id: "kutiyattam-sanskrit-theatre",
    name: "Folk Tradition – Kutiyattam Sanskrit Theatre",
    shortName: "Kutiyattam (Kerala)",
    category: "Folk Traditions",
    status: "At Risk",
    statusBadge: "🟠 At Risk (78/100 Risk)",
    statusColor: "#F97316",
    location: "Thrissur & Uzhavoor, Kerala",
    state: "Kerala",
    coordinates: [10.5276, 76.2144],
    dynasty: "Temple Theatre Tradition (2,000 Years)",
    riskScore: 78,
    practitionersCount: "35 Trained Actors",
    youthInvolvement: "10% Youth Apprenticeship",
    documentationScore: "45% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80", caption: "Mizhavu drum accompaniment inside Koothambalam temple theatre" }
    ],

    surprisingFact: "Recognized by UNESCO as a Masterpiece of Oral Heritage, Kutiyattam is humanity's oldest surviving Sanskrit theatre form!",
    
    declineReasons: [
      "10 to 15 years of rigorous gurukulam training required to master stylized eye gestures",
      "Limited performance venues outside traditional temple Koothambalams",
      "High cost of natural facial cosmetics and heavy wooden headdresses"
    ],
    
    suggestedActions: [
      "Provide monthly stipends for full-time Koothambalam students",
      "Produce subtitled digital recordings of full multi-night acts",
      "Establish international theatre residency partnerships"
    ],

    thenVsNow: {
      thenYear: "1900 AD",
      thenImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Transition from strictly temple-bound performance to public arts academies",
        "Inclusion of female artists (Nangyars) performing solo Nangiarkoothu"
      ]
    },

    timelineEvents: [
      { year: 900, title: "Kulasekhara Varma Reforms", description: "Royal patronage codifies Sanskrit theatrical manuals (Attaprakaram)." },
      { year: 2001, title: "UNESCO Intangible Heritage Declaration", description: "Kutiyattam proclaimed global masterpiece." },
      { year: 2026, title: "CodeVirasat Performance Archive", description: "3D eye movement capture initiated for educational training." }
    ],

    communityStory: {
      author: "Margi Madhu",
      relation: "Master Kutiyattam Performer, Kerala",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote: "In Kutiyattam, an actor can spend two hours enacting the thought of a single lotus opening. It is deep meditation through movement."
    }
  },

  // 6. THANG-TA MARTIAL DANCE - MANIPUR (🔴 Critical Risk)
  {
    id: "thang-ta-martial-manipur",
    name: "Folk Tradition – Thang-Ta Martial Art & Dance",
    shortName: "Thang-Ta (Manipur)",
    category: "Folk Traditions",
    status: "Critical",
    statusBadge: "🔴 Critical (90/100 Risk)",
    statusColor: "#EF4444",
    location: "Imphal, Manipur",
    state: "Manipur",
    coordinates: [24.8170, 93.9368],
    dynasty: "Meitei Royal Tradition (17th Century)",
    riskScore: 90,
    practitionersCount: "22 Master Gurus",
    youthInvolvement: "6% Youth Participation",
    documentationScore: "20% Digitized",
    
    heroImage: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=600&q=80",
    
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1000&q=80", caption: "Traditional sword (Thang) and spear (Ta) ritual movement" }
    ],

    surprisingFact: "Thang-Ta integrates combat defense, rhythmic breathing, and ritual dance dedicated to ancient Meitei deities!",
    
    declineReasons: [
      "Loss of traditional training grounds (Huyen Langlon academies)",
      "Lack of state funding for hand-forged ritual spears and swords",
      "Regional instability disrupting annual festival performances"
    ],
    
    suggestedActions: [
      "Emergency digital motion-capture archiving of spear forms",
      "Provide equipment grants for traditional blacksmith weapon crafters",
      "Integrate basic Thang-Ta movement in national sports curriculum"
    ],

    thenVsNow: {
      thenYear: "1891 AD",
      thenImage: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
      nowYear: "Today (2026)",
      nowImage: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
      changes: [
        "Ban under British rule lifted after 1947",
        "Modern shift toward performance art rather than battlefield martial art"
      ]
    },

    timelineEvents: [
      { year: 1700, title: "Meitei Kingdom Military Standardization", description: "Thang-Ta trained as national defense and ritual art." },
      { year: 1891, title: "British Prohibition", description: "Practice secretized in rural hills during Anglo-Manipur war." },
      { year: 2026, title: "Critical Preservation Call", description: "CodeVirasat rescue mission launched to document master gurus." }
    ],

    communityStory: {
      author: "Guru G. Gourakishor",
      relation: "Thang-Ta Master, Imphal",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      quote: "The spear is not for violence—it is the extension of our breath and ancestral spirit. If the spear falls silent, our history fades."
    }
  }
];
