import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newbuildapp',
  templateUrl: './newbuildapp.component.html',
  styleUrls: ['./newbuildapp.component.css']
})
export class NewbuildappComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      codeCtrl: ['', [Validators.required, Validators.pattern('^\\+[0-9]{1,3}$')]],
      phoneCtrl: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      companyCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
