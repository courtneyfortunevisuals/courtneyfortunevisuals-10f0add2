
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { projects, allProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const displayedProjects = showAll ? allProjects : projects;
  
  const totalCards = displayedProjects.length;
  const anglePerCard = 360 / totalCards;
  const radius = 900;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setRotation(prev => prev + e.deltaY * 0.1);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev - deltaX * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const rotateCarousel = (direction: 'left' | 'right') => {
    setRotation(prev => prev + (direction === 'right' ? -anglePerCard : anglePerCard));
  };

  const getCenterIndex = () => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    return Math.round(normalizedRotation / anglePerCard) % totalCards;
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
              onClick={() => rotateCarousel('left')}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              onClick={() => rotateCarousel('right')}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <div 
              ref={carouselRef}
              className="carousel-container h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div 
                className="carousel-3d h-full relative"
                style={{
                  transform: `rotateY(${rotation}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {displayedProjects.map((project, index) => {
                  const angle = index * anglePerCard;
                  const centerIndex = getCenterIndex();
                  const distanceFromCenter = Math.min(
                    Math.abs(index - centerIndex),
                    totalCards - Math.abs(index - centerIndex)
                  );
                  const isCenter = distanceFromCenter === 0;
                  const scale = isCenter ? 1.2 : 1 - (distanceFromCenter * 0.1);
                  const opacity = isCenter ? 1 : 0.6 - (distanceFromCenter * 0.1);
                  
                  return (
                    <div 
                      key={project.id}
                      className="carousel-card absolute left-1/2 top-1/2 w-80 md:w-96 pointer-events-auto"
                      style={{ 
                        transform: `translate(-50%, -50%) rotateY(${-angle}deg) translateZ(${radius}px) rotateY(${angle}deg) scale(${scale})`,
                        transformStyle: 'preserve-3d',
                        opacity,
                        transition: isDragging ? 'opacity 0.3s' : 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: isCenter ? 100 : 50 - distanceFromCenter,
                      }}
                    >
                      <Link 
                        to={`/projects/${project.id}`}
                        className="block overflow-hidden shadow-2xl hover:shadow-[0_20px_80px_rgba(0,0,0,0.3)] transition-shadow duration-500"
                      >
                        <div className="relative aspect-square overflow-hidden bg-card border-2 border-border group hover:border-primary/50">
                          <img 
                            src={project.coverImage} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 text-center bg-black/60 group-hover:bg-black/30 transition-colors duration-500">
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
