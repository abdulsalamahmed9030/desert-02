import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Flame, 
  Wind, 
  ChefHat, 
  Fuel, 
  Factory, 
  ArrowRight 
} from 'lucide-react';

import hvacImage from '@/assets/hvac-service.jpg';
import kitchenExhaustImage from '@/assets/kitchen-exhaust.jpg';
import sprinklerImage from '@/assets/sprinkler-system.jpg';
import industrialImage from '@/assets/industrial-system.jpg';

const services = [
  {
    id: 'fire-suppression',
    title: 'Fire Suppression & Life Safety',
    description: 'Commercial kitchen fire suppression systems, fire sprinkler modifications, fire extinguisher sales and certification, emergency lighting systems.',
    icon: Flame,
    image: sprinklerImage,
    primary: true,
  },
  {
    id: 'hvac',
    title: 'Heating & Cooling (HVAC)',
    description: 'Residential and light commercial HVAC services including installation, repair, replacement, and maintenance.',
    icon: Wind,
    image: hvacImage,
  },
  {
    id: 'kitchen-exhaust',
    title: 'Commercial Kitchen Exhaust',
    description: 'Kitchen exhaust hood installation and servicing. Complete system support for commercial kitchens.',
    icon: ChefHat,
    image: kitchenExhaustImage,
  },
  {
    id: 'gas-piping',
    title: 'Gas Piping & Mechanical',
    description: 'Commercial gas piping, tenant improvements, and system modifications for commercial facilities.',
    icon: Fuel,
    image: hvacImage,
  },
  {
    id: 'industrial',
    title: 'Industrial Dry Chemical Systems',
    description: 'Dry chemical fire suppression systems for collision shops and industrial paint booths.',
    icon: Factory,
    image: industrialImage,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive fire safety, HVAC, and mechanical services for commercial and industrial clients.
          </p>
        </AnimatedSection>

        {/* Featured Service */}
        <AnimatedSection className="mb-12" animation="fade-up">
          <div className="relative rounded-xl overflow-hidden bg-primary text-primary-foreground">
            <div className="absolute inset-0">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Flame className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="px-3 py-1 bg-accent/20 rounded-full text-accent text-sm font-medium">
                  Primary Focus
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">
                {services[0].title}
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl">
                {services[0].description}
              </p>
              <Button variant="hero" asChild>
                <Link to="/services">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(1).map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={(index * 100) as 0 | 100 | 200 | 300 | 400}
            >
              <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" animation="fade-up">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
