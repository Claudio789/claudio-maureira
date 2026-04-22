import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onAction: () => void;
}

export default function Navbar({ onAction }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="font-bold text-white text-xl">CM</span>
          </div>
          <span className="text-sm tracking-[0.2em] uppercase font-semibold text-white/80">Claudio Maureira</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#benefits" className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium hover:text-white transition-colors">Beneficios</a>
          <a href="#portfolio" className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium hover:text-white transition-colors">Portafolio</a>
          <button onClick={onAction} className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium hover:text-white transition-colors outline-none cursor-pointer">Conectar</button>
        </div>

        <div className="hidden lg:block text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
          Valdivia, Chile
        </div>

        <button className="p-2 md:hidden text-white/60 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
