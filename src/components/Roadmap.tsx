import { motion } from 'motion/react';

const steps = [
  {
    year: "2023-2024",
    title: "Cimentación Operativa",
    description: "Lanzamiento de Simply Entregas y validación del modelo en minimarkets locales.",
    status: "completed"
  },
  {
    year: "Q4 2024",
    title: "Expansión Tecnológica",
    description: "Integración de Gemini API para automatización de rutas y gestión de Plan B.",
    status: "completed"
  },
  {
    year: "2025",
    title: "Mercado E 2025",
    description: "Hito institucional: Captación de inversión para escalabilidad interregional.",
    status: "current"
  },
  {
    year: "2026",
    title: "Ecosistema Integral",
    description: "Consolidación de CONFLUIA como la consultora líder en transformación digital sur.",
    status: "future"
  }
];

export default function Roadmap() {
  return (
    <section className="py-32 bg-[#050505] px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="text-[10px] uppercase tracking-[0.4em] text-indigo-400 font-bold mb-4">Proyección Estratégica</div>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">Visión y Escalabilidad <br /><span className="italic font-medium text-gradient">2023 — 2026</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-3 h-3 rounded-full ring-4 ${step.status === 'completed' ? 'bg-blue-500 ring-blue-500/20' : step.status === 'current' ? 'bg-white ring-indigo-500/40 animate-pulse' : 'bg-white/10 ring-transparent'}`} />
                <span className={`text-[10px] font-bold uppercase tracking-widest ${step.status === 'future' ? 'text-white/20' : 'text-blue-400'}`}>
                  {step.year}
                </span>
              </div>
              
              <h3 className={`text-lg font-semibold mb-3 ${step.status === 'future' ? 'text-white/40' : 'text-white'}`}>
                {step.title}
              </h3>
              
              <p className={`text-sm leading-relaxed font-light ${step.status === 'future' ? 'text-white/20' : 'text-white/50'}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
