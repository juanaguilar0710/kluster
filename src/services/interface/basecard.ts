/**
 * Represents a feature offered by a base card, including its name, cost, duration, category, ID, image URL, and description.
 */
export interface Feature {
  name: string;        // Name of the feature
  cost: number;        // Cost of the feature
  duration: number;    // Duration of the feature in days
  category: string;    // Category of the feature
  id: number;          // Unique identifier of the feature
  img: string;         // URL of the image representing the feature
  description: string; // Description of the feature
}

/**
 * Represents a base card, which contains a title, list of features, number of features, cost, ID, category, development duration,
 * image URL, and description.
 */
export interface Basecard {
  title: string;                 // Title of the base card
  features: Feature[];           // List of features offered by the base card
  numberFeatures: number;        // Number of features
  cost: number;                  // Cost of the base card
  id: number;                    // Unique identifier of the base card
  category: string;              // Category of the base card
  developmentDuration: number;   // Development duration of the base card
  img: string;                   // URL of the image representing the base card
  description: string;           // Description of the base card
}