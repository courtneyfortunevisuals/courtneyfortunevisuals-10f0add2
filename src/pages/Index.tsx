import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Music } from "lucide-react";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/theme-provider";

const Index = () => {
  // Get first three projects for featured section
  const featuredProjects = projects.slice(0, 3);
  const { theme } = useTheme();
  
  // Determine if we're in dark mode
  const isDarkMode = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Choose video URL based on theme
  const videoUrl = isDarkMode 
    ? "https://player.vimeo.com/video/1097342946?h=00ac02f95e&autoplay=1&loop=1&background=1&muted=1"
    : "https://player.vimeo.com/video/1097339449?h=5f755356a1&autoplay=1&loop=1&background=1&muted=1";

  return (
    <Layout>
      <section className="relative min-h-[70vh] md:h-[80vh] flex items-center py-8 md:py-0" style={{ backgroundColor: isDarkMode ? '#101A0E' : '#f2efea' }}>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full" style={{ backgroundColor: isDarkMode ? '#101A0E' : '#f2efea' }} />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-2xl space-y-4 md:space-y-6 animate-fade-in order-2 lg:order-1">
              <div className="w-full overflow-hidden rounded-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    key={videoUrl}
                    src={videoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="CFV Video"
                  ></iframe>
                </div>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Welcome to my collection — exploring visual narratives through 
                the lens of album artwork and musical inspiration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Button asChild size="lg" className="group w-full sm:w-auto">
                  <Link to="/projects">
                    Browse Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/about">About The Artist</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block order-1 lg:order-2">
              <div className="relative">
                <iframe
                  src="https://app.spline.design/file/bb1a8a8d-5c84-49e2-87ad-a8cec7898a6c"
                  frameBorder="0"
                  width="100%" 
                  height="500px"
                  className="rounded-lg animate-fade-in"
                  title="3D DJ Illustration"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 lg:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Albums</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Explore the latest additions to the collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`} 
                className="group relative aspect-square overflow-hidden border border-muted transition-all duration-300"
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-black/50">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white">{project.title}</h3>
                  <p className="italic mb-4 text-white/90">{project.client}</p>
                  <Music className="mt-4 text-white/70" size={24} />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 md:mt-12">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/projects">View Full Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
