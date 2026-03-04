import { motion } from "framer-motion";
import { Cloud, Server, Network, Database, Shield, Wrench, Settings, Users } from "lucide-react";
import { resumeData } from "../data/resume";

export function Skills() {
  const icons = {
    "Cloud & Hybrid IT": Cloud,
    "Infrastructure & Virtualization": Server,
    "Networking": Network,
    "Microsoft Technologies": Settings,
    "Security": Shield,
    "Backup & DR": Database,
    "Management": Users,
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Core Competencies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = icons[skillGroup.category as keyof typeof icons] || Wrench;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-8 group hover:bg-slate-800/60 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-blue-400 -mr-12 -mt-12" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 flex-grow">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
