
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AuthModal } from "./auth/AuthModal";
import { UserProfile } from "./auth/UserProfile";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useAuth } from "@/lib/auth-context";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, openModal, closeModal } = useAuthModal();
  const { user } = useAuth();

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
            src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/rjxn4q81e0mjukr6wjfr.png" 
            alt="Pulse Robot Logo" 
            className="h-16 sm:h-18  " 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
         
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
          <a
            href="https://discord.gg/m6ndEkce" 
            target="_blank"
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Community
          </a>
          <Link 
            to="/articles" 
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Articles
          </Link>
          <a 
            href="https://hibiscus-docs-production.up.railway.app" 
            target="_blank"
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Docs
          </a>
          <Link 
            to="/network" 
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Network
          </Link>
          <a 
            href="/#pricing" 
            className={cn("nav-link font-montserrat font-medium hover-underline-animation", !isScrolled && "text-black")}
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Auth Button or User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <UserProfile />
          ) : (
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
              onClick={openModal}
            >
              Join Us
            </Button>
          )}
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
            to="/product" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Product
          </Link>
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
          <Link 
            to="/#details" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Community
          </Link>
          <Link 
            to="/articles" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Articles
          </Link>
          <Link 
            to="/#details" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Docs
          </Link>
          <Link 
            to="/#details" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Network Status
          </Link>
          <Link 
            to="/pricing" 
            className="text-xl font-montserrat font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 hover-underline-animation" 
            onClick={handleMobileMenuItemClick}
          >
            Pricing
          </Link>
          
          {/* Mobile Auth Button */}
          {!user && (
            <Button 
              className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-full w-full mt-4"
              style={{
                padding: '16px 24px',
                fontSize: '14px',
                lineHeight: '20px',
              }}
              onClick={() => {
                closeModal();
                openModal();
                handleMobileMenuItemClick();
              }}
            >
              Access Hibiscus
            </Button>
          )}
          
          {/* Mobile User Profile Section */}
          {user && (
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
          )}
        </nav>
      </div>
      {/* Auth Modal */}
      <AuthModal isOpen={isOpen} onClose={closeModal} />
    </header>
  );
};

export default Navbar;
