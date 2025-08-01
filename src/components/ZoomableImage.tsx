
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage = ({ src, alt, className = "" }: ZoomableImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className={`overflow-hidden cursor-zoom-in rounded-md ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "animate-zoom-in" : ""
          }`}
        />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
