import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { 
  Recycle, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Building2, 
  Store,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  GraduationCap,
  Database,
  TrendingDown,
  HeartHandshake
} from 'lucide-react';
import { ImpactChart } from './components/ImpactChart';

const AIIcon = ({ size = 24 }: { size?: number }) => (
  <span className="font-black tracking-tighter leading-none select-none" style={{ fontSize: size * 0.65 }}>AI</span>
);

const Logo = ({ size = 48, textColor = "#1a1a18" }: { size?: number, textColor?: string }) => {
  const circleSize = size * (90 / 130);
  return (
    <div className="flex items-center gap-1 select-none" style={{ height: size }}>
      <div 
        className="rounded-full bg-[#C49A1A] flex-shrink-0" 
        style={{ width: circleSize, height: circleSize }} 
      />
      <span 
        className="font-serif font-bold leading-none" 
        style={{ fontSize: size, letterSpacing: '-0.04em', color: textColor }}
      >
        DAS
      </span>
    </div>
  );
};

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-odas-bg/90 backdrop-blur-md border-b border-odas-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo size={26} />
        <div className="hidden md:flex items-center gap-10 text-[12px] font-bold uppercase tracking-widest">
          <button onClick={() => scrollTo('problema')} className="hover:opacity-60 transition-opacity cursor-pointer">El Problema</button>
          <button onClick={() => scrollTo('solucion')} className="hover:opacity-60 transition-opacity cursor-pointer">Solución</button>
          <button onClick={() => scrollTo('cumplimiento')} className="hover:opacity-60 transition-opacity cursor-pointer">Ley 1/2025</button>
          <a href="https://formacion.odas-eu.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity cursor-pointer">Formación</a>
        </div>
        <button 
          onClick={() => scrollTo('contacto')}
          className="bg-odas-ink text-odas-bg px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer"
        >
          Contacto
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-6"
    >
      <Logo size={130} />
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="font-serif text-5xl md:text-7xl font-bold text-odas-ink max-w-4xl mb-8 leading-[1.15]"
    >
      Objetivo de Desarrollo Alimentario Sostenible
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="font-serif text-lg md:text-xl text-odas-ink/70 max-w-xl leading-relaxed"
    >
      Transformamos la gestión del excedente alimentario mediante inteligencia artificial para equilibrar la oferta y la demanda en toda la cadena de valor.
    </motion.p>
  </section>
);

const Counter = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMillions, setShowMillions] = React.useState(false);

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2.2,
        ease: [0.33, 1, 0.68, 1], // easeOut
        onComplete: () => setShowMillions(true)
      });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="text-[72px] font-bold leading-none tracking-[-3px] mb-1.5 flex items-baseline gap-3.5 text-white">
      <motion.span>{rounded}</motion.span>
      <span className={`text-[32px] font-bold tracking-[-0.5px] text-white/85 transition-opacity duration-400 ${showMillions ? 'opacity-100' : 'opacity-0'}`}>
        millones
      </span>
    </div>
  );
};

