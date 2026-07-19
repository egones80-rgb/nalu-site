import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CTAFinal() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-frase",
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: container.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        ".cta-btn",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.4,
          stagger: 0.1,
          scrollTrigger: { trigger: container.current, start: "top 75%" },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="contato"
      ref={container}
      className="relative isolate bg-bg-base py-28 md:py-40 overflow-hidden"
    >
      {/* Fundo com toque esmeralda profundo */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(4,120,87,0.10), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.05), transparent 50%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
        aria-hidden="true"
      />

      <div className="container-nalu text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-emerald-700">
          Vamos conversar
        </span>

        <h2 className="cta-frase font-display mt-7 text-balance text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.02] tracking-tight max-w-4xl mx-auto text-zinc-900">
          Seu próximo sorriso
          <br />
          começa com <span className="italic text-gradient-emerald">uma conversa</span>.
        </h2>

        <p className="cta-frase mt-8 max-w-xl mx-auto text-base md:text-lg text-zinc-600 leading-relaxed">
          Agende uma avaliação sem compromisso. Atendimento humanizado,
          diagnóstico preciso e um plano claro pra você decidir com calma.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511932886991?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noreferrer"
            className="cta-btn btn-primary"
          >
            Agendar avaliação
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/5511932886991"
            target="_blank"
            rel="noreferrer"
            className="cta-btn btn-secondary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            (11) 93288-6991
          </a>
        </div>

        <p className="cta-frase mt-10 text-xs text-zinc-500">
          Seg-Sex 9h-20h · Sáb 8h-18h · Vila Romana, São Paulo
        </p>
      </div>
    </section>
  );
}