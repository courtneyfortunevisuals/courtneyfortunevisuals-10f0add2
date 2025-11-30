
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ZoomableImageProps {
  src: string;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  className?: string;
  eager?: boolean;
}

const ZoomableImage = ({ src, alt, webpSrc, avifSrc, className = "", eager = false }: ZoomableImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Render function for image with modern format support
  const renderImage = (imgClassName: string, loading: "eager" | "lazy" = "lazy") => {
    if (avifSrc || webpSrc) {
      return (
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img 
            src={src} 
            alt={alt}
            loading={loading}
            decoding="async"
            className={imgClassName}
          />
        </picture>
      );
    }
    
    return (
      <img 
        src={src} 
        alt={alt}
        loading={loading}
        decoding="async"
        className={imgClassName}
      />
    );
  };

  return (
    <>
      <div 
        className={`overflow-hidden cursor-zoom-in rounded-md ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        {renderImage(
          `w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "animate-zoom-in" : ""
          }`,
          eager ? "eager" : "lazy"
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {renderImage(
            "w-full h-auto max-h-[80vh] object-contain rounded-lg",
            "eager"
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
