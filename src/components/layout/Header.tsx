import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:313-931-3070" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              313-931-3070
            </a>
            <a href="mailto:desertinalaska@outlook.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              desertinalaska@outlook.com
            </a>
          </div>
          <p className="text-primary-foreground/80">Mon – Sat, 8:00 AM – 6:00 PM</p>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-md'
            : 'bg-card'
        )}
      >
        <div className="container-wide">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl text-primary leading-none">
                  DESERT IN ALASKA
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">
                  CORP. | NeoService
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                    location.pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-muted'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="ml-4" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
          )}
        >
          <nav className="bg-card border-t border-border px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'block px-4 py-3 rounded-md text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" className="w-full mt-4" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
