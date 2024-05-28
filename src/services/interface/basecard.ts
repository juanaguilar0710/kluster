export interface Feature {
  name: string;
  cost: number;
  duration: number; // duration in days
  category: string;
  id: number;
  img: string;
  description: string; 
}

export interface Basecard {
  title: string;
  features: Feature[];
  numberFeatures: number;
  cost: number;
  id: number;
  category: string;
  developmentDuration: number;
  img: string;
  description: string;
}