
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">About Me</h1>
              
              <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                <p>
                  A highly innovative and meticulous Digital Designer with over six
                  years of experience in the marketing and advertising industry.
                  Skilled in creating unique solutions for both print and digital media,
                  specializing in branding, layout design, and front-end web
                  development. Proven success in driving engagement through
                  compelling visual storytelling and smooth project execution.
                </p>
                
                <p>
                  Acclaimed for excellent teamwork, time management, and
                  communication skills, consistently delivering superior work that
                  surpasses client expectations. Certified in Graphic Design and Web
                  Development, and holder of the esteemed Meta Front-End
                  Developer Certificate, demonstrating expertise in advanced web
                  technologies. Dedicated to staying ahead of design trends and
                  using skills to enhance brand presence and achieve business goals.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <a 
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:a376e1ad-dd2f-4c3b-ab8d-bb5c15b169d0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Download Resume as PDF
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.linkedin.com/in/courtney-fortune-67094475/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/lovable-uploads/919ec45d-c8ec-4483-8a1e-a3cacb5c7aaa.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-12 lg:py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Skills & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Heathfield High School</div>
                  <div className="text-muted-foreground">Matric</div>
                </li>
                <li>
                  <div className="font-medium">Rosebank College</div>
                  <div className="text-muted-foreground">Diploma in Graphic Design and Web Development</div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span>Capstone Project: "Meta Front-End Developer Professional Certificate"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span>Relevant Coursework: Google Start the UX Design Process: Empathize, Define, and Ideate</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Personal qualities</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                  <span className="text-muted-foreground">Creative and innovative thinker with a keen eye for aesthetics.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                  <span className="text-muted-foreground">Strong communicator, capable of effectively articulating design concepts.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                  <span className="text-muted-foreground">Collaborative team player with a positive attitude.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                  <span className="text-muted-foreground">Passionate about staying current with technology and design trends.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Experience</h3>
              
              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Designer & Studio Specialist</h4>
                  <div className="text-muted-foreground mb-4">Sprout Performance Partners, CPT, 2016-2024</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Oversee the execution of HTML5 digital banner roll-outs utilizing Google Web Designer, ensuring alignment with brand standards and project timelines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Manage the creation and updates of internal brand materials to maintain a cohesive and professional company image.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Design, develop, and update company email signatures, ensuring they are consistent with brand guidelines and incorporate the latest design trends and best practices.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Create engaging social media creatives, maintaining consistency with the brand's visual identity and effectively driving engagement across platforms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Develop marketing creatives for Google Marketing Platform, aligning with campaign objectives and maximizing impact through targeted digital advertising strategies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Conduct demos and test dynamic remarketing campaigns to enhance personalization and improve the effectiveness of advertising efforts.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Junior Graphic Designer</h4>
                  <div className="text-muted-foreground mb-4">Caravan Publications, CPT, July 2015 - March 2016</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Design and produce monthly magazine layouts using Adobe InDesign. Ensure each issue is visually compelling, cohesive, and aligns with the brand's identity and standards. Rigorously manage project timelines to consistently meet deadlines, guaranteeing timely publication and distribution of each magazine edition.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Graphic Design Intern to Junior Graphic Designer</h4>
                  <div className="text-muted-foreground mb-4">the media chilli, CPT, January 2014 - June 2015</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Collaborate with the Head of Design to complete annual reports and various print materials, ensuring high-quality outcomes that align with brand guidelines and project timelines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Work on report tenders for prominent clients, including the City of Cape Town and WWF, delivering comprehensive and visually appealing documents that meet their specific requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Actively engage in learning Joomla, enhancing proficiency to contribute more effectively to web development projects and expanding capabilities in content management systems.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Management Skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Creativity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Digital Marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Negotiation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Critical Thinking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Leadership</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Branding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Desktop Publishing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Layout Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Animation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Front-End Web Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Adobe Creative Suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">HTML, CSS & JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">React</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">Responsive Web Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
