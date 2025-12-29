import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Desert In Alaska Corp | Fire Suppression & Commercial Mechanical Services | Metro Detroit</title>
        <meta 
          name="description" 
          content="Desert In Alaska Corp provides licensed fire suppression systems, commercial HVAC, kitchen exhaust installation, and mechanical services in Metro Detroit since 1997. Request a free quote today." 
        />
        <meta name="keywords" content="fire suppression Detroit, commercial HVAC, kitchen exhaust hood, fire sprinkler, commercial mechanical services, Detroit MI" />
        <link rel="canonical" href="https://www.desertinalaska.com" />
      </Helmet>
      <Layout>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Index;
