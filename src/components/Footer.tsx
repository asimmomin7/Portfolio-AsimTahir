import { resumeData } from "../data/resume";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/50 relative z-10 bg-[#0f172a]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-sm text-slate-500 font-mono">
          {resumeData.extra.map((item, index) => (
            <span key={index} className="hidden md:inline-block">
              {item.split(':')[0]}: <span className="text-slate-400">{item.split(':')[1]}</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
