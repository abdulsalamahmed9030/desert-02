import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle, Award, Shield, Users, Clock, Target } from 'lucide-react';
import industrialImage from '@/assets/industrial-system.jpg';
import hvacImage from '@/assets/hvac-service.jpg';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every installation meets or exceeds safety codes and standards.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Certified technicians delivering excellence on every project.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Building lasting relationships through reliable service.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to detail in every aspect of our work.',
  },
];

const milestones = [
  { year: '1997', event: 'Founded as HVAC service provider' },
  { year: '2005', event: 'Expanded into commercial kitchen services' },
  { year: '2010', event: 'Added fire suppression systems' },
  { year: '2015', event: 'Industrial dry chemical certification' },
  { year: '2020', event: 'Celebrating 20+ years of service' },
  { year: 'Today', event: 'Metro Detroit\'s trusted fire safety experts' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Desert In Alaska Corp | Metro Detroit Fire Suppression Experts</title>
        <meta 
          name="description" 
          content="Learn about Desert In Alaska Corp's 27+ years of experience in fire suppression, commercial HVAC, and mechanical services in Metro Detroit. Licensed, certified, and trusted." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 bg-primary text-primary-foreground">
          <div className="container-wide">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                About Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">
                YOUR TRUSTED<br />
                <span className="text-accent">SAFETY PARTNER</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Since 1997, Desert In Alaska Corp has been Metro Detroit's trusted provider 
                of fire suppression systems, commercial HVAC, and mechanical services.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection animation="slide-right">
                <div className="relative">
                  <img
                    src={industrialImage}
                    alt="Our team at work"
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                    <div className="text-center">
                      <span className="font-display text-4xl block">27+</span>
                      <span className="text-sm font-medium">Years</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-left">
                <h2 className="font-display text-4xl text-foreground mb-6">
                  OUR STORY
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Desert In Alaska Corp was founded in 1997 as a residential and 
                    commercial HVAC service provider. Over the years, we recognized 
                    a growing need for reliable fire safety solutions in Metro Detroit's 
                    commercial sector.
                  </p>
                  <p>
                    Today, we have evolved into a comprehensive commercial mechanical 
                    services company, with fire suppression and life safety systems as 
                    our primary focus. We specialize in commercial kitchen fire suppression, 
                    fire sprinkler modifications, exhaust hood installation, and industrial 
                    dry chemical systems.
                  </p>
                  <p>
                    Our team of licensed and certified professionals brings decades of 
                    combined experience to every project, ensuring the highest standards 
                    of safety and code compliance.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-4xl text-foreground mb-4">
                OUR VALUES
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  animation="fade-up"
                  delay={(index * 100) as 0 | 100 | 200 | 300}
                >
                  <div className="bg-card rounded-xl p-6 h-full shadow-md">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <AnimatedSection className="text-center mb-16">
              <h2 className="font-display text-4xl text-foreground mb-4">
                OUR JOURNEY
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  animation="fade-up"
                  delay={(Math.min(index, 5) * 100) as 0 | 100 | 200 | 300 | 400 | 500}
                >
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                      {index !== milestones.length - 1 && (
                        <div className="w-px h-full bg-border flex-1 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="font-display text-2xl text-accent">
                        {milestone.year}
                      </span>
                      <p className="text-foreground mt-1">{milestone.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-wide">
            <AnimatedSection className="text-center">
              <h2 className="font-display text-4xl mb-8">
                LICENSED & CERTIFIED
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  'State Licensed Contractor',
                  'Fire Suppression Certified',
                  'HVAC Licensed',
                  'Fully Insured',
                  'Code Compliant',
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
