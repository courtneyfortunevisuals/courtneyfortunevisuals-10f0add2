
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { projects, allProjects } from "@/data/projects";

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
          
          <div className="flex flex-col items-center max-w-4xl mx-auto relative">
            {displayedProjects.map((project, index) => {
              const rotation = (index % 3 - 1) * 1.5; // Alternating -1.5, 0, 1.5 degrees
              const totalProjects = displayedProjects.length;
              
              return (
                <div 
                  key={project.id}
                  className="group animate-fade-in w-full max-w-2xl relative transition-all duration-500 ease-out hover:z-50"
                  style={{ 
                    animationDelay: `${Math.min(index * 0.1, 1)}s`,
                    marginTop: index === 0 ? '0' : '-280px',
                    zIndex: totalProjects - index,
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <Link 
                    to={`/projects/${project.id}`}
                    className="block overflow-hidden transition-all duration-500 relative shadow-lg hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-8"
                    style={{
                      transform: `rotate(0deg)`,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-cream border-2 border-muted group-hover:border-primary/30">
                      <img 
                        src="/lovable-uploads/7df9a9f3-1582-4cc4-bdb4-5382d73d0650.png" 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 text-center bg-black/40 group-hover:bg-black/60 transition-colors duration-500">
                        <h2 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold uppercase tracking-wider mb-2 md:mb-3 text-white line-clamp-2">
                          {project.title}
                        </h2>
                        
                        <p className="text-sm md:text-base italic mb-3 md:mb-4 max-w-[90%] text-white/90 line-clamp-2">
                          {project.summary.split(' ').slice(0, 4).join(' ')}...
                        </p>
                        
                        <div className="mt-auto italic text-xs md:text-sm text-white/80 truncate w-full">
                          {project.client || "Self-released"}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
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
