import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
const About = () => {
  return <Layout>
      <section className="py-8 md:py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Courtney Fortune</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">Digital Designer • Front-End Developer • Creative Specialist</p>
              
              <div className="mb-6 space-y-2">
                <h3 className="text-lg font-semibold">CONTACT</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Email: courtneyfortunevisuals@gmail.com</p>
                  <p>Phone: +27 71 220 2068</p>
                  
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">PROFILE SUMMARY</h3>
                <p className="text-muted-foreground">
                  Innovative Digital Designer with 6+ years of experience creating high-impact digital assets, HTML5 banners,
                  branding, layout design, and front-end web development. Skilled in Adobe Creative Suite, Google Web Designer,
                  DV360, and responsive web design.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:a376e1ad-dd2f-4c3b-ab8d-bb5c15b169d0" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Download Resume as PDF
                  </a>
                </Button>
                
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/courtney-fortune-67094475/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-xl">
                  <img src="/lovable-uploads/919ec45d-c8ec-4483-8a1e-a3cacb5c7aaa.png" alt="Profile" className="w-full h-full object-cover" />
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
              <h3 className="text-xl font-semibold mb-6">EXPERIENCE</h3>
              
              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Designer & Studio Specialist</h4>
                  <div className="text-muted-foreground mb-4">Sprout Performance Partners (2016–2024)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Built and deployed HTML5 banners using Google Web Designer.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Created social media content and internal branding.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Developed email signatures and marketing creatives for DV360 campaigns.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Tested dynamic remarketing campaigns to enhance ad performance.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Junior Graphic Designer</h4>
                  <div className="text-muted-foreground mb-4">Caravan Publications (2015–2016)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Designed monthly magazine layouts using Adobe InDesign.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Ensured visual consistency and met strict print deadlines.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-medium">Junior Graphic Designer</h4>
                  <div className="text-muted-foreground mb-4">themediachilli (2014–2015)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Collaborated on annual reports for major clients including City of Cape Town and WWF.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Designed tender documents and brand-aligned multi-page reports.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0 mr-2"></span>
                      <span className="text-muted-foreground">Supported web projects while learning Joomla CMS.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">SKILLS</h3>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <p className="text-muted-foreground">
                  Digital Design, HTML5 Banner Development, Branding, Layout Design, Animation, Social Media Design,
                  Front-End Development (HTML, CSS, JavaScript, React), Responsive Design, Digital Marketing Creatives, Adobe
                  Creative Suite, DV360, Collaboration, Time Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;