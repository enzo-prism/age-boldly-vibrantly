
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
import { AnimatedHamburger } from '@/components/ui/animated-hamburger';
import { MobileMenuSection } from '@/components/ui/mobile-menu-section';
import { MobileNavItem } from '@/components/ui/mobile-nav-item';
import { FACEBOOK_GROUP_URL, handleFacebookGroupNavigation } from '@/lib/facebook';

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
            className="h-12 w-auto transition-transform hover:scale-105 animate-logo-glow rounded-lg"
          />
        </NavLink>

        {/* Mobile menu toggle */}
        <AnimatedHamburger
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/our-story" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Our Story
          </NavLink>
          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={handleFacebookGroupNavigation}
          >
            Facebook Group
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link inline-flex items-center">
              Pillars <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-background border shadow-md z-[9999] min-w-[200px]">
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/confidence" className="w-full flex items-center gap-2 px-3 py-2">
                  🌟 Confidence
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/style" className="w-full flex items-center gap-2 px-3 py-2">
                  👗 Style
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/health" className="w-full flex items-center gap-2 px-3 py-2">
                  🌱 Health
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/gratitude" className="w-full flex items-center gap-2 px-3 py-2">
                  💖 Gratitude
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link inline-flex items-center">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border shadow-md z-[9999]">
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/health/nutrition-guide" className="w-full flex items-center gap-2 px-3 py-2">
                  🥗 Nutrition Guide
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/gratitude" className="w-full flex items-center gap-2 px-3 py-2">
                  💖 Gratitude Pillar
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/video-series" className="w-full flex items-center gap-2 px-3 py-2">
                  🎥 Video Series
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/welcome-letter" className="w-full flex items-center gap-2 px-3 py-2">
                  💌 Welcome Letter
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/blog" className="w-full flex items-center gap-2 px-3 py-2">
                  📝 Blog
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link inline-flex items-center">
              Nutrition (WFPB) <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border shadow-md z-[9999]">
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=what-is-wfpb" className="w-full flex items-center gap-2 px-3 py-2">
                  🌱 What is WFPB?
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/pillars/health/nutrition-guide" className="w-full flex items-center gap-2 px-3 py-2">
                  🥗 Nutrition Guide
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=benefits" className="w-full flex items-center gap-2 px-3 py-2">
                  💪 Benefits
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=protocol" className="w-full flex items-center gap-2 px-3 py-2">
                  ❤️ Dr. Esselstyn's Protocol
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=dr-campbell" className="w-full flex items-center gap-2 px-3 py-2">
                  👨‍🔬 Dr. T. Colin Campbell
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=foods" className="w-full flex items-center gap-2 px-3 py-2">
                  🍎 Why & How
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/nutrition?tab=recipes" className="w-full flex items-center gap-2 px-3 py-2">
                  👩‍🍳 Recipes
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink 
            to="/welcome-letter" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Welcome Letter
          </NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link inline-flex items-center">
              Updates <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-background border shadow-md z-[9999] min-w-[200px]">
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/blog" className="w-full flex items-center gap-2 px-3 py-2">
                  📝 Blog
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-accent focus:text-accent-foreground">
                <NavLink to="/video-series" className="w-full flex items-center gap-2 px-3 py-2">
                  🎥 Video Series
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink 
            to="/contact" 
            className={({isActive}) => `nav-link ${isActive ? 'active-nav-link' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[80px] left-0 w-full bg-background/95 backdrop-blur-md shadow-lg border-b animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto z-[9998]">
            <div className="min-h-0">
              <nav className="flex flex-col">
                {/* Main navigation items */}
                <MobileNavItem
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon="🏠"
                >
                  Home
                </MobileNavItem>
                
                <MobileNavItem
                  to="/our-story"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon="📖"
                >
                  Our Story
                </MobileNavItem>
                <MobileNavItem
                  href={FACEBOOK_GROUP_URL}
                  onClick={(event) =>
                    handleFacebookGroupNavigation(event, {
                      onSuccess: () => setIsMobileMenuOpen(false),
                      onFailure: () => setIsMobileMenuOpen(false),
                    })
                  }
                  icon="💬"
                >
                  Facebook Group
                </MobileNavItem>
                <MobileNavItem
                  to="/welcome-letter"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon="💌"
                >
                  Welcome Letter
                </MobileNavItem>

                {/* Collapsible sections */}
                <MobileMenuSection
                  title="Pillars"
                  icon="🏛️"
                  defaultOpen={false}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                  items={[
                    { to: '/pillars/confidence', label: 'Confidence', icon: '🌟' },
                    { to: '/pillars/style', label: 'Style', icon: '👗' },
                    { to: '/pillars/health', label: 'Health', icon: '🌱' },
                    { to: '/pillars/health/nutrition-guide', label: 'Nutrition Guide', icon: '🥗' },
                    { to: '/pillars/gratitude', label: 'Gratitude', icon: '💖' }
                  ]}
                />

                <MobileMenuSection
                  title="Nutrition (WFPB)"
                  icon="🥬"
                  defaultOpen={false}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                  items={[
                    { to: '/nutrition?tab=what-is-wfpb', label: 'What is WFPB?', icon: '🌱' },
                    { to: '/pillars/health/nutrition-guide', label: 'Nutrition Guide', icon: '🥗' },
                    { to: '/nutrition?tab=benefits', label: 'Benefits', icon: '💪' },
                    { to: '/nutrition?tab=protocol', label: "Dr. Esselstyn's Protocol", icon: '❤️' },
                    { to: '/nutrition?tab=dr-campbell', label: 'Dr. T. Colin Campbell', icon: '👨‍🔬' },
                    { to: '/nutrition?tab=foods', label: 'Why & How', icon: '🍎' },
                    { to: '/nutrition?tab=recipes', label: 'Recipes', icon: '👩‍🍳' }
                  ]}
                />

                <MobileMenuSection
                  title="Resources"
                  icon="📚"
                  defaultOpen={false}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                  items={[
                    { to: '/pillars/health/nutrition-guide', label: 'Nutrition Guide', icon: '🥗' },
                    { to: '/pillars/gratitude', label: 'Gratitude Pillar', icon: '💖' },
                    { to: '/video-series', label: 'Video Series', icon: '🎥' },
                    { to: '/welcome-letter', label: 'Welcome Letter', icon: '💌' },
                    { to: '/blog', label: 'Blog', icon: '📝' }
                  ]}
                />

                <MobileMenuSection
                  title="Updates"
                  icon="📰"
                  defaultOpen={false}
                  onItemClick={() => setIsMobileMenuOpen(false)}
                  items={[
                    { to: '/blog', label: 'Blog', icon: '📝' },
                    { to: '/video-series', label: 'Video Series', icon: '🎥' }
                  ]}
                />

                <MobileNavItem
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  icon="📧"
                >
                  Contact
                </MobileNavItem>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
