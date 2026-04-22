import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "56985098793"; // Claudio Maureira
  const message = "Hola Claudio, me gustaría obtener más información sobre tus servicios de logística y gestión.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20 text-white hover:bg-emerald-400 transition-colors"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] animate-pulse" />
    </motion.a>
  );
}
