import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Plus, Crosshair, X, ChevronDown, Linkedin } from 'lucide-react';
import { CONTENT } from './constants';
import { Language, InfoCard } from './types';

// --- Shared Components ---

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden w-full text-black/10">
        <motion.div style={{ y: y1, opacity: 0.05 }} className="absolute top-[10%] right-[5%]">
            <Plus className="w-[400px] h-[400px]" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="absolute bottom-[10%] left-[15%] opacity-20">
           <Crosshair className="w-12 h-12" />
        </motion.div>
    </div>
  );
};

// --- Spline Background ---

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* 
        Extending height to calc(100% + 120px) pushes the bottom "Built with Spline" badge 
        outside of the viewport, effectively hiding it. 
      */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%+120px)]">
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/JM7ixbJx6pmDGkyo/scene.splinecode"
          events-target="global"
        ></spline-viewer>
      </div>
    </div>
  );
};

// --- Grid Card Component ---

interface GridCardProps {
  card: InfoCard;
  onOpenContact?: () => void;
}

const GridCardItem: React.FC<GridCardProps> = ({ card, onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
        className={`relative flex flex-col bg-white transition-all duration-500 group min-h-[320px] p-8 md:p-10 cursor-pointer h-full ${isOpen ? 'bg-sky-50' : 'hover:bg-sky-50'}`}
        onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-xs text-[#0088FF]/50 group-hover:text-[#0088FF] transition-colors">
          {card.id}
        </span>
        <button className={`text-[#0088FF]/50 group-hover:text-[#0088FF] transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center">
         <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">
           {card.title}
         </h3>
         
         <AnimatePresence>
           {isOpen && (
             <motion.div
               initial={{ opacity: 0, height: 0, marginTop: 0 }}
               animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
               exit={{ opacity: 0, height: 0, marginTop: 0 }}
               className="overflow-hidden"
             >
                {/* Optional internal separator if needed, but Grid gap handles the main lines */}
                {card.description && (
                  <div 
                    className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 font-normal"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                )}
                {card.items && (
                  <ul className="space-y-2 mb-6">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                        <span className="mt-1.5 w-1 h-1 bg-[#0088FF] rounded-full shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {card.ctaAction && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); onOpenContact?.(); }}
                    className="inline-flex items-center gap-3 bg-[#0088FF] text-white px-6 py-3 text-xs font-sans uppercase tracking-wider hover:bg-black hover:text-white transition-colors w-full md:w-auto justify-center font-bold"
                  >
                    {card.ctaLabel} <ArrowRight className="w-3 h-3" />
                  </button>
                )}
             </motion.div>
           )}
         </AnimatePresence>
      </div>
    </div>
  );
};

// --- Contact Modal ---

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void; lang: Language }> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const t: Record<Language, any> = {
    en: {
      title: "Request Demo",
      subtitle: "Complete the form and we'll be in touch.",
      name: "Name",
      email: "Work Email",
      company: "Company",
      role: "Role",
      phone: "Phone",
      message: "How can we help you?",
      submit: "Send Request"
    },
    es: {
      title: "Solicitar Demo",
      subtitle: "Completa el formulario y te contactaremos.",
      name: "Nombre",
      email: "Email corporativo",
      company: "Empresa",
      role: "Cargo",
      phone: "Teléfono",
      message: "¿Cómo podemos ayudarte?",
      submit: "Enviar Solicitud"
    },
    ca: {
      title: "Sol·licitar Demo",
      subtitle: "Completa el formulari i et contactarem.",
      name: "Nom",
      email: "Email corporatiu",
      company: "Empresa",
      role: "Càrrec",
      phone: "Telèfon",
      message: "Com podem ajudar-te?",
      submit: "Enviar Sol·licitud"
    },
    de: {
      title: "Demo anfordern",
      subtitle: "Füllen Sie das Formular aus und wir melden uns bei Ihnen.",
      name: "Name",
      email: "Geschäftliche E-Mail",
      company: "Unternehmen",
      role: "Position",
      phone: "Telefon",
      message: "Wie können wir Ihnen helfen?",
      submit: "Anfrage senden"
    }
  };

  const text = t[lang];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      {/* Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl border border-white/30"
        style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition-colors z-20">
            <X className="w-5 h-5 text-black/60"/>
        </button>

        <div className="p-8 md:p-10 relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-black tracking-tight">{text.title}</h2>
          <p className="text-sm text-black/60 mb-8 font-medium">{text.subtitle}</p>
          
          <form className="space-y-5" onSubmit={(e) => { 
              e.preventDefault(); 
              window.location.href = "mailto:hello@negentropylabs.com?subject=Demo Request";
              onClose(); 
            }}>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.name}</label>
                    <input type="text" className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.phone}</label>
                    <input type="tel" className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
                </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.email}</label>
              <input type="email" required className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.company}</label>
                    <input type="text" className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
                </div>
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.role}</label>
                    <input type="text" className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
                </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-black/70 font-semibold ml-1">{text.message}</label>
              <textarea rows={3} className="w-full bg-white/30 border border-white/30 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-black placeholder-black/30" />
            </div>

            <button type="submit" className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors uppercase tracking-widest text-xs mt-4">
              {text.submit}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

// --- Footer ---

const Footer = () => {
    return (
        <footer className="relative bg-black text-white overflow-hidden">
             {/* Glow Effect - Sunset Style */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#ff4d00] to-black opacity-15 pointer-events-none" />
             {/* Stronger Bottom Glow for Horizon effect */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[300px] bg-[#ff4d00] blur-[80px] opacity-40 pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-12">
                
                {/* ODS Goals Section */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-24 text-sm md:text-base font-medium tracking-widest text-white/40">
                    <span>GOALS</span>
                    <span>ODS 2</span>
                    <span>ODS 8</span>
                    <span>ODS 9</span>
                    <span>ODS 12</span>
                    <span>ODS 13</span>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/60">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span className="text-white text-lg font-bold tracking-tighter">Negentropy AI</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mb-4 md:mb-0">
                        <a href="https://www.negentropylabs.com" className="text-white/80 hover:text-white transition-colors">
                            www.negentropylabs.com
                        </a>
                        <a href="mailto:hello@negentropylabs.com" className="text-white/80 hover:text-white transition-colors">
                            hello@negentropylabs.com
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <span>&copy; 2025 La Floresta, Catalunya.</span>
                        <a href="https://www.linkedin.com/company/negentropyau/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- Main App Component ---

const App = () => {
  const [lang, setLang] = useState<Language>('es');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-sky-200 selection:text-sky-900 font-sans">
      <SplineBackground />
      <ParallaxBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`text-xl font-bold tracking-tighter transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
              Negentropy Labs
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
                 <button className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-black hover:text-black/70' : 'text-white hover:text-white/80'}`}>
                    <Globe className="w-4 h-4" />
                    <span className="uppercase">{lang}</span>
                    <ChevronDown className="w-3 h-3" />
                 </button>
                 {/* Language Dropdown */}
                 <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    {(['en', 'es', 'ca', 'de'] as Language[]).map((l) => (
                        <button 
                            key={l}
                            onClick={() => setLang(l)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${lang === l ? 'font-bold text-[#0088FF]' : 'text-gray-700'}`}
                        >
                            {l === 'en' ? 'English' : l === 'es' ? 'Español' : l === 'ca' ? 'Català' : 'Deutsch'}
                        </button>
                    ))}
                 </div>
            </div>

            <button 
              onClick={() => setIsContactOpen(true)}
              className={`px-5 py-2 text-sm font-sans font-bold uppercase tracking-wider border rounded-full transition-all ${
                  scrolled 
                  ? 'border-black text-black hover:bg-black hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {content.hero.ctaPrimary}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 pt-20 z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 className="text-5xl md:text-7xl leading-[0.9] font-bold tracking-tighter hollow-text mb-6">
                    {content.hero.title}
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
            >
                <p className="text-base md:text-lg font-sans font-medium text-white/90 leading-relaxed mb-8 drop-shadow-md">
                    {content.hero.description}
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                     <button 
                        onClick={() => setIsContactOpen(true)}
                        className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-full"
                     >
                        {content.hero.ctaPrimary}
                     </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Info Grid - "Technical Layout" */}
      <section className="relative z-20 bg-white">
        {/* Grid Container with Gap for borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#0088FF] border border-[#0088FF]">
            {content.infoCards.map((card, index) => (
                <GridCardItem key={card.id} card={card} onOpenContact={() => setIsContactOpen(true)} />
            ))}
        </div>
      </section>

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} lang={lang} />
      
      {/* CSS for Hollow Text */}
      <style>{`
        .hollow-text {
            -webkit-text-stroke: 1px #ffffff;
            color: transparent;
        }
      `}</style>
    </div>
  );
};

export default App;