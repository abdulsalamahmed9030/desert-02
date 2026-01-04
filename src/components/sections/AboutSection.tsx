import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import industrialImage from '@/assets/industrial-system.jpg';

const highlights = [
  'Serving Metro Detroit since 1997',
  'Licensed and fully insured',
  'Certified technicians',
  'Code-compliant installations',
  'Commercial & industrial expertise',
  
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={industrialImage}
                  alt="Industrial fire suppression system"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <span className="font-display text-4xl block">27+</span>
                  <span className="text-sm font-medium">Years of Excellence</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection animation="slide-left">
            <div>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
                DECADES OF TRUSTED<br />
                <span className="text-accent">EXPERTISE</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Desert In Alaska Corp has been a trusted name in Metro Detroit's commercial 
                fire safety and mechanical services industry since 1997. What began as an 
                HVAC company has grown into a comprehensive fire suppression and commercial 
                mechanical services provider.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we specialize in commercial kitchen fire suppression systems, sprinkler 
                modifications, exhaust hood installation, and industrial dry chemical systems. 
                Our team of licensed and certified professionals ensures every project meets 
                the highest safety standards and code compliance.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
