export interface Feature {
        nameFeature: string;
        costFeature: number;
      }
      
      export interface Basecard {
        title: string;
        features: Feature[];
        numberFeatures: number;
        cost: number;
        id: number;
        category: string;
        developmentDuration: number;

      }