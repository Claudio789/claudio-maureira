import { motion } from 'motion/react';
import { Zap, Clock, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    title: "Optimización de Tiempos",
    description: "Reducción sustancial del tiempo dedicado a tareas administrativas mediante flujos de trabajo inteligentes.",
    icon: Clock,
    color: "blue"
  },
  {
    title: "Tranquilidad Operativa",
    description: "Sistemas robustos que garantizan la continuidad del negocio y la satisfacción del cliente final.",
    icon: ShieldCheck,
    color: "emerald"
  },
  {
    title: "Crecimiento Estratégico",
    description: "Identificación de oportunidades de mercado respaldada por datos y automatizaciones precisas.",
    icon: TrendingUp,
    color: "purple"
  },
  {
    title: "Integración de IA",
    description: "Aplicación de tecnologías como Gemini API para transformar procesos manuales en activos digitales.",
    icon: Zap,
    color: "orange"
  }
];

export default function ValueProp() {
  return (
    <section id="benefits" className="py-32 bg-[#050505] px-6 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-4">Metodología de Valor</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            Beneficios de la <span className="italic font-medium text-gradient">Gestión Estratégica</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Soluciones diseñadas para fortalecer la estructura interna y proyectar resultados comerciales sostenibles en el ecosistema digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-${benefit.color}-500/20 bg-${benefit.color}-500/5 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-6 h-6 text-${benefit.color}-400 group-hover:text-${benefit.color}-300 transition-colors`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
