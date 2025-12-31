import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Wind, 
  ChefHat, 
  Fuel, 
  Factory,
  CheckCircle,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

import heroImage from '@/assets/hero-fire-suppression.jpg';
import hvacImage from '@/assets/hvac-service.jpg';
import kitchenExhaustImage from '@/assets/kitchen-exhaust.jpg';
import industrialImage from '@/assets/industrial-system.jpg';

const services = [
  {
    id: 'fire-suppression',
    icon: Flame,
    title: 'Fire Suppression & Life Safety',
    subtitle: 'Primary Focus',
    description: 'Comprehensive fire safety solutions for commercial and industrial facilities.',
    image: heroImage,
    features: [
      'Commercial kitchen fire suppression systems (full installation and service)',
      'Fire sprinkler systems (tenant improvements: modifications, relocations, head replacements)',
      'Fire extinguisher sales and certification',
      'Emergency exit signs and emergency lighting systems',
    ],
  },
  {
    id: 'hvac',
    icon: Wind,
    title: 'Heating & Cooling (HVAC)',
    subtitle: 'Residential & Commercial',
    description: 'Complete HVAC services for homes and light commercial buildings.',
    image: hvacImage,
    features: [
      'Residential HVAC installation',
      'Light commercial HVAC systems',
      'Repair and replacement services',
      'Preventive maintenance programs',
    ],
  },
  {
    id: 'kitchen-exhaust',
    icon: ChefHat,
    title: 'Commercial Kitchen Exhaust Systems',
    subtitle: 'Installation & Service',
    description: 'Professional kitchen exhaust hood solutions for restaurants and commercial kitchens.',
    image: kitchenExhaustImage,
    features: [
      'Kitchen exhaust hood installation',
      'Exhaust system servicing',
      'System support and maintenance',
      'Code-compliant installations',
    ],
    note: 'Note: We do not provide hood cleaning services.',
  },
  {
    id: 'gas-piping',
    icon: Fuel,
    title: 'Gas Piping & Mechanical Services',
    subtitle: 'Commercial Applications',
    description: 'Expert gas piping and mechanical modifications for commercial facilities.',
    image: '/gas-piping.jpg', // ✅ from public
    features: [
      'Commercial gas piping installation',
      'Tenant improvements',
      'System modifications',
      'Safety inspections and compliance',
    ],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Dry Chemical Systems',
    subtitle: 'Specialized Protection',
    description: 'Specialized fire suppression for industrial environments.',
    image: industrialImage,
    features: [
      'Collision shop fire suppression',
      'Industrial paint booth systems',
      'Dry chemical system installation',
      'System maintenance and inspection',
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Fire Suppression, HVAC & Commercial Mechanical</title>
        <meta
          name="description"
          content="Fire suppression, HVAC, kitchen exhaust, gas piping, and industrial dry chemical services."
        />
      </Helmet>

      <Layout>
        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-wide space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
              >
                <div
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[350px] object-cover"
                      />
                      {service.subtitle === 'Primary Focus' && (
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Primary Focus
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-muted-foreground text-sm font-medium">
                        {service.subtitle}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl mb-4">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.note && (
                      <div className="flex items-start gap-3 p-4 bg-muted rounded-lg mb-6">
                        <AlertTriangle className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {service.note}
                        </span>
                      </div>
                    )}

                    <Button asChild>
                      <Link to="/contact">
                        Request Service <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
