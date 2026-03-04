import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { resumeData } from "../data/resume";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Continuous Learning
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="glass-panel rounded-xl p-6 hover:bg-slate-800/60 transition-colors flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-200">{cert.name}</h4>
                    <span className="text-sm font-mono text-teal-400 mt-1 block">{cert.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Academic Background</h3>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="glass-panel rounded-xl p-6 hover:bg-slate-800/60 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-slate-300 mb-4">{edu.institution}</p>
                  <span className="inline-block px-3 py-1 text-xs font-mono text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
