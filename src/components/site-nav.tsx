import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-0 sm:px-10">
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-b-xl border border-t-0 border-border bg-nav px-4 py-3 backdrop-blur sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-name)] text-sm font-bold">
            MI
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold text-accent">
              Muhammad Irham
            </span>
            <span className="block truncate text-[10px] text-muted-foreground">
              Professional Portfolio
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
