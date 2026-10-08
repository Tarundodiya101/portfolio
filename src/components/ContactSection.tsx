import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUpRight, Globe } from 'lucide-react';
import ContactModal from './ContactModal';
import SectionHeading from './SectionHeading';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'tarundodiya101@gmail.com',
    href: 'mailto:tarundodiya101@gmail.com',
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    value: 'Tarun Dodiya',
    href: 'https://linkedin.com/in/dodiya-tarun-738462274',
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
    value: 'Tarundodiya101',
    href: 'https://github.com/Tarundodiya101',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: 'Live Site',
    value: 'tarundodiyawork.lovable.app',
    href: 'https://tarundodiyawork.lovable.app',
  },
];

const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '15+', label: 'Technologies' },
  { value: '10+', label: 'Production apps' },
  { value: '0', label: 'Critical bugs post-launch' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline py-24 lg:py-32">
      <div
        className="ambient-glow -bottom-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2"
        style={{ background: 'hsl(var(--primary) / 0.12)' }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeading
          label="05 — Contact"
          title="Let's build something"
          highlight="together."
          description="Available for freelance projects and full-time opportunities. Tell me what you have in mind."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass-card glow-hover">
            <CardContent className="p-8 lg:p-10">
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                I'm always interested in new opportunities, challenging projects and
                collaborating with fellow developers. Whether you have a project in mind or
                just want to talk Angular, I'd love to hear from you.
              </p>

              <div className="mt-8 divide-y divide-hairline border-y border-hairline">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 py-5 transition-smooth"
                  >
                    <span className="rounded-lg border border-hairline bg-secondary/50 p-2.5 text-primary transition-smooth group-hover:border-primary/40">
                      {contact.icon}
                    </span>
                    <div className="flex-1">
                      <div className="eyebrow">{contact.label}</div>
                      <div className="mt-1 text-sm text-foreground transition-smooth group-hover:text-primary">
                        {contact.value}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ContactModal>
                  <Button size="lg" className="flex-1">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact me
                  </Button>
                </ContactModal>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a
                    href="https://linkedin.com/in/dodiya-tarun-738462274"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card/70 px-6 py-8">
                  <div className="font-mono text-3xl font-semibold">{stat.value}</div>
                  <div className="eyebrow mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                  <span className="eyebrow">Currently available</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">Ready to start your project?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I'm open to freelance work and full-time roles. Let's discuss how I can help
                  bring your ideas to life — usually replying within a day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Tarun Dodiya. Built with Angular, TypeScript, RxJS, and CSS.{' '}
            <a
              href="https://tarundodiyawork.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-smooth hover:underline"
            >
              tarundodiyawork.lovable.app
            </a>
          </p>
          <div className="flex gap-2">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={contact.label}
                className="rounded-lg border border-hairline bg-card/60 p-2.5 text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
