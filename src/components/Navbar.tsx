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
      const response = await fetch('https://api.github.com/repos/Pebbling-ai/hibiscus');
      const data: GitHubRepo = await response.json();
      setStars(data.stargazers_count);
    } catch (error) {
      console.error('Error fetching GitHub stars:', error);
    }
  };

  fetchGitHubStars();
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
          aria-label="Source "
        >
          <img 
            src="/logo/navlogo.svg" 
            alt="logo" 
            className="h-16 sm:h-18  " 
          />
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
    href="https://hibiscus-docs-production.up.railway.app"
    target="_blank"
    className="flex items-center space-x-2 px-3 py-1.5  text-gray-800 rounded-md text-sm bg-gray-200 transition"
  >
    <FileText className="w-4 h-4" />
    <span>Docs</span>
  </a>
  {/* Discord Button */}
  <a
    href="https://discord.gg/m6ndEkce"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-4 h-4"
      viewBox="0 0 24 24"
    >
      <path d="M20.317 4.369A19.791 19.791 0 0015.69 3c-.2.352-.434.832-.592 1.204a18.568 18.568 0 00-5.196 0A12.354 12.354 0 009.31 3c-1.97.29-3.782.805-5.63 1.694C.772 9.212-.176 14.256.124 19.246a20.13 20.13 0 006.202 3.07c.474-.647.89-1.33 1.256-2.035a13.337 13.337 0 01-2.025-.918c.17-.122.336-.249.497-.38a14.232 14.232 0 0011.886 0c.161.131.327.258.497.38a13.38 13.38 0 01-2.02.916c.367.705.783 1.388 1.256 2.035a20.117 20.117 0 006.202-3.07c.365-5.12-.882-10.156-3.875-14.877zM8.02 15.33c-1.18 0-2.145-1.085-2.145-2.417 0-1.332.952-2.417 2.145-2.417 1.198 0 2.158 1.091 2.145 2.417 0 1.332-.952 2.417-2.145 2.417zm7.96 0c-1.18 0-2.145-1.085-2.145-2.417 0-1.332.952-2.417 2.145-2.417 1.198 0 2.158 1.091 2.145 2.417 0 1.332-.952 2.417-2.145 2.417z" />
    </svg>
    <span>Discord</span>
  </a>
          <a
  href="https://github.com/Pebbling-ai/hibiscus"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-1 px-3 py-1.5 bg-black text-white rounded-md text-sm hover:opacity-90 transition"
>
  <Star className="w-4 h-4" />
  <span className="text-xs ml-0.5 text-white ">{stars}</span>
  
</a>
        </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button 
              className="bg-gradient-to-r from-gray-700 to-zinc-900 flex items-center justify-center group w-full sm:w-auto text-center" 
              style={{
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '20px',
                padding: '16px 24px',
                border: '1px solid white',
              }}
              onClick={() => redirectToSignIn()}
            >
              Join Us
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
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Pebbling Protocol
          </Link>
          <Link 
            to="/hibiscus" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
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
              className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-full w-full mt-4"
              style={{
                padding: '16px 24px',
                fontSize: '14px',
                lineHeight: '20px',
              }}
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