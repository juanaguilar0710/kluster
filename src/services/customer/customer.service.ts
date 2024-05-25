import { Injectable } from '@angular/core';
import { Customer } from '../interface/Customer';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor() { }

createNewCustomer(newCustomer: Customer): Observable<void> {
  try {
    environment.storage.setItem('customer', JSON.stringify(newCustomer));
    return of(undefined); 
  } catch (error) {
    return throwError('Error al crear un nuevo cliente: ' + error); 
  }
}

getCustomerInLocalstorage(): Observable<Customer> {
  const customerString = environment.storage.getItem('customer');
  if (customerString) {
    const customer = JSON.parse(customerString);
    return of(customer); 
  } else {
    return throwError('No se encontró ningún cliente en el almacenamiento local'); 
  }
}

updateCustomer(updatedCustomer: Customer): Observable<void> {
  // Implementar lógica para actualizar un cliente
  return of(undefined); 
}

deleteCustomer(): Observable<void> {
  try {
    environment.storage.removeItem('customer');
    return of(undefined); 
  } catch (error) {
    return throwError('Error al eliminar el cliente: ' + error); 
  }
}
}
