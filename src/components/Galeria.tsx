import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ambientes = [
  { label: "Recepção", cor: "from-emerald-50 to-zinc-100" },
  { label: "Consultório", cor: "from-zinc-100 to-emerald-50" },
  { label: "Equipamentos", cor: "from-emerald-100/60 to-zinc-50" },
  { label: "Equipe", cor: "from-zinc-50 to-emerald-100/60" },
  { label: "Atendimento", cor: "from-emerald-50 to-zinc-50" },
  { label: "Detalhes", cor: "from-zinc-100/50 to-emerald-50" },
];

export function Galeria() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gal-title",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: container.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".gal-item",
        { autoAlpha: 0, scale: 0.94, y: 30 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: ".gal-grid",
            start: "top 82%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="resultados"
      ref={container}
      className="relative bg-bg-base py-24 md:py-32 overflow-hidden"
    >
      <div className="container-nalu">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
            <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
            A clínica
          </span>
          <h2 className="gal-title font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900">
            Um espaço pensado para que você <span className="italic text-gradient-emerald">se sinta em casa</span>.
          </h2>
        </div>

        <div className="gal-grid grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {ambientes.map((a, i) => (
            <div
              key={i}
              className="gal-item group relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-xl border border-zinc-200/70 bg-gradient-to-br hover:border-emerald-700/50 transition-all duration-500 hover:shadow-[0_12px_32px_-16px_rgba(4,120,87,0.25)] hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${a.cor}`}
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center text-emerald-700">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.9"
                  className="opacity-40"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="18" height="14" rx="2" />
                  <circle cx="12" cy="13" r="3.5" />
                  <path d="M9 6V4h6v2" />
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-black/15 to-transparent">
                <span className="text-xs md:text-sm font-medium tracking-tight text-zinc-800">
                  {a.label}
                </span>
              </div>

              <div
                className="absolute inset-0 bg-emerald-700/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}