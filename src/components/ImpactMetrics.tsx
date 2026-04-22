import { motion } from 'motion/react';
import { BarChart3, Zap, Clock, Users } from 'lucide-react';

const metrics = [
  {
    label: "Eficiencia Logística",
    value: "+35%",
    description: "Aumento en la velocidad de despacho local en Valdivia.",
    icon: Zap
  },
  {
    label: "Horas Recuperadas",
    value: "20h",
    description: "Mensuales promedio por profesional en Plan B.",
    icon: Clock
  },
  {
    label: "Crecimiento de Red",
    value: "50+",
    description: "Comercios conectados en Simply Entregas.",
    icon: Users
  },
  {
    label: "Retorno Proyectado",
    value: "2.5x",
    description: "Escalabilidad estimada para Mercado E 2025.",
    icon: BarChart3
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:border-blue-500/30 transition-colors">
                <metric.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-4xl font-light text-white mb-2 leading-none">
                {metric.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3">
                {metric.label}
              </div>
              <p className="text-white/30 text-xs font-light leading-relaxed max-w-[160px] mx-auto">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
