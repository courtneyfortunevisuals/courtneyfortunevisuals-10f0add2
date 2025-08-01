
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Album } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12 lg:py-20 dark:bg-green-900/20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">My Collection</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              A showcase of creative works and musical inspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-x-6 lg:gap-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="block overflow-hidden transition-all duration-300 relative"
                >
                    <div className="relative aspect-square overflow-hidden bg-cream border border-muted">
                    <img 
                      src="/lovable-uploads/7df9a9f3-1582-4cc4-bdb4-5382d73d0650.png" 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-3 md:p-4 lg:p-6 text-center bg-black/40">
                      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wider mb-1 md:mb-2 text-white">
                        {project.title}
                      </h2>
                      
                      <p className="text-sm md:text-base lg:text-lg italic mb-3 md:mb-6 max-w-[90%] lg:max-w-[80%] text-white/90">
                        {project.summary.split(' ').slice(0, 5).join(' ')}
                      </p>
                      
                      <div className="mt-auto italic text-xs md:text-sm text-white/80">
                        {project.client || "Self-released"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card border-x border-b border-muted">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Album size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
