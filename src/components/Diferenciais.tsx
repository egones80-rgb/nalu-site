import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const diferentes = [
  {
    tag: "01",
    title: "Odontologia Digital",
    desc: "Escaneamento intraoral, planejamento virtual e cirurgia guiada — menos moldagem, mais precisão.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "02",
    title: "Tecnologia de Ponta",
    desc: "Equipamentos modernos, materiais premium e fluxo digital integrado do diagnóstico ao resultado.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    tag: "03",
    title: "Bioestética",
    desc: "Cada sorriso é estudado em proporção, função e personalidade — nada é genérico, tudo é seu.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12c2.5-3 5.5-4.5 9-4.5s6.5 1.5 9 4.5" />
        <path d="M5 16c1.5 2 4 3 7 3s5.5-1 7-3" />
        <circle cx="9" cy="11" r="0.9" fill="currentColor" />
        <circle cx="15" cy="11" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "04",
    title: "Atendimento Humanizado",
    desc: "Sem pressa, sem jargão. Você entende cada etapa, decide com calma e é ouvido de verdade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export function Diferenciais() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".dif-eyebrow",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".dif-title",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".dif-card",
        { autoAlpha: 0, y: 60, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.12,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".dif-grid",
            start: "top 80%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="diferenciais"
      ref={container}
      className="relative bg-bg-base py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(4,120,87,0.05), transparent 50%)",
        }}
      />

      <div className="container-nalu relative">
        <div className="max-w-2xl">
          <span className="dif-eyebrow inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-700">
            <span className="h-px w-8 bg-emerald-700/60" />
            Diferenciais
          </span>
          <h2 className="dif-title font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900">
            Quatro pilares para um <span className="italic text-gradient-emerald">atendimento fora da curva</span>.
          </h2>
        </div>

        <div className="dif-grid mt-16 md:mt-20 grid gap-4 md:grid-cols-2">
          {diferentes.map((d, i) => (
            <div
              key={i}
              className="dif-card group relative bg-bg-elevated rounded-2xl border border-zinc-200/70 p-8 md:p-10 transition-all duration-500 hover:border-emerald-700/40 hover:shadow-[0_8px_32px_-12px_rgba(4,120,87,0.18)] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-mono text-zinc-400">{d.tag}</span>
                <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                  <div className="h-6 w-6">{d.icon}</div>
                </div>
              </div>

              <h3 className="font-display mt-12 text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
                {d.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-zinc-600 leading-relaxed max-w-md">
                {d.desc}
              </p>

              {/* Linha de luz no hover */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-emerald-700/0 via-emerald-700 to-emerald-700/0 transition-all duration-700 group-hover:w-full"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}