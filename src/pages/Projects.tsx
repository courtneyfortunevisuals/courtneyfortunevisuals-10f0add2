
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { projects, allProjects } from "@/data/projects";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const displayedProjects = showAll ? allProjects : projects;
  const { scrollRef, locomotiveScroll } = useLocomotiveScroll(true);


  const scroll = (direction: 'left' | 'right') => {
    if (!locomotiveScroll) return;
    
    const cardWidth = 320;
    const overlap = 220;
    const scrollAmount = cardWidth - overlap;
    
    const currentScroll = (locomotiveScroll as any).scroll?.x || 0;
    const targetScroll = currentScroll + (direction === 'right' ? scrollAmount : -scrollAmount);
    
    (locomotiveScroll as any).scrollTo(targetScroll, {
      duration: 1.2,
      easing: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    });
  };

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
          
          <div className="relative">
            <Button
              onClick={() => scroll('left')}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              onClick={() => scroll('right')}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <div ref={scrollRef} className="pb-8 h-[600px] overflow-x-auto overflow-y-hidden">
              <div className="flex flex-row items-center min-w-max px-4 md:px-8 h-full">
              {displayedProjects.map((project, index) => {
                const rotation = (index % 3 - 1) * 1.5;
                const totalProjects = displayedProjects.length;
                const scrollSpeed = index % 3 === 0 ? "0.8" : index % 3 === 1 ? "1.0" : "1.2";
                
                return (
                  <div 
                    key={project.id}
                    className="group animate-fade-in w-80 md:w-96 flex-shrink-0 relative transition-all duration-500 ease-out hover:z-50"
                    style={{ 
                      animationDelay: `${Math.min(index * 0.1, 1)}s`,
                      marginLeft: index === 0 ? '0' : '-220px',
                      zIndex: totalProjects - index,
                      transform: `rotate(${rotation}deg)`,
                      transitionDelay: `${index * 0.05}s`,
                    }}
                  >
                    <Link 
                      to={`/projects/${project.id}`}
                      className="block overflow-hidden transition-all duration-500 relative z-10 shadow-lg hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-8 group-hover:z-[100]"
                      style={{
                        transform: `rotate(0deg)`,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                    <div className="relative aspect-square overflow-hidden bg-cream border-2 border-muted group-hover:border-primary/30">
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 text-center bg-black/60 group-hover:bg-black/20 transition-colors duration-500">
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
            </div>
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
