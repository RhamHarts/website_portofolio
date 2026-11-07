export type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  gradient: string;
};

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card transition-transform hover:-translate-y-1">
      <div
        className="grid h-44 place-items-center"
        style={{ background: p.gradient }}
      >
        <span className="text-2xl font-extrabold tracking-wide text-primary-foreground">
          {p.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold">{p.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
