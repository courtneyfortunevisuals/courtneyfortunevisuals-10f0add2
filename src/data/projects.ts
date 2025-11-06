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
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2022,
    client: "courtneyfortune visuals",
    duration: "3 months",
    role: "Brand Designer",
    tags: ["Brand Identity", "Logo Design", "Corporate Design", "Visual Systems"],
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
      "This project involved a complete overhaul of a company's design system, focusing on creating a more consistent visual language and improving development efficiency.",
      "I conducted an audit of the existing design components, identified inconsistencies, and created a new system that balanced aesthetic quality with technical implementation requirements.",
      "The result was a cohesive design system with well-documented components, reducing design inconsistencies and development time for new features."
    ],
    coverImage: "/lovable-uploads/sprout-01.jpg",
    year: 2023,
    client: "Sprout Performance Partners",
    duration: "3 months",
    role: "Digital Designer",
    tags: ["Design System", "UI/UX", "Component Library", "Documentation"],
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
    title: "CPT Events Campaign",
    summary: "A city-wide campaign to promote local events, improving community engagement and attendance.",
    description: [
      "This project involved creating a vibrant and engaging campaign for Cape Town's event series, aimed at boosting ticket sales and public participation.",
      "I designed a range of promotional materials, including digital ads, social media content, and public transport branding, to create a cohesive and exciting visual identity for the campaign.",
      "The campaign resulted in a 40% increase in event attendance and significantly higher online engagement, successfully connecting the city's residents with local cultural events."
    ],
    coverImage: "/lovable-uploads/myciti-01.png",
    client: "MyCiti",
    duration: "3 months",
    role: "Digital Designer",
    tags: ["Campaign Design", "UI/UX", "Event Promotion", "Branding"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
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
    title: "Travelstart Generic Creative",
    summary: "Development of a comprehensive brand identity system for a tech startup.",
    description: [
      "This project involved creating a comprehensive brand identity system for a tech startup entering a competitive market.",
      "I developed a distinctive visual language including logo, color palette, typography, iconography, and brand guidelines that positioned the company as innovative and trustworthy.",
      "The brand identity was applied across digital and physical touchpoints, creating a cohesive and memorable brand experience that helped the company secure additional funding."
    ],
    coverImage: "/lovable-uploads/travelstart-01.png",
    year: 2022,
    client: "Travelstart",
    duration: "2 months",
    role: "Digital Designer",
    tags: ["Branding", "Logo Design", "Visual Identity", "Guidelines"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
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
    title: "Best in the wet Campaign",
    summary: "User experience design for a health and wellness mobile application.",
    description: [
      "I designed the user experience for a health and wellness mobile application aimed at helping users build healthy habits and track their progress.",
      "The process included extensive user research, persona development, user flow mapping, wireframing, and high-fidelity prototyping, all validated through multiple rounds of user testing.",
      "The app launched to positive reviews, with users specifically praising its intuitive interface and helpful features that made habit tracking enjoyable rather than tedious."
    ],
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2023,
    client: "Tiger Wheel & Tyre",
    duration: "5 months",
    role: "Digital Designer",
    tags: ["Mobile App", "UX Design", "Health & Wellness", "User Testing"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    password: "portfolio",
    gallery: {
      images: [
        { src: "/lovable-uploads/5f313151-6d8b-41ae-be13-1c3de0ff70ed.png", alt: "Tiger Wheel & Tyre dynamic creative presentation" },
        { src: "/lovable-uploads/8c522066-cc10-428a-b251-dace7763b375.png", alt: "Tiger Wheel & Tyre Best in the Wet campaign materials and web layouts" },
      ],
      videos: [
        { title: "Campaign Demo", embedUrl: "https://player.vimeo.com/video/1121966686?autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 6,
    title: "FNB Display Banners",
    summary: "Digital banner campaign for FNB's Clicks Baby Club partnership, promoting cashback rewards.",
    description: [
      "This project involved creating a comprehensive digital banner campaign for FNB's partnership with Clicks Baby Club, aimed at promoting cashback rewards for customers.",
      "I developed various banner formats and sizes to accommodate different digital platforms and touchpoints, ensuring consistent messaging across all channels.",
      "The campaign successfully communicated the value proposition of the FNB-Clicks partnership, resulting in increased customer engagement and sign-ups for the rewards program."
    ],
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2023,
    client: "FNB (First National Bank)",
    duration: "2 months",
    role: "Digital Designer",
    tags: ["Digital Banners", "Campaign Design", "Financial Services", "Partnership Marketing"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    password: "portfolio",
    gallery: {
      images: [
        { src: "/lovable-uploads/ba13530b-aa2c-4b3c-8f6f-3000043cebd3.png", alt: "FNB Display Banners presentation cover" },
        { src: "/lovable-uploads/03406a68-9019-4e70-af39-e2adc325540f.png", alt: "FNB Clicks Baby Club campaign banners showcase" },
        { src: "/lovable-uploads/0db34602-1dd2-4400-80b8-df6fcb895ae8.png", alt: "FNB campaign banners in browser mockup" },
        { src: "/lovable-uploads/110d3c4d-408d-4c8e-99ed-58dd85166707.png", alt: "FNB FIFA World Cup campaign materials with FEEL IT NOW BE THERE messaging" },
        { src: "/lovable-uploads/1986da5f-6241-41ed-a090-6623cbaabdd9.png", alt: "FNB FIFA World Cup campaign digital layout and banner variations" },
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
    summary: "Dynamic social media advertising campaigns for Fabiani menswear and Sportscene sneaker collections.",
    description: [
      "This project involved creating engaging social media advertisements for premium menswear brand Fabiani and Sportscene's sneaker collections.",
      "I developed sophisticated ad campaigns showcasing Fabiani's refined menswear with the tagline 'Sophisticated style for the modern gentleman', featuring lifestyle photography and elegant product displays.",
      "For Sportscene, I created high-impact sneaker campaigns including 'The Drop' and 'Kings of Sneakerwear' series, emphasizing Nike's men's range with bold, product-focused visuals that elevated every move."
    ],
    coverImage: "/lovable-uploads/1-01.png",
    year: 2022,
    client: "Fabiani & Sportscene",
    duration: "6 months",
    role: "Digital Designer",
    tags: ["Social Media", "Digital Advertising", "Fashion", "Product Photography"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    password: "portfolio",
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
    tags: ["Mobile App", "Banking", "UI Design", "Fintech"],
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
    title: "3d Swirl Project",
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
    tags: ["3D Animation", "Motion Graphics", "Particle Systems", "Visual Effects"],
    technologies: ["Cinema 4D", "After Effects", "Blender", "Octane Render"],
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