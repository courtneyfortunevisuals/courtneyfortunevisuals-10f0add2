import { useState } from "react";
import Layout from "@/components/Layout";
import ZoomableImage from "@/components/ZoomableImage";

const Gallery = () => {
  const posters = [
    {
      id: 1,
      src: "/lovable-uploads/800x800_-_01-01.jpg",
      alt: "Poster 1",
    },
    {
      id: 2,
      src: "/lovable-uploads/800x800_-_01-02.jpg",
      alt: "Poster 2",
    },
    {
      id: 3,
      src: "/lovable-uploads/800x800_-_01-03.jpg",
      alt: "Poster 3",
    },
    {
      id: 4,
      src: "/lovable-uploads/800x800_-_01-04.jpg",
      alt: "Poster 4",
    },
    {
      id: 5,
      src: "/lovable-uploads/800x800_-_01-05.jpg",
      alt: "Poster 5",
    },
    {
      id: 6,
      src: "/lovable-uploads/800x800_-_01-06.jpg",
      alt: "Poster 6",
    },
    {
      id: 7,
      src: "/lovable-uploads/800x800_-_01-07.jpg",
      alt: "Poster 7",
    },
    {
      id: 8,
      src: "/lovable-uploads/800x800_-_01-08.jpg",
      alt: "Poster 8",
    },
    {
      id: 9,
      src: "/lovable-uploads/800x800_-_01-09.jpg",
      alt: "Poster 9",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster) => (
            <div key={poster.id} className="aspect-square">
              <ZoomableImage
                src={poster.src}
                alt={poster.alt}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
