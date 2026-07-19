import { useEffect, useRef, type ReactNode, type JSX } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
};

/**
 * Helper de reveal on scroll.
 * Aplica opacity 0 + translateY e revela conforme entra na viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
  id,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y]);

  const Tag = as as keyof JSX.IntrinsicElements;

  // Cast seguro — TS não consegue inferir a tag dinâmica, mas a runtime valida
  return (
    // @ts-ignore — dynamic JSX tag
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}