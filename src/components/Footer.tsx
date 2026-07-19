const LOGO_SRC = "/nalu.png";

export function Footer() {
  return (
    <footer className="relative bg-bg-elevated border-t border-zinc-200/70 pt-20 pb-10 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(4,120,87,0.35) 50%, transparent)",
        }}
      />

      <div className="container-nalu">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={LOGO_SRC}
                alt="Nalu Odontologia"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-contain"
              />
              <span className="text-sm font-medium tracking-tight text-zinc-900">
                Nalu <span className="text-zinc-500">Odontologia</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-zinc-600 leading-relaxed max-w-sm">
              Odontologia digital de excelência na Vila Romana. Tecnologia de
              ponta, equipe especializada e atendimento humano.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://wa.me/5511932886991"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-emerald-700 hover:text-emerald-700 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-emerald-700 hover:text-emerald-700 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/Mh3AYoDutVnm8dVb9"
                target="_blank"
                rel="noreferrer"
                aria-label="Como chegar"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:border-emerald-700 hover:text-emerald-700 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-5">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li>
                R. Tito, 678 — Vila Romana
                <br />
                São Paulo — SP · 05051-000
              </li>
              <li>
                <a
                  href="tel:+5511932886991"
                  className="hover:text-emerald-700 transition-colors"
                >
                  (11) 93288-6991
                </a>
              </li>
              <li className="text-zinc-500">
                contato@naluodontologia.com.br
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-5">
              Horário
            </h3>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li className="flex justify-between">
                <span>Seg-Sex</span>
                <span className="text-zinc-500">9h–20h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-zinc-500">8h–18h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-zinc-500">Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-zinc-200/70 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Nalu Odontologia · Dra. Natasha Peres ·
            Dr. Lucas Machado · CRO ativo · Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-500">
            Em conformidade com o CFO · Conteúdo informativo, não substitui
            consulta.
          </p>
        </div>
      </div>
    </footer>
  );
}