
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's collaborate to create a website that not only looks amazing but 
              also drives real results for your business.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-primary font-medium"
            >
              Let's Build Something Great
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-blue-600 rounded-lg p-6 flex items-end text-white">
                <span className="text-xl font-bold">Web Design</span>
              </div>
              <div className="aspect-square bg-blue-500 rounded-lg p-6 flex items-end text-white">
                <span className="text-xl font-bold">Development</span>
              </div>
              <div className="aspect-square bg-blue-500 rounded-lg p-6 flex items-end text-white">
                <span className="text-xl font-bold">Branding</span>
              </div>
              <div className="aspect-square bg-blue-600 rounded-lg p-6 flex items-end text-white">
                <span className="text-xl font-bold">SEO</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/50 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-lg -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
