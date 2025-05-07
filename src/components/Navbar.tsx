
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Bright<span className="text-foreground">Pixel</span></span>
          <span className="ml-1 text-sm font-medium text-muted-foreground">Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-sm hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="font-medium text-sm hover:text-primary transition-colors">Work</a>
          <a href="#testimonials" className="font-medium text-sm hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium text-sm hover:text-primary transition-colors">Contact</a>
          <Button variant="default" size="sm">Get a Quote</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden fixed inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden',
        isMobileMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
      )}>
        <nav className="flex flex-col space-y-4 px-6">
          <a 
            href="#services" 
            className="font-medium text-sm py-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="font-medium text-sm py-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#testimonials" 
            className="font-medium text-sm py-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="font-medium text-sm py-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