const Problem = () => (
  <section id="problema" className="bg-[#1a1a14] text-white overflow-hidden">
    <div className="section-container !py-20 md:!py-32">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="left"
        >
          <h1 className="text-[50px] font-bold leading-[1.05] mb-8 tracking-tight">El Problema<br />Operativo</h1>
          
          <div className="flex flex-col gap-6">
            {[
              { 
                icon: (
                  <svg viewBox="0 0 22 22" fill="none" stroke="#C49A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <path d="M11 3 L20 19 H2 Z"/>
                    <line x1="11" y1="9" x2="11" y2="13"/>
                    <circle cx="11" cy="16" r="0.8" fill="#C49A1A" stroke="none"/>
                  </svg>
                ), 
                title: "Sobrestock sin visibilidad", 
                desc: "Los establecimientos carecen de sistemas que identifiquen productos en riesgo inminente, resultando en reposiciones ineficientes." 
              },
              { 
                icon: (
                  <svg viewBox="0 0 22 22" fill="none" stroke="#C49A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <polyline points="2,6 7,12 11,9 15,14 20,10"/>
                    <polyline points="17,10 20,10 20,13"/>
                  </svg>
                ), 
                title: "Desequilibrio Oferta-Demanda", 
                desc: "Herramientas de predicción costosas y lentas para empresas de escala media o con baja digitalización." 
              },
              { 
                icon: (
                  <svg viewBox="0 0 22 22" fill="none" stroke="#C49A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                    <path d="M4 4 Q4 2 6 2 L16 2 Q18 2 18 4 L18 8 Q18 12 11 14 Q4 12 4 8 Z"/>
                    <path d="M7 18 Q11 20 15 18"/>
                    <line x1="11" y1="14" x2="11" y2="18"/>
                  </svg>
                ), 
                title: "Procesos Fragmentados", 
                desc: "Falta de automatización en descuentos y conexión directa con ONGs para la donación de excedentes." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-start gap-[18px]"
              >
                <div className="w-12 h-12 shrink-0 bg-[#2a2a20] rounded-xl flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold mb-1.5 leading-tight">{item.title}</h3>
                  <p className="text-[14px] text-[#8a8a7a] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#C49A1A] rounded-[28px] p-8 md:p-10 flex flex-col"
        >
          <Counter target={58} />
          <div className="text-[12px] font-bold tracking-[0.14em] uppercase text-white/75 mb-4">Toneladas al año</div>
          <div className="text-[15px] text-white/90 leading-relaxed mb-5">
            La Unión Europea desperdicia 58 millones de toneladas anuales, representando 132.000 millones en pérdidas para la industria.
          </div>
          <hr className="border-none border-t border-white/25 mb-5" />
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/60 mb-2">Ley 1/2025 · 2 de abril</div>
          <div className="text-[15px] text-white/90 leading-relaxed">
            España exige un plan activo antidesperdicio en toda la cadena alimentaria.
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucion" className="section-container">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-24"
    >
      <h2 className="heading-lg mb-8">Nuestra Solución</h2>
      <p className="text-body">
        ODAS es una herramienta específica para equilibrar la oferta y la demanda transformando la gestión del excedente mediante IA.
      </p>
    </motion.div>
    
    <div className="grid md:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
      {/* Card 1: Predicción IA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="group bg-white rounded-[24px] p-7 pb-8 border border-black/5 flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="w-16 h-16 perspective-600 flex-shrink-0">
          <div className="w-16 h-16 relative preserve-3d animate-flip2 group-hover:pause-animation">
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#E0E7FF]">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="4" width="8" height="8" rx="2" fill="#4338CA"/>
                <rect x="16" y="4" width="8" height="8" rx="2" fill="#818CF8"/>
                <rect x="4" y="16" width="8" height="8" rx="2" fill="#818CF8"/>
                <rect x="16" y="16" width="8" height="8" rx="2" fill="#4338CA"/>
                <circle cx="14" cy="14" r="3" fill="#3730A3"/>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#C7D2FE] rotate-y-180">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <path d="M6 20 L10 14 L14 17 L18 10 L22 13" stroke="#4338CA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-[#1a1a18] leading-tight">Predicción IA</h3>
        <p className="font-serif text-[13px] text-[#6b6b67] leading-relaxed flex-1">
          Prevé los excedentes antes de que se conviertan en residuos con modelos de series temporales.
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-serif px-2.5 py-1 rounded-full w-fit bg-[#EEF2FF] text-[#4338CA]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4338CA]"></span>Tiempo real
        </span>
      </motion.div>

      {/* Card 2: Pedidos Óptimos */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="group bg-white rounded-[24px] p-7 pb-8 border border-black/5 flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="w-16 h-16 perspective-600 flex-shrink-0">
          <div className="w-16 h-16 relative preserve-3d animate-flip2 group-hover:pause-animation">
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#D1FAE5]">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="9" stroke="#059669" stroke-width="2.5"/>
                <polyline points="9,14 12,17 19,11" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#A7F3D0] rotate-y-180">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <path d="M8 20 L8 12 L14 6 L20 12 L20 20Z" stroke="#059669" stroke-width="2" fill="none" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-[#1a1a18] leading-tight">Pedidos Óptimos</h3>
        <p className="font-serif text-[13px] text-[#6b6b67] leading-relaxed flex-1">
          Cantidades recomendadas en todo momento basadas en datos reales de demanda.
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-serif px-2.5 py-1 rounded-full w-fit bg-[#ECFDF5] text-[#065F46]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#065F46]"></span>Automático
        </span>
      </motion.div>

      {/* Card 3: Alertas Caducidad */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="group bg-white rounded-[24px] p-7 pb-8 border border-black/5 flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="w-16 h-16 perspective-600 flex-shrink-0">
          <div className="w-16 h-16 relative preserve-3d animate-flip2 group-hover:pause-animation">
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#FFEDD5]">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <path d="M14 4 L24 22 H4 Z" stroke="#EA580C" stroke-width="2.2" stroke-linejoin="round" fill="none"/>
                <line x1="14" y1="12" x2="14" y2="17" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
                <circle cx="14" cy="20" r="1.2" fill="#EA580C"/>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#FED7AA] rotate-y-180">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="8" stroke="#EA580C" stroke-width="2"/>
                <line x1="14" y1="10" x2="14" y2="14" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
                <line x1="14" y1="14" x2="17" y2="17" stroke="#EA580C" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-[#1a1a18] leading-tight">Alertas Caducidad</h3>
        <p className="font-serif text-[13px] text-[#6b6b67] leading-relaxed flex-1">
          Identifica productos propensos a expirar con antelación y activa el protocolo correcto.
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-serif px-2.5 py-1 rounded-full w-fit bg-[#FFF7ED] text-[#C2410C]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C]"></span>Crítico · Urgente
        </span>
      </motion.div>

      {/* Card 4: Redistribuye y Registra */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="group bg-white rounded-[24px] p-7 pb-8 border border-black/5 flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        <div className="w-16 h-16 perspective-600 flex-shrink-0">
          <div className="w-16 h-16 relative preserve-3d animate-flip2 group-hover:pause-animation">
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#FEF3C7]">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <path d="M14 22 C14 22 5 17 5 11 C5 8 7.5 6 10 6 C12 6 13.5 7 14 8 C14.5 7 16 6 18 6 C20.5 6 23 8 23 11 C23 17 14 22 14 22Z" stroke="#B45309" stroke-width="2" stroke-linejoin="round" fill="none"/>
                <path d="M10 14 L13 17 L18 11" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </div>
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center backface-hidden bg-[#FDE68A] rotate-y-180">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                <circle cx="8" cy="20" r="3" stroke="#B45309" stroke-width="2" fill="none"/>
                <circle cx="20" cy="20" r="3" stroke="#B45309" stroke-width="2" fill="none"/>
                <circle cx="14" cy="8" r="3" stroke="#B45309" stroke-width="2" fill="none"/>
                <line x1="11" y1="9" x2="9" y2="18" stroke="#B45309" stroke-width="1.5"/>
                <line x1="17" y1="9" x2="19" y2="18" stroke="#B45309" stroke-width="1.5"/>
                <line x1="11" y1="20" x2="17" y2="20" stroke="#B45309" stroke-width="1.5"/>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-[#1a1a18] leading-tight">Redistribuye y registra</h3>
        <p className="font-serif text-[13px] text-[#6b6b67] leading-relaxed flex-1">
          Conexión automatizada con Bancos de Alimentos y ONGs con registro legal incluido.
        </p>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold font-serif px-2.5 py-1 rounded-full w-fit bg-[#FEF3C7] text-[#92400E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#92400E]"></span>Canal integrado
        </span>
      </motion.div>
    </div>
  </section>
);

const Compliance = () => (
  <section id="cumplimiento" className="relative bg-[#F9F7F2] overflow-hidden py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-black text-odas-ink text-center"
        >
          Cumple requisitos
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[32px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-odas-ink/5 overflow-hidden relative z-10"
        >
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 bg-odas-ink/[0.02] border-b border-odas-ink/5 p-4 text-[10px] font-bold uppercase tracking-widest text-odas-ink/40">
            <div className="col-span-3">Requisito · Ley 1/2025</div>
            <div className="col-span-7">Solución ODAS</div>
            <div className="col-span-2 text-center">Cumple</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-odas-ink/5">
            {[
              { art: "Art. 5", title: "Plan de prevención", sol: "Generado automáticamente con datos reales de la empresa", badge: "Automático" },
              { art: "Art. 6", title: "Jerarquía de actuación", sol: "Prioriza cada producto: crítico · urgente · normal", badge: "Alertas en tiempo real" },
              { art: "Art. 7", title: "Donación de excedentes", sol: "Activa el canal ONG/banco de alimentos y registra la donación", badge: "Canal integrado" },
              { art: "Art. 9", title: "Formación del personal", sol: "Curso de formación para la ley 1/2025 con certificación oficial incluido", badge: "Coste cero" },
              { art: "Art. 10", title: "Trazabilidad y registros", sol: "Dashboard con KPIs exportables para inspecciones y ESG", badge: "Listo para inspección" },
              { art: "Art. 12", title: "Descuentos progresivos", sol: "Descuentos automáticos en POS al detectar riesgo de caducidad", badge: "Integración POS" }
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-12 p-4 items-center hover:bg-odas-ink/[0.01] transition-colors">
                <div className="col-span-3 mb-3 md:mb-0">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600 mb-0.5">{item.art}</p>
                  <h3 className="text-base font-bold text-odas-ink">{item.title}</h3>
                </div>
                <div className="col-span-7 mb-3 md:mb-0">
                  <p className="text-sm text-odas-ink/70 mb-1.5">{item.sol}</p>
                  <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-bold uppercase tracking-wider rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="col-span-2 flex justify-center">
                  <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="bg-red-50/50 p-4 border-t border-red-100/50 flex items-center gap-3">
            <div className="w-7 h-7 shrink-0 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <AlertTriangle size={14} />
            </div>
            <p className="text-xs text-red-900/80">
              <span className="font-bold">Sanciones:</span> de <span className="font-bold">2.000€</span> hasta <span className="font-bold">500.000€</span> — ODAS cubre los 6 artículos desde un solo lugar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-odas-ink text-odas-bg py-24">
    <div className="px-6 md:px-12">
      <div className="mb-24">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Logo size={32} textColor="#FDFBF7" />
          </div>
          <p className="text-odas-bg/60 mb-8">
            Ayudamos a las empresas creando pilotos y dando solución a sus necesidades para recuperar el planeta y cumplir la ley.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-odas-orange transition-colors cursor-pointer">
              <Users size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-odas-orange transition-colors cursor-pointer">
              <Building2 size={20} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-odas-bg/40 text-sm">
            © 2026 ODAS - odas-eu.com. Todos los derechos reservados.
          </p>
          <p className="text-odas-bg/60 text-sm">
            Contacto: <a href="mailto:hello@odas-eu.com" className="hover:text-odas-orange transition-colors">hello@odas-eu.com</a>
          </p>
          <p className="text-odas-bg/60 text-sm">
            Web: <a href="https://odas-eu.com" target="_blank" rel="noopener noreferrer" className="hover:text-odas-orange transition-colors">odas-eu.com</a>
          </p>
        </div>
        <div className="flex gap-8 grayscale opacity-50">
          <span className="text-xs font-bold tracking-widest uppercase">ODAS-EU</span>
        </div>
      </div>
    </div>
  </footer>
);

const ContactForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
    } catch (err) {
      console.error("Submission Error:", err);
      setErrorMessage(err instanceof Error ? err.message : 'Error desconocido');
      setStatus('error');
    }
  };

  if (status === 'error') {
    return (
      <section id="contacto" className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] p-16 border border-red-100 shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={40} />
          </div>
          <h2 className="heading-lg mb-4 text-red-900">Algo salió mal</h2>
          <p className="text-odas-ink/60 mb-4">
            No hemos podido enviar tu mensaje en este momento.
          </p>
          {errorMessage && (
            <div className="bg-red-50 p-4 rounded-2xl mb-8 inline-block">
              <p className="text-xs font-mono text-red-700">Error: {errorMessage}</p>
            </div>
          )}
          <p className="text-odas-ink/60 mb-8">
            Por favor, inténtalo de nuevo más tarde o escríbenos directamente a hello@odas-eu.com.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-odas-orange font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Volver a intentar
          </button>
        </motion.div>
      </section>
    );
  }

  if (status === 'success') {
    return (
      <section id="contacto" className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] p-16 border border-odas-ink/5 shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="heading-lg mb-4">¡Mensaje enviado!</h2>
          <p className="text-odas-ink/60 mb-8">
            Gracias por contactar con ODAS. Hemos recibido tu mensaje y nos pondremos en contacto contigo en hello@odas-eu.com a la brevedad.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-odas-orange font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contacto" className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="bg-white rounded-[40px] p-8 md:p-16 border border-odas-ink/5 shadow-2xl shadow-odas-ink/5">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Contacta con nosotros</h2>
          <p className="text-odas-ink/60">Solicita un piloto o resuelve tus dudas sobre la Ley 1/2025.</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-odas-ink/40 ml-4">Correo Electrónico</label>
              <input 
                required
                type="email" 
                name="email"
                placeholder="tu@email.com"
                className="w-full px-6 py-4 bg-odas-bg border border-odas-ink/5 rounded-2xl focus:outline-none focus:border-odas-orange transition-colors font-serif"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-odas-ink/40 ml-4">Empresa</label>
              <input 
                required
                type="text" 
                name="company"
                placeholder="Nombre de tu empresa"
                className="w-full px-6 py-4 bg-odas-bg border border-odas-ink/5 rounded-2xl focus:outline-none focus:border-odas-orange transition-colors font-serif"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-odas-ink/40 ml-4">Mensaje</label>
            <textarea 
              required
              name="message"
              rows={4}
              placeholder="¿En qué podemos ayudarte?"
              className="w-full px-6 py-4 bg-odas-bg border border-odas-ink/5 rounded-2xl focus:outline-none focus:border-odas-orange transition-colors font-serif resize-none"
            />
          </div>
          
          <button 
            disabled={status === 'sending'}
            className="w-full bg-odas-ink text-white py-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-odas-orange disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-odas-ink/10"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          
          <p className="text-[10px] text-center text-odas-ink/30 uppercase tracking-widest">
            Los mensajes se enviarán a hello@negentropylabs.com
          </p>
        </form>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  return (
    <section id="audiencia" className="bg-[#F5F0E8] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[52px] font-serif font-normal text-[#1a1a18] mb-6 tracking-tight"
          >
            ¿A quién va dirigido?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Retailers — carrito de compra */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#f0ede6] rounded-[20px] p-6 flex items-center justify-center min-h-[200px] overflow-hidden transition-transform"
          >
            <svg viewBox="0 0 180 180" fill="none" className="w-[180px] h-[180px]">
              <defs>
                <clipPath id="carrito-clip">
                  <polygon points="62,55 145,55 155,130 60,130"/>
                </clipPath>
              </defs>

              <g clipPath="url(#carrito-clip)">
                {/* Manzana */}
                <motion.g 
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 0.5 }}
                >
                  <circle cx="82" cy="108" r="11" stroke="#2a2a28" strokeWidth="2.5" fill="#d4cfc7"/>
                  <path d="M82 97 Q85 92 88 94" stroke="#2a2a28" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <line x1="82" y1="97" x2="82" y2="93" stroke="#2a2a28" strokeWidth="2" strokeLinecap="round"/>
                </motion.g>

                {/* Baguette */}
                <motion.g 
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 1.1 }}
                >
                  <ellipse cx="118" cy="112" rx="15" ry="7" stroke="#2a2a28" strokeWidth="2.5" fill="#d4cfc7" transform="rotate(-8 118 112)"/>
                  <line x1="108" y1="108" x2="128" y2="105" stroke="#2a2a28" strokeWidth="1.3"/>
                  <line x1="109" y1="112" x2="129" y2="109" stroke="#2a2a28" strokeWidth="1.3"/>
                </motion.g>

                {/* Zanahoria */}
                <motion.g 
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 1.7 }}
                >
                  <path d="M94 90 Q91 100 94 110 Q98 115 102 110 Q106 100 103 90 Z" stroke="#2a2a28" strokeWidth="2.5" fill="#d4cfc7"/>
                  <path d="M96 90 Q94 85 97 83" stroke="#2a2a28" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M100 89 Q100 84 102 82" stroke="#2a2a28" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </motion.g>

                {/* Lata */}
                <motion.g 
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 2.3 }}
                >
                  <rect x="70" y="88" width="20" height="22" rx="3" stroke="#2a2a28" strokeWidth="2.5" fill="#d4cfc7"/>
                  <ellipse cx="80" cy="88" rx="10" ry="4" stroke="#2a2a28" strokeWidth="2" fill="#c8c3bb"/>
                  <ellipse cx="80" cy="110" rx="10" ry="4" stroke="#2a2a28" strokeWidth="2" fill="#c8c3bb"/>
                  <line x1="72" y1="99" x2="88" y2="99" stroke="#2a2a28" strokeWidth="1.2"/>
                </motion.g>

                {/* Naranja */}
                <motion.g 
                  initial={{ y: -60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay: 2.9 }}
                >
                  <circle cx="110" cy="90" r="10" stroke="#2a2a28" strokeWidth="2.5" fill="#d4cfc7"/>
                  <path d="M107 80 Q110 77 113 80" stroke="#2a2a28" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                  <line x1="110" y1="80" x2="110" y2="77" stroke="#2a2a28" strokeWidth="2" strokeLinecap="round"/>
                </motion.g>
              </g>

              <g stroke="#2a2a28" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="20" y1="30" x2="45" y2="30"/>
                <line x1="45" y1="30" x2="60" y2="130"/>
                <line x1="60" y1="130" x2="155" y2="130"/>
                <line x1="155" y1="130" x2="145" y2="55"/>
                <line x1="145" y1="55" x2="62" y2="55"/>
                <line x1="82" y1="55" x2="88" y2="130"/>
                <line x1="102" y1="55" x2="106" y2="130"/>
                <line x1="122" y1="55" x2="124" y2="130"/>
                <line x1="64" y1="77" x2="148" y2="77"/>
                <line x1="67" y1="98" x2="149" y2="98"/>
                <line x1="70" y1="118" x2="150" y2="118"/>
                <circle cx="85" cy="148" r="14" strokeWidth="5"/>
                <circle cx="138" cy="148" r="14" strokeWidth="5"/>
              </g>
            </svg>
          </motion.div>

          {/* Productores — espigas de trigo */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#f0ede6] rounded-[20px] p-6 flex items-center justify-center min-h-[200px] overflow-hidden transition-transform"
          >
            <svg viewBox="0 0 180 200" fill="none" stroke="#2a2a28" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="w-[180px] h-[200px]">
              <motion.g 
                animate={{ rotate: [0, 6, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "55px 180px" }}
              >
                <line x1="55" y1="180" x2="55" y2="60"/>
                <ellipse cx="43" cy="155" rx="12" ry="7" transform="rotate(-20 43 155)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="67" cy="155" rx="12" ry="7" transform="rotate(20 67 155)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="41" cy="135" rx="11" ry="6" transform="rotate(-22 41 135)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="69" cy="135" rx="11" ry="6" transform="rotate(22 69 135)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="42" cy="117" rx="10" ry="6" transform="rotate(-24 42 117)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="68" cy="117" rx="10" ry="6" transform="rotate(24 68 117)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="43" cy="100" rx="9" ry="5" transform="rotate(-22 43 100)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="67" cy="100" rx="9" ry="5" transform="rotate(22 67 100)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="55" cy="62" rx="7" ry="18" fill="#2a2a28" opacity="0.2" stroke="#2a2a28" strokeWidth="3"/>
              </motion.g>
              <motion.g 
                animate={{ rotate: [0, 8, -5, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                style={{ transformOrigin: "90px 185px" }}
              >
                <line x1="90" y1="185" x2="90" y2="30"/>
                <ellipse cx="76" cy="160" rx="13" ry="7" transform="rotate(-20 76 160)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="104" cy="160" rx="13" ry="7" transform="rotate(20 104 160)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="74" cy="138" rx="12" ry="7" transform="rotate(-22 74 138)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="106" cy="138" rx="12" ry="7" transform="rotate(22 106 138)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="74" cy="118" rx="11" ry="6" transform="rotate(-24 74 118)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="106" cy="118" rx="11" ry="6" transform="rotate(24 106 118)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="75" cy="100" rx="10" ry="6" transform="rotate(-22 75 100)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="105" cy="100" rx="10" ry="6" transform="rotate(22 105 100)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="75" cy="83" rx="9" ry="5" transform="rotate(-20 75 83)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="105" cy="83" rx="9" ry="5" transform="rotate(20 105 83)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="90" cy="32" rx="8" ry="20" fill="#2a2a28" opacity="0.2" stroke="#2a2a28" strokeWidth="3"/>
              </motion.g>
              <motion.g 
                animate={{ rotate: [0, 5, -3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                style={{ transformOrigin: "130px 180px" }}
              >
                <line x1="130" y1="180" x2="130" y2="80"/>
                <ellipse cx="118" cy="158" rx="11" ry="6" transform="rotate(-20 118 158)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="142" cy="158" rx="11" ry="6" transform="rotate(20 142 158)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="117" cy="140" rx="10" ry="6" transform="rotate(-22 117 140)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="143" cy="140" rx="10" ry="6" transform="rotate(22 143 140)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="117" cy="122" rx="9" ry="5" transform="rotate(-22 117 122)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="143" cy="122" rx="9" ry="5" transform="rotate(22 143 122)" fill="#2a2a28" opacity="0.15" stroke="#2a2a28" strokeWidth="3"/>
                <ellipse cx="130" cy="82" rx="7" ry="16" fill="#2a2a28" opacity="0.2" stroke="#2a2a28" strokeWidth="3"/>
              </motion.g>
            </svg>
          </motion.div>

          {/* Horeca — hotel con estrellas */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-[#f0ede6] rounded-[20px] p-6 flex items-center justify-center min-h-[200px] overflow-hidden transition-transform"
          >
            <svg viewBox="0 0 200 200" fill="none" stroke="#2a2a28" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="w-[180px] h-[200px]">
              <rect x="55" y="80" width="90" height="105" strokeWidth="4.5"/>
              <rect x="85" y="145" width="30" height="40" strokeWidth="4"/>
              <rect x="65" y="92" width="18" height="16" strokeWidth="3.5"/>
              <rect x="117" y="92" width="18" height="16" strokeWidth="3.5"/>
              <rect x="65" y="118" width="18" height="16" strokeWidth="3.5"/>
              <rect x="117" y="118" width="18" height="16" strokeWidth="3.5"/>
              {[
                { id: 'star1', delay: 0.3, points: "48,28 51,38 62,38 53,44 56,54 48,48 40,54 43,44 34,38 45,38" },
                { id: 'star2', delay: 0.8, points: "100,15 104,27 117,27 107,35 111,47 100,40 89,47 93,35 83,27 96,27" },
                { id: 'star3', delay: 1.3, points: "152,28 155,38 166,38 157,44 160,54 152,48 144,54 147,44 138,38 149,38" },
                { id: 'star4', delay: 1.8, points: "30,52 32,58 39,58 33,62 35,68 30,64 25,68 27,62 21,58 28,58" },
                { id: 'star5', delay: 2.3, points: "170,52 172,58 179,58 173,62 175,68 170,64 165,68 167,62 161,58 168,58" }
              ].map((star) => (
                <motion.polygon 
                  key={star.id}
                  points={star.points}
                  initial={{ opacity: 0, scale: 0.3, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: star.delay,
                    scale: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  strokeWidth="3" 
                  fill="none"
                />
              ))}
            </svg>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="label-item">
            <h3 className="text-[18px] font-serif font-normal text-[#1a1a18] mb-1.5">Retailers</h3>
            <p className="text-[15px] text-[#5a5a52] leading-relaxed">Supermercados y tiendas especializadas.</p>
          </div>
          <div className="label-item">
            <h3 className="text-[18px] font-serif font-normal text-[#1a1a18] mb-1.5">Productores</h3>
            <p className="text-[15px] text-[#5a5a52] leading-relaxed">Granjas y cooperativas agrarias.</p>
          </div>
          <div className="label-item">
            <h3 className="text-[18px] font-serif font-normal text-[#1a1a18] mb-1.5">Horeca</h3>
            <p className="text-[15px] text-[#5a5a52] leading-relaxed">Restauración y hoteles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impacto" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <h2 className="heading-lg mb-6">Nuestro Objetivo 2030</h2>
          <p className="text-body mb-12">
            Proyectamos una reducción progresiva del 40% del desperdicio acumulado para el año 2030 mediante la adopción de ODAS.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: AlertTriangle, val: "57M t", label: "Desperdicio sin ODAS en 2030", color: "text-[#E24B4A]", bg: "bg-red-50" },
              { icon: CheckCircle2, val: "34M t", label: "Desperdicio con ODAS en 2030", color: "text-[#1D9E75]", bg: "bg-emerald-50" },
              { icon: TrendingDown, val: "40%", label: "Reducción acumulada al 2030", color: "text-[#185FA5]", bg: "bg-blue-50" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className={`w-12 h-12 shrink-0 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <div className={`text-3xl font-black ${item.color} font-serif`}>{item.val}</div>
                  <p className="text-sm font-bold uppercase tracking-widest text-odas-ink/40">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <ImpactChart />
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Compliance />
      <TargetAudience />
      <Impact />
      <ContactForm />
      <Footer />
    </div>
  );
}
