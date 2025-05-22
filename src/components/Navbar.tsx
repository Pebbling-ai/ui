import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { NavLinks } from "./ui/Navbar/NavLinks";
import { SocialLinks } from "./ui/Navbar/SocialLinks";
import { ThemeToggle } from "./ui/Navbar/ThemeToggle";
import { Theme } from "./ui/Navbar/types";
import { GITHUB_API_URL, STAR_REFRESH_INTERVAL } from "./ui/Navbar/constants";

const Navbar = () => {
  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  type GitHubRepo = {
    stargazers_count: number;
    // Add other properties if you need them
  };

  // Apply theme to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
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
        setStars(79); // fallback hardcoded value
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
        "fixed top-0 left-0 right-0 z-50 pt-2 pb-4 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={scrollToTop}
          aria-label="Pebble Home"
        >
          <img
            src="/logo/LetsPebbleTagline-Regular.svg"
            alt="Pebble Logo"
            className="h-16 sm:h-18 block dark:hidden"
          />
          <img
            src="/logo/LetsPebbleTagline-Dark.svg"
            alt="Pebble Logo Dark"
            className="h-16 sm:h-18 hidden dark:block"
          />
          <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs font-semibold shadow-sm hidden sm:inline-block">
            Open Source
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 pl-36">
          <NavLinks isScrolled={isScrolled} />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <SocialLinks stars={stars} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button
              onClick={() => redirectToSignIn()}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg"
            >
              Let's Pebble
            </Button>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            'md:hidden p-3 focus:outline-none',
            !isScrolled ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
          )}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white dark:bg-zinc-900 flex flex-col pt-16 px-6 md:hidden',
          'transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <button
          className="absolute top-4 right-4 p-2 text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
            className="mb-4"
            iconSize={22}
          />
          <NavLinks
            className="flex flex-col space-y-4 w-full"
            linkClassName="w-full text-center py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800"
            onItemClick={handleMobileMenuItemClick}
          />
          <div className="w-full pt-4 border-t border-gray-200 dark:border-zinc-800">
            <div className="flex flex-col items-center space-y-2">
              <SocialLinks stars={stars} className="justify-center" linkClassName="text-sm" />
              <span className="text-xs text-gray-500 dark:text-gray-400">{stars} GitHub Stars</span>
            </div>
          </div>
          <div className="w-full pt-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button
                className="w-full bg-gradient-to-r from-gray-700 to-zinc-900 hover:from-gray-800 hover:to-black text-white py-3 px-6 rounded-full text-sm font-medium transition-all duration-150"
                onClick={() => {
                  handleMobileMenuItemClick();
                  redirectToSignIn();
                }}
              >
                Join Us
              </Button>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;