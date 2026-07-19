import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const dentistas = [
  {
    nome: "Dra. Natasha Peres",
    role: "Co-fundadora · Odontologia e Estética",
    desc: "Especialista em odontologia estética e reabilitação oral. Acredita que cada sorriso carrega uma história — e merece ser tratado como peça única.",
    iniciais: "NP",
    foto: "/dr.natashaperes.png",
  },
  {
    nome: "Dr. Lucas Machado",
    role: "Co-fundador · Implantes e Cirurgia",
    desc: "Especialista em implantodontia e cirurgia oral. Precisão técnica guiada pelo cuidado de estar com o paciente em cada etapa.",
    iniciais: "LM",
    foto: "/dr.lucasmachado.png",
  },
];

export function Sobre() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".sob-title",
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
        ".sob-card",
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.15,
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
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(4,120,87,0.05), transparent 50%)",
        }}
      />

      <div className="container-nalu">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
            <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
            Quem está por trás
          </span>
          <h2 className="sob-title font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-zinc-900">
            Dois profissionais, <span className="italic text-gradient-emerald">uma mesma obsessão</span>: o seu sorriso.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {dentistas.map((d, i) => (
            <article
              key={i}
              className="sob-card group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-bg-base hover:border-emerald-700/40 hover:shadow-[0_12px_40px_-16px_rgba(4,120,87,0.2)] transition-all duration-500"
            >
              {/* Foto do doutor(a) */}
              <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100/40 to-zinc-100">
                <img
                  src={d.foto}
                  alt={d.nome}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Vinheta sutil pra dar leitura ao nome na base */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Iniciais flutuantes (badge) */}
                <div className="absolute top-5 left-5 glass-strong rounded-full h-11 w-11 flex items-center justify-center text-sm font-medium tracking-tight text-zinc-900">
                  {d.iniciais}
                </div>

                {/* Linha de canto */}
                <div
                  className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="p-7 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">
                  {d.nome}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-700">
                  {d.role}
                </div>
                <p className="mt-5 text-sm md:text-base text-zinc-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}