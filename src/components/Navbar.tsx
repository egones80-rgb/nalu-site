import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LOGO_SRC = "/nalu.png";

const links = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#jornada", label: "Jornada" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-base/85 backdrop-blur-xl border-b border-zinc-200/70 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-nalu flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={LOGO_SRC}
            alt="Nalu Odontologia"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="text-sm font-medium tracking-tight text-zinc-900">
            Nalu <span className="text-zinc-500">Odontologia</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-600 hover:text-emerald-700 transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="text-sm font-medium px-4 py-2 rounded-full border border-zinc-300 hover:border-emerald-700 hover:text-emerald-700 transition-all"
          >
            Agendar avaliação
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-zinc-300 text-zinc-900"
        >
          <span className="block h-px w-4 bg-zinc-900 relative before:content-[''] before:absolute before:left-0 before:-top-1.5 before:h-px before:w-4 before:bg-zinc-900 after:content-[''] after:absolute after:left-0 after:top-1.5 after:h-px after:w-4 after:bg-zinc-900" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-zinc-200/70 bg-bg-base/95 backdrop-blur-xl"
        >
          <ul className="container-nalu py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-zinc-700 hover:text-emerald-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full"
              >
                Agendar avaliação
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}