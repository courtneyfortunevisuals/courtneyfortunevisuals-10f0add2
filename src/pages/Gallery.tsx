
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import ZoomableImage from "@/components/ZoomableImage";

const Gallery = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Poster Gallery</h1>
            <p className="text-muted-foreground text-base md:text-lg">
              A curated collection of album artwork and poster designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {posters.map((poster) => (
              <Card key={poster.id} className="overflow-hidden group">
                <ZoomableImage 
                  src={poster.image}
                  alt={poster.title}
                  className="aspect-square"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{poster.title}</h3>
                  <p className="text-muted-foreground mb-2">{poster.artist}</p>
                  <p className="text-sm text-muted-foreground">{poster.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Sample poster data
const posters = [
  {
    id: 1,
    title: "Purple Eye",
    artist: "Photoshop edit",
    year: "2024",
    image: "/lovable-uploads/599ad53d-1b74-4133-8be3-ea26d489ae4c.png"
  },
  {
    id: 2,
    title: "Focus Poster",
    artist: "Photoshop edit",
    year: "2024",
    image: "/lovable-uploads/285b305a-c855-4614-b4ca-7d4c5fbc9f38.png"
  },
  {
    id: 3,
    title: "Golden Hour",
    artist: "Soleil",
    year: "2023",
    image: "/lovable-uploads/a725b2f6-31ff-4b30-868e-ca7c949d526f.png"
  },
  {
    id: 4,
    title: "Urban Dreams",
    artist: "City Lights",
    year: "2023",
    image: "/lovable-uploads/4b5ea809-d085-4f67-985a-40687a83cb42.png"
  },
  {
    id: 5,
    title: "Digital Waves",
    artist: "Synth Masters",
    year: "2024",
    image: "/lovable-uploads/08963f9e-f83d-44b4-bd3f-9b6b354087d9.png"
  },
  {
    id: 6,
    title: "Neon Nights",
    artist: "Electric Dreams",
    year: "2023",
    image: "/lovable-uploads/599ad53d-1b74-4133-8be3-ea26d489ae4c.png"
  }
];

export default Gallery;
