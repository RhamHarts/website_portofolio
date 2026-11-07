import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-hero px-6 text-center">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Professional Portfolio
      </span>

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
        Muhammad <span className="text-gradient-name">Irham</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-2xl">
        Documenting my professional journey, experiences, projects, and
        continuous learning.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {/* <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Linkedin className="h-4 w-4" />
          Connect on LinkedIn
        </a> */}

        <Link
          href="/projects"
          className="inline-flex items-center rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:bg-muted"
        >
          View Projects
        </Link>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Scroll to explore
        <ChevronDown className="h-3 w-3 animate-bounce" />
      </div>
    </main>
  );
}
