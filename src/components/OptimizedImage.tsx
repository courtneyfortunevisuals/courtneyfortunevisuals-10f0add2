import { ImgHTMLAttributes, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  className?: string;
  aspectRatio?: string;
  eager?: boolean;
}

/**
 * OptimizedImage component with modern format support (WebP/AVIF) and lazy loading
 * 
 * Features:
 * - Automatic lazy loading (unless eager prop is true)
 * - WebP and AVIF format support with fallback to original
 * - Async decoding for better performance
 * - Loading skeleton while image loads
 * - Prevents layout shift with aspect ratio
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  webpSrc,
  avifSrc,
  className = "", 
  aspectRatio,
  eager = false,
  ...props 
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // If modern formats are provided, use picture element
  if (avifSrc || webpSrc) {
    return (
      <div className="relative" style={aspectRatio ? { aspectRatio } : undefined}>
        {isLoading && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            {...props}
          />
        </picture>
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <p className="text-muted-foreground text-sm">Failed to load image</p>
          </div>
        )}
      </div>
    );
  }

  // Standard img element with lazy loading
  return (
    <div className="relative" style={aspectRatio ? { aspectRatio } : undefined}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-muted-foreground text-sm">Failed to load image</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;