import { motion } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-32 bg-[#050505] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-transparent border border-white/10 text-center overflow-hidden"
        >
          {/* Animated Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
              ¿Desea optimizar su <span className="italic font-medium text-gradient">Gestión con IA</span>?
            </h2>
            
            <p className="text-white/50 text-lg font-light mb-12 max-w-lg mx-auto">
              Se invita a suscribirse para recibir una guía exclusiva sobre automatizaciones operativas para comercio local.
            </p>

            {status !== 'success' ? (
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === 'loading' ? 'Enviando...' : (
                    <>Suscribirse <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-3 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-6 h-6" />
                  ¡Suscripción exitosa!
                </div>
                <p className="text-white/30 text-sm">Pronto recibirá el recurso en su bandeja de entrada.</p>
              </motion.div>
            )}
            
            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold mt-8">
              Sin compromisos • Información estratégica únicamente
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
