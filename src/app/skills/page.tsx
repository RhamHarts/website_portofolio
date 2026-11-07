import type { Metadata } from "next";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiFigma,
  SiPython,
  SiFirebase,
  SiGithub,
  SiThreedotjs,
  SiChakraui,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiDocker,
} from "react-icons/si";

import { Bot, Workflow, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills — Muhammad Irham",
  description:
    "Technologies, tools, and professional skills I have learned and worked with.",
  openGraph: {
    title: "Skills — Muhammad Irham",
    description: "Technologies and tools I work with.",
  },
};

type Skill = {
  name: string;
  icon: IconType | typeof Bot;
  featured?: boolean;
};

const skills: Skill[] = [
  { name: "React.js", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript, featured: true },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Figma", icon: SiFigma },
  { name: "Python", icon: SiPython },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git/GitHub", icon: SiGithub },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "WordPress", icon: SiWordpress },
  { name: "AI/ML Integration", icon: Bot },
  { name: "CI/CD", icon: Workflow },
  { name: "Docker", icon: SiDocker },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div
      className={`relative flex h-16 items-center justify-center gap-2 rounded-md border bg-card/70 px-3 text-sm font-semibold transition-all hover:border-accent hover:shadow-skill ${
        skill.featured ? "border-accent shadow-skill" : "border-border"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" />

      <span className="truncate">{skill.name}</span>

      {skill.featured && (
        <Star className="absolute bottom-2 right-6 h-3.5 w-3.5 fill-current text-chart-4" />
      )}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background bg-stars px-5 pb-20 pt-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-accent">Skills</h1>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </main>
  );
}
