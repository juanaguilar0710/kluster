import { Customer } from "./Customer"
import { Basecard, Feature } from "./basecard"

/**
 * Represents a build card, which includes information such as name, status, list of feature IDs, duration of development,
 * cost, reference, associated base card, URL, ID, last update, customer details, delivery details, and development duration.
 */
export interface Buildcard {
    name: string;                        // Name of the build card
    status?: number;                     // Status of the build card
    features: number[];                  // List of feature IDs
    duration_of_development?: number;    // Duration of development
    cost?: number;                       // Cost of the build card
    reference: string;                   // Reference of the build card
    basecard_Id?: Basecard;              // Associated base card
    urlBase?: string;                    // URL of the base card
    id: number;                          // Unique identifier of the build card
    last_update?: Date;                  // Date of the last update
    customer?: Customer;                 // Customer details
    delivery_detail?: any[];             // Delivery details
    developmentDuration?: number;        // Development duration
  }