
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 w-full",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <img 
            src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747339698/softuynr4zwtrlwmkwxp.png" 
            alt="Pulse Robot Logo" 
            className="h-6 sm:h-7 md:h-8" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8">
          <a 
            href="#" 
            className={cn("nav-link text-xs lg:text-sm font-medium", !isScrolled && "text-black")}
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Pebbling Protocol
          </a>
          <a href="#features" className={cn("nav-link text-xs lg:text-sm font-medium", !isScrolled && "text-black")}>Hibiscus</a>
          <a href="#details" className={cn("nav-link text-xs lg:text-sm font-medium", !isScrolled && "text-black")}>Community</a>
          <a href="#details" className={cn("nav-link text-xs lg:text-sm font-medium", !isScrolled && "text-black")}>Articles</a>
          <a href="#details" className={cn("nav-link text-xs lg:text-sm font-medium whitespace-nowrap", !isScrolled && "text-black")}>Docs</a>
          <a href="#details" className={cn("nav-link text-xs lg:text-sm font-medium whitespace-nowrap", !isScrolled && "text-black")}>Network Status</a>
          <a href="#details" className={cn("nav-link text-xs lg:text-sm font-medium", !isScrolled && "text-black")}>Network</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={cn("md:hidden p-2 focus:outline-none", !isScrolled ? "text-black" : "text-gray-700")}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <a 
            href="#" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>
          <a 
            href="#details" 
            className="text-lg font-medium py-2 px-4 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
