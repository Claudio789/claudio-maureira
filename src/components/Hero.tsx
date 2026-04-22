import { motion } from 'motion/react';
import { Package, Cpu, ArrowRight } from 'lucide-react';

interface HeroProps {
  onAction: () => void;
}

export default function Hero({ onAction }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-[#e5e5e5] pt-32 pb-20 px-6">
      {/* Background 3D Abstract Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-900/40 to-transparent rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-900/40 to-transparent rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 text-left"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-6">
            Valdivia, Chile • Mercado E 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] text-white mb-8">
            Optimización Operativa e <br />
            <span className="text-gradient font-medium italic">Inteligencia Estratégica</span>
          </h1>
          
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-[540px] font-light">
            Se facilita la integración de automatizaciones de IA y logística colaborativa para transformar la gestión empresarial en resultados tangibles y escalables.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-colors shadow-xl shadow-white/5"
            >
              Ver Casos de Éxito
            </motion.a>
            <button
              onClick={onAction}
              className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors outline-none cursor-pointer"
            >
              Explorar Alianzas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5 relative flex justify-center"
        >
          {/* Simulated 3D Object from Design HTML */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative group">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
            <motion.div 
              animate={{ rotate: [12, 15, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full border border-white/10 rounded-3xl bg-white/5 backdrop-blur-xl flex items-center justify-center"
            >
              <div className="w-40 h-40 border-2 border-indigo-400/30 rounded-full flex items-center justify-center">
                 <div className="w-20 h-20 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.5)]"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/40 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
