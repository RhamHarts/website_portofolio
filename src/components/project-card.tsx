"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  images?: string[];
  gradient: string;
};

export function ProjectCard({ p }: { p: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = p.images ?? [];
  const hasImages = images.length > 0;

  const showNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, images.length]);

  return (
    <>
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
        {/* Thumbnail Slider */}
        <div
          className="group relative aspect-[16/10] overflow-hidden"
          style={{ background: p.gradient }}
        >
          {hasImages ? (
            <>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label={`Perbesar gambar ${p.title}`}
                className="absolute inset-0 z-0 h-full w-full cursor-zoom-in"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${p.title} - gambar ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-100 transition hover:bg-black/75 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    &#10094;
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Gambar berikutnya"
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-100 transition hover:bg-black/75 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    &#10095;
                  </button>

                  <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="grid h-full place-items-center">
              <span className="text-2xl font-extrabold tracking-wide text-primary-foreground">
                {p.tag}
              </span>
            </div>
          )}
        </div>

        {/* Project Information */}
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

      {/* Lightbox Slider */}
      {isLightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Tutup gambar"
            className="absolute right-5 top-5 z-30 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            &#10005;
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 z-30 rounded-full bg-white/10 p-3 text-xl text-white transition hover:bg-white/20 sm:left-8"
            >
              &#10094;
            </button>
          )}

          {/* Image */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Galeri ${p.title}`}
            onClick={(event) => event.stopPropagation()}
            className="relative h-[75vh] w-full max-w-6xl"
          >
            <Image
              src={images[currentIndex]}
              alt={`${p.title} - gambar ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Gambar berikutnya"
              className="absolute right-3 z-30 rounded-full bg-white/10 p-3 text-xl text-white transition hover:bg-white/20 sm:right-8"
            >
              &#10095;
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            {currentIndex + 1} / {images.length} — {p.title}
          </div>
        </div>
      )}
    </>
  );
}