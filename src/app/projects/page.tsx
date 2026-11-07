import type { Metadata } from "next";
import { ProjectCard, type Project } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects — Muhammad Irham",
  description:
    "A collection of projects, practical implementations, and professional work.",
  openGraph: {
    title: "Projects — Muhammad Irham",
    description:
      "A collection of projects, practical implementations, and professional work.",
  },
};

const g = (a: string, b: string) => `linear-gradient(135deg, ${a}, ${b})`;

const projects: Project[] = [
  {
    tag: "AI",
    title: "AI SaaS Platform",
    description:
      "Complete landing page redesign that increased conversions by 340% with animated hero, pricing tables, and integrated payment system.",
    stack: ["React", "GSAP", "Stripe"],
    gradient: g("oklch(0.6 0.15 275)", "oklch(0.7 0.2 320)"),
  },
  {
    tag: "E-COM",
    title: "Premium E-commerce",
    description:
      "Full-stack e-commerce platform with custom checkout flow, inventory management, and analytics dashboard. Mobile-first design.",
    stack: ["Next.js", "Shopify", "SEO"],
    gradient: g("oklch(0.75 0.2 330)", "oklch(0.62 0.22 15)"),
  },
  {
    tag: "DASH",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts, custom widgets, and role-based access control.",
    stack: ["React", "D3.js", "API"],
    gradient: g("oklch(0.68 0.15 240)", "oklch(0.88 0.15 195)"),
  },
  {
    tag: "PORT",
    title: "Creative Portfolio",
    description:
      "Award-style personal portfolio with smooth page transitions, WebGL accents, and a headless CMS for case studies.",
    stack: ["Next.js", "Framer", "CMS"],
    gradient: g("oklch(0.68 0.22 10)", "oklch(0.9 0.17 95)"),
  },
  {
    tag: "FIN",
    title: "Fintech Platform",
    description:
      "Secure banking interface with transaction monitoring, budgeting insights, and multi-factor authentication.",
    stack: ["TypeScript", "Node.js", "Plaid"],
    gradient: g("oklch(0.8 0.13 180)", "oklch(0.3 0.15 290)"),
  },
  {
    tag: "BLOG",
    title: "Content Platform",
    description:
      "High-performance publishing platform with MDX authoring, full-text search, and newsletter integration.",
    stack: ["Astro", "MDX", "Search"],
    gradient: g("oklch(0.88 0.08 180)", "oklch(0.88 0.06 340)"),
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-5 pb-20 pt-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">Featured Projects</h1>

        <p className="mt-3 text-center text-sm text-muted-foreground">
          Real-world solutions that drive business growth
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.tag} p={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
