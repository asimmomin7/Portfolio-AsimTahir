import { motion } from "framer-motion";
import { resumeData } from "../data/resume";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
              Architecting Resilient Infrastructure
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              <p className="leading-relaxed">
                {resumeData.basics.summary}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-800">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-white">10+</span>
                <span className="text-sm text-slate-400 font-mono">Years Experience</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-white">99.9%</span>
                <span className="text-sm text-slate-400 font-mono">Uptime Target</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-white">3000+</span>
                <span className="text-sm text-slate-400 font-mono">Users Migrated</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold text-white">30m</span>
                <span className="text-sm text-slate-400 font-mono">Disaster RTO</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
