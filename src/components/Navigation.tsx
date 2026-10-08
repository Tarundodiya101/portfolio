import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        isScrolled
          ? 'border-b border-hairline bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-[70px] items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 text-left transition-smooth hover:opacity-80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-card font-mono text-xs font-semibold text-primary">
              TD
            </span>
            <span className="text-sm font-semibold tracking-tight">Tarun Dodiya</span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-hairline bg-card/60 p-1 backdrop-blur-sm md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-1.5 text-sm transition-smooth ${
                  activeSection === item.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => scrollToSection('contact')}>
              Let's talk
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="space-y-1 border-t border-hairline py-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm transition-smooth ${
                  activeSection === item.id
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
