
import { SiteContent } from './types';

export const CONTENT: Record<'en' | 'es' | 'ca' | 'de', SiteContent> = {
  en: {
    hero: {
      title: "Negentropy AI",
      subtitle: "Operational AI for Perishables",
      description: "Reduce waste, optimize inventory, and automate decisions with predictive intelligence.",
      ctaPrimary: "Request Demo",
      ctaSecondary: "Learn More"
    },
    infoCards: [
      {
        id: "01",
        title: "What is Negentropy AI?",
        description: "Negentropy AI is an operational artificial intelligence platform that converts business data into automatic and predictive decisions. It reduces waste, optimizes inventories, dynamically adjusts prices, and acts as a 24/7 digital manager.<br/><br/>It works for supermarkets, distributors, restaurants, bakeries, and any business with perishable products."
      },
      {
        id: "02",
        title: "How it helps companies (Law 1/2025)",
        description: "Negentropy AI helps Spanish companies comply with Law 1/2025 on food waste prevention through:",
        items: [
          "Direct surplus reduction (15%–40%)",
          "Automated mandatory reporting",
          "Precise demand prediction",
          "Alerts and recommendations to avoid losses",
          "Purchasing and inventory optimization",
          "Dynamic pricing for products nearing expiration",
          "Easier traceability and audits",
          "Facilitated access to grants and tech subsidies (Spain/EU)"
        ]
      },
      {
        id: "03",
        title: "Key Functions",
        description: "",
        items: [
          "Real-time Dashboard: KPIs, inventory, sales, and waste",
          "Predictive AI: Demand, inventory, reordering, pricing, and waste",
          "Automations: Price adjustments, early alerts",
          "Smart suggestions",
          "Rapid Integrations: POS, ERP, Supabase, custom APIs",
          "Automated Reports: For internal supervision or compliance"
        ]
      },
      {
        id: "04",
        title: "Benefits & Results",
        description: "",
        items: [
          "35% less food waste",
          "22% higher gross margin",
          "28% fewer stockouts",
          "Greater staff efficiency",
          "Direct cost savings from month one",
          "Automatic compliance with sustainability and regulations",
          "More competitive and digital companies without technical complexity"
        ]
      },
      {
        id: "05",
        title: "Why Negentropy AI is Unique",
        description: "",
        items: [
          "No other platform in Spain combines prediction + automation + compliance",
          "Developed specifically for supermarkets and perishable businesses",
          "100% Operational focus (AI that acts, not just analyzes)",
          "Ready for public grants and B-Corp certification",
          "Multi-tenant infrastructure on AWS with GDPR compliance",
          "Easy to integrate and ready in days, not months"
        ]
      },
      {
        id: "06",
        title: "Request a Free 15-Minute Demo",
        description: "We'll show you how Negentropy AI can reduce your costs, comply with Law 1/2025, and digitize your inventory management.",
        ctaAction: true,
        ctaLabel: "I want a demo"
      }
    ]
  },
  es: {
    hero: {
      title: "Negentropy AI",
      subtitle: "IA Operacional para Perecederos",
      description: "Reduce el desperdicio, optimiza inventarios y toma decisiones automáticas con inteligencia predictiva.",
      ctaPrimary: "Solicitar Demo",
      ctaSecondary: "Saber Más"
    },
    infoCards: [
      {
        id: "01",
        title: "Qué es Negentropy AI",
        description: "Negentropy AI es una plataforma de inteligencia artificial operacional que convierte los datos del negocio en decisiones automáticas y predictivas. Reduce el desperdicio, optimiza inventarios, ajusta precios dinámicamente y actúa como un gerente digital 24/7.<br/><br/>Funciona para supermercados, distribuidores, restaurantes, panaderías y cualquier negocio con productos perecederos."
      },
      {
        id: "02",
        title: "Cómo ayuda a las empresas (Especial España + Ley 1/2025)",
        description: "Negentropy AI ayuda a empresas españolas a cumplir la Ley 1/2025 de prevención del desperdicio alimentario mediante:",
        items: [
          "Reducción directa de excedentes (15%–40%)",
          "Automatización de reportes obligatorios",
          "Predicción de demanda precisa",
          "Alertas y recomendaciones para evitar pérdidas",
          "Optimización de compras e inventario",
          "Precios dinámicos para productos próximos a caducar",
          "Trazabilidad y auditorías más fáciles",
          "Acceso facilitado a grants, subvenciones y ayudas tecnológicas de España y la UE"
        ]
      },
      {
        id: "03",
        title: "Funciones principales",
        description: "",
        items: [
          "Dashboard en tiempo real con KPIs, inventario, ventas y desperdicio",
          "IA Predictiva para demanda, inventario, reordenes, precios y desperdicio",
          "Automatizaciones: Ajuste automático de precios, Alertas tempranas",
          "Sugerencias inteligentes",
          "Integraciones rápidas con POS, ERP, Supabase, APIs propias",
          "Reportes automáticos para supervisión interna o normativa"
        ]
      },
      {
        id: "04",
        title: "Beneficios y resultados",
        description: "",
        items: [
          "Menos desperdicio alimentario",
          "Más margen bruto",
          "Menos roturas de stock",
          "Mayor eficiencia del personal",
          "Ahorro directo en costes desde el primer mes",
          "Cumplimiento automático de sostenibilidad y normativa",
          "Empresas más competitivas y digitales sin complejidad técnica"
        ]
      },
      {
        id: "05",
        title: "Por qué Negentropy AI es único",
        description: "",
        items: [
          "En España no existe otra plataforma que combine predicción + automatización + cumplimiento normativo",
          "Desarrollada específicamente para supermercados y negocios con perecederos",
          "Enfoque 100% operativo (IA que actúa, no solo analiza)",
          "Preparada para ayudas públicas y certificación Empresa B",
          "Infraestructura multi-tenant",
          "Fácil de integrar y lista en días, no meses"
        ]
      },
      {
        id: "06",
        title: "Solicita una demo gratuita de 15 minutos",
        description: "Te mostramos cómo Negentropy AI puede reducir tus costes, cumplir la Ley 1/2025 y digitalizar la gestión de inventarios.",
        ctaAction: true,
        ctaLabel: "Quiero una demo"
      }
    ]
  },
  ca: {
    hero: {
      title: "Negentropy AI",
      subtitle: "IA Operacional per a Peribles",
      description: "Redueix el malbaratament, optimitza inventaris i pren decisions automàtiques amb intel·ligència predictiva.",
      ctaPrimary: "Sol·licitar Demo",
      ctaSecondary: "Saber-ne Més"
    },
    infoCards: [
      {
        id: "01",
        title: "Què és Negentropy AI?",
        description: "Negentropy AI és una plataforma d'intel·ligència artificial operacional que converteix les dades del negoci en decisions automàtiques i predictives. Redueix el malbaratament, optimitza inventaris, ajusta preus dinàmicament i actua com un gerent digital 24/7.<br/><br/>Funciona per a supermercats, distribuïdors, restaurants, forns i qualsevol negoci amb productes peribles."
      },
      {
        id: "02",
        title: "Com ajuda a les empreses (Llei 1/2025)",
        description: "Negentropy AI ajuda a empreses espanyoles a complir la Llei 1/2025 de prevenció del malbaratament alimentari mitjançant:",
        items: [
          "Reducció directa d'excedents (15%–40%)",
          "Automatització de reportatges obligatoris",
          "Predicció de demanda precisa",
          "Alertes i recomanacions per evitar pèrdues",
          "Optimització de compres i inventari",
          "Preus dinàmics per a productes propers a caducar",
          "Traçabilitat i auditories més fàcils",
          "Accés facilitat a subvencions i ajuts tecnològics d'Espanya i la UE"
        ]
      },
      {
        id: "03",
        title: "Funcions principals",
        description: "",
        items: [
          "Tauler en temps real amb KPIs, inventari, vendes i malbaratament",
          "IA Predictiva per a demanda, inventari, reordres, preus i residus",
          "Automatitzacions: Ajust automàtic de preus, Alertes primerenques",
          "Suggeriments intel·ligents",
          "Integracions ràpides amb TPV, ERP, Supabase, APIs pròpies",
          "Informes automàtics per a supervisió interna o normativa"
        ]
      },
      {
        id: "04",
        title: "Beneficis i resultats",
        description: "",
        items: [
          "Menys malbaratament alimentari",
          "Més marge brut",
          "Menys trencaments d'estoc",
          "Major eficiència del personal",
          "Estalvi directe en costos des del primer mes",
          "Compliment automàtic de sostenibilitat i normativa",
          "Empreses més competitives i digitals sense complexitat tècnica"
        ]
      },
      {
        id: "05",
        title: "Per què Negentropy AI és únic",
        description: "",
        items: [
          "A Espanya no existeix cap altra plataforma que combini predicció + automatització + compliment normatiu",
          "Desenvolupada específicament per a supermercats i negocis amb peribles",
          "Enfocament 100% operatiu (IA que actua, no només analitza)",
          "Preparada per a ajuts públics i certificació Empresa B",
          "Infraestructura multi-tenant",
          "Fàcil d'integrar i a punt en dies, no mesos"
        ]
      },
      {
        id: "06",
        title: "Sol·licita una demo gratuïta de 15 minuts",
        description: "Et mostrem com Negentropy AI pot reduir els teus costos, complir la Llei 1/2025 i digitalitzar la gestió d'inventaris.",
        ctaAction: true,
        ctaLabel: "Vull una demo"
      }
    ]
  },
  de: {
    hero: {
      title: "Negentropy AI",
      subtitle: "Operative KI für verderbliche Waren",
      description: "Reduzieren Sie Abfall, optimieren Sie Bestände und automatisieren Sie Entscheidungen mit prädiktiver Intelligenz.",
      ctaPrimary: "Demo anfordern",
      ctaSecondary: "Mehr erfahren"
    },
    infoCards: [
      {
        id: "01",
        title: "Was ist Negentropy AI?",
        description: "Negentropy AI ist eine operative Plattform für künstliche Intelligenz, die Geschäftsdaten in automatische und vorausschauende Entscheidungen umwandelt. Sie reduziert Abfall, optimiert Bestände, passt Preise dynamisch an und agiert als digitaler Manager rund um die Uhr.<br/><br/>Sie eignet sich für Supermärkte, Händler, Restaurants, Bäckereien und jedes Geschäft mit verderblichen Produkten."
      },
      {
        id: "02",
        title: "Wie es Unternehmen hilft (Gesetz 1/2025)",
        description: "Negentropy AI hilft Unternehmen bei der Einhaltung von Vorschriften zur Vermeidung von Lebensmittelverschwendung durch:",
        items: [
          "Direkte Reduzierung von Überschüssen (15%–40%)",
          "Automatisierung obligatorischer Berichte",
          "Präzise Nachfragevorhersage",
          "Warnungen und Empfehlungen zur Vermeidung von Verlusten",
          "Optimierung von Einkauf und Bestand",
          "Dynamische Preisgestaltung für Produkte nahe dem Verfallsdatum",
          "Einfachere Rückverfolgbarkeit und Audits",
          "Erleichterter Zugang zu technologischen Förderungen der EU"
        ]
      },
      {
        id: "03",
        title: "Hauptfunktionen",
        description: "",
        items: [
          "Echtzeit-Dashboard: KPIs, Bestand, Verkauf und Abfall",
          "Prädiktive KI: Nachfrage, Bestand, Nachbestellung, Preisgestaltung",
          "Automatisierungen: Automatische Preisanpassung, Frühwarnungen",
          "Intelligente Vorschläge",
          "Schnelle Integrationen: POS, ERP, Supabase, benutzerdefinierte APIs",
          "Automatisierte Berichte: Für interne Überwachung oder Compliance"
        ]
      },
      {
        id: "04",
        title: "Vorteile und Ergebnisse",
        description: "",
        items: [
          "Weniger Lebensmittelverschwendung",
          "Höhere Bruttomarge",
          "Weniger Fehlbestände",
          "Höhere Personaleffizienz",
          "Direkte Kosteneinsparungen ab dem ersten Monat",
          "Automatische Einhaltung von Nachhaltigkeit und Vorschriften",
          "Wettbewerbsfähigere und digitalere Unternehmen ohne technische Komplexität"
        ]
      },
      {
        id: "05",
        title: "Warum Negentropy AI einzigartig ist",
        description: "",
        items: [
          "Einzigartige Kombination aus Vorhersage + Automatisierung + Compliance",
          "Speziell entwickelt für Supermärkte und den Handel mit verderblichen Waren",
          "100% operativer Fokus (KI, die handelt, nicht nur analysiert)",
          "Vorbereitet für öffentliche Förderungen und B-Corp-Zertifizierung",
          "Multi-Tenant-Infrastruktur",
          "Einfach zu integrieren und in Tagen bereit, nicht Monaten"
        ]
      },
      {
        id: "06",
        title: "Fordern Sie eine kostenlose 15-Minuten-Demo an",
        description: "Wir zeigen Ihnen, wie Negentropy AI Ihre Kosten senken, Gesetze einhalten und Ihr Bestandsmanagement digitalisieren kann.",
        ctaAction: true,
        ctaLabel: "Ich möchte eine Demo"
      }
    ]
  }
};
