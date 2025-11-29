import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, allProjects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const displayedProjects = showAll ? allProjects : projects;

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {displayedProjects.map((project, index) => {
                  const isActive = index === current;
                  
                  return (
                    <CarouselItem 
                      key={project.id} 
                      className="pl-4 md:pl-6 basis-[90%] md:basis-[70%] lg:basis-[60%]"
                    >
                      <Link 
                        to={`/projects/${project.id}`}
                        className="block group max-w-[75%] mx-auto"
                      >
                        <div 
                          className={`
                            aspect-square overflow-hidden rounded-lg relative shadow-2xl
                            transition-all duration-500 ease-out
                            ${isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-60'}
                            hover:scale-105 hover:opacity-100
                          `}
                        >
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                              {project.title}
                            </h2>
                            <p className="text-primary-foreground/90 text-base md:text-lg mb-2">
                              {project.summary}
                            </p>
                            <span className="text-primary-foreground/70 text-sm">
                              {project.client || "Self-released"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </Carousel>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <p className="text-xs md:text-sm text-muted-foreground/70">
              Drag or click arrows to explore
            </p>
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
