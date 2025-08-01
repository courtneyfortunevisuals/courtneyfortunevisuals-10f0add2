import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/794d48a3-265b-411b-95f4-fe6496d931fc.png" alt="cfv logo" className="h-20 mb-4 block dark:hidden" />
            <img src="/lovable-uploads/aad48bcc-3729-47d0-831e-e54b76641ba7.png" alt="cfv logo" className="h-20 mb-4 hidden dark:block" />
            <p className="text-muted-foreground max-w-xs">
              Showcasing creative work with a focus on visual storytelling and thoughtful design.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-1">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <img src="/lovable-uploads/3b5cde57-906e-43c2-9572-7ac776283a9d.png" alt="LinkedIn logo" className="h-4 w-4 block dark:hidden" />
                  <img src="/lovable-uploads/800d30c6-a672-4cf5-8f37-842d8142c707.png" alt="LinkedIn logo" className="h-4 w-4 hidden dark:block" />
                </Button>
              </a>
              <a 
                href="https://www.behance.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Behance Profile"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <img src="/lovable-uploads/2947db43-c761-4459-ac95-49bbbbfff68c.png" alt="Behance logo" className="h-4 w-4 block dark:hidden" />
                  <img src="/lovable-uploads/7a8cc4df-daaf-479b-b4df-e9eb9904228e.png" alt="Behance logo" className="h-4 w-4 hidden dark:block" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
