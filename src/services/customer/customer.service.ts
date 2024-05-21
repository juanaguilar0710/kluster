import { Injectable } from '@angular/core';
import { Customer } from '../interface/Customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor() { }

createNewCustomer(newCustomer:Customer){
  environment.storage.setItem('customer', JSON.stringify(newCustomer));
}
getCustomerInLocalstorage():Customer{
  return JSON.parse(environment.storage.getItem('customer')!);
}

updateCustomer(){}

deleteCustomer(){
  environment.storage.removeItem('customer');
}
}
