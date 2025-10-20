import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { CartDrawer } from "@/components/CartDrawer";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-2 md:py-3 lg:py-4 dark:bg-[#303b2e]/90" : "bg-transparent py-2 md:py-4 lg:py-6"}`}>
      <div className="container px-3 md:px-4 lg:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold flex-shrink-0">
          <img src="/lovable-uploads/794d48a3-265b-411b-95f4-fe6496d931fc.png" alt="cfv logo" className="h-10 md:h-12 lg:h-16 xl:h-20 block dark:hidden" />
          <img src="/lovable-uploads/aad48bcc-3729-47d0-831e-e54b76641ba7.png" alt="cfv logo" className="h-10 md:h-12 lg:h-16 xl:h-20 hidden dark:block" />
        </Link>
        
        <nav className="hidden md:flex lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/projects" active={location.pathname.includes("/projects")}>Projects</NavLink>
          <NavLink to="/gallery" active={location.pathname === "/gallery"}>Gallery</NavLink>
        </nav>
        
        <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/lovable-uploads/3b5cde57-906e-43c2-9572-7ac776283a9d.png" alt="LinkedIn logo" className="h-5 w-5 block dark:hidden" />
              <img src="/lovable-uploads/800d30c6-a672-4cf5-8f37-842d8142c707.png" alt="LinkedIn logo" className="h-5 w-5 hidden dark:block" />
            </Button>
          </a>
          <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Behance Profile"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/lovable-uploads/2947db43-c761-4459-ac95-49bbbbfff68c.png" alt="Behance logo" className="h-5 w-5 block dark:hidden" />
              <img src="/lovable-uploads/7a8cc4df-daaf-479b-b4df-e9eb9904228e.png" alt="Behance logo" className="h-5 w-5 hidden dark:block" />
            </Button>
          </a>
          <CartDrawer />
          <ModeToggle />
          <div className="md:hidden">
            <MobileMenu location={location} />
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className={`relative transition-colors duration-200 ${
        active 
          ? "text-primary font-medium" 
          : "text-muted-foreground hover:text-primary"
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full" />
      )}
    </Link>
  );
};

const MobileMenu = ({ location }: { location: { pathname: string } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span className={`block h-0.5 bg-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-primary transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 bg-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 animate-fade-in dark:bg-[#303b2e] border border-border">
          <div className="py-2">
            <MobileNavLink to="/" active={location.pathname === "/"} onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === "/about"} onClick={() => setIsOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink to="/projects" active={location.pathname.includes("/projects")} onClick={() => setIsOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/gallery" active={location.pathname === "/gallery"} onClick={() => setIsOpen(false)}>
              Gallery
            </MobileNavLink>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ 
  to, 
  active, 
  onClick, 
  children 
}: { 
  to: string; 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => {
  return (
    <Link
      to={to}
      className={`block px-4 py-2 text-sm ${
        active ? "bg-muted text-primary font-medium" : "text-foreground hover:bg-muted"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
