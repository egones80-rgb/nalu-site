import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Campo de partículas verdes sutis no fundo.
 * Canvas puro com animação leve (sem dependência externa).
 */
export function ParticleField({
  density = 60,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(4, 120, 87, ${p.alpha * 0.85})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    // GSAP fade-in do canvas
    gsap.fromTo(
      canvas,
      { opacity: 0 },
      { opacity: 1, duration: 2.4, ease: "power3.out" }
    );

    return () => {
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}