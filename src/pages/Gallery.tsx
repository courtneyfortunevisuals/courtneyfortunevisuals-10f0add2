
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import ZoomableImage from "@/components/ZoomableImage";

const Gallery = () => {
  return (
    <Layout>
      <section className="py-6 md:py-8 lg:py-12 xl:py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8 lg:mb-12 xl:mb-16">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Poster Gallery</h1>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              A curated collection of album artwork and poster designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {posters.map((poster) => (
              <Card key={poster.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <ZoomableImage 
                  src={poster.image}
                  alt={poster.title}
                  className="aspect-square group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 md:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1 md:mb-2 line-clamp-2">{poster.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-1 md:mb-2 truncate">{poster.artist}</p>
                  <p className="text-xs text-muted-foreground">{poster.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Inspirational poster data
const posters = [
  {
    id: 1,
    title: "Dance Like Nobody's Watching",
    artist: "Inspirational Quote",
    year: "2024",
    image: "/lovable-uploads/b5fdfadb-28ad-4323-b00d-d70f0c3ed23d.png"
  },
  {
    id: 2,
    title: "You Did",
    artist: "Motivational Quote",
    year: "2024",
    image: "/lovable-uploads/650eada7-5522-4a91-ab20-c5b963f7725e.png"
  },
  {
    id: 3,
    title: "Journey of a Thousand Miles",
    artist: "Wisdom Quote",
    year: "2024",
    image: "/lovable-uploads/703c68db-fe2d-4017-8d60-225e37cdd185.png"
  },
  {
    id: 4,
    title: "Comfort Zones",
    artist: "Success Quote",
    year: "2024",
    image: "/lovable-uploads/de29257e-1489-4820-a85d-66d05d3a39af.png"
  },
  {
    id: 5,
    title: "You Are Enough",
    artist: "Self-Love Quote",
    year: "2024",
    image: "/lovable-uploads/548cfa89-faa6-4768-80f7-e814ab25b284.png"
  },
  {
    id: 6,
    title: "Hard Work",
    artist: "Fighting Spirit",
    year: "2024",
    image: "/lovable-uploads/75c228e9-e5ec-42a7-aacd-ee8497f7dddd.png"
  },
  {
    id: 7,
    title: "Get Started",
    artist: "Action Quote",
    year: "2024",
    image: "/lovable-uploads/93a48ef0-3290-4b66-969d-c16198a83478.png"
  },
  {
    id: 8,
    title: "Be Original",
    artist: "Authenticity Quote",
    year: "2024",
    image: "/lovable-uploads/0a23da5c-7dff-4d20-9eb3-3452ee0a58b7.png"
  },
  {
    id: 9,
    title: "Persistence",
    artist: "Success Quote",
    year: "2024",
    image: "/lovable-uploads/5cf60ed0-d747-41ad-bc19-985490c78d86.png"
  }
];

export default Gallery;
