/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SplashScreen } from "./components/SplashScreen";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-50 font-sans selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <AnimatedBackground />
          <main className="relative z-10 flex flex-col">
            <Hero />
            <About />
            <Achievements />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

