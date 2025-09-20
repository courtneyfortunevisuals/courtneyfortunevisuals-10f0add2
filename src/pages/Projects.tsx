
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { projects, allProjects } from "@/data/projects";
import { Album } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const displayedProjects = showAll ? allProjects : projects;

  return (
    <Layout>
      <section className="py-6 md:py-8 lg:py-12 xl:py-20 dark:bg-green-900/20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8 lg:mb-12 xl:mb-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3 lg:mb-4">My Collection</h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
              A showcase of creative works and musical inspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group animate-fade-in"
                style={{ 
                  animationDelay: `${Math.min(index * 0.1, 1)}s`,
                }}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="block overflow-hidden transition-all duration-300 relative hover:shadow-lg"
                >
                    <div className="relative aspect-square overflow-hidden bg-cream border border-muted group-hover:border-primary/20">
                    <img 
                      src="/lovable-uploads/7df9a9f3-1582-4cc4-bdb4-5382d73d0650.png" 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-2 md:p-3 lg:p-4 xl:p-6 text-center bg-black/40 group-hover:bg-black/50 transition-colors">
                      <h2 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold uppercase tracking-wider mb-1 md:mb-2 text-white line-clamp-2">
                        {project.title}
                      </h2>
                      
                      <p className="text-xs md:text-sm lg:text-base italic mb-2 md:mb-3 lg:mb-4 max-w-[95%] text-white/90 line-clamp-2">
                        {project.summary.split(' ').slice(0, 4).join(' ')}...
                      </p>
                      
                      <div className="mt-auto italic text-xs lg:text-sm text-white/80 truncate w-full">
                        {project.client || "Self-released"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 md:p-3 lg:p-4 bg-card border-x border-b border-muted group-hover:border-primary/20 transition-colors">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Album size={14} className="md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {!showAll && (
            <div className="text-center mt-8 md:mt-12">
              <Button 
                onClick={() => setShowAll(true)}
                variant="outline"
                size="lg"
                className="min-w-[200px]"
              >
                Show Older Projects
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
