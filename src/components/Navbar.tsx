import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X ,FileText, Star} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
type GitHubRepo = {
  stargazers_count: number;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn, redirectToSignIn } = useClerk();
  const [stars, setStars] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const fetchGitHubStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Pebbling-ai/pebble');
        const data: GitHubRepo = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchGitHubStars();
    // Refresh every 6 hours (21600000 ms)
    const interval = setInterval(fetchGitHubStars, 21600000);
    return () => clearInterval(interval);
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

  // Function to handle mobile menu item clicks
  const handleMobileMenuItemClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-2 md:pt-2 md:pb-0 transition-all duration-300 d:bg-white/80 md:backdrop-blur-md md:shadow-sm",
        isScrolled 
          ? "bg-white/80 md:backdrop-blur-md md:shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={scrollToTop}
          aria-label="Pebble Home"
        >
          <img 
            src="/logo/navlogo.svg" 
            alt="logo" 
            className="h-16 sm:h-18" 
          />
          <span 
            className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-semibold shadow-sm hidden sm:inline-block" 
            aria-label="Open Source Badge"
          >
            Open Source
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 pl-36">
         
          <Link 
            to="/pebbling" 
            
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Pebbling Protocol
          </Link>
          <Link 
            to="/hibiscus" 
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Hibiscus
          </Link>
         
        </nav>

        {/* Desktop Auth Button or User Profile */}
        <div className="hidden md:flex items-center space-x-4">
  <div className="flex space-x-3">
    {/* Docs Button */}
    <a
      href="https://docs.pebbling.ai"
      target="_blank"
      className="flex items-center space-x-2 px-3 py-1.5 text-gray-800 rounded-md text-sm bg-gray-200 hover:bg-gray-300 shadow-sm hover:shadow-md transition-all duration-150"
      rel="noopener noreferrer"
    >
      {/* Open Book Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m8-10.5a2.5 2.5 0 00-2.5-2.5H6.5A2.5 2.5 0 004 7.5v9A2.5 2.5 0 006.5 19h11a2.5 2.5 0 002.5-2.5v-9z"/>
      </svg>
      <span>Docs</span>
    </a>
    {/* Discord Button */}
    <a
      href="https://discord.gg/RBvKfcrPnY"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-3 py-1.5 bg-[#5865F2] text-white rounded-md text-sm hover:bg-[#4752C4] shadow-sm hover:shadow-md transition-all duration-150"
    >
      {/* Modern Discord SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 55" fill="currentColor" className="w-4 h-4">
        <path d="M60.104 4.552A58.16 58.16 0 0051.497.8a.112.112 0 00-.118.056c-2.25 3.98-4.5 9.13-6.177 13.3-7.393-1.116-14.673-1.116-21.987 0-1.677-4.18-3.927-9.32-6.177-13.3A.115.115 0 0019.503.8a58.12 58.12 0 00-8.607 3.752.104.104 0 00-.047.041C.533 16.563-.32 28.25.099 39.885c0 .05.028.098.07.123a58.6 58.6 0 0017.763 9.035.112.112 0 00.123-.04c1.366-1.874 2.588-3.84 3.644-5.891a.112.112 0 00-.06-.154 40.13 40.13 0 01-5.74-2.728.112.112 0 01-.011-.187c.386-.291.772-.584 1.144-.891a.112.112 0 01.114-.012c12.06 5.522 25.11 5.522 37.13 0a.112.112 0 01.115.01c.373.307.758.6 1.145.892a.112.112 0 01-.01.186 37.8 37.8 0 01-5.741 2.729.112.112 0 00-.06.153c1.056 2.052 2.278 4.018 3.645 5.892a.112.112 0 00.123.04 58.55 58.55 0 0017.762-9.035.122.122 0 00.07-.123c.5-11.634-.418-23.322-7.352-35.292a.105.105 0 00-.047-.041zM23.725 37.275c-3.226 0-5.89-2.946-5.89-6.572 0-3.625 2.617-6.572 5.89-6.572 3.293 0 5.89 2.967 5.89 6.572 0 3.626-2.597 6.572-5.89 6.572zm23.55 0c-3.226 0-5.89-2.946-5.89-6.572 0-3.625 2.617-6.572 5.89-6.572 3.293 0 5.89 2.967 5.89 6.572 0 3.626-2.597 6.572-5.89 6.572z"/>
      </svg>
      <span>Discord</span>
    </a>
    {/* GitHub Button */}
    <a
      href="https://github.com/Pebbling-ai/pebble"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-3 py-1.5 bg-gray-900 text-white rounded-md text-sm hover:bg-black shadow-sm hover:shadow-md transition-all duration-150"
    >
      {/* Modern GitHub SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.39-3.87-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.09.79 2.2v3.26c0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
      </svg>
      <span className="ml-1">{stars}</span>
    </a>
  </div>
  <SignedIn>
    <UserButton afterSignOutUrl="/" />
  </SignedIn>
  <SignedOut>
    <Button
      className="bg-gradient-to-r from-gray-700 to-zinc-900 flex items-center justify-center group w-full sm:w-auto text-center rounded-full text-white cursor-pointer text-sm leading-5 py-2.5 px-6 border border-transparent hover:from-gray-800 hover:to-black shadow-sm hover:shadow-md transition-all duration-150"
      onClick={() => redirectToSignIn()}
    >
      <span className="mr-2">Let's Pebble</span>
      {/* User Plus Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0zm6 8v-2m0 0v-2m0 2h-2m2 0h2" />
      </svg>
    </Button>
  </SignedOut>
</div>

        {/* Mobile menu button */}
        <button 
          className={cn("md:hidden p-3 focus:outline-none", !isScrolled ? "text-black" : "text-gray-700")}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        " fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : " translate-x-full pointer-events-none"
      )}>
        {/* Close button for mobile */}
        <button 
          className="absolute top-4 right-4 p-2"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <nav className="flex flex-col space-y-6 items-center mt-8">
          
          <Link 
            to="/pebbling" 
            className="text-base font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation"
            onClick={handleMobileMenuItemClick}
          >
            Pebbling Protocol
          </Link>
          <Link 
            to="/hibiscus" 
            className="text-base font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation"
            onClick={handleMobileMenuItemClick}
          >
            Hibiscus
          </Link>
          
          
          {/* Mobile Auth Button */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button
              className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-full w-full mt-4 text-sm leading-5 py-4 px-6 shadow-sm hover:shadow-md transition-all duration-150"
              onClick={() => {
                handleMobileMenuItemClick();
                redirectToSignIn();
              }}
            >
              Join Us
            </Button>
          </SignedOut>
          
         
        </nav>
      </div>
      {/* Clerk handles the auth modals automatically */}
    </header>
  );
};

export default Navbar;