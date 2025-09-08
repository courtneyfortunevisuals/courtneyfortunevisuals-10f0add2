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
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2023,
    client: "Sprout Performance Partners",
    duration: "3 months",
    role: "Digital Designer",
    tags: ["Design System", "UI/UX", "Component Library", "Documentation"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/a657b10b-3bc7-4660-86de-6a3a8d9dbddb.png", alt: "SPROUT Performance Partners website design on laptop" },
        { src: "/lovable-uploads/8c265297-506f-4a40-95b4-90c526aba72e.png", alt: "SPROUT business card design layout" },
        { src: "/lovable-uploads/d8ba7230-a48a-4c82-a580-e49b04fa8ceb.png", alt: "SPROUT branding and illustration guidelines" },
        { src: "/lovable-uploads/d79731f4-a6b5-4257-85a7-87b2c3e769a5.png", alt: "SPROUT email signature design template" },
        { src: "/lovable-uploads/1c5791a3-7ecc-4793-8da3-472479acc525.png", alt: "SPROUT coronavirus prevention poster design" },
        { src: "/lovable-uploads/e9478d69-7934-41cc-8c58-14e830ad6c7c.png", alt: "SPROUT social media thank you post design" },
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
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    client: "MyCiti",
    duration: "3 months",
    role: "Digital Designer",
    tags: ["Campaign Design", "UI/UX", "Event Promotion", "Branding"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/7c7ddda3-cd83-4dcf-af6f-22d6a7b36b25.png", alt: "MyCiTi campaign promotional banners on laptop showing plan, package and online options" },
        { src: "/lovable-uploads/41df6239-81e5-4b67-8cf5-995a66ed58b1.png", alt: "MyCiTi campaign materials featuring events, planning and transport messaging" },
        { src: "/lovable-uploads/5eefbc7d-2b97-4ac8-ab8a-302519108566.png", alt: "MyCiTi website layout with campaign banners in browser view" },
        { src: "/lovable-uploads/6f1e7d95-c695-4496-8eb4-e63eef9fbabe.png", alt: "MyCiTi event promotion digital assets with consistent branding" },
        { src: "/lovable-uploads/4784948b-4111-4638-bdce-7c53c6e48fea.png", alt: "MyCiTi event capital campaign materials with South African flag imagery" },
        { src: "/lovable-uploads/581372e2-a0b1-4ec9-882b-370dfc42130a.png", alt: "MyCiTi event capital website mockup in browser" },
        { src: "/lovable-uploads/21ad7830-0942-4540-b974-71aab8be6042.png", alt: "MyCiTi big events campaign promotional materials with people imagery" },
        { src: "/lovable-uploads/0adb63e7-82fc-426d-9435-e247ec0d41ae.png", alt: "MyCiTi big events website integration in browser view" },
      ],
      videos: [
        { title: "Campaign Overview", embedUrl: "https://player.vimeo.com/video/1097596963?h=c10a61cbd4&autoplay=1&muted=1" },
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
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2022,
    client: "Travelstart",
    duration: "2 months",
    role: "Digital Designer",
    tags: ["Branding", "Logo Design", "Visual Identity", "Guidelines"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/2123648b-9082-45f7-a187-94c1e71f8645.png", alt: "TravelStart website homepage design" },
        { src: "/lovable-uploads/da93db3e-ded6-4882-bdae-dd295ed2fd19.png", alt: "TravelStart brand identity system and marketing materials" },
        { src: "/lovable-uploads/035c5674-5531-4a79-9b27-cff8c6131bfa.png", alt: "TravelStart website layout and banner designs" },
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
        { title: "Campaign Demo", embedUrl: "https://player.vimeo.com/video/1097621059?h=dd0884ae32&autoplay=1&muted=1" },
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
        { title: "Campaign Overview", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      ]
    }
  },
  {
    id: 7,
    title: "Social Media Ads",
    summary: "Augmented reality experience for visualizing furniture products in real-world spaces.",
    description: [
      "I developed an augmented reality experience that allows customers to visualize furniture products in their own homes before making a purchase.",
      "The project involved 3D modeling, texture creation, and implementing AR functionality that detected floor surfaces and placed virtual furniture with accurate scaling and lighting.",
      "This solution increased customer confidence in online purchases, resulting in a 28% reduction in product returns and a 15% increase in average order value."
    ],
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2022,
    client: "Various Campaigns",
    duration: "6 months",
    role: "Digital Designer",
    tags: ["Augmented Reality", "3D Modeling", "E-Commerce", "Mobile Experience"],
    technologies: ["Illustrator", "Photoshop", "InDesign", "Google Web Designer"],
    isPasswordProtected: true,
    password: "portfolio",
    gallery: {
      images: [
        { src: "/lovable-uploads/471b42a8-db39-4bc8-a023-df081145cd84.png", alt: "Social media ad mockup with 1:1 square format" },
        { src: "/lovable-uploads/adb9ffca-ecf0-4602-aa42-bca8bbed97e5.png", alt: "Facebook ad template design layout" },
        { src: "/lovable-uploads/e644d7d5-2ef6-4c83-afa4-ba293cc17e8f.png", alt: "Widescreen social media ad format 16:9" },
      ],
      videos: [
        { title: "AR Demo", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "User Experience", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      ]
    }
  },
  {
    id: 8,
    title: "Case Study",
    summary: "Complete redesign of an online marketplace platform to improve user experience and conversion rates.",
    description: [
      "This project involved a comprehensive redesign of an established e-commerce platform that was struggling with low conversion rates and poor user experience.",
      "I conducted extensive user research, analyzed conversion funnels, and redesigned the entire shopping experience from product discovery to checkout completion.",
      "The new design resulted in a 45% increase in conversion rates and a 30% reduction in cart abandonment, significantly improving the platform's performance."
    ],
    coverImage: "/lovable-uploads/f5823f61-a999-47ce-86bc-e32effc51b60.png",
    year: 2023,
    client: "Do Better Skincare Collection",
    duration: "4 months",
    role: "UX/UI Designer",
    tags: ["E-Commerce", "Conversion Optimization", "User Research", "UI/UX"],
    technologies: ["Figma", "Photoshop", "Illustrator", "Principle"],
    isPasswordProtected: false,
    gallery: {
      images: [
        { src: "/lovable-uploads/984cb165-5189-4c02-992e-5d2a3472c68d.png", alt: "E-commerce platform homepage redesign" },
        { src: "/lovable-uploads/a725b2f6-31ff-4b30-868e-ca7c949d526f.png", alt: "Product listing page wireframes" },
        { src: "/lovable-uploads/b0d40e41-39be-4613-ba38-7b7da045cd8a.png", alt: "Shopping cart and checkout flow" },
      ],
      videos: [
        { title: "Platform Demo", embedUrl: "https://player.vimeo.com/video/1097596963?h=c10a61cbd4&autoplay=1&muted=1" },
      ]
    }
  },
  {
    id: 9,
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
        { src: "/lovable-uploads/28028989-16e5-4f74-bd64-1bc718812927.png", alt: "Mobile banking app interface screens" },
        { src: "/lovable-uploads/2947db43-c761-4459-ac95-49bbbbfff68c.png", alt: "App onboarding flow design" },
        { src: "/lovable-uploads/30fc1048-00b3-456f-83df-8d9ef1ab39ee.png", alt: "Banking dashboard and transaction views" },
      ],
      videos: [
        { title: "App Walkthrough", embedUrl: "https://player.vimeo.com/video/1097621059?h=dd0884ae32&autoplay=1&muted=1" },
      ]
    }
  }
];

// Export only the first 6 projects, hiding the last 3
export const projects: Project[] = allProjects.slice(0, 6);

// Export all projects for use when showing older projects
export { allProjects };
