import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ParticleField } from "./ParticleField";

const LOGO_SRC = "/nalu.png";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  useGSAP(
    () => {
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            stagger: 0.08,
            delay: 0.9,
          }
        );
      }
      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 1.6 }
        );
      }
    },
    { scope: container }
  );

  const headlineWords = ["Precisão", "que", "se", "vê.", "Cuidado", "que", "se", "sente."];

  return (
    <section
      id="top"
      ref={container}
      className="relative isolate min-h-svh overflow-hidden bg-bg-base"
    >
      {/* Malha tecnológica — agora sutil em claro */}
      <div className="absolute inset-0 tech-mesh opacity-80" aria-hidden="true" />

      {/* Gradiente de fundo com toque esmeralda */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(4,120,87,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Partículas */}
      <ParticleField density={50} />

      {/* Vinheta */}
      <div className="absolute inset-0 vignette pointer-events-none" aria-hidden="true" />

      {/* Conteúdo */}
      <motion.div
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="relative z-10 container-nalu flex min-h-svh flex-col items-center justify-center pt-28 pb-20 md:pt-32 md:pb-24 text-center"
      >
        <motion.img
          src={LOGO_SRC}
          alt="Nalu Odontologia"
          width={72}
          height={72}
          initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-9 h-16 w-16 md:h-[72px] md:w-[72px] rounded-xl object-contain"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-600 shadow-[0_1px_2px_rgba(10,10,10,0.04)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shadow-[0_0_10px_2px_rgba(4,120,87,0.45)]" />
          Vila Romana · São Paulo
        </motion.span>

        <h1
          ref={headlineRef}
          className="font-display mt-8 text-balance text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-zinc-900"
        >
          {headlineWords.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <span className="word inline-block px-[0.18em]">
                {i === 2 || i === 6 ? (
                  <span className="italic text-gradient-emerald">{w}</span>
                ) : (
                  w
                )}
              </span>
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="mt-8 max-w-xl text-base md:text-lg text-zinc-600 leading-relaxed"
        >
          Odontologia digital de excelência. Tecnologia de ponta, equipe
          especializada e atendimento humano — para o sorriso que você merece,
          do primeiro detalhe ao último.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col sm:flex-row items-center gap-3"
        >
          <a href="#contato" className="btn-primary">
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
            href="https://wa.me/5511932886991?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
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
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Trust badges inline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.3 }}
          className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500"
        >
          <span className="flex items-center gap-1.5">
            <Star /> 5.0 · 26 avaliações Google
          </span>
          <span className="hidden sm:inline h-3 w-px bg-zinc-300" />
          <span>Equipamentos digitais de última geração</span>
          <span className="hidden md:inline h-3 w-px bg-zinc-300" />
          <span>Equipe especializada · CRO ativo</span>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"
      >
        <span>Role para descobrir</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-emerald-700/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#047857" aria-hidden="true">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}