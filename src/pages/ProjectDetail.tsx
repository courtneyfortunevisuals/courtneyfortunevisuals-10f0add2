import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { allProjects } from "@/data/projects";
import ZoomableImage from "@/components/ZoomableImage";
import { VimeoEmbed } from "@/components/VimeoEmbed";
import { ArrowLeft, ArrowRight, Disc, Music, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { PasswordPrompt } from "@/components/PasswordPrompt";
const ProjectDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const projectId = parseInt(id || "0");
  const project = allProjects.find(p => p.id === projectId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  useEffect(() => {
    if (!project) {
      navigate("/projects");
      return;
    }

    // Check if project requires password
    if (!project.isPasswordProtected) {
      setHasAccess(true);
    } else {
      // Check session storage for existing access
      const accessKey = `project_access_${projectId}`;
      const storedAccess = sessionStorage.getItem(accessKey);
      if (storedAccess === 'granted') {
        setHasAccess(true);
      }
    }
  }, [project, navigate, projectId]);
  if (!project) {
    return null;
  }
  const handlePasswordSuccess = () => {
    setHasAccess(true);
    // Store access in session storage
    const accessKey = `project_access_${projectId}`;
    sessionStorage.setItem(accessKey, 'granted');
  };

  // Show password prompt if project is protected and user doesn't have access
  if (project.isPasswordProtected && !hasAccess) {
    return <Layout>
        <PasswordPrompt projectId={projectId} projectTitle={project.title} onSuccess={handlePasswordSuccess} />
      </Layout>;
  }
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const hasVideos = project.gallery.videos && project.gallery.videos.length > 0;

  // Calculate next project
  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];
  return <Layout>
      <article>
        {/* Album Hero Section */}
        <section className="relative py-8 md:py-12 lg:py-20 bg-cream dark:bg-green-900/20 overflow-hidden">
          <div className="container px-4">
            <Button variant="outline" className="bg-black/10 border-black/20 text-foreground hover:bg-black/20 mb-6 md:mb-8 lg:mb-12 flex items-center gap-2" onClick={() => navigate("/projects")}>
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Album Cover */}
              <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 overflow-hidden">
                <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                
                {/* Play indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={togglePlay}>
                  <Disc className={`h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 text-white ${isPlaying ? 'animate-spin' : ''}`} />
                </div>
              </div>

              {/* Album Information */}
              <div className="space-y-4 md:space-y-6 animate-slide-up">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize tracking-wide border-b-2 border-black/20 pb-2">
                  {project.title}
                </h1>
                
                <div className="flex items-center gap-3 font-medium text-lg italic opacity-80">
                  <Music className="h-5 w-5" />
                  <span>{project.client || "Independent"}</span>
                </div>

                <p className="text-xl">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => <span key={idx} className="px-3 py-1 rounded-full text-sm bg-black/10 text-foreground">
                      {tag}
                    </span>)}
                </div>

                <div className="pt-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Artist:</span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Label:</span>
                      <span className="font-medium">{project.client || "Self-released"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="py-8 md:py-12 lg:py-16 bg-muted/30 dark:bg-green-900/10">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                 <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl md:text-2xl font-bold">Album Notes</h2>
                  <div className="flex-1 border-b border-black/10"></div>
                </div>

                <div className="prose max-w-none text-muted-foreground">
                  {project.description.map((paragraph, idx) => {
                  // Skip blockquote embeds and scripts
                  if (paragraph.trim().startsWith('<blockquote') || paragraph.trim().startsWith('<script')) {
                    return null;
                  }
                  // Render anchor tags with dangerouslySetInnerHTML
                  if (paragraph.trim().startsWith('<a ')) {
                    return <div key={idx} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />;
                  }
                  // Regular text paragraphs
                  return <p key={idx} className="mb-4">{paragraph}</p>;
                })}
                </div>
              </div>
              
              <div className="space-y-8">
                <Card className="bg-cream border-black/10 dark:bg-green-900/20 dark:border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Headphones className="h-4 w-4" />
                      Technical Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => <span key={idx} className="px-3 py-1 rounded-md text-sm bg-black/5">
                            {tech}
                          </span>)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-cream dark:bg-green-900/20">
          <div className="container px-4">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold">Album Gallery</h2>
              <div className="flex-1 border-b border-black/10"></div>
            </div>
            
            {hasVideos ? <Tabs defaultValue="images" className="w-full">
                <div className="flex justify-center mb-6 md:mb-8">
                  <TabsList className="bg-black/5">
                    <TabsTrigger value="images" className="text-sm px-4 py-2">Images</TabsTrigger>
                    <TabsTrigger value="videos" className="text-sm px-4 py-2">Videos</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="images" className="animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
                    {project.gallery.images.map((image, idx) => <div key={idx} className="space-y-2">
                        <div className="aspect-square bg-cream border border-black/10 p-1 transition-transform hover:scale-[1.01]">
                          <ZoomableImage src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                        </div>
                        {image.caption && <div className="text-center text-sm">
                            {image.link ? <a href={image.link} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">
                                {image.caption}
                              </a> : <span className="text-muted-foreground">{image.caption}</span>}
                          </div>}
                      </div>)}
                  </div>
                </TabsContent>
                
                <TabsContent value="videos" className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {project.gallery.videos.map((video, idx) => <div key={idx} className="aspect-video bg-cream border border-black/10 p-1 overflow-hidden">
                        <VimeoEmbed videoId={video.embedUrl} title={video.title} hash={video.hash} autoplay={true} muted={true} className="w-full h-full" />
                      </div>)}
                  </div>
                </TabsContent>
              </Tabs> : <div className="animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
                  {project.gallery.images.map((image, idx) => <div key={idx} className="space-y-2">
                      <div className="aspect-square bg-cream border border-black/10 p-1 transition-transform hover:scale-[1.01]">
                        <ZoomableImage src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                      </div>
                      {image.caption && <div className="text-center text-sm">
                          {image.link ? <a href={image.link} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline">
                              {image.caption}
                            </a> : <span className="text-muted-foreground">{image.caption}</span>}
                        </div>}
                    </div>)}
                </div>
              </div>}

            {/* Next Project Button */}
            <div className="text-center mt-8 md:mt-12 lg:mt-16">
              <Button variant="outline" className="bg-black/10 border-black/20 text-foreground hover:bg-black/20 flex items-center gap-2 mx-auto" onClick={() => navigate(`/projects/${nextProject.id}`)}>
                Next Project: {nextProject.title}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </article>
    </Layout>;
};
export default ProjectDetail;