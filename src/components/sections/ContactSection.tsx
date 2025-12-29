import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - CTA */}
          <AnimatedSection animation="slide-right">
            <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 h-full">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">
                READY TO START<br />
                <span className="text-accent">YOUR PROJECT?</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Contact us today for a free consultation. Our team of experts is ready 
                to help with your fire suppression, HVAC, or commercial mechanical needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Contact Info */}
          <AnimatedSection animation="slide-left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a
                    href="tel:313-931-3070"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm block">Phone</span>
                      <span className="text-foreground font-medium text-lg group-hover:text-accent transition-colors">
                        313-931-3070
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:desertinalaska@outlook.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm block">Email</span>
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                        desertinalaska@outlook.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=11402+Schaefer+Hwy,+Detroit,+MI+48227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <MapPin className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm block">Address</span>
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                        11402 Schaefer Hwy, Detroit, MI 48227
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm block">Business Hours</span>
                      <span className="text-foreground font-medium">
                        Mon – Sat, 8:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
