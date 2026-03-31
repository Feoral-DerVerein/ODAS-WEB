
import { SiteContent } from './types';

export const CONTENT: Record<'en' | 'es' | 'ca' | 'de', SiteContent> = {
  en: {
    hero: {
      title: "NegentropyLabs",
      subtitle: "We use research as a compass and technology as the engine.",
      description: "We use research as a compass and technology as the engine.",
      ctaPrimary: "Request Demo",
      ctaSecondary: "Learn More"
    },
    news: {
      title: "Latest news",
      ctaExplore: "EXPLORE MORE",
      items: [
        {
          id: "01",
          date: "MARCH 31, 2026",
          title: "NegentropyLabs opens pilots for ODAS",
          description: "ODAS announced today that it has acquired NegentropyLabs to accelerate sustainable development.",
          category: "COMPANY",
          image: "/ODAS.png",
          ctaLabel: "READ"
        }
      ]
    }
  },
  es: {
    hero: {
      title: "NegentropyLabs",
      subtitle: "Usamos la investigación como brújula y la tecnología como el motor.",
      description: "Usamos la investigación como brújula y la tecnología como el motor.",
      ctaPrimary: "Solicitar Demo",
      ctaSecondary: "Saber Más"
    },
    news: {
      title: "Últimas noticias",
      ctaExplore: "EXPLORAR MÁS",
      items: [
        {
          id: "01",
          date: "MARZO 31, 2026",
          title: "NegentropyLabs abre pilotos para ODAS",
          description: "ODAS estará disponible desde el mes de abril para todas las empresas que necesiten un piloto gratis y cumplan la ley 1/2025",
          category: "EMPRESA",
          image: "/ODAS.png",
          ctaLabel: "LEER"
        }
      ]
    }
  },
  ca: {
    hero: {
      title: "NegentropyLabs",
      subtitle: "Utilitzem la investigació com a brúixola i la tecnologia com el motor.",
      description: "Utilitzem la investigació com a brúixola i la tecnologia com el motor.",
      ctaPrimary: "Sol·licitar Demo",
      ctaSecondary: "Saber-ne Més"
    },
    news: {
      title: "Últimes notícies",
      ctaExplore: "EXPLORAR MÉS",
      items: [
        {
          id: "01",
          date: "MARÇ 31, 2026",
          title: "NegentropyLabs obre pilots per a ODAS",
          description: "ODAS ha anunciat avui l'adquisició de NegentropyLabs per accelerar el desenvolupament sostenible.",
          category: "EMPRESA",
          image: "/ODAS.png",
          ctaLabel: "LLEGIR"
        }
      ]
    }
  },
  de: {
    hero: {
      title: "NegentropyLabs",
      subtitle: "Wir nutzen Forschung als Kompass und Technologie als Motor.",
      description: "Wir nutzen Forschung als Kompass und Technologie als Motor.",
      ctaPrimary: "Demo anfordern",
      ctaSecondary: "Mehr erfahren"
    },
    news: {
      title: "Neueste Nachrichten",
      ctaExplore: "MEHR ENTDECKEN",
      items: [
        {
          id: "01",
          date: "MÄRZ 31, 2026",
          title: "NegentropyLabs öffnet Piloten für ODAS",
          description: "ODAS gab heute bekannt, dass es NegentropyLabs erworben hat, um die nachhaltige Entwicklung zu beschleunigen.",
          category: "UNTERNEHMEN",
          image: "/ODAS.png",
          ctaLabel: "LESEN"
        }
      ]
    }
  }
};
