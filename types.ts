
export type Language = 'en' | 'es' | 'ca' | 'de';

export interface ContentSection {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string; // Can contain HTML/Line breaks
  items?: string[]; // Optional bullet points
  ctaAction?: boolean; // If true, renders a button
  ctaLabel?: string;   // Label for the button
}

export interface SiteContent {
  hero: ContentSection;
  infoCards: InfoCard[]; // The 6 main informational points
  finalCta?: {
    title: string;
    description: string;
    ctaButton: string;
  };
}
