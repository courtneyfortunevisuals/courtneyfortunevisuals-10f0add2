
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
