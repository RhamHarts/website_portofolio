import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";

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
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiDocker,
  SiPhp,
    SiMikrotik,
    SiCisco,
} from "react-icons/si";

import {
  Bot,
  Router,
  Wifi,
  Network,
  Activity,
  Palette,
  Wrench,
} from "lucide-react";

import { LuShell } from "react-icons/lu";
import { PiDiamondsFourBold } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Skills — Muhammad Irham",
  description:
    "Technologies, tools, and professional skills I have learned and worked with.",
  openGraph: {
    title: "Skills — Muhammad Irham",
    description: "Technologies and tools I work with.",
  },
};

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

type Skill = {
  name: string;
  icon?: SkillIcon;
  image?: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: SkillIcon;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Coding & Development",
    description:
      "Languages, frameworks, and technologies I've used to build applications and websites.",
    icon: Bot,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
            { name: "Git/GitHub", icon: SiGithub },
      { name: "Firebase", icon: SiFirebase },
      { name: "Docker", icon: SiDocker },
      { name: "WordPress", icon: SiWordpress },
      { name: "AI/ML Integration", icon: Bot },
    ],
  },
  {
    title: "Networking & Infrastructure",
    description:
      "Networking concepts and infrastructure technologies related to network operations.",
    icon: Network,
    skills: [
      { name: "Network Monitoring", icon: Activity },
      { name: "Network Switch", icon: Router },
      { name: "Wireless Networking", icon: Wifi },
      { name: "Network Troubleshooting", icon: Wrench },
      { name: "MikroTik", icon: SiMikrotik },
      { name: "Xshell", icon: LuShell },
      { name: "Cisco", icon: SiCisco },
      { name: "LibreNMS", icon: PiDiamondsFourBold },
    ],
  },
{
  title: "Design & Editing",
  description:
    "Visual design and interface tools used to explore and create digital experiences.",
  icon: Palette,
  skills: [
    { name: "Figma", icon: SiFigma },
    { name: "Adobe Photoshop",   image: "/icons/adobe-photoshop.svg", },
    { name: "Canva",    image: "/icons/canva.svg", },
    {
      name: "CapCut",
      image: "/icons/capcut.svg",
    },
    
  ],
},

];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <div className="flex h-16 items-center justify-center gap-2 rounded-md border border-border bg-card/70 px-3 text-sm font-semibold transition-all hover:border-accent hover:shadow-skill">
      {skill.image && (
        <Image
          src={skill.image}
          alt={`${skill.name} icon`}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain"
        />
      )}

      {Icon && <Icon className="h-4 w-4 shrink-0" />}

      <span className="truncate">{skill.name}</span>
    </div>
  );
}

function SkillSection({
  category,
}: {
  category: SkillCategory;
}) {
  const Icon = category.icon;

  return (
    <section>
      <div className="mb-5 flex items-start gap-3">
        <div className="rounded-lg border border-border bg-card p-2">
          <Icon className="h-5 w-5 text-accent" />
        </div>

        <div>
          <h2 className="text-lg font-bold tracking-tight">
            {category.title}
          </h2>

          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background bg-stars px-5 pb-20 pt-28 sm:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            My Skills
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Things I've learned, tools I've explored, and skills I continue
            to develop.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-12 space-y-12">
          {categories.map((category) => (
            <SkillSection
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </main>
  );
}