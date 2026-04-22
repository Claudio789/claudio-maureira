import { motion } from 'motion/react';
import { Truck, Users, LayoutDashboard, ExternalLink, ChevronRight } from 'lucide-react';
import { ModalType } from './ContactModal';

const projects = [
  {
    title: "Simply Entregas",
    subtitle: "Logística Colaborativa",
    description: "Plataforma enfocada en la optimización de repartos para el comercio local y minimarkets, facilitando la conexión entre proveedores y clientes.",
    icon: Truck,
    color: "from-blue-600 to-cyan-500",
    tags: ["Logística", "Retail", "Valdivia"]
  },
  {
    title: "Plan B",
    subtitle: "Gestión para Independientes",
    description: "Solución diseñada para que profesionales independientes administren sus agendas y marketing, eliminando la carga de gestión administrativa.",
    icon: Users,
    color: "from-purple-600 to-pink-500",
    tags: ["Productividad", "Marketing", "SaaS"]
  },
  {
    title: "CONFLUIA",
    subtitle: "Consultoría Integral",
    description: "Servicios estratégicos que integran contabilidad, recursos humanos y gestión de negocios bajo una mirada holística y eficiente.",
    icon: LayoutDashboard,
    color: "from-slate-700 to-slate-900",
    tags: ["Asesoría", "RRHH", "Finanzas"]
  }
];

interface PortfolioProps {
  onAction: (type: ModalType) => void;
}

export default function Portfolio({ onAction }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-32 bg-[#050505] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-indigo-400 font-bold mb-4">Portafolio Activo</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">Proyectos que Transforman Ideas en <span className="italic font-medium text-gradient">Resultados Reales</span></h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              Iniciativas estratégicas lideradas por Claudio Maureira que integran tecnología y logística para maximizar el valor comercial.
            </p>
          </div>
          <div className="flex items-center gap-3 text-white/40 font-bold uppercase text-[10px] tracking-[0.3em] cursor-pointer group hover:text-white transition-colors">
            Ver Proyección 2025 <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col bg-white/5 border border-white/10 p-8 rounded-2xl transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                  <project.icon className="w-6 h-6 text-white/60 group-hover:text-blue-400" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                  0{index + 1}
                </div>
              </div>

              <div className="text-xs text-blue-400 uppercase tracking-[0.2em] font-bold mb-3">{project.subtitle}</div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:translate-x-1 transition-transform">{project.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-white/30 text-[9px] font-bold uppercase tracking-widest rounded transition-colors group-hover:bg-white/10 group-hover:text-white/50">
                    {tag}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onAction('cliente')}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors outline-none cursor-pointer"
              >
                Solicitar Consultoría <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
