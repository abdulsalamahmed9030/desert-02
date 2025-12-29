import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Shield, Award, Clock, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-fire-suppression.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Commercial fire suppression system installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-3xl">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Metro Detroit's Trusted Experts
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
              FIRE SUPPRESSION &<br />
              <span className="text-accent">COMMERCIAL MECHANICAL</span><br />
              SPECIALISTS
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Licensed, certified, and trusted since 1997. We provide comprehensive fire 
              safety solutions, commercial HVAC, and mechanical services for businesses 
              throughout Metro Detroit.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Request Service</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-primary-foreground/20">
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Since 1997</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Emergency Contact Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent/95 py-4">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground font-medium">
            Need emergency service? We're here to help.
          </p>
          <a
            href="tel:313-931-3070"
            className="flex items-center gap-2 text-accent-foreground font-display text-2xl hover:text-primary-foreground transition-colors"
          >
            <Phone className="w-6 h-6" />
            313-931-3070
          </a>
        </div>
      </div>
    </section>
  );
}
