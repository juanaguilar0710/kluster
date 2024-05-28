import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { FeatureService } from 'src/services/buildcards/feature.service';
import { CustomerService } from 'src/services/customer/customer.service';
import { Customer } from 'src/services/interface/Customer';
import { Basecard, Feature } from 'src/services/interface/basecard';
import { Buildcard } from 'src/services/interface/buildcard.interface';
import { ModalService } from 'src/services/modal.service';

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
  modalFeatureListIs= false;
  customerInfo!: Customer;
  newBuildCard!: Buildcard;

  modalListIs:boolean=false;

  basecardSelected!: Basecard;
  basecardExist:boolean =false;

  operatingSystems: string[] = ['iOS', 'Android', 'Windows', 'macOS', 'Linux'];
  platforms: string[] = ['Cellular', 'Desktop', 'Tablet'];
  documentationOptions: string[] = ['Documentación del código', 'Informe de testing', 'Código base de la aplicación', 'Métricas','Diseños', 'MockUps'];
  features: Feature[] = [];
  selectedFeatures: Feature[] = [];
  totalCost: number = 0;
  confirmationStep = false

  


  constructor(
    private _formBuilder: FormBuilder,
    private customerService: CustomerService,
    private buildcardService: BuildcardService,
    private basecardService: BasecardService,
    private router: Router,
    private modalService:ModalService,
    private featureService:FeatureService
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
    this.checkBasecard();

    this.secondFormGroup = this._formBuilder.group({
      customBaseCtrl: ['',],
      nameBuildCtrl:['',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      selectedFeaturesCtrl: this._formBuilder.array([])
    });
    this.thirdFormGroup = this._formBuilder.group({
      operatingSystems: this._formBuilder.array([]),
      platforms: this._formBuilder.array([]),
      documentation: this._formBuilder.array([])
    });
    this.basecardService.baseCardId$.subscribe((res)=>{ this.checkBasecard()})
    this.modalService.$basecardlistModal.subscribe((res)=>{ this.modalListIs = res},error=>{console.error(error)})
    this.modalService.$featureListModal.subscribe((res)=>{ this.modalFeatureListIs = res},error=>{console.error(error)})
    this.featureService.getAllFeatures().subscribe((res)=>{
      this.features=res
    },error=>{
      console.error(error)
    });

    this.featureService.selectedFeatures$.subscribe((features: Feature[]) => {
      this.selectedFeatures = features;
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

      this.newBuildCard={
        name:'',
        features:[],
        reference:'',
        id:0,
        last_update: new Date(),
        customer:this.customerInfo
      }
      this.customerService.createNewCustomer(this.customerInfo);
      // this.createBuildcard();
    } else {
      console.error('Form is not valid');
    }
  }

  // Método adicional para crear el objeto Buildcard
  createBuildcard() {
    
    this.newBuildCard.status=1
    this.buildcardService.createNewBuild(this.newBuildCard)
    this.router.navigate(['/user/dashboard'])
    
  }

  checkBasecard(): void {
    this.basecardService.baseCardId$.subscribe(basecardId => {
      if (basecardId !== null) {
        this.basecardService.getBaseCardById(basecardId).subscribe(basecard => {
          if (basecard) {
            this.basecardSelected = basecard;
            this.getFeaturesOfSelectedBase(this.basecardSelected);
            this.basecardExist = true;
          } else {
            this.basecardExist = false;
            console.error('Basecard not found');
          }
        }, error => {
          console.error('Error fetching basecard:', error);
        });
      } else {
        this.basecardExist = false;
        console.error('No basecard ID set');
      }
    }, error => {
      console.error('Error fetching basecard ID:', error);
    });
  }
  
  getFeaturesOfSelectedBase(base: Basecard): void {
    const featuresOnBase = base.features;
    if (featuresOnBase.length >= 0) {
      this.selectedFeatures = featuresOnBase;
      featuresOnBase.forEach(feature => {
        this.featureService.addFeatureToList(feature);
      });
    }
  }
  seeBaseList(){
    this.modalListIs=true
    this.modalService.$basecardlistModal.emit(true)
  }
  saveUrl(){
    if (this.secondFormGroup.valid) {
      const features = this.secondFormGroup.get('selectedFeaturesCtrl')?.value;

      this.newBuildCard.name =this.secondFormGroup.get('nameBuildCtrl')?.value
      this.newBuildCard.urlBase =this.secondFormGroup.get('customBaseCtrl')?.value
      this.newBuildCard.last_update = new Date()
      this.newBuildCard.status = 0 
      this.newBuildCard.developmentDuration = 30  
      this.newBuildCard.features = this.selectedFeatures
    } else {
      console.error('Form is not valid');
    }
    
  }
 saveBase(){
    if (this.basecardExist) {
      this.newBuildCard.name =this.secondFormGroup.get('nameBuildCtrl')?.value
      this.newBuildCard.basecard_Id=this.basecardSelected
      this.newBuildCard.status = 0
      this.totalCost=this.calculateTotalCost()
      this.newBuildCard.cost =this.totalCost
      this.newBuildCard.features = this.selectedFeatures
      this.newBuildCard.last_update = new Date()
      this.newBuildCard.developmentDuration = this.basecardSelected.developmentDuration
    } else {
      console.error('basecard is not valid');
    }
  } 
  validateInfo(): void {
    if (!this.basecardExist && (!this.secondFormGroup.get('customBaseCtrl')?.value || this.secondFormGroup.get('customBaseCtrl')?.value.trim() === '')) {
      alert('No URL or Basecard selected');
      return;
    }
  
    if (this.selectedFeatures.length === 0) {
      alert('No features selected');
      return;
    }
  
    this.confirmationStep = true;
  }
  
  saveUrlOrBasecard(): void {
    this.validateInfo();
    
    
    if (this.confirmationStep) {
      if (this.secondFormGroup.valid) {
        const url = this.secondFormGroup.get('customBaseCtrl')?.value;
        const features = this.selectedFeatures;
  
        if (url && url.trim() !== '') {
          this.newBuildCard.urlBase = url.trim();
          this.newBuildCard.basecard_Id = undefined;
  
          if (features.length > 0) {
            this.newBuildCard.features=features;
            this.totalCost=this.calculateTotalCost()
            this.newBuildCard.cost =this.totalCost
            
          } else {
            alert('No features selected'); 
            return;
          }
        } else if (this.basecardExist) {
          this.saveBase();
  
          if (features.length > 0) {
            this.newBuildCard.features=features;
            this.totalCost=this.calculateTotalCost()
            this.newBuildCard.cost =this.totalCost
          } else {
            alert('No features selected');
            return;
          }
        }
      } else {
        alert('Form is not valid');
        return;
      }
    }
  }
  

  closeAlert(){
    this.confirmationStep =false
  }
  onCheckboxChange(e: any, controlName: string) {
    const checkArray: FormArray = this.thirdFormGroup.get(controlName) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  saveDeliveryDetails() {
    if (this.thirdFormGroup.valid) {
      const deliveryDetail = this.thirdFormGroup.value;
      this.newBuildCard.delivery_detail = Object.keys(deliveryDetail).map(key => deliveryDetail[key]);
    } else {
      console.error('Form is not valid');
    }
  }

  
  deleteSelectionCard(){
    this.basecardService.setBaseCardId(null);
  }

  seeFeatureList(){
    this.modalFeatureListIs=true
    this.modalService.$featureListModal.emit(true)
  }


  deleteFeature(feature: Feature): void {
    this.featureService.removeFeatureFromList(feature);
  }

  isChecked(doc: string): boolean {
    return this.documentationOptions.some(option => option === doc);
  }
  calculateTotalCost(): number {
    let totalCost = 0;
    this.selectedFeatures.forEach(feature => {
        totalCost += feature.cost;
    });
    return totalCost;
}

}
