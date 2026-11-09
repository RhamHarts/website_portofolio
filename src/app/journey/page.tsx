import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey — Muhammad Irham",
  description:
    "My professional experiences, contributions, and career journey.",
};

const experiences = [
  {
    period: "April 2023 — August 2023",
    year: "2023",
    title: "Pengembang Aplikasi Android",
    company: "Amonisasi",
    description:
      "Mengembangkan aplikasi Android menggunakan React Native untuk pendataan kesehatan ibu hamil dan melahirkan.",
    responsibilities: [
      "Mengembangkan fitur pendaftaran pengguna.",
      "Mengimplementasikan fitur pelacakan kesehatan dan pengingat jadwal.",
      "Memastikan aplikasi responsif dan mudah digunakan melalui desain antarmuka yang intuitif.",
      "Melakukan pengujian dan optimasi untuk memastikan kinerja aplikasi stabil dan meminimalkan bug.",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Firebase",
    ],
  },
  {
    period: "2024 — 2026",
    year: "2024",
    title: "Kolaborator dan Pengembang Web",
    company: "Web Development",
    description:
      "Bekerja sama dengan tim kecil untuk merancang, mengembangkan, dan meluncurkan aplikasi berbasis web.",
    responsibilities: [
      "Berkolaborasi dalam merancang, mengembangkan, dan meluncurkan website aplikasi.",
      "Mengimplementasikan fitur autentikasi pengguna, manajemen konten, dan antarmuka responsif.",
      "Mengembangkan aplikasi menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan Bootstrap.",
      "Menyediakan solusi teknis serta melakukan debugging untuk mengoptimalkan kinerja aplikasi.",
      "Berkontribusi dalam perancangan UI/UX untuk meningkatkan pengalaman pengguna.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Bootstrap",
    ],
  },
{
  period: "Oktober 2026 — Sekarang",
  year: "2026",
  title: "Network Operations Center (NOC) Engineer",
  company: "PT. Global Inti Corporatama Indonesia",
  location: "Jakarta Pusat, Indonesia",
  description:
    "Bertanggung jawab dalam pemantauan, pemeliharaan, dan penanganan insiden infrastruktur jaringan perusahaan untuk memastikan konektivitas dan operasional sistem tetap stabil.",
  responsibilities: [
    "Memantau infrastruktur jaringan perusahaan selama 24 jam secara bergantian untuk mencegah gangguan koneksi internet maupun sistem.",
    "Menangani tiket dukungan darurat melalui telepon dan email secara bergiliran, dengan melakukan penanganan awal secara cepat serta menyelesaikan insiden secara efektif.",
    "Melakukan konfigurasi dan pemeliharaan perangkat jaringan, termasuk Network Switch dan perangkat jaringan nirkabel (Wireless Networking), guna memastikan konektivitas tetap stabil dan aman.",
    "Menggunakan perangkat monitoring jaringan berstandar industri untuk memantau kondisi jaringan, mengidentifikasi anomali, dan menerapkan tindakan perbaikan dengan cepat.",
  ],
  technologies: [
    "Network Monitoring",
    "Network Switch",
    "Wireless Networking",
    "Network Troubleshooting",
    "Incident Management",
  ],
},
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-background px-5 pb-20 pt-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Professional Journey
          </span>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            My Experience
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A timeline of my professional experiences, contributions,
            and continuous growth throughout my journey.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative border-l border-border pl-6 sm:pl-8">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.year}-${experience.title}`}
                className={`relative ${
                  index !== experiences.length - 1 ? "pb-12" : ""
                }`}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[39px]" />

                {/* Experience Card */}
                <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-accent">
                      {experience.period}
                    </span>

                    <span className="rounded-md bg-muted px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                      Experience
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-bold">
                    {experience.title}
                  </h2>

                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {experience.company}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider">
                      Responsibilities & Contributions
                    </h3>

                    <ul className="mt-3 space-y-3">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider">
                      Technologies
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-muted px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}