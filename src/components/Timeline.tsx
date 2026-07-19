import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const etapas = [
  {
    n: "01",
    titulo: "Avaliação",
    desc: "Conversa inicial, escuta ativa e exame clínico completo pra entender você e sua queixa.",
  },
  {
    n: "02",
    titulo: "Diagnóstico",
    desc: "Exames digitais, escaneamento intraoral e imagens de alta precisão quando necessário.",
  },
  {
    n: "03",
    titulo: "Plano de Tratamento",
    desc: "Proposta clara por escrito: etapas, tempo, investimento e alternativas. Sem caixa-preta.",
  },
  {
    n: "04",
    titulo: "Procedimento",
    desc: "Execução com tecnologia de ponta, técnicas modernas e cuidado com seu conforto.",
  },
  {
    n: "05",
    titulo: "Acompanhamento",
    desc: "Consultas de retorno, ajustes finos e monitoramento do resultado ao longo do tempo.",
  },
  {
    n: "06",
    titulo: "Resultado",
    desc: "Sorriso que funciona, que dura e que você se orgulha de mostrar — todos os dias.",
  },
];

export function Timeline() {
  const container = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".tl-title",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: container.current, start: "top 75%" },
        }
      );

      // Cards entram com stagger
      gsap.fromTo(
        ".tl-card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".tl-grid",
            start: "top 82%",
          },
        }
      );

      // Barra de progresso avança com scroll (substitui a linha horizontal quebrada)
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <section
      id="jornada"
      ref={container}
      className="relative bg-bg-elevated py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(4,120,87,0.04), transparent 60%)",
        }}
      />

      <div className="container-nalu">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
            <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
            A jornada
          </span>
          <h2 className="tl-title font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900">
            Seis etapas, <span className="italic text-gradient-emerald">uma experiência</span> que respeita seu tempo.
          </h2>

          {/* Barra de progresso animada (substitui a linha quebrada) */}
          <div className="mt-8 h-px bg-zinc-200 relative overflow-hidden rounded-full">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-emerald-700/0 via-emerald-700 to-emerald-700/0"
              style={{ transform: "scaleX(0)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Grid: 1 col mobile, 2 md, 3 lg — sempre mostra todas as 6 */}
        <div className="tl-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
          {etapas.map((e, i) => (
            <article key={i} className="tl-card relative">
              <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 shrink-0 rounded-full bg-bg-base border border-emerald-700 flex items-center justify-center text-xs font-mono text-emerald-700 shadow-[0_2px_8px_-2px_rgba(4,120,87,0.25)]">
                  {e.n}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-zinc-900">
                  {e.titulo}
                </h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed pl-14">
                {e.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}