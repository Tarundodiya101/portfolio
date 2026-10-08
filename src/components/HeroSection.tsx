import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const stats = [
  { value: '6+', label: 'Years of experience' },
  { value: '10+', label: 'Production applications' },
  { value: '10+', label: 'Core technologies' },
  { value: '3', label: 'Independent products' },
];

const socials = [
  { href: 'https://github.com/Tarundodiya101', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/dodiya-tarun-738462274', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:tarundodiya101@gmail.com', icon: Mail, label: 'Email' },
];

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Ambient light + grid */}
      <div
        className="ambient-glow -top-40 -left-32 h-[32rem] w-[32rem]"
        style={{ background: 'hsl(var(--primary) / 0.22)' }}
      />
      <div
        className="ambient-glow top-40 right-0 h-[26rem] w-[26rem]"
        style={{ background: 'hsl(var(--accent) / 0.16)' }}
      />
      <div className="absolute inset-0 bg-grid-lines [background-size:64px_64px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div className="animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-card/70 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
              <span className="eyebrow text-foreground/80">Available for new work</span>
            </div>

            <h1 className="text-[2.75rem] font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Full stack developer
              <br />
              crafting <span className="text-gradient">scalable</span>
              <br />
              web products.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm Tarun Dodiya — 6+ years building production-grade applications end to end,
              from Angular and React front ends to Node.js APIs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => scrollTo('projects')} className="group">
                View my work
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo('contact')}>
                Get in touch
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="rounded-xl border border-hairline bg-card/60 p-3 text-muted-foreground transition-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:ml-auto">
            <div className="glass-card overflow-hidden rounded-3xl p-2.5">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src={profilePhoto}
                  alt="Portrait of Tarun Dodiya, full stack developer"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-16">
                  <p className="text-lg font-semibold leading-tight">Tarun Dodiya</p>
                  <p className="eyebrow mt-1">Full Stack Developer</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 rounded-lg border border-hairline bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-primary shadow-lg">
              Angular
            </div>
            <div className="absolute -right-4 bottom-10 rounded-lg border border-hairline bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-foreground/80 shadow-lg">
              React.js
            </div>
            <div className="absolute -left-3 bottom-24 rounded-lg border border-hairline bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-accent shadow-lg">
              Node.js
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card/70 px-6 py-7 backdrop-blur-sm">
              <div className="font-mono text-3xl font-semibold text-foreground md:text-4xl">
                {stat.value}
              </div>
              <div className="eyebrow mt-2 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to about section"
          className="mx-auto mt-16 flex items-center gap-2 text-muted-foreground transition-smooth hover:text-primary"
        >
          <span className="eyebrow">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
