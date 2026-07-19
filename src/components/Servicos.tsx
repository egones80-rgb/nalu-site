import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const servicos = [
  {
    title: "Implantes Dentários",
    desc: "Reabilitação completa com cirurgia guiada e próteses sobre implantes. Funcionalidade e estética restauradas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v8M8 10h8M9 10v6M15 10v6M10 16h4l-1 6h-2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ortodontia",
    desc: "Aparelhos fixos estéticos e alinhadores invisíveis para alinhar o sorriso com conforto e previsibilidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="9" width="4" height="6" rx="1" />
        <rect x="10" y="9" width="4" height="6" rx="1" />
        <rect x="17" y="9" width="4" height="6" rx="1" />
        <path d="M5 12h2M12 12h2M19 12h2" />
      </svg>
    ),
  },
  {
    title: "Estética Dental",
    desc: "Lentes de contato, facetas e restaurações em cerâmica para um sorriso natural, harmônico e luminoso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 11c1-3 3-5 7-5s6 2 7 5" />
        <path d="M3 13c0 2 1 3 2 3M21 13c0 2-1 3-2 3M7 16h10" />
        <path d="M8 13c0 1 1 2 2 2M14 13c0 1 1 2 2 2" />
      </svg>
    ),
  },
  {
    title: "Clareamento",
    desc: "Protocolos seguros em consultório e combinados para um clareamento gradual e duradouro.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5z" />
      </svg>
    ),
  },
  {
    title: "Endodontia",
    desc: "Tratamento de canal com tecnologia rotatória e microscopia clínica. Confortável e preciso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M8 7c0 4 4 5 4 10M16 7c0 4-4 5-4 10" />
        <circle cx="12" cy="3" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Odontopediatria",
    desc: "Atendimento lúdico e cuidadoso para crianças. Primeiro dentista vira memória boa.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="10" cy="8" r="0.7" fill="currentColor" />
        <circle cx="14" cy="8" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Clínica Geral",
    desc: "Limpeza, restaurações, prevenção e cuidados diários. A base que sustenta um sorriso saudável.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

export function Servicos() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".svc-title",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".svc-card",
        { autoAlpha: 0, y: 50, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: ".svc-grid",
            start: "top 82%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="servicos"
      ref={container}
      className="relative bg-bg-base py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 20% 90%, rgba(4,120,87,0.05), transparent 40%)",
        }}
      />

      <div className="container-nalu relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
              <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
              Serviços
            </span>
            <h2 className="svc-title font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900 max-w-2xl">
              Soluções completas, <span className="italic text-gradient-emerald">da prevenção à estética</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-600">
            Cada tratamento é desenhado para a sua necessidade. Você recebe
            um plano claro, com etapas, tempo e investimento transparentes.
          </p>
        </div>

        <div className="svc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((s, i) => (
            <article
              key={i}
              className="svc-card group relative p-7 rounded-2xl bg-bg-elevated border border-zinc-200/70 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-700/40 hover:shadow-[0_12px_32px_-16px_rgba(4,120,87,0.22)]"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                  <div className="h-6 w-6">{s.icon}</div>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display mt-10 text-xl md:text-2xl font-medium tracking-tight text-zinc-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-7 flex items-center gap-2 text-xs text-emerald-700/80 group-hover:text-emerald-700 transition-colors">
                <span>Saber mais</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}