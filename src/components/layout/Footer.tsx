import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Fire Suppression Systems',
  'Commercial HVAC',
  'Kitchen Exhaust Systems',
  'Gas Piping',
  'Fire Extinguisher Sales',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-3xl mb-2">DESERT IN ALASKA</h3>
              <p className="text-primary-foreground/70 text-sm">CORP. | NeoService</p>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted commercial fire suppression and mechanical services since 1997. 
              Licensed, certified, and committed to safety excellence.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Award className="w-5 h-5" />
                <span className="text-xs font-medium">Certified Experts</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=11402+Schaefer+Hwy,+Detroit,+MI+48227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>11402 Schaefer Hwy<br />Detroit, MI 48227</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:313-931-3070"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  313-931-3070
                </a>
              </li>
              <li>
                <a
                  href="mailto:desertinalaska@outlook.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  desertinalaska@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Clock className="w-5 h-5 shrink-0" />
                Mon – Sat, 8:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Desert In Alaska Corp. All rights reserved.</p>
            <a
              href="https://www.desertinalaska.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              www.desertinalaska.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
