export enum Persona {
  HYPEBEAST = 'Hypebeast / Gen Z',
  ATHLETE = 'Atleta de Performance',
  CASUAL = 'Casual / Família',
  CONSCIOUS = 'O Consciente'
}

export enum ContentPillar {
  HERITAGE = 'Heritage & Originals',
  PERFORMANCE = 'Tech & Performance',
  COMMUNITY = 'Comunidade & Local',
  SUSTAINABILITY = 'Sustentabilidade'
}

export enum Platform {
  INSTAGRAM = 'Instagram (Reels/Feed)',
  TIKTOK = 'TikTok',
  YOUTUBE = 'YouTube Shorts',
  PINTEREST = 'Pinterest'
}

export interface GeneratedContent {
  text: string;
}

export interface MetricData {
  name: string;
  value: number;
  target: number;
}
