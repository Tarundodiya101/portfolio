import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Helmet>
        <title>Tarun Dodiya - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer with 6+ years experience in Angular, React, Node.js, TypeScript, RxJS and NgRx. Founder of Trucore Technology, building scalable production-grade web applications."
        />
        <link rel="canonical" href="https://tarundodiyawork.lovable.app/" />
        <meta property="og:title" content="Tarun Dodiya - Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer with 6+ years building production applications with Angular, React and Node.js. Founder of Trucore Technology. View my projects and get in touch."
        />
        <meta property="og:url" content="https://tarundodiyawork.lovable.app/" />
      </Helmet>
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <WorkSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
