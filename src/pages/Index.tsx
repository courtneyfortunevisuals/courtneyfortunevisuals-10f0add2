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

  return (
    <Layout>
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-8 md:py-12 lg:py-0" style={{ backgroundColor: isDarkMode ? '#101A0E' : '#f2efea' }}>
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full" style={{ backgroundColor: isDarkMode ? '#101A0E' : '#f2efea' }} />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  src="https://my.spline.design/reededliquidglassprismherosectionconcept-2PDlBZlhqd6aszmd7tZfqLPp/"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  title="Spline 3D Scene"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-4 md:space-y-6 animate-fade-in mb-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                Visual Narratives
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Welcome to my collection — exploring visual narratives through 
                the lens of album artwork and musical inspiration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center">
                <Button asChild size="lg" className="group w-full sm:w-auto text-sm md:text-base">
                  <Link to="/projects">
                    Browse Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  <Link to="/about">About The Artist</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 md:py-12 lg:py-16 xl:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">My Collection</h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Explore the latest additions to the collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`} 
                className="group relative aspect-square overflow-hidden border border-muted transition-all duration-300 hover:shadow-lg"
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 flex flex-col justify-center items-center p-3 md:p-4 lg:p-6 text-center bg-black/50 group-hover:bg-black/60 transition-colors">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wider mb-2 text-white">{project.title}</h3>
                  <p className="text-sm md:text-base italic mb-4 text-white/90">{project.client}</p>
                  <Music className="mt-2 md:mt-4 text-white/70" size={20} />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 md:mt-8 lg:mt-12">
            <Button asChild variant="outline" className="w-full sm:w-auto text-sm md:text-base">
              <Link to="/projects">View Full Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
