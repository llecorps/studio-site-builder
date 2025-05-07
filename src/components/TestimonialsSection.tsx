
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "BrightPixel transformed our outdated website into a modern platform that's driving real business results. Our conversions have increased by 40% since launch!",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "Working with the BrightPixel team was effortless. They understood our brand from day one and delivered a website that perfectly captures our vision.",
    author: "Michael Chen",
    position: "Founder",
    company: "Elevate Studio",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    quote: "The SEO strategy developed by BrightPixel has significantly improved our online visibility. We're now ranking on page one for all our key search terms.",
    author: "Emily Rodriguez",
    position: "COO",
    company: "Horizon Financial",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-accent/20">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from some of our satisfied clients
            about their experience working with BrightPixel Studio.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <blockquote className="mb-6">
                  <p className="text-xl italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                </blockquote>
                <div>
                  <p className="font-semibold text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all',
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-primary/30'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
            <Button 
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white h-10 w-10"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
            <Button 
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white h-10 w-10"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
