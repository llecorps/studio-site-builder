
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "BrightPixel Studio | Web Design & Development Agency";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      <AnimatedOnScroll>
        <ServicesSection />
      </AnimatedOnScroll>
      
      <AnimatedOnScroll>
        <PortfolioSection />
      </AnimatedOnScroll>
      
      <AnimatedOnScroll>
        <TestimonialsSection />
      </AnimatedOnScroll>
      
      <AnimatedOnScroll>
        <CtaSection />
      </AnimatedOnScroll>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
