import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "La implementación de Simply Entregas cambió la dinámica de nuestro minimarket. Menos estrés y clientes más satisfechos.",
    author: "Comerciante Local",
    org: "Valdivia"
  },
  {
    text: "Plan B me permitió delegar la burocracia de mi agenda y concentrarme en mi práctica profesional. Imprescindible.",
    author: "Independiente",
    org: "Servicios Profesionales"
  },
  {
    text: "La visión de Claudio combina pragmatismo logístico con una capacidad inusual para integrar nuevas tecnologías.",
    author: "Colaborador Estratégico",
    org: "Gestión de Proyectos"
  }
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-[#080808] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-bold mb-4">Validación del Modelo</div>
          <h2 className="text-4xl font-light text-white">Impacto en el <span className="italic font-medium text-gradient">Ecosistema Local</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-blue-500/10 transition-colors" />
              
              <p className="text-white/60 font-light italic mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="mt-auto">
                <div className="text-sm font-semibold text-white/80">{t.author}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold mt-1">{t.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
