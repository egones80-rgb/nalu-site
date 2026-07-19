import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Confianca() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".conf-text",
        { autoAlpha: 0, x: -40 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: container.current, start: "top 70%" },
        }
      );

      gsap.fromTo(
        ".conf-img",
        { autoAlpha: 0, x: 40, filter: "blur(12px)" },
        {
          autoAlpha: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "expo.out",
          delay: 0.2,
          scrollTrigger: { trigger: container.current, start: "top 70%" },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative bg-bg-elevated py-24 md:py-32 overflow-hidden"
    >
      <div className="container-nalu grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="conf-text md:col-span-6">
          <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
            <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
            Confiança
          </span>
          <h2 className="font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900">
            Cada detalhe, <span className="italic text-gradient-emerald">com precisão de cirurgião</span>.
          </h2>
          <p className="mt-7 text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
            Por trás de cada sorriso entregue está uma equipe que estuda,
            planeja e executa com critério. A tecnologia amplia nosso alcance
            — mas é o cuidado humano que sustenta o resultado.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <div className="font-display text-3xl text-emerald-700">100%</div>
              <div className="mt-1 text-xs text-zinc-500 leading-relaxed">
                Protocolos de biossegurança rigorosos
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-emerald-700">CRO</div>
              <div className="mt-1 text-xs text-zinc-500 leading-relaxed">
                Profissionais em atividade regular
              </div>
            </div>
          </div>
        </div>

        <div className="conf-img md:col-span-6 relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-emerald-50">
            {/* Spot light dramático emerald */}
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(4,120,87,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.08), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 200 240"
                className="w-2/3 h-2/3 text-emerald-700/30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                aria-hidden="true"
              >
                <circle cx="100" cy="60" r="28" />
                <path d="M60 240 Q60 130 100 110 Q140 130 140 240" />
                <path d="M75 160 Q100 175 125 160" strokeLinecap="round" />
              </svg>
            </div>

            <div
              className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-700/50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-700/30 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">
                  Em atendimento
                </div>
                <div className="mt-1 text-sm text-zinc-700 font-medium">
                  Precisão em cada gesto
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-700 shadow-[0_0_12px_2px_rgba(4,120,87,0.7)] animate-pulse" />
            </div>
          </div>

          <div
            className="absolute -inset-8 -z-10 blur-3xl opacity-25"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at center, rgba(4,120,87,0.35), transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}