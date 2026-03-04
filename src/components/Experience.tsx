import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Building2 } from "lucide-react";
import { useState } from "react";
import { resumeData } from "../data/resume";
import { cn } from "../lib/utils";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Career Journey
          </h2>
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((job, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "glass-panel rounded-2xl overflow-hidden transition-all duration-300",
                  isExpanded ? "ring-1 ring-blue-500/50 shadow-blue-900/20" : "hover:bg-slate-800/60"
                )}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-400">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {job.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-400 transition-transform duration-300",
                    isExpanded && "rotate-180 bg-blue-500/20 text-blue-400"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 pt-0 border-t border-slate-800/50">
                        <ul className="mt-6 space-y-4">
                          {job.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
