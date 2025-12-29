import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import hvacImage from '@/assets/hvac-service.jpg';
import kitchenExhaustImage from '@/assets/kitchen-exhaust.jpg';
import sprinklerImage from '@/assets/sprinkler-system.jpg';
import industrialImage from '@/assets/industrial-system.jpg';
import heroImage from '@/assets/hero-fire-suppression.jpg';

const projects = [
  {
    id: 1,
    title: 'Commercial Kitchen Fire Suppression',
    category: 'Fire Suppression',
    image: heroImage,
  },
  {
    id: 2,
    title: 'Restaurant Exhaust Hood Installation',
    category: 'Kitchen Exhaust',
    image: kitchenExhaustImage,
  },
  {
    id: 3,
    title: 'Industrial Paint Booth Safety System',
    category: 'Industrial Systems',
    image: industrialImage,
  },
  {
    id: 4,
    title: 'Commercial HVAC Installation',
    category: 'HVAC',
    image: hvacImage,
  },
  {
    id: 5,
    title: 'Fire Sprinkler Modification',
    category: 'Fire Suppression',
    image: sprinklerImage,
  },
  {
    id: 6,
    title: 'Collision Shop Dry Chemical System',
    category: 'Industrial Systems',
    image: industrialImage,
  },
];

export function ProjectsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our recent commercial and industrial installations across Metro Detroit.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale-in"
              delay={(Math.min(index, 5) * 100) as 0 | 100 | 200 | 300 | 400 | 500}
            >
              <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-primary-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" animation="fade-up">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
