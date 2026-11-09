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
  tag: "AMONISASI",
  title: "Amonisasi",
  description: "Deskripsi project Amonisasi kamu.",
  stack: ["React Native", "JavaScript", "Firebase"],
  images: [
    "/Amonisasi/amonisasi1.jpg",
    "/Amonisasi/amonisasi2.jpg",
    "/Amonisasi/amonisasi3.jpg",
    "/Amonisasi/amonisasi4.jpg",
    "/Amonisasi/amonisasi5.jpg",
  ],
  gradient: g("oklch(0.6 0.15 275)", "oklch(0.7 0.2 320)"),
},

 {
  tag: "FORMALAT",
  title: "Form Alat",
  description: "Deskripsi project Form Alat kamu.",
  stack: ["Laravel", "MYSQL", "Javascript"],
  images: [
    "/Form_alat/formalat1.jpg",
    "/Form_alat/formalat2.jpg",
    "/Form_alat/formalat3.jpg",
  ],
  gradient: g("oklch(0.6 0.15 275)", "oklch(0.7 0.2 320)"),
},
 {
  tag: "JENDELATANI",
  title: "Jendela Tani",
  description: "Deskripsi project Jendela Tani kamu.",
  stack: ["Laravel", "MYSQL", "Javascript"],
  images: [
    "/Jendela_tani/jtani.png",
    "/Jendela_tani/jtani2.PNG",
    "/Jendela_tani/jtani3.PNG",
  ],
  gradient: g("oklch(0.6 0.15 275)", "oklch(0.7 0.2 320)"),
},

];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-5 pb-20 pt-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">My Projects</h1>

        <p className="mt-3 text-center text-sm text-muted-foreground">
         A selection of projects I've worked on and contributed to.
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
