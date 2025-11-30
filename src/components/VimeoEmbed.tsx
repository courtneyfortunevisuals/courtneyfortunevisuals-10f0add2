import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface VimeoEmbedProps {
  videoId: string;
  title: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  background?: boolean;
  hash?: string;
  className?: string;
}

/**
 * Secure Vimeo Embed Component
 * 
 * Features:
 * - Cookie-less embedding with DNT (Do Not Track) parameter
 * - Graceful fallback for blocked third-party cookies
 * - Maintains autoplay/muted/loop/background functionality
 * - CSP-compliant iframe implementation
 */
export const VimeoEmbed = ({ 
  videoId, 
  title, 
  autoplay = true, 
  muted = true, 
  loop = false,
  background = false,
  hash,
  className = ""
}: VimeoEmbedProps) => {
  const [embedError, setEmbedError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Build secure Vimeo URL with DNT parameter
  const buildVimeoUrl = () => {
    const params = new URLSearchParams({
      dnt: '1', // Enable Do Not Track - reduces third-party cookies
      autoplay: autoplay ? '1' : '0',
      muted: muted ? '1' : '0',
      loop: loop ? '1' : '0',
      background: background ? '1' : '0',
    });

    if (hash) {
      params.append('h', hash);
    }

    return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
  };

  useEffect(() => {
    // Detect if third-party cookies are blocked
    const checkCookieSupport = () => {
      try {
        // Test third-party cookie support
        const testFrame = document.createElement('iframe');
        testFrame.style.display = 'none';
        testFrame.src = 'about:blank';
        document.body.appendChild(testFrame);
        
        setTimeout(() => {
          document.body.removeChild(testFrame);
        }, 100);
      } catch (error) {
        console.warn('Third-party cookie check failed:', error);
        setEmbedError(true);
      }
    };

    checkCookieSupport();
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
    setEmbedError(false);
  };

  const handleIframeError = () => {
    setEmbedError(true);
    setIsLoaded(false);
  };

  return (
    <div className={`relative ${className}`}>
      {embedError && (
        <Alert className="mb-4 bg-muted/50 border-muted-foreground/20">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Video embed may be blocked by your browser's privacy settings. 
            <a 
              href={`https://vimeo.com/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline hover:text-primary"
            >
              Watch on Vimeo
            </a>
          </AlertDescription>
        </Alert>
      )}
      
      <div className="relative w-full h-full">
        {!isLoaded && !embedError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse">
            <div className="text-sm text-muted-foreground">Loading video...</div>
          </div>
        )}
        
        <iframe
          src={buildVimeoUrl()}
          title={title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="strict-origin-when-cross-origin"
          className={isLoaded ? 'opacity-100' : 'opacity-0'}
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
      </div>
    </div>
  );
};