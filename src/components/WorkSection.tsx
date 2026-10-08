import { ArrowUpRight, Lock } from 'lucide-react';
import SectionHeading from './SectionHeading';

import vastuWoods from '@/assets/work/vastu-woods.jpg';
import fleetTracker from '@/assets/work/fleet-tracker.jpg';
import sourceseas from '@/assets/work/sourceseas.jpg';
import sourceseasAdmin from '@/assets/work/sourceseas-admin.jpg';
import transactionManagement from '@/assets/work/transaction-management.jpg';
import globalCafe from '@/assets/work/global-cafe.jpg';
import funkyzTimekeepers from '@/assets/work/funkyz-timekeepers.jpg';
import sparkleDelivery from '@/assets/work/sparkle-delivery.jpg';
import loomaWear from '@/assets/work/looma-wear.jpg';
import inspiredWalls from '@/assets/work/inspired-walls.jpg';
import evebombayWebFeast from '@/assets/work/evebombay-web-feast.jpg';
import keyaFashionSpot from '@/assets/work/keya-fashion-spot.jpg';
import creativeTeeShop from '@/assets/work/creative-tee-shop.jpg';

type Work = {
  no: string;
  title: string;
  category: string;
  type: string;
  status: 'Live' | 'Private';
  image: string;
  description: string;
  features?: string[];
  href?: string;
  access?: string;
  featured?: boolean;
};

const works: Work[] = [
  {
    no: '01',
    title: 'Vastu Woods',
    category: 'Furniture E-Commerce',
    type: 'Business Website / E-Commerce',
    status: 'Live',
    image: vastuWoods,
    description:
      'A premium furniture website designed to showcase collections, products and modern interior solutions with a clean, elegant user experience.',
    features: [
      'Furniture product collections',
      'Category-based browsing',
      'Modern premium UI',
      'Fully responsive experience',
    ],
    href: 'https://vastu.trucoretechnology.com',
    featured: true,
  },
  {
    no: '02',
    title: 'Fleet Tracker',
    category: 'GPS Fleet Management',
    type: 'Web Application / Dashboard',
    status: 'Live',
    image: fleetTracker,
    description:
      'A real-time GPS fleet management platform for monitoring vehicles, drivers, locations, alerts, maintenance and travel history.',
    features: [
      'Live GPS vehicle tracking',
      'Vehicle, driver & device management',
      'Geofence areas, alerts & alarms',
      'Maintenance reminders and reports',
    ],
    href: 'https://gps.trucoretechnology.com',
    featured: true,
  },
  {
    no: '03',
    title: 'SourceSeas',
    category: 'Global Trade Platform',
    type: 'Business / Trade Platform',
    status: 'Live',
    image: sourceseas,
    description:
      'A global trade platform connecting businesses, suppliers, partners and trade opportunities across multiple industries.',
    features: [
      'Global trade ecosystem & offers',
      'Partner and industry categories',
      'News, events and ESG initiatives',
      'Platform registration flow',
    ],
    href: 'https://sourceseas.com',
    featured: true,
  },
  {
    no: '04',
    title: 'SourceSeas Admin',
    category: 'Administration System',
    type: 'Admin Dashboard',
    status: 'Live',
    image: sourceseasAdmin,
    description:
      'A centralised administration dashboard for managing the SourceSeas platform, content, users, trade activities and operational data.',
    features: [
      'Platform and content management',
      'User and data management',
      'Trade activity management',
      'Operational controls',
    ],
    href: 'https://admin.sourceseas.com',
    featured: true,
  },
  {
    no: '05',
    title: 'Transaction Management System',
    category: 'FinTech / Business Management',
    type: 'Web Application',
    status: 'Private',
    image: transactionManagement,
    description:
      'A transaction management interface that organises, monitors and manages financial and business transactions through a structured dashboard.',
    access: 'Preview on request',
  },
  {
    no: '06',
    title: 'Global Cafe Experience',
    category: 'Food & Hospitality',
    type: 'Website / Experience Platform',
    status: 'Live',
    image: globalCafe,
    description:
      'A visually engaging café experience platform focused on presenting food, beverages, atmosphere and customer experience.',
    href: 'https://global-cafe-experience.lovable.app',
  },
  {
    no: '07',
    title: 'Funkyz Timekeepers',
    category: 'E-Commerce / Fashion',
    type: 'Product Website',
    status: 'Live',
    image: funkyzTimekeepers,
    description:
      'A modern watch and accessories showcase designed around product presentation, collections and a premium shopping experience.',
    href: 'https://funkyz-timekeepers-collection.lovable.app',
  },
  {
    no: '08',
    title: 'Sparkle Delivery Dreams',
    category: 'Delivery & Logistics',
    type: 'Web Application / Business Website',
    status: 'Live',
    image: sparkleDelivery,
    description:
      'A modern delivery-focused platform presenting logistics services with a simple, engaging customer experience.',
    href: 'https://sparkle-delivery-dreams.lovable.app',
  },
  {
    no: '09',
    title: 'Looma Wear',
    category: 'Fashion / E-Commerce',
    type: 'E-Commerce Website',
    status: 'Live',
    image: loomaWear,
    description:
      'A contemporary fashion website showcasing clothing collections through a clean, visually focused shopping experience.',
    href: 'https://loomawear.lovable.app',
  },
  {
    no: '10',
    title: 'Inspired Walls',
    category: 'Interior Design / Home Decor',
    type: 'Business Website',
    status: 'Live',
    image: inspiredWalls,
    description:
      'A creative interior and wall-design website showcasing decorative concepts, visual inspiration and modern wall solutions.',
    href: 'https://inspired-walls-web.lovable.app',
  },
  {
    no: '11',
    title: 'Evebombay Web Feast',
    category: 'Events / Food Festival',
    type: 'Website / Experience Platform',
    status: 'Live',
    image: evebombayWebFeast,
    description:
      'A vibrant event and food festival website built to showcase vendors, schedules, experiences and ticket information with bold visual energy.',
    features: [
      'Event schedule & vendor highlights',
      'Festival atmosphere & ticketing info',
      'Bold visual storytelling',
      'Mobile-first responsive layout',
    ],
    href: 'https://evebombay-web-feast.lovable.app',
  },
  {
    no: '12',
    title: 'Keya Fashion Spot',
    category: 'Fashion / E-Commerce',
    type: 'E-Commerce Website',
    status: 'Live',
    image: keyaFashionSpot,
    description:
      'A fashion-forward e-commerce storefront for browsing collections, product details and style inspiration with a modern boutique feel.',
    features: [
      'Product collections & lookbooks',
      'Clean boutique-style UI',
      'Category browsing',
      'Responsive shopping experience',
    ],
    href: 'https://keya-fashion-spot.lovable.app',
  },
  {
    no: '13',
    title: 'Creative Tee Shop',
    category: 'Fashion / Print-on-Demand',
    type: 'E-Commerce Website',
    status: 'Live',
    image: creativeTeeShop,
    description:
      'A playful t-shirt and merchandise shop showcasing creative graphics, product categories and an easy browsing-to-checkout journey.',
    features: [
      'T-shirt & merchandise catalog',
      'Creative product showcases',
      'Category filters',
      'Streamlined store experience',
    ],
    href: 'https://creative-tee-shop.lovable.app',
  },
];

