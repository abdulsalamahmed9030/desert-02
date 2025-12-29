import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Request a Quote | Desert In Alaska Corp | Detroit, MI</title>
        <meta 
          name="description" 
          content="Contact Desert In Alaska Corp for fire suppression, HVAC, and commercial mechanical services in Metro Detroit. Call 313-931-3070 or request a free quote online." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 bg-primary text-primary-foreground">
          <div className="container-wide">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Contact Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6">
                GET IN TOUCH<br />
                <span className="text-accent">WITH OUR TEAM</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Ready to discuss your project? Contact us today for a free consultation and quote.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <AnimatedSection animation="slide-right">
                <div className="bg-card rounded-xl p-8 shadow-md">
                  <h2 className="font-display text-3xl text-foreground mb-6">
                    REQUEST A QUOTE
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(313) 555-0123"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="fire-suppression">Fire Suppression Systems</option>
                        <option value="sprinkler">Fire Sprinkler Modifications</option>
                        <option value="hvac">HVAC Services</option>
                        <option value="kitchen-exhaust">Kitchen Exhaust Systems</option>
                        <option value="gas-piping">Gas Piping</option>
                        <option value="industrial">Industrial Dry Chemical Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slide-left">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-3xl text-foreground mb-6">
                      CONTACT INFORMATION
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Have questions? Our team is ready to help. Reach out to us through 
                      any of the following channels.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a
                      href="tel:313-931-3070"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm block">Phone</span>
                        <span className="text-foreground font-display text-2xl group-hover:text-accent transition-colors">
                          313-931-3070
                        </span>
                      </div>
                    </a>

                    <a
                      href="mailto:desertinalaska@outlook.com"
                      className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-accent-foreground" />
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
                      className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm block">Address</span>
                        <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                          11402 Schaefer Hwy<br />
                          Detroit, MI 48227
                        </span>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm block">Business Hours</span>
                        <span className="text-foreground font-medium">
                          Monday – Saturday<br />
                          8:00 AM – 6:00 PM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed */}
                  <div className="rounded-xl overflow-hidden shadow-md h-[300px] bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d-83.177!3d42.364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11402+Schaefer+Hwy%2C+Detroit%2C+MI+48227!5e0!3m2!1sen!2sus!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Desert In Alaska Corp Location"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
