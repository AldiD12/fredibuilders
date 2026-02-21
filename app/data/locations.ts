export interface Location {
  slug: string
  name: string
  postcode: string
  zone: 'gold' | 'renovation' | 'village' | 'foundation'
  region: string
  description: string
  keywords: string[]
  highlightService?: string
  coordinates: {
    lat: number
    lng: number
  }
  nearby: string[]
  detailedDescription: string // 150-200 words
  localStreets: string[] // 3 streets
  landmarks: string[] // 1-2 landmarks
  recentProjects: {
    description: string
    year: number
  }[]
  lsiKeywords: string[] // bathroom-specific vocabulary
}

export const locations: Location[] = [
  // Gold Zone (Surrey - High Ticket / Luxury)
  {
    slug: 'bathroom-fitters-esher-kt10',
    name: 'Esher',
    postcode: 'KT10',
    zone: 'gold',
    region: 'Surrey',
    description: 'Luxury bathroom renovations and bespoke wet rooms in Esher. Serving high-end properties with premium finishes and exceptional craftsmanship.',
    keywords: ['bathroom fitters Esher', 'luxury bathrooms KT10', 'wet room installation Esher', 'bespoke bathrooms Surrey'],
    highlightService: 'Bespoke Wet Rooms',
    coordinates: { lat: 51.3699, lng: -0.3649 },
    nearby: ['Cobham', 'Weybridge', 'Kingston upon Thames', 'Wimbledon'],
    detailedDescription: 'Esher is renowned for its prestigious properties, from elegant Victorian villas to contemporary luxury homes. The area attracts discerning homeowners who demand exceptional quality and bespoke design. Fredi Builders has established a strong reputation in KT10 for delivering luxury bathroom renovations that complement these high-end properties. Our expertise includes installing premium sanitaryware from brands like Villeroy & Boch and Duravit, creating spa-like wet rooms with underfloor heating, and incorporating natural stone such as marble and travertine. We understand the architectural character of Esher homes and work seamlessly with interior designers to achieve stunning results. Our local knowledge extends to navigating planning requirements for listed buildings and conservation areas. With meticulous attention to detail and project management, we transform bathrooms into luxurious sanctuaries that enhance property value and daily living comfort.',
    localStreets: ['High Street', 'Portsmouth Road', 'Claremont Lane'],
    landmarks: ['Sandown Park Racecourse', 'Claremont Landscape Garden'],
    recentProjects: [
      { description: 'Complete master ensuite renovation with marble tiling and bespoke vanity unit on Portsmouth Road', year: 2024 },
      { description: 'Luxury wet room installation with rainfall shower and heated towel rails near Claremont Gardens', year: 2023 }
    ],
    lsiKeywords: ['walk-in shower', 'underfloor heating', 'marble tiles', 'rainfall shower', 'freestanding bath', 'heated towel rail', 'vanity unit', 'wet room tanking']
  },
  {
    slug: 'luxury-bathrooms-cobham-kt11',
    name: 'Cobham',
    postcode: 'KT11',
    zone: 'gold',
    region: 'Surrey',
    description: 'Premium bathroom specialists in Cobham. Expert installation of luxury sanitaryware, marble tiling, and high-end bathroom suites.',
    keywords: ['luxury bathrooms Cobham', 'bathroom renovation KT11', 'marble tiling Cobham', 'premium bathroom fitters Surrey'],
    highlightService: 'Marble Tiling',
    coordinates: { lat: 51.3290, lng: -0.4111 },
    nearby: ['Esher', 'Weybridge', 'Leatherhead', 'Kingston upon Thames'],
    detailedDescription: 'Cobham represents the pinnacle of Surrey luxury living, with grand period properties and modern executive homes that demand the finest bathroom installations. Our work in KT11 focuses on creating timeless elegance through expert marble and natural stone tiling, bespoke joinery, and premium fixtures. We regularly collaborate with architects and interior designers on high-value projects, ensuring every detail meets exacting standards. From Georgian townhouses requiring sympathetic restoration to contemporary new builds demanding cutting-edge design, our team brings 15+ years of expertise to every Cobham project. We source materials from specialist suppliers including Fired Earth and CP Hart, ensuring authenticity and quality. Our understanding of local building regulations and conservation area requirements ensures smooth project delivery. Whether installing a spa-style master ensuite or renovating a family bathroom, we deliver craftsmanship that enhances both lifestyle and property value in this prestigious Surrey location.',
    localStreets: ['High Street', 'Downside Bridge Road', 'Between Streets'],
    landmarks: ['Painshill Park', 'Cobham Rugby Club'],
    recentProjects: [
      { description: 'Bespoke marble bathroom with underfloor heating and smart lighting on Downside Bridge Road', year: 2024 },
      { description: 'Period property bathroom restoration with Victorian-style fixtures near Painshill Park', year: 2023 }
    ],
    lsiKeywords: ['marble tiling', 'natural stone', 'bespoke joinery', 'smart lighting', 'thermostatic shower', 'wall-hung toilet', 'chrome fixtures', 'porcelain tiles']
  },
  {
    slug: 'bathroom-renovations-weybridge-kt13',
    name: 'Weybridge',
    postcode: 'KT13',
    zone: 'gold',
    region: 'Surrey',
    description: 'High-end bathroom renovations in Weybridge. Specializing in luxury wet rooms, designer tiling, and complete bathroom transformations.',
    keywords: ['bathroom renovations Weybridge', 'luxury bathrooms KT13', 'wet room Weybridge', 'bathroom specialists Surrey'],
    highlightService: 'Full Home Renovation',
    coordinates: { lat: 51.3719, lng: -0.4595 },
    nearby: ['Cobham', 'Esher', 'Kingston upon Thames', 'Wimbledon'],
    detailedDescription: 'Weybridge combines riverside elegance with modern luxury, attracting homeowners who appreciate quality craftsmanship and contemporary design. Our bathroom renovation service in KT13 caters to this sophisticated market with bespoke solutions that blend functionality with aesthetic excellence. We specialize in creating seamless wet rooms with linear drainage systems, installing statement freestanding baths with floor-mounted taps, and incorporating smart home technology for lighting and temperature control. Many Weybridge properties feature generous room sizes, allowing us to design spa-like spaces with separate shower enclosures, double vanity units, and dedicated dressing areas. Our project management ensures minimal disruption, with clear communication and respect for your home throughout the renovation process. We work with trusted plumbers, electricians, and tilers who share our commitment to excellence. From initial design consultation through to final installation, we deliver bathroom transformations that exceed expectations and add significant value to Weybridge properties.',
    localStreets: ['Queens Road', 'Monument Hill', 'Oatlands Drive'],
    landmarks: ['Brooklands Museum', 'Weybridge Marina'],
    recentProjects: [
      { description: 'Contemporary wet room with frameless glass and porcelain tiles on Queens Road', year: 2024 },
      { description: 'Master bathroom renovation with freestanding bath and walk-in shower near Brooklands', year: 2023 }
    ],
    lsiKeywords: ['wet room drainage', 'frameless glass', 'porcelain tiles', 'floor-mounted taps', 'double vanity', 'LED mirror', 'digital shower', 'stone effect tiles']
  },
  {
    slug: 'bathroom-fitters-kingston-kt1',
    name: 'Kingston upon Thames',
    postcode: 'KT1',
    zone: 'gold',
    region: 'Surrey',
    description: 'Expert bathroom fitters in Kingston upon Thames. Proven high-ticket area for luxury bathroom installations and structural alterations.',
    keywords: ['bathroom fitters Kingston', 'bathroom renovation KT1', 'luxury bathrooms Kingston', 'wet room installation Kingston'],
    highlightService: 'Structural Knock-Throughs',
    coordinates: { lat: 51.4123, lng: -0.3006 },
    nearby: ['Wimbledon', 'Esher', 'Putney', 'Raynes Park'],
    detailedDescription: 'Kingston upon Thames offers a diverse property landscape from riverside apartments to substantial Victorian and Edwardian homes, each presenting unique opportunities for bathroom transformation. Our expertise in KT1 extends beyond standard renovations to include structural alterations such as knocking through walls to create larger bathroom spaces, relocating bathrooms to better positions within the home, and converting bedrooms into luxurious ensuites. We hold full liability insurance and work with structural engineers when required, ensuring all alterations comply with building regulations. Our bathroom installations feature premium brands including Grohe, Hansgrohe, and Roca, with careful attention to water pressure optimization and efficient heating systems. Kingston homeowners appreciate our transparent pricing, detailed project timelines, and commitment to leaving properties clean and tidy each day. Whether you\'re renovating a period property near the town center or updating a modern home by the river, our team delivers exceptional results that enhance both functionality and value.',
    localStreets: ['Richmond Road', 'Kingston Hill', 'Coombe Road'],
    landmarks: ['Kingston Bridge', 'Hampton Court Palace'],
    recentProjects: [
      { description: 'Structural knock-through creating master ensuite with walk-in shower on Kingston Hill', year: 2024 },
      { description: 'Victorian bathroom renovation with period features and modern plumbing near Richmond Road', year: 2023 }
    ],
    lsiKeywords: ['structural alterations', 'ensuite conversion', 'water pressure', 'building regulations', 'period features', 'modern plumbing', 'shower enclosure', 'bathroom suite']
  },
  {
    slug: 'builders-leatherhead-kt22',
    name: 'Leatherhead',
    postcode: 'KT22',
    zone: 'gold',
    region: 'Surrey',
    description: 'Bathroom renovations and building services in Leatherhead and Oxshott. Serving premium properties with exceptional attention to detail.',
    keywords: ['builders Leatherhead', 'bathroom renovation KT22', 'Oxshott bathroom fitters', 'luxury bathrooms Surrey'],
    highlightService: 'Full Bathroom Renovations',
    coordinates: { lat: 51.2979, lng: -0.3298 },
    nearby: ['Cobham', 'Esher', 'Sutton', 'Croydon'],
    detailedDescription: 'Leatherhead and the surrounding areas including Oxshott and Fetcham feature some of Surrey\'s most impressive properties, from country estates to modern family homes. Our building and bathroom renovation service in KT22 combines traditional craftsmanship with contemporary techniques to deliver outstanding results. We understand that luxury bathroom projects often form part of larger home improvements, so we coordinate seamlessly with other trades including electricians, plasterers, and decorators. Our bathroom designs incorporate the latest trends such as matte black fixtures, terrazzo tiles, and integrated storage solutions, while respecting the character of period properties. We offer comprehensive project management from initial survey through to final snagging, with regular updates and transparent communication throughout. Our attention to detail extends to protecting your property during works, managing waste disposal responsibly, and ensuring all installations meet warranty requirements. With extensive experience in KT22, we deliver bathroom renovations that combine beauty, functionality, and lasting quality.',
    localStreets: ['High Street', 'North Street', 'Oxshott Road'],
    landmarks: ['Leatherhead Leisure Centre', 'Thorncroft Manor'],
    recentProjects: [
      { description: 'Complete bathroom renovation with terrazzo tiles and matte black fixtures on North Street', year: 2024 },
      { description: 'Luxury ensuite installation with integrated storage near Oxshott', year: 2023 }
    ],
    lsiKeywords: ['terrazzo tiles', 'matte black fixtures', 'integrated storage', 'coordinated trades', 'project management', 'warranty requirements', 'contemporary design', 'traditional craftsmanship']
  },
  
  // Renovation Zone (South West London - High Demand)
  {
    slug: 'bathroom-fitters-wimbledon-sw19',
    name: 'Wimbledon',
    postcode: 'SW19',
    zone: 'renovation',
    region: 'South West London',
    description: 'Professional bathroom fitters in Wimbledon. Complete bathroom renovations, wet rooms, and luxury tiling for SW19 properties.',
    keywords: ['bathroom fitters Wimbledon', 'bathroom renovation SW19', 'wet room Wimbledon', 'luxury tiling SW19'],
    highlightService: 'Wet Room Installations',
    coordinates: { lat: 51.4214, lng: -0.2064 },
    nearby: ['Kingston upon Thames', 'Putney', 'Raynes Park', 'Balham'],
    detailedDescription: 'Wimbledon\'s property market spans elegant Edwardian homes near the Common to modern apartments in the town center, each requiring tailored bathroom solutions. Our SW19 service specializes in wet room installations that maximize space and create contemporary, accessible bathing areas. We excel at transforming compact bathrooms in Victorian conversions and creating luxury ensuites in family homes. Our wet room expertise includes proper tanking and waterproofing to British Standards, installing efficient drainage systems, and selecting slip-resistant tiles that combine safety with style. Wimbledon clients appreciate our punctuality, cleanliness, and ability to work around busy family schedules. We source materials from local suppliers where possible, reducing environmental impact and supporting the community. Our installations feature quality components from Impey, Mira, and Crosswater, backed by manufacturer warranties and our own workmanship guarantee. Whether you need a ground-floor wet room for accessibility or a luxurious master ensuite, we deliver professional results that enhance your Wimbledon home.',
    localStreets: ['The Broadway', 'Wimbledon Hill Road', 'Ridgway'],
    landmarks: ['Wimbledon Common', 'All England Lawn Tennis Club'],
    recentProjects: [
      { description: 'Accessible wet room with level access shower and grab rails on Wimbledon Hill Road', year: 2024 },
      { description: 'Contemporary bathroom with large format tiles and rainfall shower near The Common', year: 2023 }
    ],
    lsiKeywords: ['wet room tanking', 'waterproofing', 'level access shower', 'slip-resistant tiles', 'grab rails', 'drainage system', 'accessible bathroom', 'large format tiles']
  },
  {
    slug: 'bathroom-fitters-streatham-sw16',
    name: 'Streatham',
    postcode: 'SW16',
    zone: 'renovation',
    region: 'South West London',
    description: 'Main volume area for bathroom renovations in Streatham. Victorian terrace specialists with expertise in structural alterations and modern bathroom installations.',
    keywords: ['bathroom fitters Streatham', 'bathroom renovation SW16', 'Victorian bathroom Streatham', 'structural alterations SW16'],
    highlightService: 'Victorian Terrace Renovations',
    coordinates: { lat: 51.4321, lng: -0.1256 },
    nearby: ['Balham', 'Thornton Heath', 'Crystal Palace', 'Dulwich Village'],
    detailedDescription: 'Streatham represents our core service area, where we\'ve completed hundreds of bathroom renovations across the diverse SW16 housing stock. We specialize in Victorian and Edwardian terrace properties, understanding the unique challenges these homes present including solid walls, original plumbing routes, and varying ceiling heights. Our approach combines respect for period features with modern functionality, often incorporating reclaimed or reproduction Victorian sanitaryware alongside contemporary conveniences like thermostatic showers and underfloor heating. We\'re experts at working within the typical terrace layout, maximizing limited space through clever design and storage solutions. Our structural work includes removing chimney breasts, installing RSJs for load-bearing walls, and relocating soil stacks when necessary. Streatham homeowners value our competitive pricing, flexible scheduling, and deep understanding of local property types. We maintain strong relationships with Streatham suppliers and building control, ensuring smooth project delivery. From budget-friendly refreshes to complete luxury transformations, we deliver quality bathroom renovations that Streatham residents recommend to their neighbors.',
    localStreets: ['Streatham High Road', 'Streatham Common North', 'Leigham Court Road'],
    landmarks: ['Streatham Common', 'The Hideaway'],
    recentProjects: [
      { description: 'Victorian terrace bathroom with period roll-top bath and metro tiles on Leigham Court Road', year: 2024 },
      { description: 'Complete bathroom renovation with structural alterations near Streatham Common', year: 2023 }
    ],
    lsiKeywords: ['Victorian sanitaryware', 'metro tiles', 'roll-top bath', 'thermostatic shower', 'chimney breast removal', 'RSJ installation', 'soil stack', 'period features']
  },
  {
    slug: 'bathroom-renovations-balham-sw12',
    name: 'Balham',
    postcode: 'SW12',
    zone: 'renovation',
    region: 'South West London',
    description: 'Expert bathroom renovations in Balham. Specializing in modern bathroom designs, wet rooms, and complete refurbishments.',
    keywords: ['bathroom renovations Balham', 'bathroom fitters SW12', 'wet room Balham', 'modern bathrooms SW12'],
    highlightService: 'Modern Bathroom Designs',
    coordinates: { lat: 51.4431, lng: -0.1525 },
    nearby: ['Streatham', 'Wimbledon', 'Putney', 'Thornton Heath'],
    detailedDescription: 'Balham has evolved into one of South London\'s most desirable areas, attracting young professionals and families who value contemporary design and quality finishes. Our bathroom renovation service in SW12 reflects this demographic with modern, minimalist designs featuring clean lines, neutral palettes, and smart storage solutions. We specialize in creating Instagram-worthy bathrooms with features like backlit mirrors, floating vanities, concealed cisterns, and seamless glass shower screens. Balham properties often have good ceiling heights and room sizes, allowing us to incorporate luxury touches like freestanding baths, separate shower enclosures, and double sinks. We understand the importance of maximizing property value in this competitive market, designing bathrooms that appeal to future buyers while meeting current needs. Our project timelines are realistic and achievable, with most bathroom renovations completed within 2-3 weeks. We use dust extraction equipment and protective coverings to minimize disruption to your home and neighbors. From initial 3D design visualization through to final installation, we deliver modern bathroom renovations that Balham homeowners love.',
    localStreets: ['Balham High Road', 'Bedford Hill', 'Balham Park Road'],
    landmarks: ['Balham Station', 'Tooting Bec Common'],
    recentProjects: [
      { description: 'Contemporary bathroom with floating vanity and backlit mirror on Bedford Hill', year: 2024 },
      { description: 'Modern wet room with seamless glass and porcelain tiles near Balham Station', year: 2023 }
    ],
    lsiKeywords: ['floating vanity', 'backlit mirror', 'concealed cistern', 'seamless glass', 'minimalist design', 'neutral palette', 'double sink', '3D visualization']
  },
  {
    slug: 'bathroom-specialists-raynes-park-sw20',
    name: 'Raynes Park',
    postcode: 'SW20',
    zone: 'renovation',
    region: 'South West London',
    description: 'Bathroom specialists serving Raynes Park and SW20. Full bathroom renovations, luxury tiling, and wet room installations.',
    keywords: ['bathroom specialists Raynes Park', 'bathroom renovation SW20', 'wet room SW20', 'bathroom fitters Raynes Park'],
    highlightService: 'Luxury Tiling Services',
    coordinates: { lat: 51.4093, lng: -0.2297 },
    nearby: ['Wimbledon', 'Kingston upon Thames', 'Putney', 'Balham'],
    detailedDescription: 'Raynes Park offers excellent value in the SW20 area, with a mix of 1930s semi-detached homes and modern developments that benefit from professional bathroom renovation. Our tiling expertise sets us apart in this market, with skills spanning traditional ceramic and porcelain through to contemporary large-format tiles and natural stone. We understand that tiling can make or break a bathroom design, so we invest time in perfect preparation including tanking, leveling, and planning tile layouts to minimize cuts and maximize visual impact. Our tilers are NVQ qualified with decades of combined experience, capable of intricate mosaic work, herringbone patterns, and seamless large-format installations. Raynes Park clients appreciate our attention to detail in areas like shower niches, window reveals, and boxing in pipework. We offer a wide range of tile options through our supplier partnerships, from budget-friendly ceramics to premium Italian porcelain. Our bathroom renovations combine this tiling excellence with quality sanitaryware, efficient plumbing, and thoughtful lighting design to create spaces that are both beautiful and practical for family life.',
    localStreets: ['Coombe Lane', 'Grand Drive', 'Durham Road'],
    landmarks: ['Raynes Park Station', 'Prince George\'s Playing Fields'],
    recentProjects: [
      { description: 'Luxury bathroom with herringbone marble tiles and brass fixtures on Grand Drive', year: 2024 },
      { description: 'Family bathroom renovation with large format tiles and shower niche near Coombe Lane', year: 2023 }
    ],
    lsiKeywords: ['herringbone pattern', 'large format tiles', 'shower niche', 'mosaic tiles', 'tile leveling', 'brass fixtures', 'Italian porcelain', 'natural stone']
  },
  {
    slug: 'bathroom-fitters-putney-sw15',
    name: 'Putney',
    postcode: 'SW15',
    zone: 'renovation',
    region: 'South West London',
    description: 'Professional bathroom fitters in Putney. Complete bathroom transformations with premium finishes and expert craftsmanship.',
    keywords: ['bathroom fitters Putney', 'bathroom renovation SW15', 'luxury bathrooms Putney', 'wet room SW15'],
    highlightService: 'Premium Bathroom Suites',
    coordinates: { lat: 51.4607, lng: -0.2160 },
    nearby: ['Wimbledon', 'Kingston upon Thames', 'Balham', 'Raynes Park'],
    detailedDescription: 'Putney\'s riverside location and excellent transport links make it highly sought-after, with property values reflecting the area\'s desirability. Our bathroom fitting service in SW15 caters to discerning homeowners who expect premium quality and professional service. We specialize in installing high-end bathroom suites from brands like Duravit, Laufen, and Ideal Standard, ensuring every component meets exacting standards. Our approach includes detailed planning to optimize layouts, maximize storage, and enhance natural light. Putney properties range from riverside apartments requiring compact solutions to substantial Victorian houses where we can create spa-like master ensuites. We coordinate all trades including plumbers, electricians, and tilers, maintaining a single point of contact for stress-free project management. Our installations feature quality components such as thermostatic shower valves for consistent temperature, soft-close toilet seats, and chrome waste systems that resist corrosion. We provide comprehensive aftercare including manufacturer warranties and our own workmanship guarantee. Whether renovating a family bathroom or creating a luxury ensuite, we deliver results that enhance both lifestyle and property value in Putney.',
    localStreets: ['Putney High Street', 'Upper Richmond Road', 'Putney Hill'],
    landmarks: ['Putney Bridge', 'Wandsworth Park'],
    recentProjects: [
      { description: 'Premium bathroom suite with Duravit sanitaryware and chrome fixtures on Putney Hill', year: 2024 },
      { description: 'Riverside apartment bathroom with space-saving solutions near Putney Bridge', year: 2023 }
    ],
    lsiKeywords: ['premium sanitaryware', 'thermostatic valve', 'soft-close toilet', 'chrome waste', 'space-saving', 'compact bathroom', 'spa-like ensuite', 'natural light']
  },
  
  // Village Zone (South East London - Premium)
  {
    slug: 'luxury-bathrooms-dulwich-se21',
    name: 'Dulwich Village',
    postcode: 'SE21',
    zone: 'village',
    region: 'South East London',
    description: 'Luxury bathroom renovations in Dulwich Village. High-end bathroom installations for premium SE21 properties with exceptional finishes.',
    keywords: ['luxury bathrooms Dulwich', 'bathroom renovation SE21', 'Dulwich Village bathrooms', 'premium bathroom fitters SE21'],
    highlightService: 'Full Home Renovation',
    coordinates: { lat: 51.4447, lng: -0.0860 },
    nearby: ['East Dulwich', 'Crystal Palace', 'Streatham', 'West Norwood'],
    detailedDescription: 'Dulwich Village represents one of London\'s most prestigious residential areas, with tree-lined streets, substantial period properties, and a village atmosphere within the capital. Our bathroom renovation service in SE21 matches this exclusivity with bespoke designs, premium materials, and meticulous craftsmanship. We regularly work on listed buildings and properties within conservation areas, navigating planning requirements and respecting architectural heritage while incorporating modern conveniences. Our designs often feature natural materials like marble, limestone, and solid wood, combined with high-end fixtures from European manufacturers. Dulwich clients value discretion, reliability, and attention to detail, which we deliver through careful project management and experienced tradespeople. We understand that bathroom renovations in these substantial homes often form part of larger refurbishment projects, so we coordinate seamlessly with architects, interior designers, and other contractors. Our work includes everything from restoring original features to creating contemporary spa bathrooms with steam showers and chromotherapy lighting. Each project receives individual attention, ensuring results that enhance the character and value of these exceptional SE21 properties.',
    localStreets: ['Dulwich Village', 'Court Lane', 'Calton Avenue'],
    landmarks: ['Dulwich Picture Gallery', 'Dulwich Park'],
    recentProjects: [
      { description: 'Listed building bathroom restoration with period features and modern heating on Court Lane', year: 2024 },
      { description: 'Luxury master ensuite with marble and steam shower near Dulwich Park', year: 2023 }
    ],
    lsiKeywords: ['listed building', 'conservation area', 'period restoration', 'marble bathroom', 'limestone tiles', 'steam shower', 'chromotherapy', 'bespoke design']
  },
  {
    slug: 'bathroom-renovations-east-dulwich-se22',
    name: 'East Dulwich',
    postcode: 'SE22',
    zone: 'village',
    region: 'South East London',
    description: 'Expert bathroom renovations in East Dulwich. Modern bathroom designs, wet rooms, and luxury tiling for SE22 homes.',
    keywords: ['bathroom renovations East Dulwich', 'bathroom fitters SE22', 'wet room East Dulwich', 'luxury bathrooms SE22'],
    highlightService: 'Designer Wet Rooms',
    coordinates: { lat: 51.4536, lng: -0.0698 },
    nearby: ['Dulwich Village', 'Crystal Palace', 'West Norwood', 'Streatham'],
    detailedDescription: 'East Dulwich has become one of South London\'s most vibrant neighborhoods, combining village charm with urban sophistication. Our bathroom renovation service in SE22 reflects this character with contemporary designs that respect period architecture. We specialize in designer wet rooms that transform compact bathrooms into stylish, functional spaces perfect for busy families. Our wet room installations feature walk-in designs with frameless glass, linear drains positioned for optimal water flow, and carefully selected tiles that create visual interest while maintaining practicality. East Dulwich properties typically include Victorian and Edwardian terraces where we excel at maximizing limited space through clever layout planning and built-in storage. We source tiles and sanitaryware from independent suppliers as well as major brands, offering unique options that help your bathroom stand out. Our team understands the East Dulwich lifestyle, working efficiently to minimize disruption and maintaining excellent communication throughout the project. From initial design consultation through to final touches, we deliver bathroom renovations that combine style, functionality, and quality craftsmanship.',
    localStreets: ['Lordship Lane', 'East Dulwich Road', 'Grove Vale'],
    landmarks: ['Peckham Rye Park', 'Dulwich Library'],
    recentProjects: [
      { description: 'Designer wet room with frameless glass and geometric tiles on Lordship Lane', year: 2024 },
      { description: 'Victorian terrace bathroom with built-in storage near Peckham Rye', year: 2023 }
    ],
    lsiKeywords: ['designer wet room', 'frameless glass', 'linear drain', 'geometric tiles', 'built-in storage', 'walk-in shower', 'contemporary design', 'Victorian terrace']
  },
  {
    slug: 'bathroom-fitters-crystal-palace-se19',
    name: 'Crystal Palace',
    postcode: 'SE19',
    zone: 'village',
    region: 'South East London',
    description: 'Proven bathroom specialists in Crystal Palace. Complete bathroom renovations and structural building work for SE19 properties.',
    keywords: ['bathroom fitters Crystal Palace', 'bathroom renovation SE19', 'builders Crystal Palace', 'wet room SE19'],
    highlightService: 'Structural Building Repairs',
    coordinates: { lat: 51.4180, lng: -0.0710 },
    nearby: ['Dulwich Village', 'East Dulwich', 'Streatham', 'Thornton Heath'],
    detailedDescription: 'Crystal Palace offers stunning views, excellent community spirit, and diverse property types from Victorian terraces to modern apartments. Our building and bathroom renovation service in SE19 combines structural expertise with bathroom fitting skills, making us ideal for projects requiring both disciplines. We regularly undertake work including damp proofing, timber treatment, underpinning, and structural repairs alongside bathroom installations. This integrated approach ensures bathrooms are built on solid foundations with proper ventilation and moisture management. Crystal Palace properties often feature original details worth preserving, so we work carefully to retain character while upgrading functionality. Our bathroom designs balance period charm with modern efficiency, incorporating features like electric underfloor heating, LED lighting, and water-saving fixtures. We hold comprehensive insurance and work to current building regulations, providing certification for all structural and plumbing work. Crystal Palace residents appreciate our honest advice, transparent pricing, and commitment to quality workmanship. Whether addressing structural issues or simply updating a tired bathroom, we deliver reliable results that stand the test of time.',
    localStreets: ['Church Road', 'Westow Hill', 'Anerley Hill'],
    landmarks: ['Crystal Palace Park', 'Crystal Palace Triangle'],
    recentProjects: [
      { description: 'Bathroom renovation with structural damp repairs and underfloor heating on Church Road', year: 2024 },
      { description: 'Victorian bathroom restoration with period features near Crystal Palace Park', year: 2023 }
    ],
    lsiKeywords: ['structural repairs', 'damp proofing', 'timber treatment', 'underfloor heating', 'LED lighting', 'water-saving fixtures', 'building regulations', 'moisture management']
  },
  {
    slug: 'bathroom-specialists-west-norwood-se27',
    name: 'West Norwood',
    postcode: 'SE27',
    zone: 'village',
    region: 'South East London',
    description: 'Bathroom specialists serving West Norwood and SE27. Full bathroom renovations, luxury tiling, and modern wet room installations.',
    keywords: ['bathroom specialists West Norwood', 'bathroom renovation SE27', 'wet room West Norwood', 'bathroom fitters SE27'],
    highlightService: 'Complete Bathroom Transformations',
    coordinates: { lat: 51.4321, lng: -0.1033 },
    nearby: ['Dulwich Village', 'Crystal Palace', 'Streatham', 'Thornton Heath'],
    detailedDescription: 'West Norwood combines excellent transport links with more affordable property prices than neighboring Dulwich, making it popular with families and first-time buyers investing in their homes. Our bathroom renovation service in SE27 delivers complete transformations that maximize value and enhance daily living. We specialize in taking dated bathrooms and creating modern, functional spaces through careful planning and quality installation. Our transformations typically include removing old suites, re-plastering walls, installing new plumbing and electrics, fitting contemporary sanitaryware, and completing with stylish tiling. We offer design guidance to help clients choose layouts, colors, and fixtures that suit their taste and budget. West Norwood properties often have good-sized bathrooms allowing us to incorporate desirable features like separate baths and showers, double sinks, and generous storage. Our pricing is transparent with detailed quotations covering all aspects of the work, and we maintain this price unless clients request changes. We complete most bathroom renovations within 2-3 weeks, working efficiently while maintaining high standards. Our aftercare includes addressing any snagging items and providing maintenance advice to keep your new bathroom looking pristine.',
    localStreets: ['Norwood Road', 'Knights Hill', 'Salters Hill'],
    landmarks: ['West Norwood Cemetery', 'Brockwell Park'],
    recentProjects: [
      { description: 'Complete bathroom transformation with separate bath and shower on Norwood Road', year: 2024 },
      { description: 'Modern family bathroom with double sinks and storage near Brockwell Park', year: 2023 }
    ],
    lsiKeywords: ['complete transformation', 'separate bath and shower', 'double sinks', 'contemporary sanitaryware', 'transparent pricing', 'design guidance', 'family bathroom', 'modern fixtures']
  },
  
  // Foundation Zone (Core Local Volume)
  {
    slug: 'bathroom-renovations-croydon-cr0',
    name: 'Croydon',
    postcode: 'CR0',
    zone: 'foundation',
    region: 'South London',
    description: 'Professional bathroom renovations in Croydon. Serving CR0 with complete bathroom installations, wet rooms, and luxury tiling.',
    keywords: ['bathroom renovations Croydon', 'bathroom fitters CR0', 'wet room Croydon', 'bathroom specialists Croydon'],
    highlightService: 'Full Bathroom Renovations',
    coordinates: { lat: 51.3762, lng: -0.0982 },
    nearby: ['Thornton Heath', 'Sutton', 'Purley', 'Crystal Palace'],
    detailedDescription: 'Croydon offers diverse property types from modern apartments in the regenerated town center to substantial family homes in areas like Sanderstead and Selsdon. Our bathroom renovation service across CR0 adapts to this variety, delivering solutions that match each property type and budget. We understand that Croydon homeowners want quality work at fair prices, which we achieve through efficient project management, established supplier relationships, and experienced tradespeople who take pride in their work. Our full bathroom renovations include removing old suites, addressing any underlying issues like poor ventilation or outdated plumbing, installing new fixtures and fittings, and completing with professional tiling and decoration. We offer a range of sanitaryware options from budget-friendly to premium brands, helping clients make informed choices that balance cost and quality. Croydon\'s excellent transport links mean we can source materials efficiently and maintain reliable schedules. Our team includes Gas Safe registered plumbers, qualified electricians, and skilled tilers, ensuring all work meets current regulations. Whether renovating a compact apartment bathroom or creating a luxury family bathroom, we deliver professional results throughout Croydon.',
    localStreets: ['North End', 'George Street', 'Wellesley Road'],
    landmarks: ['Boxpark Croydon', 'Wandle Park'],
    recentProjects: [
      { description: 'Modern apartment bathroom with space-saving fixtures near Boxpark', year: 2024 },
      { description: 'Family bathroom renovation with separate bath and shower in Sanderstead', year: 2023 }
    ],
    lsiKeywords: ['budget-friendly', 'space-saving fixtures', 'ventilation', 'Gas Safe plumber', 'qualified electrician', 'professional tiling', 'fair pricing', 'apartment bathroom']
  },
  {
    slug: 'bathroom-specialists-thornton-heath-cr7',
    name: 'Thornton Heath',
    postcode: 'CR7',
    zone: 'foundation',
    region: 'South London',
    description: 'Headquarters area. Complete bathroom services in Thornton Heath with over 15 years of local expertise and 104+ five-star reviews.',
    keywords: ['bathroom specialists Thornton Heath', 'bathroom renovation CR7', 'bathroom fitters Thornton Heath', 'wet room CR7'],
    highlightService: 'Local Experts',
    coordinates: { lat: 51.3989, lng: -0.1003 },
    nearby: ['Croydon', 'Streatham', 'Crystal Palace', 'West Norwood'],
    detailedDescription: 'Thornton Heath is our home base where Fredi Builders was established over 15 years ago, building a reputation for honest, reliable bathroom renovations. Our deep roots in CR7 mean we understand local property types intimately, from Victorian terraces on residential streets to 1930s semi-detached homes and modern developments. We\'ve completed hundreds of bathroom projects in Thornton Heath, with many clients coming through personal recommendations from satisfied neighbors. Our local expertise includes knowing which properties have good water pressure, understanding typical plumbing configurations, and having established relationships with Croydon building control. We offer the full spectrum of bathroom services from simple suite replacements to complete renovations involving structural work, plumbing relocation, and electrical upgrades. Our 104+ five-star Checkatrade reviews reflect our commitment to quality workmanship, clear communication, and fair pricing. We treat every Thornton Heath home with the same care we\'d give our own, protecting floors and furnishings, cleaning up thoroughly each day, and ensuring complete customer satisfaction. As local specialists, we\'re available for aftercare and any future bathroom needs, building lasting relationships with our CR7 community.',
    localStreets: ['High Street', 'Brigstock Road', 'Parchmore Road'],
    landmarks: ['Thornton Heath Pond', 'Thornton Heath Recreation Ground'],
    recentProjects: [
      { description: 'Victorian terrace bathroom renovation with modern fixtures on Brigstock Road', year: 2024 },
      { description: 'Complete bathroom transformation with wet room near Thornton Heath Pond', year: 2023 }
    ],
    lsiKeywords: ['local expertise', 'Checkatrade reviews', 'suite replacement', 'plumbing relocation', 'electrical upgrades', 'building control', 'customer satisfaction', 'aftercare service']
  },
  {
    slug: 'bathroom-fitters-sutton-sm1',
    name: 'Sutton',
    postcode: 'SM1',
    zone: 'foundation',
    region: 'South London',
    description: 'Proven bathroom fitters in Sutton. Expert bathroom renovations, wet rooms, and luxury tiling for SM1 and SM5 areas.',
    keywords: ['bathroom fitters Sutton', 'bathroom renovation SM1', 'wet room Sutton', 'bathroom specialists SM1'],
    highlightService: 'Wet Room Installations',
    coordinates: { lat: 51.3618, lng: -0.1945 },
    nearby: ['Croydon', 'Leatherhead', 'Purley', 'Kingston upon Thames'],
    detailedDescription: 'Sutton combines suburban tranquility with excellent amenities and transport connections, making it popular with families seeking quality homes and good schools. Our bathroom fitting service across SM1 and SM5 focuses on creating practical, stylish bathrooms that meet family needs while adding property value. We specialize in wet room installations that offer accessibility benefits and contemporary aesthetics, particularly valuable for ground-floor bathrooms and properties with elderly or disabled residents. Our wet rooms feature proper tanking to British Standards, efficient drainage systems, slip-resistant tiles, and thoughtful design that maximizes space. Sutton properties typically include 1930s semi-detached homes, post-war developments, and modern builds, each requiring different approaches. We adapt our service to suit each property type, whether working with solid walls and original plumbing in older homes or optimizing layouts in newer properties. Our team includes specialists in accessible bathroom design, able to incorporate grab rails, level access showers, and other features while maintaining attractive aesthetics. Sutton clients appreciate our professional approach, reliable timekeeping, and ability to work around family schedules with minimal disruption.',
    localStreets: ['High Street', 'Cheam Road', 'Throwley Way'],
    landmarks: ['Sutton Green', 'Manor Park'],
    recentProjects: [
      { description: 'Accessible wet room with level access and grab rails on Cheam Road', year: 2024 },
      { description: 'Family bathroom renovation with separate bath and shower near Manor Park', year: 2023 }
    ],
    lsiKeywords: ['accessible bathroom', 'level access', 'grab rails', 'slip-resistant tiles', 'British Standards', 'drainage system', 'family bathroom', 'property value']
  },
  {
    slug: 'bathroom-renovations-purley-cr8',
    name: 'Purley',
    postcode: 'CR8',
    zone: 'foundation',
    region: 'South London',
    description: 'Expert bathroom specialists serving Purley and CR8. Full bathroom renovations, luxury tiling, and modern wet room installations.',
    keywords: ['bathroom renovations Purley', 'bathroom fitters CR8', 'wet room Purley', 'luxury bathrooms CR8'],
    highlightService: 'Luxury Tiling Services',
    coordinates: { lat: 51.3369, lng: -0.1132 },
    nearby: ['Croydon', 'Sutton', 'Leatherhead', 'Thornton Heath'],
    detailedDescription: 'Purley offers a pleasant suburban environment with a mix of property types from 1930s family homes to modern developments, all benefiting from professional bathroom renovation. Our service in CR8 emphasizes luxury tiling that transforms ordinary bathrooms into stunning spaces. We work with an extensive range of tiles including large-format porcelain, natural stone, decorative mosaics, and contemporary metro tiles, helping clients select options that suit their style and budget. Our tiling expertise includes proper surface preparation, precise cutting and laying, waterproof grouting, and attention to details like symmetrical layouts and neat corners. Purley bathrooms often have good proportions allowing us to create feature walls, incorporate contrasting tiles, and use different formats to define zones. We combine this tiling excellence with quality bathroom fitting including modern sanitaryware, efficient showers, and practical storage solutions. Our project management ensures smooth coordination between tiling, plumbing, and electrical work, with clear timelines and regular communication. Purley residents value our professional approach, quality materials, and commitment to delivering bathrooms that look impressive and function perfectly for years to come.',
    localStreets: ['Brighton Road', 'Russell Hill Road', 'Purley Oaks Road'],
    landmarks: ['Purley Cross', 'Riddlesdown Common'],
    recentProjects: [
      { description: 'Luxury bathroom with large-format porcelain tiles and feature wall on Brighton Road', year: 2024 },
      { description: 'Modern bathroom renovation with metro tiles and rainfall shower near Purley Cross', year: 2023 }
    ],
    lsiKeywords: ['large-format porcelain', 'feature wall', 'metro tiles', 'decorative mosaic', 'waterproof grouting', 'symmetrical layout', 'rainfall shower', 'quality materials']
  }
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug)
}

export function getLocationsByZone(zone: Location['zone']): Location[] {
  return locations.filter(loc => loc.zone === zone)
}