const StatusTag = ({ work }: { work: Work }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
      work.status === 'Live'
        ? 'border-accent/30 bg-accent/10 text-accent'
        : 'border-hairline bg-secondary/60 text-muted-foreground'
    }`}
  >
    {work.status === 'Live' ? (
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    ) : (
      <Lock className="h-2.5 w-2.5" />
    )}
    {work.status}
  </span>
);

const WorkCard = ({ work, featured }: { work: Work; featured?: boolean }) => {
  const Wrapper = work.href ? 'a' : 'div';

  return (
    <Wrapper
      {...(work.href
        ? { href: work.href, target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-smooth hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="relative overflow-hidden border-b border-hairline">
        <img
          src={work.image}
          alt={`${work.title} — ${work.category}`}
          loading="lazy"
          width={1280}
          height={800}
          className={`w-full object-cover transition-[transform,filter] duration-700 group-hover:scale-[1.04] ${
            featured ? 'aspect-[16/10]' : 'aspect-[16/11]'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <span className="font-mono text-xs text-primary">{work.no}</span>
            <h3
              className={`mt-1 font-semibold leading-tight ${
                featured ? 'text-2xl' : 'text-lg'
              }`}
            >
              {work.title}
            </h3>
          </div>
          <StatusTag work={work} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="eyebrow">{work.category}</div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {work.description}
        </p>

        {work.features && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {work.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-hairline pt-5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {work.type}
          </span>
          {work.href ? (
            <span className="inline-flex items-center gap-1.5 text-sm text-primary transition-smooth group-hover:gap-2.5">
              Visit site
              <ArrowUpRight className="h-4 w-4" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              {work.access}
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const WorkSection = () => {
  const featured = works.filter((w) => w.featured);
  const rest = works.filter((w) => !w.featured);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-hairline bg-section-bg py-24 lg:py-32"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          label="04 — Portfolio"
          title="Every project I've"
          highlight="shipped."
          description="Thirteen products across e-commerce, logistics, trade, hospitality, fintech, events and fashion — from marketing sites to full operational dashboards — every one linked for you to explore."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((work) => (
            <WorkCard key={work.no} work={work} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {rest.map((work) => (
            <WorkCard key={work.no} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
