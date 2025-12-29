import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Desert In Alaska Corp</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="container-wide text-center py-20">
            <h1 className="font-display text-8xl md:text-9xl text-accent mb-4">404</h1>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              PAGE NOT FOUND
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <ArrowLeft className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
