import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { resumeData } from "../data/resume";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Infrastructure Initiatives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  {project.links.length > 0 && (
                    <a href={project.links[0]} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <ul className="mt-4 space-y-3 mb-8 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 leading-relaxed text-sm">
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
