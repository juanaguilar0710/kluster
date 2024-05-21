import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { CustomerService } from 'src/services/customer/customer.service';
import { Customer } from 'src/services/interface/Customer';
import { Buildcard } from 'src/services/interface/buildcard.interface';

@Component({
  selector: 'app-newbuildapp',
  templateUrl: './newbuildapp.component.html',
  styleUrls: ['./newbuildapp.component.css'],
})
export class NewbuildappComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isEditable = true;
  customerInfo!: Customer;
  newBuildCard!: Buildcard;

  constructor(
    private _formBuilder: FormBuilder,
    private customerService: CustomerService,
    private buildcardService: BuildcardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      codeCtrl: [
        '',
        [Validators.required, Validators.pattern('^\\+[0-9]{1,3}$')],
      ],
      phoneCtrl: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      companyCtrl: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]+$')],
      ],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  createCustomer() {
    if (this.firstFormGroup.valid) {
      this.customerInfo = {
        id: 1,
        name: this.firstFormGroup.get('nameCtrl')?.value,
        countryCode: this.firstFormGroup.get('codeCtrl')?.value,
        numberPhone: this.firstFormGroup.get('phoneCtrl')?.value,
        companyName: this.firstFormGroup.get('companyCtrl')?.value,
      };

      this.customerService.createNewCustomer(this.customerInfo);

      // this.createBuildcard();
    } else {
      console.error('Form is not valid');
    }
  }

  // Método adicional para crear el objeto Buildcard
  createBuildcard() {
    console.log('done');
  this.router.navigate(['/user/dashboard'])
    /* if (this.secondFormGroup.valid) {
      this.newBuildCard = {
        name: this.secondFormGroup.get('secondCtrl')?.value,
         };

      console.log('Buildcard Info:', this.newBuildCard);

      // Lógica para enviar el objeto newBuildCard al servicio
      this.buildcardService.createNewBuild(this.newBuildCard).subscribe(response => {
        console.log('Buildcard created:', response);
      }, error => {
        console.error('Error creating buildcard:', error);
      });
    } else {
      console.error('Second form is not valid');
    } */
  }
}
