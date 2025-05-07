
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Eco Store Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: "Complete rebrand for an eco-friendly online marketplace."
  },
  {
    id: 2,
    title: "Finance App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    description: "Mobile-first financial platform with custom dashboard."
  },
  {
    id: 3,
    title: "Travel Blog",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    description: "Content-focused travel blog with immersive photography."
  },
  {
    id: 4,
    title: "Tech Startup",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    description: "Traffic growth strategy for AI-powered SaaS platform."
  }
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Design', 'Development', 'Branding', 'SEO'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Work</h2>
          <p className="text-lg text-muted-foreground">
            Explore our most recent projects and see how we've helped 
            our clients achieve their digital goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeFilter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-secondary hover:bg-secondary/80'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-80 mb-2">{project.description}</p>
                <span className="inline-block text-xs font-medium bg-primary/80 rounded-full px-3 py-1 w-fit">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-block border-b-2 border-primary text-lg font-medium hover:text-primary transition-colors">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
