import { useEffect, useRef } from "react";

const depoimentos = [
  {
    nome: "Camila R.",
    servico: "Estética Dental",
    texto:
      "Eu tinha medo de dentista desde criança. Aqui foi completamente diferente — me explicaram tudo, sem pressa, e o resultado ficou exatamente como planejamos.",
    iniciais: "CR",
  },
  {
    nome: "Rafael M.",
    servico: "Implantes",
    texto:
      "Pesquisei bastante antes de escolher. O que me convenceu foi o atendimento e a tecnologia que vi na primeira consulta. Hoje indico de olhos fechados.",
    iniciais: "RM",
  },
  {
    nome: "Juliana T.",
    servico: "Ortodontia",
    texto:
      "Dra. Natasha me acompanha há dois anos. Profissional incrível, atenciosa, e sempre disponível pra tirar minhas dúvidas. Meu sorriso tá outro.",
    iniciais: "JT",
  },
  {
    nome: "Marcelo S.",
    servico: "Clínica Geral",
    texto:
      "Clínica impecável, equipe simpática e o Dr. Lucas é daqueles profissionais que você confia de cara. Saindo de lá com a sensação de ter sido bem cuidado.",
    iniciais: "MS",
  },
  {
    nome: "Beatriz L.",
    servico: "Clareamento",
    texto:
      "Resultado lindo e natural. Ninguém percebeu que fiz clareamento, só notaram que eu tava sorrindo mais. Exatamente o que eu queria.",
    iniciais: "BL",
  },
];

export function Depoimentos() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes marqueeX {
        from { transform: translate3d(0,0,0); }
        to   { transform: translate3d(-50%,0,0); }
      }
      .marquee-track {
        animation: marqueeX 60s linear infinite;
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section className="relative bg-bg-base py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 80% 30%, rgba(4,120,87,0.04), transparent 50%)",
        }}
      />

      <div className="container-nalu mb-14 md:mb-20">
        <span className="text-xs uppercase tracking-[0.22em] text-emerald-700">
          <span className="inline-block h-px w-8 bg-emerald-700/60 align-middle mr-3" />
          Depoimentos
        </span>
        <h2 className="font-display mt-5 text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight max-w-2xl text-zinc-900">
          Palavras de quem <span className="italic text-gradient-emerald">confiou na Nalu</span>.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
        }}
      >
        <div className="marquee-track flex gap-5 w-max">
          {[...depoimentos, ...depoimentos].map((d, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-[360px] md:w-[420px] p-7 rounded-2xl bg-bg-elevated border border-zinc-200/70 shadow-[0_4px_20px_-8px_rgba(10,10,10,0.06)]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#047857"
                className="mb-4 opacity-80"
                aria-hidden="true"
              >
                <path d="M9.5 7C7 7 5 9 5 11.5c0 2.5 2 4.5 4.5 4.5H10v1c0 1.5-1 2.5-2.5 2.5v2c3 0 5-2 5-5v-5c0-2.5-1.5-4.5-3-4.5zm8 0c-2.5 0-4.5 2-4.5 4.5 0 2.5 2 4.5 4.5 4.5H18v1c0 1.5-1 2.5-2.5 2.5v2c3 0 5-2 5-5v-5c0-2.5-1.5-4.5-3-4.5z" />
              </svg>
              <p className="text-base text-zinc-700 leading-relaxed">
                "{d.texto}"
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-zinc-200/70">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-sm font-semibold text-white">
                  {d.iniciais}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">{d.nome}</div>
                  <div className="text-xs text-zinc-500">{d.servico}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-[11px] text-zinc-500 max-w-xl mx-auto px-6">
        * Depoimentos ilustrativos — substituir por avaliações reais com
        consentimento dos pacientes.
      </p>
    </section>
  );
}