import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { valor: 5.0, prefixo: "", sufixo: "", decimals: 1, label: "Nota no Google", sub: "26 avaliações verificadas" },
  { valor: 12, prefixo: "+", sufixo: "", decimals: 0, label: "Anos de experiência somados", sub: "Dra. Natasha + Dr. Lucas" },
  { valor: 2000, prefixo: "+", sufixo: "", decimals: 0, label: "Pacientes atendidos", sub: "Sorrisos transformados" },
  { valor: 5000, prefixo: "+", sufixo: "", decimals: 0, label: "Procedimentos realizados", sub: "Da prevenção à estética" },
];

function AnimatedNumber({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { v: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: to,
          duration: 2.2,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = `${prefix}${obj.v.toFixed(decimals)}${suffix}`;
          },
        });
      },
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(obj);
    };
  }, [to, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}
      {to.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Numeros() {
  return (
    <section className="relative bg-bg-elevated py-20 md:py-28 border-y border-zinc-200/70 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(4,120,87,0.06), transparent 60%)",
        }}
      />

      <div className="container-nalu">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-display text-5xl md:text-7xl font-medium tracking-tight text-gradient-emerald">
                <AnimatedNumber
                  to={s.valor}
                  decimals={s.decimals}
                  prefix={s.prefixo}
                  suffix={s.sufixo}
                />
              </div>
              <div className="mt-3 text-sm font-medium text-zinc-900">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center md:text-left text-[11px] text-zinc-500 max-w-2xl">
          * Números ilustrativos — atualizar após validação com a Nalu
          Odontologia (anos de experiência somados dos sócios, pacientes
          efetivamente atendidos e procedimentos realizados).
        </p>
      </div>
    </section>
  );
}