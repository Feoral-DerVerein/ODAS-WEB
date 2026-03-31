
export type Language = 'en' | 'es' | 'ca' | 'de';

export interface ContentSection {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
  ctaLabel: string;
}

export interface SiteContent {
  hero: ContentSection;
  news: {
    title: string;
    ctaExplore: string;
    items: NewsItem[];
  };
  finalCta?: {
    title: string;
    description: string;
    ctaButton: string;
  };
}
