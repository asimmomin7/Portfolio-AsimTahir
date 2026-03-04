import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { resumeData } from "../data/resume";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-sm font-mono text-teal-400 tracking-widest uppercase mb-4">
            07. Get In Touch
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href={`mailto:${resumeData.basics.email.split(' | ')[0]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Email</h4>
            <p className="text-slate-400 text-sm break-all">
              {resumeData.basics.email.split(' | ')[0]}
            </p>
          </motion.a>

          <motion.a
            href={`tel:${resumeData.basics.phone.split(',')[0]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Phone</h4>
            <p className="text-slate-400 text-sm">
              {resumeData.basics.phone.split(',')[0]}
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Location</h4>
            <p className="text-slate-400 text-sm">
              {resumeData.basics.location}
            </p>
          </motion.div>

          <motion.a
            href={`https://${resumeData.basics.links.LinkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">LinkedIn</h4>
            <p className="text-slate-400 text-sm">
              Connect with me
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
