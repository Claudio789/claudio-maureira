/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import ValueProp from './components/ValueProp';
import Portfolio from './components/Portfolio';
import Roadmap from './components/Roadmap';
import SocialProof from './components/SocialProof';
import LeadMagnet from './components/LeadMagnet';
import CTA from './components/CTA';
import ContactModal, { ModalType } from './components/ContactModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <Navbar onAction={() => openModal('colaborador')} />
      <main>
        <Hero onAction={() => openModal('colaborador')} />
        <ImpactMetrics />
        <ValueProp />
        <Portfolio onAction={(type: ModalType) => openModal(type)} />
        <Roadmap />
        <SocialProof />
        <LeadMagnet />
        <CTA onAction={(type: ModalType) => openModal(type)} />
      </main>
      
      <ContactModal 
        isOpen={isModalOpen} 
        type={modalType} 
        onClose={() => setIsModalOpen(false)} 
      />

      <WhatsAppButton />

      <footer className="py-12 bg-[#050505] border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2024 Claudio Maureira. Valdivia, Chile.
          </div>
          <div className="flex gap-8">
            <span className="text-slate-600 text-xs uppercase tracking-widest">Compromiso</span>
            <span className="text-slate-600 text-xs uppercase tracking-widest">Excelencia</span>
            <span className="text-slate-600 text-xs uppercase tracking-widest">Innovación</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
