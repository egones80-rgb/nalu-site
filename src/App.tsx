import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Diferenciais } from "./components/Diferenciais";
import { Servicos } from "./components/Servicos";
import { Timeline } from "./components/Timeline";
import { Numeros } from "./components/Numeros";
import { Sobre } from "./components/Sobre";
import { Depoimentos } from "./components/Depoimentos";
import { Galeria } from "./components/Galeria";
import { Confianca } from "./components/Confianca";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh após montar tudo (evita problemas de trigger com fontes)
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-bg-base text-text-primary min-h-svh overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Numeros />
        <Diferenciais />
        <Sobre />
        <Servicos />
        <Timeline />
        <Depoimentos />
        <Galeria />
        <Confianca />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;