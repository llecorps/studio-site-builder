
import React from 'react';
import { 
  Globe, 
  Code, 
  PenTool, 
  Search 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
    <CardContent className="p-6">
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description: "Custom, user-centered designs that engage your audience and elevate your brand with responsive layouts.",
      icon: Globe
    },
    {
      title: "Development",
      description: "Clean, efficient code that powers fast-loading sites with features that drive business growth.",
      icon: Code
    },
    {
      title: "Branding",
      description: "Strategic brand identity design that captures your vision and connects with your audience.",
      icon: PenTool
    },
    {
      title: "SEO",
      description: "Data-driven optimization that improves visibility and drives qualified traffic to your website.",
      icon: Search
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services That Drive Growth</h2>
          <p className="text-lg text-muted-foreground">
            We combine creativity and strategy to deliver digital solutions 
            that help your business stand out and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
