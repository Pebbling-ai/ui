import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn, redirectToSignIn } = useClerk();

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

  // Function to handle mobile menu item clicks
  const handleMobileMenuItemClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-2 sm:py-3 md:pt-4 md:pb-0 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={scrollToTop}
          aria-label="Pulse Robot"
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
    href="/docs"
    className="flex items-center space-x-2 px-3 py-1.5  text-gray-800 rounded-md text-sm hover:bg-gray-200 transition"
  >
    <span>Docs</span>
  </a>
  {/* Discord Button */}
  <a
    href="https://discord.gg/your-invite"
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
    href="https://github.com/your-repo"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-1 px-3 py-1.5 bg-black text-white rounded-md text-sm hover:opacity-90 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.21 10.94c.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.85 1.24 1.92 1.24 3.23 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
    <span>5k</span>
    <span className="text-xs ml-0.5">★</span>
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
            to="/" 
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
              Access Hibiscus
            </Button>
          </SignedOut>
          
          {/* Mobile User Profile Section */}
          <SignedIn>
            <div className="w-full mt-4 flex justify-center">
              <Button 
                className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-full w-full"
                style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
                onClick={() => {
                  handleMobileMenuItemClick();
                  window.location.href = '/hibiscus';
                }}
              >
                Dashboard
              </Button>
            </div>
          </SignedIn>
        </nav>
      </div>
      {/* Clerk handles the auth modals automatically */}
    </header>
  );
};

export default Navbar;