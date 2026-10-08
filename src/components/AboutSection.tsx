import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from './SectionHeading';

const skills = [
  'Angular', 'React.js', 'Node.js', 'TypeScript', 'JavaScript (ES6+)',
  'RxJS', 'NgRx', 'Laravel/PHP', 'Firebase', 'MongoDB',
  'RESTful APIs', 'WebSockets', 'Flutter', 'WordPress', 'OpenAI / Claude API',
];

const capabilities = [
  {
    title: 'Full stack delivery',
    body: 'End-to-end builds across Angular/React front ends and Node.js, Laravel/PHP or Firebase backends with RESTful APIs and WebSockets.',
  },
  {
    title: 'Reactive state',
    body: 'Predictable data flow with RxJS streams and NgRx stores for complex, real-time interfaces.',
  },
  {
    title: 'Interface systems',
    body: 'Consistent component libraries with Angular Material and Ant Design, tuned for accessibility.',
  },
  {
    title: 'AI integrations',
    body: 'OpenAI and Claude API integrations for AI-enabled products, automation and smart workflows.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative border-y border-hairline bg-section-bg py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="01 — About"
          title="Six years of shipping"
          highlight="full stack products."
          description="A full stack developer with a bias toward clean, considered engineering."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass-card glow-hover">
            <CardContent className="p-8 lg:p-10">
              <span className="eyebrow">My journey</span>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
                <p>
                  I'm Tarun Dodiya, a Full Stack Developer with 6+ years of experience
                  delivering scalable, production-grade web applications end to end — from
                  Angular and React front ends to Node.js and RESTful API integration.
                </p>
                <p>
                  I spent four years at OM Creation building enterprise systems, including a
                  Stock Management System processing 1,000+ daily transactions and a
                  Manufacturing UI for production, processing and subcontracting workflows.
                </p>
                <p>
                  With a Master's in Computer Applications from Jain University, I've shipped
                  10+ production applications with zero critical bugs — for clients in India,
                  the US and the UK.
                </p>
              </div>

              <div className="mt-9 border-t border-hairline pt-7">
                <span className="eyebrow">Toolkit</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-hairline bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground/85 transition-smooth hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-1">
            {capabilities.map((item, i) => (
              <div key={item.title} className="group bg-card/70 p-7 transition-smooth hover:bg-surface-raised">
                <span className="font-mono text-xs text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
