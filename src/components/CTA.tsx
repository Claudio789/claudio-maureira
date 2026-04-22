import { motion } from 'motion/react';
import { Briefcase, Coins, Ship, ChevronRight } from 'lucide-react';
import { ModalType } from './ContactModal';

const funnelSteps = [
  {
    title: "Opciones de trabajo colaborativo",
    benefit: "Sinergia Profesional",
    description: "Espacio para el desarrollo de proyectos conjuntos que requieran gestión operativa y visión estratégica.",
    icon: Briefcase,
    color: "blue"
  },
  {
    title: "Propuestas para inversionistas",
    benefit: "Retorno y Escalabilidad",
    description: "Presentación de planes de expansión y oportunidades de inyección de capital en proyectos con tracción real.",
    icon: Coins,
    color: "purple"
  },
  {
    title: "Integración de servicios logísticos",
    benefit: "Eficiencia Local",
    description: "Alianzas para comercios que buscan profesionalizar sus entregas y optimizar sus flujos de distribución.",
    icon: Ship,
    color: "emerald"
  }
];

interface CTAProps {
  onAction: (type: ModalType) => void;
}

export default function CTA({ onAction }: CTAProps) {
  return (
    <section id="contact" className="py-32 bg-[#050505] text-[#e5e5e5] px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6">Próximos Pasos</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
              Diseñemos el futuro del <br />
              <span className="text-gradient italic font-medium">Comercio Inteligente</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
              Se invita a establecer contacto para explorar alianzas estratégicas, inversiones o la implementación de soluciones logísticas avanzadas.
            </p>
            <div className="flex flex-wrap gap-4">
               <button 
                 onClick={() => onAction('colaborador')}
                 className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-colors shadow-2xl shadow-blue-500/10 cursor-pointer outline-none"
               >
                 Trabajo Colaborativo
               </button>
               <button 
                 onClick={() => onAction('inversionista')}
                 className="px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors cursor-pointer outline-none"
               >
                 Ruta para Inversionistas
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {funnelSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                onClick={() => onAction(step.color === 'blue' ? 'colaborador' : step.color === 'purple' ? 'inversionista' : 'cliente')}
                className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl transition-all hover:bg-white/[0.08] cursor-pointer"
              >
                <div className={`p-4 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20`}>
                  <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                </div>
                <div className="flex-1">
                  <div className={`text-[9px] font-bold uppercase tracking-widest text-${step.color}-400/60 mb-1`}>{step.benefit}</div>
                  <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center space-x-8">
             <div>
               <div className="text-[9px] text-white/30 uppercase tracking-[0.3em] mb-1">Estrategia</div>
               <div className="text-sm font-medium text-white/80">Mercado E 2025</div>
             </div>
             <div className="h-8 w-px bg-white/10"></div>
             <div className="text-sm font-medium text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" onClick={() => onAction('cliente')}>
               Servicios Logísticos →
             </div>
           </div>
           
           <div className="text-center md:text-right">
             <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-2 font-bold italic">"La tecnología es el motor, la estrategia es el rumbo."</div>
             <div className="text-[9px] text-white/30 uppercase tracking-widest">Claudio Maureira © 2025 - Valdivia, Chile</div>
           </div>
        </div>
      </div>
    </section>
  );
}
