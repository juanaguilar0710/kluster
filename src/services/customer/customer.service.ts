import { Injectable } from '@angular/core';
import { Customer } from '../interface/Customer';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * CustomerService is responsible for managing customer data, including creation, retrieval, updating, and deletion.
 * It interacts with the local storage to store and retrieve customer information.
 */
export class CustomerService {
  
  private nextId = 1; // Identifier for the next customer

  constructor() { }

  /**
   * Creates a new customer and stores it in the local storage.
   * @param newCustomer The customer object to be created.
   * @returns An observable of void indicating the success or failure of the operation.
   */
  createNewCustomer(newCustomer: Customer): Observable<void> {
    try {
      environment.storage.setItem('customer', JSON.stringify(newCustomer));
      return of(undefined); // Operation completed successfully
    } catch (error) {
      return throwError('Error creating a new customer: ' + error); // Error occurred during creation
    }
  }

  /**
   * Retrieves the customer stored in the local storage.
   * @returns An observable of the customer object retrieved from the local storage.
   */
  getCustomerInLocalstorage(): Observable<Customer> {
    const customerString = environment.storage.getItem('customer');
    if (customerString) {
      const customer = JSON.parse(customerString);
      return of(customer); // Customer retrieved successfully
    } else {
      return throwError('No customer found in local storage'); // No customer found in local storage
    }
  }

  /**
   * Updates the customer information in the local storage.
   * @param updatedCustomer The updated customer object.
   * @returns An observable of void indicating the success or failure of the operation.
   */
  updateCustomer(updatedCustomer: Customer): Observable<void> {
    // Implement logic to update a customer
    return of(undefined); // Operation completed successfully
  }

  /**
   * Deletes the customer information from the local storage.
   * @returns An observable of void indicating the success or failure of the operation.
   */
  deleteCustomer(): Observable<void> {
    try {
      environment.storage.removeItem('customer');
      return of(undefined); // Operation completed successfully
    } catch (error) {
      return throwError('Error deleting the customer: ' + error); // Error occurred during deletion
    }
  }
}
