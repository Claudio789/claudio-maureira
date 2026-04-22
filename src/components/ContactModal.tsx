import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export type ModalType = 'inversionista' | 'colaborador' | 'cliente' | null;

interface ContactModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}

export default function ContactModal({ isOpen, type, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titles = {
    inversionista: 'Propuesta para Inversionistas',
    colaborador: 'Trabajo Colaborativo',
    cliente: 'Servicios Logísticos',
  };

  const descriptions = {
    inversionista: 'Se invita a proporcionar sus datos para recibir el portafolio estratégico y proyecciones 2025.',
    colaborador: 'Se busca establecer alianzas con profesionales que compartan la visión de innovación operativa.',
    cliente: 'Se ofrece consultoría para integrar soluciones de logística y automatización en su comercio.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {!isSubmitted ? (
                <div className="relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-4">
                    Conexión Directa
                  </div>
                  <h2 className="text-3xl font-light text-white mb-4 leading-tight">
                    {type && titles[type]}
                  </h2>
                  <p className="text-white/40 text-sm font-light mb-8 leading-relaxed">
                    {type && descriptions[type]}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="Ej: Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Correo Electrónico</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Mensaje / Interés</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        placeholder="Breve descripción de su consulta..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-400 transition-colors flex items-center justify-center gap-2 group mt-4"
                    >
                      Enviar Solicitud <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">Solicitud Enviada</h3>
                  <p className="text-white/40 text-sm font-light">Se establecerá contacto a la brevedad posible.</p>
                </motion.div>
              )}
            </div>

            {/* Decorative background gradients */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
