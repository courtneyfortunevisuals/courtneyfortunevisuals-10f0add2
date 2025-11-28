export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string[];
  coverImage: string;
  year?: number;
  client: string;
  duration?: string;
  role: string;
  tags: string[];
  technologies: string[];
  isPasswordProtected: boolean;
  password?: string;
  gallery: {
    images: { src: string; alt: string }[];
    videos: { title: string; embedUrl: string }[];
  };
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Character Design",
    summary: "Development of a complete brand identity and visual system for a consulting firm.",
    description: [
      "This project involved creating a sophisticated brand identity for a management consulting firm looking to establish credibility in a competitive market.",
      "I developed a comprehensive visual identity system including logo design, typography, color schemes, business collateral, and digital brand guidelines.",
      "The new brand identity helped the firm secure three major corporate clients within the first quarter after launch, establishing their market presence effectively."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    year: 2022,
    client: "courtneyfortune visuals",
    duration: "3 months",
    role: "Brand Designer",
    tags: [],
    technologies: ["Illustrator", "InDesign", "Photoshop", "After Effects"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/c2140a6b-f655-4357-868a-fd0476cb80ec.png", alt: "Corporate logo and brand guidelines" },
        { src: "/lovable-uploads/ced288ce-0393-44b4-ba76-2c8202b5f35c.png", alt: "Business card and stationery design" },
        { src: "/lovable-uploads/3825c04d-42a2-4867-96d0-fb081a1fc459.png", alt: "Brand application mockups" },
      ],
      videos: [
        { title: "Brand Reveal", embedUrl: "https://player.vimeo.com/video/1097345492?h=abda5417c4&autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 2,
    title: "Internal Rebranding",
    summary: "A comprehensive redesign of a company's design system, improving consistency and efficiency.",
    description: [
      "Tasked with revitalizing a digital marketing company's internal brand, I transformed a fragmented system into a cohesive visual identity with purpose and clarity. By rebuilding design foundations—color, typography, components, templates, and documentation—I created a brand ecosystem that works seamlessly for the people who use it every day. The result: stronger storytelling, smoother workflows, and a brand that finally reflects the company's momentum.",
      "I conducted an audit of the existing design components, identified inconsistencies, and created a new system that balanced aesthetic quality with technical implementation requirements.",
      "The result was a cohesive design system with well-documented components, reducing design inconsistencies and development time for new features."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    year: 2023,
    client: "Sprout Performance Partners",
    duration: "3 months",
    role: "Digital Designer",
    tags: [],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/sprout-01.jpg", alt: "SPROUT Performance Partners brand logo designs" },
        { src: "/lovable-uploads/sprout-02.jpg", alt: "SPROUT branding guidelines book cover" },
        { src: "/lovable-uploads/sprout-03.jpg", alt: "SPROUT brand color palette and guidelines" },
        { src: "/lovable-uploads/sprout-04.jpg", alt: "SPROUT website design on laptop mockup" },
        { src: "/lovable-uploads/sprout-05.jpg", alt: "SPROUT coronavirus prevention and wellness poster" },
        { src: "/lovable-uploads/sprout-06.jpg", alt: "SPROUT illustration guidelines and data strategy icons" },
        { src: "/lovable-uploads/sprout-07.jpg", alt: "SPROUT email signature template design" },
        { src: "/lovable-uploads/sprout-08.jpg", alt: "SPROUT stationery and business card designs" },
        { src: "/lovable-uploads/sprout-09.jpg", alt: "SPROUT social media thank you post design" },
      ],
      videos: []
    }
  },
  {
    id: 3,
    title: "CPT EVENTS CAMPAIGN",
    summary: "A city-wide promotional campaign designed to increase awareness, attendance, and community engagement for Cape Town's local events.\n\nPositioned as the lead digital designer, I developed a cohesive visual identity and a suite of marketing assets that brought energy, clarity, and consistency to the campaign across multiple touchpoints.",
    description: [
      "This project focused on creating a vibrant, accessible, and engaging creative direction for Cape Town's event series. The goal was to boost public participation by delivering clear messaging, memorable visuals, and a unified brand experience across digital and physical platforms.",
      "I produced a full range of promotional materials, including:",
      "• Digital ads and social media graphics",
      "• Web banners and responsive digital assets",
      "Through thoughtful design decisions and user-centered execution, the campaign strengthened visibility, expanded reach, and supported the city's initiative to connect residents with local cultural activities."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    client: "MyCiti",
    duration: "3 months",
    role: "Digital Designer",
    tags: [],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    gallery: {
      images: [
        { src: "/lovable-uploads/myciti-01.png", alt: "MyCiTi CPT Events campaign website design on laptop" },
        { src: "/lovable-uploads/myciti-02.png", alt: "MyCiTi CPT Events campaign banner designs and materials" },
        { src: "/lovable-uploads/myciti-03.png", alt: "MyCiTi CPT Events campaign website layout in browser view" },
      ],
      videos: [
        { title: "Campaign Overview", embedUrl: "https://player.vimeo.com/video/1121966796?autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 4,
    title: "TRAVELSTART ANIMATED DIGITAL BANNERS",
    summary: "A collection of animated digital marketing banners created for a tech startup, designed to strengthen online visibility and drive higher engagement across web and social advertising platforms.",
    description: [
      "In this project, I developed and animated a full suite of digital banner ads for Travelstart's marketing campaigns. My focus was on transforming key brand elements into motion—delivering creative that was visually consistent, lightweight, and optimized for performance across multiple ad networks.",
      "I handled the complete production process, including:",
      "• Designing static and responsive banner layouts",
      "• Creating motion concepts that highlight campaign messaging",
      "• Animating banners in multiple dimensions and formats",
      "• Ensuring smooth transitions and eye-catching movement",
      "• Compression and technical optimization for HTML5 display standards",
      "• Preparing deliverables for handoff to the marketing and media teams",
      "The result was a cohesive set of animated assets that elevated campaign impact, improved click-through rates, and delivered a polished motion presence aligned with the brand's visual identity."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    year: 2022,
    client: "Travelstart",
    duration: "2 months",
    role: "Digital Designer",
    tags: [],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    gallery: {
      images: [
        { src: "/lovable-uploads/travelstart-01.png", alt: "TravelStart Creative Concepts presentation on laptop mockup" },
        { src: "/lovable-uploads/travelstart-02.png", alt: "TravelStart campaign frames showing flight specials and creative concepts" },
        { src: "/lovable-uploads/travelstart-03.png", alt: "TravelStart digital banner designs and website layout" },
      ],
      videos: [
        { title: "Brand Animation", embedUrl: "https://player.vimeo.com/video/1097345492?h=abda5417c4&autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 5,
    title: "Tiger Wheel & Tyre",
    summary: "Comprehensive animated digital banner design, interactive display ads, and supporting marketing materials created for one of South Africa's leading tyre retailers.",
    description: [
      "Tiger Wheel & Tyre is one of South Africa's most recognized automotive brands. This project involved creating a full suite of animated digital banners developed for both prospecting and remarketing campaigns, ensuring strong reach at every stage of the customer journey.",
      "The work included designing dynamic HTML5 banner ads, motion-driven promotional materials, and adaptable digital layouts optimized across Google Display Network, social platforms, and in-store digital screens.",
      "Special attention was placed on maintaining brand consistency while introducing motion, ensuring all animations were performant, lightweight, and tailored to the specific objectives of each campaign—prospecting banners focused on awareness, while remarketing banners were optimized for conversions."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    client: "Tiger Wheel & Tyre",
    role: "Graphic Designer",
    tags: [],
    technologies: ["Adobe Creative Suite"],
    isPasswordProtected: true,
    gallery: {
      images: [
        { src: "/lovable-uploads/tiger-wheel-01.png", alt: "Tiger Wheel & Tyre dynamic creative storyboard on laptop mockup" },
        { src: "/lovable-uploads/tiger-wheel-02.png", alt: "Tiger Wheel & Tyre Google Web Designer ad for Best in Wet campaign" },
        { src: "/lovable-uploads/tiger-wheel-03.png", alt: "Tiger Wheel & Tyre web banner layouts and placements" },
        { src: "/lovable-uploads/tiger-wheel-04.png", alt: "Tiger Wheel & Tyre vertical banner ad variations" },
        { src: "/lovable-uploads/tiger-wheel-05.png", alt: "Tiger Wheel & Tyre multi-format banner ads" },
        { src: "/lovable-uploads/tiger-wheel-06.png", alt: "Tiger Wheel & Tyre web page with integrated display ads" },
      ],
      videos: [
        { title: "Campaign Demo", embedUrl: "https://player.vimeo.com/video/1121966686?autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 6,
    title: "FNB Display Banners",
    summary: "Digital advertising campaign for First National Bank promoting financial services.",
    description: [
      "This project involved producing a complete suite of HTML5 animated banners for a joint campaign between First National Bank and VISA.",
      "The animated banners were crafted to elevate brand visibility across digital platforms by combining seamless motion, clean layouts, and unified FNB + VISA branding. Each banner highlighted campaign-specific messaging while remaining dynamic, lightweight, and optimized for high-performance ad placements.",
      "Deliverables were adapted for multiple screen sizes and formats, maintaining consistent visual identity across both brands. The campaign included banners for prospecting (awareness-focused) and remarketing (conversion-focused) to effectively support users at every stage of the funnel."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    client: "First National Bank",
    role: "Digital Designer",
    tags: [],
    technologies: ["Adobe Photoshop", "Adobe Illustrator"],
    isPasswordProtected: true,
    gallery: {
      images: [
        { src: "/lovable-uploads/fnb-01.png", alt: "FNB and VISA Display Banners presentation cover on laptop" },
        { src: "/lovable-uploads/fnb-02.png", alt: "FNB Clicks Baby Club cashback campaign banner variations in browser" },
        { src: "/lovable-uploads/fnb-03.png", alt: "FNB Clicks campaign banners showing multiple creative formats" },
        { src: "/lovable-uploads/fnb-04.png", alt: "FNB VISA FIFA World Cup Qatar 2022 campaign creative with FEEL IT NOW BE THERE tagline" },
        { src: "/lovable-uploads/fnb-05.png", alt: "FNB DISKI FLAVA LIVES HERE campaign banners in browser layout" },
      ],
      videos: [
        { title: "FNB Display Banner Animation", embedUrl: "https://player.vimeo.com/video/1121937982?autoplay=1&muted=1" },
        { title: "FNB Campaign Showcase", embedUrl: "https://player.vimeo.com/video/1121943590?autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 7,
    title: "Social Media Ads",
    summary: "Creative advertising content for various social media platforms and brands.",
    description: [
      "This collection showcases a diverse range of social media advertising campaigns created for multiple brands across different industries.",
      "Each campaign was tailored to the unique characteristics of specific social media platforms, optimizing visual design and messaging for maximum engagement.",
      "The work demonstrates versatility in adapting brand voices and creative concepts for the fast-paced digital social media environment.",
      "Special focus was placed on creating scroll-stopping visuals that drive user interaction while maintaining brand consistency and marketing objectives."
    ],
    coverImage: "/lovable-uploads/project-cover.png",
    client: "Various Clients",
    role: "Social Media Designer",
    tags: [],
    technologies: ["Adobe Photoshop", "Canva", "Figma"],
    year: 2023,
    isPasswordProtected: true,
    gallery: {
      images: [
        { src: "/lovable-uploads/Project_8_800x800-01.jpg", alt: "Fabiani sophisticated menswear ad - Dress with Distinction" },
        { src: "/lovable-uploads/Project_8_800x800-02.jpg", alt: "Fabiani elegant style social media advertisement carousel" },
        { src: "/lovable-uploads/Project_8_800x800-03.jpg", alt: "Fabiani sophisticated menswear fashion campaign" },
        { src: "/lovable-uploads/Project_8_800x800-04.jpg", alt: "Sportscene The Drop sneaker campaign" },
        { src: "/lovable-uploads/Project_8_800x800-05.jpg", alt: "Sportscene Nike men's range advertisement" },
        { src: "/lovable-uploads/Project_8_800x800-06.jpg", alt: "Sportscene Kings of Sneakerwear campaign" },
        { src: "/lovable-uploads/Project_8_800x800-07.jpg", alt: "FNB Private Banking travel benefits campaign" },
        { src: "/lovable-uploads/Project_8_800x800-08.jpg", alt: "FNB Virtual Card digital payment solution ad" },
        { src: "/lovable-uploads/Project_8_800x800-09.jpg", alt: "FNB Speedee App contactless payment solution" },
        { src: "/lovable-uploads/Project_8_800x800-10.jpg", alt: "FNB Connect deal smart TV promotion" },
        { src: "/lovable-uploads/Project_8_800x800-11.jpg", alt: "FNB Virtual Card purchase protection promotion" },
        { src: "/lovable-uploads/Project_8_800x800-12.jpg", alt: "FNB retirement annuity savings campaign" },
      ],
      videos: []
    }
  },
  {
    id: 10,
    title: "Pineapple in Pool Filter",
    summary: "User interface design for a modern mobile banking application focused on millennials.",
    description: [
      "This project involved designing a user-friendly mobile banking application specifically tailored for millennial users who prioritize convenience and modern design.",
      "I created an intuitive interface that simplified complex banking operations while maintaining security standards and regulatory compliance requirements.",
      "The app achieved a 4.8-star rating in app stores and increased user engagement by 60%, with particular success among the target demographic of young professionals."
    ],
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2023,
    client: "courtneyfortune visuals",
    duration: "6 months",
    role: "Mobile UI Designer",
    tags: [],
    technologies: ["Sketch", "Principle", "Zeplin", "Photoshop"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/38cb9a77-a753-4600-9eee-5d737d925b7d.png", alt: "Pineapple with white sunglasses floating in blue pool water" },
        { src: "/lovable-uploads/6fd088eb-23b4-443c-93c6-fe7246f7c746.png", alt: "Pineapple with stylish sunglasses in swimming pool setting" },
        { src: "/lovable-uploads/4b820151-e83a-4abc-a1ba-38d4bd12e1bb.png", alt: "Cool pineapple with sunglasses filter effect in pool" },
      ],
      videos: [
        { title: "App Walkthrough", embedUrl: "https://player.vimeo.com/video/1117821971?autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 11,
    title: "3D Swirl Demo",
    summary: "Dynamic 3D visualization and motion graphics project featuring organic swirl animations.",
    description: [
      "This project focused on creating dynamic 3D swirl animations and organic motion graphics for various digital applications.",
      "I developed fluid particle systems and complex swirl patterns using advanced 3D modeling and animation techniques to create visually striking content.",
      "The project resulted in a library of reusable 3D assets and animation sequences that enhanced visual storytelling across multiple campaigns."
    ],
    coverImage: "/lovable-uploads/1-01.png",
    year: 2023,
    client: "courtneyfortune visuals",
    duration: "4 months",
    role: "3D Artist & Motion Designer",
    tags: [],
    technologies: ["Illustrator", "Photoshop", "Google Web Designer"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/bottle_800x800-01.jpg", alt: "3D red water bottle with color customization interface" },
        { src: "/lovable-uploads/bottle_800x800-02.jpg", alt: "Interactive 3D blue bottle product visualization with color picker" },
        { src: "/lovable-uploads/bottle_800x800-03.jpg", alt: "3D black bottle render showcasing durability features" },
      ],
      videos: [
        { title: "3D Swirl Animation Demo", embedUrl: "https://player.vimeo.com/video/1123694957?autoplay=1&muted=1" },
      ]
    }
  }
];

// Export only the first 7 projects (updated to include the new project)
export const projects: Project[] = allProjects.slice(0, 7);

// Export all projects for use when showing older projects
export { allProjects };