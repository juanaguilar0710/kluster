/**
 * Represents a customer, containing details such as ID, name, country code, phone number, and company name.
 */
export interface Customer {
    id: number;           // Unique identifier of the customer
    name: string;         // Name of the customer
    countryCode: string; // Country code of the customer's phone number
    numberPhone: string;  // Phone number of the customer
    companyName: string;  // Name of the customer's company
  }