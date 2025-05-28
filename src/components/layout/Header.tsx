import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/996bea95-9371-4561-b396-1e00f4198ca3.png" 
            alt="Rebellious Aging Logo" 
            className="h-12 w-auto transition-transform hover:scale-105"
          />
        </NavLink>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/movement" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            The Movement
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link inline-flex items-center">
              Pillars <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <NavLink to="/pillars/confidence" className="w-full">Confidence</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/pillars/style" className="w-full">Style</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/pillars/longevity" className="w-full">Longevity</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink 
            to="/nutrition" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Nutrition (WFPB)
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Blog
          </NavLink>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 px-4">
              <NavLink 
                to="/" 
                className={({isActive}) => `py-2 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/movement" 
                className={({isActive}) => `py-2 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                The Movement
              </NavLink>
              <div className="py-2">
                <div className="font-medium mb-1">Pillars</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <NavLink 
                    to="/pillars/confidence" 
                    className={({isActive}) => `py-1 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Confidence
                  </NavLink>
                  <NavLink 
                    to="/pillars/style" 
                    className={({isActive}) => `py-1 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Style
                  </NavLink>
                  <NavLink 
                    to="/pillars/longevity" 
                    className={({isActive}) => `py-1 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Longevity
                  </NavLink>
                </div>
              </div>
              <NavLink 
                to="/nutrition" 
                className={({isActive}) => `py-2 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nutrition (WFPB)
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({isActive}) => `py-2 ${isActive ? 'text-teal font-medium' : 'text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
