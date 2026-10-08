import { Card, CardContent } from '@/components/ui/card';
import { Database, Factory } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Stock Management System',
    tagline: 'Full-stack inventory management solution',
    icon: <Database className="h-6 w-6" />,
    description:
      'A comprehensive system to manage and track stock production, deliveries, purchases, repairs, transactions and returns. Full CRUD functionality behind an intuitive interface built for efficient inventory management.',
    features: [
      'Complete inventory tracking',
      'Production management',
      'Transaction monitoring',
      'Repair and return handling',
      'Real-time updates with RxJS',
    ],
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'Ant Design', 'RxJS'],
  },
  {
    title: 'Manufacturing UI – Stock Flow',
    tagline: 'End-to-end manufacturing workflow',
    icon: <Factory className="h-6 w-6" />,
    description:
      'An advanced visualisation system for managing manufacturing processes across production, processing and subcontracting stages — built to track and optimise the full lifecycle of operations.',
    features: [
      'Manufacturing process visualisation',
      'Production stage tracking',
      'Subcontracting management',
      'Process optimisation tools',
      'Real-time workflow monitoring',
    ],
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'Ant Design'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative border-t border-hairline py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="03 — Flagship work"
          title="Enterprise systems built at"
          highlight="Om Creation."
          description="Two large-scale Angular applications running day-to-day operations for manufacturing and inventory teams."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card glow-hover group">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <span className="rounded-xl border border-hairline bg-secondary/50 p-3 text-primary transition-smooth group-hover:border-primary/40">
                    {project.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
                    <p className="eyebrow mt-2">{project.tagline}</p>
                  </div>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-7 border-t border-hairline pt-6">
                  <span className="eyebrow">Key features</span>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-hairline pt-6">
                  {project.technologies.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
