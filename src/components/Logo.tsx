import { motion } from "framer-motion";

/**
 * Logo Nalu — monograma minimalista com "N" e curva de sorriso sutil.
 * Adapta a cor do "N" automaticamente baseado no tema (claro/escuro).
 */
export function Logo({
  className = "",
  size = 36,
  animated = false,
  variant = "dark", // "dark" pro logo sobre fundo claro, "light" pra fundo escuro
}: {
  className?: string;
  size?: number;
  animated?: boolean;
  variant?: "dark" | "light";
}) {
  const letterFill = variant === "dark" ? "#0A0A0A" : "#FAFAF7";
  const hexFill = variant === "dark" ? "rgba(4,120,87,0.06)" : "rgba(255,255,255,0.06)";

  const content = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nalu Odontologia"
      role="img"
    >
      <defs>
        <linearGradient id="naluGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Hexágono sutil de fundo */}
      <path
        d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
        stroke="url(#naluGradient)"
        strokeWidth="1.4"
        fill={hexFill}
      />
      {/* Letra N estilizada */}
      <path
        d="M12 28V12H14.5L23.5 22.5V12H26V28H23.5L14.5 17.5V28H12Z"
        fill={letterFill}
      />
      {/* Curva de sorriso — toque distintivo */}
      <path
        d="M15 31Q20 33.5 25 31"
        stroke="url(#naluGradient)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {content}
      </motion.div>
    );
  }

  return <div className={className}>{content}</div>;
}