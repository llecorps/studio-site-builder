
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Web Design that <span className="text-primary">Works.</span> <br />
            Branding that <span className="text-primary">Connects.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            We craft stunning digital experiences that elevate your brand 
            and drive real business results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-base px-8 rounded-lg">
              Let's Build Something Great
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 rounded-lg">
              View Our Work
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-4">
            <p className="text-sm font-medium">Trusted by leading brands:</p>
            <div className="flex space-x-6">
              {["Adobe", "Shopify", "Stripe", "Webflow"].map((brand) => (
                <div key={brand} className="text-sm text-muted-foreground font-medium opacity-75">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-tr from-blue-50 to-white rounded-xl overflow-hidden shadow-lg">
            <div className="absolute left-4 top-4 right-4 bottom-4 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-12 bg-gray-100 border-b flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="h-6 w-1/2 bg-gray-200 rounded mb-4"></div>
                <div className="h-32 bg-blue-50 rounded mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg rotate-12"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/30 rounded-lg -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
