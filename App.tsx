import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Plus, Crosshair, X, ChevronDown, Linkedin } from 'lucide-react';
import { CONTENT } from './constants';
import { Language } from './types';
import { generateODASPDF } from './src/pdfUtils';

// --- Shared Components ---

const Logo = ({ scrolled = false, className = "" }: { scrolled?: boolean; className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className={`text-2xl font-display font-bold tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
      Negentropy<span className="font-light italic">Labs</span>
    </span>
  </div>
);

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden w-full text-white/5">
        
        <motion.div style={{ y: y1, opacity: 0.02 }} className="absolute top-[10%] right-[5%]">
            <Plus className="w-[400px] h-[400px]" strokeWidth={0.5} />
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="absolute bottom-[10%] left-[15%] opacity-5">
           <Crosshair className="w-12 h-12" />
        </motion.div>

        {/* Floating Coordinates */}
        <motion.div style={{ y: y2 }} className="absolute top-[30%] left-[5%] font-mono text-[10px] tracking-widest opacity-10">
            LAT: 41.4429° N <br />
            LON: 2.0634° E
        </motion.div>

        <motion.div style={{ y: y1 }} className="absolute bottom-[30%] right-[10%] font-mono text-[10px] tracking-widest opacity-10">
            ALT: 245m <br />
            VEL: 0.0m/s
        </motion.div>
    </div>
  );
};

// --- Spline Background ---

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden" style={{ background: 'linear-gradient(135deg, #111827, #000000)' }}>
      {/* Deep Indigo/Midnight Green Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-950/40 via-transparent to-emerald-950/40 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />
      
      {/* 
        Extending height to calc(100% + 120px) pushes the bottom "Built with Spline" badge 
        outside of the viewport, effectively hiding it. 
      */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%+120px)] opacity-80">
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/JM7ixbJx6pmDGkyo/scene.splinecode"
          events-target="global"
        ></spline-viewer>
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
                        <Logo className="scale-90 origin-left" />
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

// --- News Section Component ---

const NewsSection = ({ content }: { content: any }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generateODASPDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative z-20 bg-black text-white py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{content.news.title}</h2>
          <button className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            {content.news.ctaExplore}
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-20" />

        {/* News Items List */}
        <div className="space-y-32">
          {content.news.items.map((item: any) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.2fr] gap-12 md:gap-16 items-stretch"
            >
              {/* Date Column */}
              <div className="text-[11px] font-mono tracking-widest text-white/40 uppercase pt-2">
                {item.date}
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-16 flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://odas-eu.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-white/20 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2"
                    >
                      Web
                    </a>
                    <button 
                      onClick={handleDownload}
                      disabled={isGenerating}
                      className="px-8 py-2.5 border border-white/20 rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? '...' : item.ctaLabel}
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-sm bg-neutral-900 group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500 selection:text-white font-sans">
      <SplineBackground />
      <ParallaxBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo scrolled={true} className="font-display" />

          <div className="flex items-center gap-6">
            <div className="relative group">
                 <button className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-white hover:text-white/70' : 'text-white hover:text-white/80'}`}>
                    <Globe className="w-4 h-4" />
                    <span className="uppercase">{lang}</span>
                    <ChevronDown className="w-3 h-3" />
                 </button>
                 {/* Language Dropdown */}
                 <div className="absolute right-0 top-full mt-2 w-32 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    {(['en', 'es', 'ca', 'de'] as Language[]).map((l) => (
                        <button 
                            key={l}
                            onClick={() => setLang(l)}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors ${lang === l ? 'font-bold text-[#D98E2B]' : 'text-white/70'}`}
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
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {content.hero.ctaPrimary}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 pt-20 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="max-w-7xl mx-auto w-full flex flex-col items-center text-center pointer-events-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 className="text-6xl md:text-9xl leading-[0.85] font-display font-bold tracking-tighter mb-8 hollow-text glow-text">
                    {content.hero.title}
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
            >
                <p className="text-lg md:text-xl font-sans font-medium text-white/80 leading-relaxed mb-12">
                    {content.hero.description}
                </p>
            </motion.div>
        </motion.div>
      </section>

      <NewsSection content={content} />

      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} lang={lang} />
      
      {/* CSS for Glow and Hollow Text */}
      <style>{`
        .glow-text {
            text-shadow: 0 0 20px rgba(217, 142, 43, 0.3);
        }
        .hollow-text {
            -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.9);
            color: transparent;
        }
        
        /* Ocultar logo/watermark de Spline */
        spline-viewer .logo,
        spline-viewer .watermark,
        spline-viewer a[href*="spline.design"],
        spline-viewer a[href*="spline.com"],
        spline-viewer div[class*="logo"],
        spline-viewer div[class*="watermark"],
        spline-viewer div[class*="badge"],
        spline-viewer > div:last-child,
        spline-viewer > a:last-child {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        /* Spline Shadow DOM parts */
        spline-viewer::part(logo) {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default App;