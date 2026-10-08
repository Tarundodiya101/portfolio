import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA), IT',
    place: 'Jain (Deemed-to-be University)',
    period: 'Jun 2023 — Jul 2025',
    status: 'Completed',
    body: 'Advanced studies in computer applications with a focus on modern web technologies and software engineering practices.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    place: 'Bhagwan Mahavir University',
    period: 'Jan 2020 — Apr 2023',
    status: 'Completed',
    body: 'Comprehensive foundation in computer science, programming languages and software development methodologies.',
  },
];

const experience = [
  {
    role: 'Senior Angular Developer & Web Tester',
    company: 'OM Creation, Surat',
    period: 'Feb 2022 — Jun 2026',
    badge: '4+ years',
    points: [
      'Architected a Stock Management System handling 1,000+ daily transactions with full CRUD across inventory, production, deliveries, purchases, repairs and returns',
      'Built a Manufacturing UI Stock Flow for production tracking and subcontracting, reducing process bottlenecks by 40%',
      'Implemented real-time sync with RxJS and WebSockets — 95% data accuracy across concurrent users',
      'Shipped 50+ reusable Angular Material and Ant Design components, accelerating development by 35%',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'WebSockets', 'Jest'],
  },
  {
    role: 'Freelance Developer',
    company: 'Upwork, Fiverr & Direct Clients',
    period: 'Ongoing',
    badge: 'Global',
    points: [
      'Delivered full-stack web, mobile and automation projects for clients across India, the US and the UK — e-commerce, CRM, AI/automation, Shopify and GoHighLevel builds',
      'Built and shipped independent products including Wear Your Story, StockMaster Pro and AetherFlow AI',
    ],
    tech: ['Shopify', 'GHL', 'Automation', 'Full Stack'],
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="02 — Resume"
          title="Education and"
          highlight="experience."
          description="A track record of formal study alongside continuous hands-on delivery."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="rounded-lg border border-hairline bg-card p-2 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="relative space-y-5 border-l border-hairline pl-7">
              {education.map((item) => (
                <div key={item.degree} className="relative">
                  <span className="absolute -left-[33px] top-7 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
                  <Card className="glass-card glow-hover">
                    <CardContent className="p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                          {item.status}
                        </span>
                      </div>
                      <h4 className="mt-3 text-lg font-semibold leading-snug">{item.degree}</h4>
                      <p className="mt-1 text-sm text-primary">{item.place}</p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="rounded-lg border border-hairline bg-card p-2 text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>

            <div className="relative space-y-5 border-l border-hairline pl-7">
              {experience.map((job) => (
                <div key={job.role} className="relative">
                  <span className="absolute -left-[33px] top-7 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
                  <Card className="glass-card glow-hover">
                    <CardContent className="p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                          {job.badge}
                        </span>
                      </div>
                      <h4 className="mt-3 text-lg font-semibold leading-snug">{job.role}</h4>
                      <p className="mt-1 text-sm text-primary">{job.company}</p>

                      <ul className="mt-5 space-y-3">
                        {job.points.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-5">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-hairline bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground/85"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
