import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { resumeData } from "../data/resume";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
          >
            {resumeData.basics.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-medium text-slate-300 max-w-3xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              {resumeData.basics.title}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mt-4"
          >
            {resumeData.basics.summary.split('.')[0]}. {resumeData.basics.summary.split('.')[1]}.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#experience"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                View Experience
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
            
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center px-8 py-4 font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </button>
            
            <a
              href={`mailto:${resumeData.basics.email.split(' | ')[0]}`}
              className="inline-flex items-center justify-center p-4 text-slate-400 hover:text-teal-400 transition-colors rounded-full hover:bg-slate-800/50"
              aria-label="Contact Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
