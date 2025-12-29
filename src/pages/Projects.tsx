import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import heroImage from '@/assets/hero-fire-suppression.jpg';
import hvacImage from '@/assets/hvac-service.jpg';
import kitchenExhaustImage from '@/assets/kitchen-exhaust.jpg';
import sprinklerImage from '@/assets/sprinkler-system.jpg';
import industrialImage from '@/assets/industrial-system.jpg';

const projects = [
  {
    id: 1,
    title: 'Downtown Restaurant Fire Suppression System',
    category: 'Fire Suppression',
    location: 'Detroit, MI',
    description: 'Complete commercial kitchen fire suppression installation for a new downtown restaurant.',
    image: heroImage,
  },
  {
    id: 2,
    title: 'Multi-Tenant Kitchen Exhaust Installation',
    category: 'Kitchen Exhaust',
    location: 'Southfield, MI',
    description: 'Exhaust hood installation for multiple restaurant tenants in a new commercial plaza.',
    image: kitchenExhaustImage,
  },
  {
    id: 3,
    title: 'Automotive Paint Booth Fire System',
    category: 'Industrial Systems',
    location: 'Warren, MI',
    description: 'Dry chemical fire suppression system for collision center paint booths.',
    image: industrialImage,
  },
  {
    id: 4,
    title: 'Office Building HVAC Replacement',
    category: 'HVAC',
    location: 'Dearborn, MI',
    description: 'Complete rooftop unit replacement for a commercial office building.',
    image: hvacImage,
  },
  {
    id: 5,
    title: 'Retail Plaza Fire Sprinkler Modification',
    category: 'Fire Suppression',
    location: 'Royal Oak, MI',
    description: 'Tenant improvement sprinkler relocations and head replacements.',
    image: sprinklerImage,
  },
  {
    id: 6,
    title: 'Fast Food Kitchen Fire Safety',
    category: 'Fire Suppression',
    location: 'Detroit, MI',
    description: 'Kitchen fire suppression and exhaust hood system for a quick-service restaurant.',
    image: heroImage,
  },
  {
    id: 7,
    title: 'Industrial Facility HVAC Upgrade',
    category: 'HVAC',
    location: 'Sterling Heights, MI',
    description: 'Commercial HVAC installation for manufacturing facility offices.',
    image: hvacImage,
  },
  {
    id: 8,
    title: 'Hotel Kitchen Ventilation System',
    category: 'Kitchen Exhaust',
    location: 'Troy, MI',
    description: 'Complete kitchen exhaust system for hotel restaurant renovation.',
    image: kitchenExhaustImage,
  },
  {
    id: 9,
    title: 'Body Shop Dry Chemical System',
    category: 'Industrial Systems',
    location: 'Livonia, MI',
    description: 'Fire suppression installation for automotive body shop spray booth.',
    image: industrialImage,
  },
];

const categories = ['All', 'Fire Suppression', 'HVAC', 'Kitchen Exhaust', 'Industrial Systems'];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Commercial Fire Suppression & HVAC Work | Desert In Alaska Corp</title>
        <meta 
          name="description" 
          content="View our portfolio of commercial fire suppression, kitchen exhaust, HVAC, and industrial safety projects across Metro Detroit. Quality work since 1997." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 bg-primary text-primary-foreground">
          <div className="container-wide">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Our Projects
              </span>
              <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">
                QUALITY WORK<br />
                <span className="text-accent">ACROSS METRO DETROIT</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Explore our portfolio of commercial and industrial fire safety, 
                HVAC, and mechanical installations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="scale-in"
                  delay={(Math.min(index % 6, 5) * 100) as 0 | 100 | 200 | 300 | 400 | 500}
                >
                  <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-muted-foreground text-sm">{project.location}</span>
                      <h3 className="font-display text-xl text-foreground mt-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted">
          <div className="container-wide text-center">
            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your fire suppression, HVAC, or commercial mechanical needs. 
                Contact us for a free consultation.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Projects;
