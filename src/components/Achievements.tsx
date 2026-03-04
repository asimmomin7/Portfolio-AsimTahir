import { motion } from "framer-motion";
import { Trophy, Cloud, Shield, Server } from "lucide-react";
import { resumeData } from "../data/resume";

export function Achievements() {
  const icons = {
    "Migration Success": Cloud,
    "Cloud Migration": Cloud,
    "Security Hardening": Shield,
    "Infrastructure Excellence": Server,
    "Networking Excellence": Server,
  };

  return (
    <section id="achievements" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Measurable Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[achievement.context as keyof typeof icons] || Trophy;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 group hover:bg-slate-800/60 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-blue-400 -mr-8 -mt-8" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-sm font-mono text-teal-400 mb-2 uppercase tracking-wider">
                    {achievement.context}
                  </h4>
                  
                  <p className="text-slate-200 text-lg leading-relaxed flex-grow">
                    {achievement.item}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
