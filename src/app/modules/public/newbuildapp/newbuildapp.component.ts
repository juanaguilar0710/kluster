import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { FeatureService } from 'src/services/buildcards/feature.service';
import { CountryService } from 'src/services/countrys/country.service';
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

/**
 * NewbuildappComponent is responsible for handling the creation of a new build card application.
 * It manages form groups for user input, modal dialogs, feature selection, and base card management.
 */
export class NewbuildappComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  isEditable = true;
  modalFeatureListIs = false;
  customerInfo!: Customer;
  newBuildCard!: Buildcard;
  modalIs: boolean = false;
  messageStepFour: boolean = false;

  modalListIs: boolean = false;

  basecardSelected!: Basecard;
  basecardExist: boolean = false;

  operatingSystems: string[] = ['iOS', 'Android', 'Windows', 'macOS', 'Linux'];
  platforms: string[] = ['Celular', 'Desktop', 'Tablet'];
  documentationOptions: string[] = [
    'Documentación del código',
    'Informe de testing',
    'Código base de la aplicación',
    'Métricas',
    'Diseños',
    'MockUps',
  ];
  features: Feature[] = [];
  selectedFeatures: Feature[] = [];
  totalCost: number = 0;
  confirmationStep = false;

  displayedColumns: string[] = ['Feature', 'Duration', 'Cost'];
  dataSource: Feature[] = this.selectedFeatures;

  /**
   * Constructor initializes services and the form builder.
   * @param _formBuilder - service to manage form building
   * @param customerService - service to manage customer data
   * @param buildcardService - service to manage build card data
   * @param basecardService - service to manage base card data
   * @param router - service to manage routing
   * @param modalService - service to manage modal dialogs
   * @param featureService - service to manage feature data
   * @param countryService - service to manage country data
   */

  constructor(
    private _formBuilder: FormBuilder,
    private customerService: CustomerService,
    private buildcardService: BuildcardService,
    private basecardService: BasecardService,
    private router: Router,
    private modalService: ModalService,
    private featureService: FeatureService,
    private countryService: CountryService
  ) {}

  /**
   * OnInit lifecycle hook initializes form groups, subscribes to observables, and loads initial data.
   */

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
      customBaseCtrl: [''],
      nameBuildCtrl: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9ñÑ ]+$')],
      ],
      selectedFeaturesCtrl: this._formBuilder.array([]),
    });
    this.thirdFormGroup = this._formBuilder.group({
      operatingSystems: this._formBuilder.array([]),
      platforms: this._formBuilder.array([]),
      documentation: this._formBuilder.array([]),
    });
    // Subscribe to base card ID changes
    this.basecardService.baseCardId$.subscribe((res) => {
      this.checkBasecard();
    });
    // Subscribe to modal visibility changes
    this.modalService.$basecardlistModal.subscribe(
      (res) => {
        this.modalListIs = res;
      },
      (error) => {
        console.error(error);
      }
    );
    this.modalService.$featureListModal.subscribe(
      (res) => {
        this.modalFeatureListIs = res;
      },
      (error) => {
        console.error(error);
      }
    );
    this.modalService.$modal.subscribe(
      (res) => {
        this.modalIs = res;
      },
      (error) => {
        console.error(error);
      }
    );
    // Load all features
    this.featureService.getAllFeatures().subscribe(
      (res) => {
        this.features = res;
      },
      (error) => {
        console.error(error);
      }
    );

    // Subscribe to selected features changes
    this.featureService.selectedFeatures$.subscribe((features: Feature[]) => {
      this.selectedFeatures = features;
      this.totalCost = this.calculateTotalCost();
    });
  }

  /**
   * Creates a new customer and initializes a new build card with the customer info.
   */
  createCustomer() {
    if (this.firstFormGroup.valid) {
      this.customerInfo = {
        id: 1,
        name: this.firstFormGroup.get('nameCtrl')?.value,
        countryCode: this.firstFormGroup.get('codeCtrl')?.value,
        numberPhone: this.firstFormGroup.get('phoneCtrl')?.value,
        companyName: this.firstFormGroup.get('companyCtrl')?.value,
      };

      this.newBuildCard = {
        name: '',
        features: [],
        reference: '',
        id: 0,
        last_update: new Date(),
        customer: this.customerInfo,
      };
      this.customerService.createNewCustomer(this.customerInfo);
      // this.createBuildcard();
    } else {
      console.error('Form is not valid');
    }
  }

  /**
   * Creates a new build card with the selected features and resets the base card and feature selections.
   */
  createBuildcard() {
    this.newBuildCard.status = 1;
    this.buildcardService.createNewBuild(this.newBuildCard);
    this.basecardService.setBaseCardId(null);
    this.featureService.resetFeaturesSelected();
    this.messageStepFour = true;
  }

  /**
   * Checks if a base card is selected and loads its features if available.
   */
  checkBasecard(): void {
    this.basecardService.baseCardId$.subscribe(
      (basecardId) => {
        if (basecardId !== null) {
          this.basecardService.getBaseCardById(basecardId).subscribe(
            (basecard) => {
              if (basecard) {
                this.basecardSelected = basecard;
                this.getFeaturesOfSelectedBase(this.basecardSelected);
                this.basecardExist = true;
              } else {
                this.basecardExist = false;
                console.error('Basecard not found');
              }
            },
            (error) => {
              console.error('Error fetching basecard:', error);
            }
          );
        } else {
          this.basecardExist = false;
        }
      },
      (error) => {
        console.error('Error fetching basecard ID:', error);
      }
    );
  }

  /**
   * Gets the features of the selected base card and adds them to the feature list.
   * @param base - The selected base card
   */

  getFeaturesOfSelectedBase(base: Basecard): void {
    const featuresOnBase = base.features;
    if (featuresOnBase.length >= 0) {
      this.selectedFeatures = featuresOnBase;
      featuresOnBase.forEach((feature) => {
        this.featureService.addFeatureToList(feature);
      });
    }
  }
  /**
   * Opens the base card list modal.
   */
  seeBaseList() {
    this.modalListIs = true;
    this.modalService.$basecardlistModal.emit(true);
  }
  /**
   * Saves the URL of the custom base and updates the new build card.
   */
  saveUrl() {
    if (this.secondFormGroup.valid) {
      const features = this.secondFormGroup.get('selectedFeaturesCtrl')?.value;

      this.newBuildCard.name = this.secondFormGroup.get('nameBuildCtrl')?.value;
      this.newBuildCard.urlBase =
        this.secondFormGroup.get('customBaseCtrl')?.value;
      this.newBuildCard.last_update = new Date();
      this.newBuildCard.status = 0;
      this.newBuildCard.developmentDuration = 30;
      this.newBuildCard.features = this.featureService.getFeatureIds(
        this.selectedFeatures
      );
    } else {
      console.error('Form is not valid');
    }
  }
  /**
   * Saves the base card information and updates the new build card.
   */
  saveBase() {
    if (this.basecardExist) {
      this.newBuildCard.name = this.secondFormGroup.get('nameBuildCtrl')?.value;
      this.newBuildCard.basecard_Id = this.basecardSelected;
      this.newBuildCard.status = 0;
      this.totalCost = this.calculateTotalCost();
      this.newBuildCard.cost = this.totalCost;
      this.newBuildCard.features = this.featureService.getFeatureIds(
        this.selectedFeatures
      );
      this.newBuildCard.last_update = new Date();
      this.newBuildCard.developmentDuration =
        this.basecardSelected.developmentDuration;
    } else {
      console.error('basecard is not valid');
    }
  }
  /**
   * Validates the information before proceeding to the confirmation step.
   */
  validateInfo(): void {
    if (
      !this.basecardExist &&
      (!this.secondFormGroup.get('customBaseCtrl')?.value ||
        this.secondFormGroup.get('customBaseCtrl')?.value.trim() === '')
    ) {
      alert('No URL or Basecard selected');
      return;
    }

    if (this.selectedFeatures.length === 0) {
      alert('No features selected');
      return;
    }

    this.confirmationStep = true;
  }

  /**
   * Saves the URL or base card information based on the selected options.
   */
  saveUrlOrBasecard(): void {
    this.validateInfo();

    if (this.confirmationStep) {
      if (this.secondFormGroup.valid) {
        const url = this.secondFormGroup.get('customBaseCtrl')?.value;
        const features = this.selectedFeatures;
        this.dataSource = features;
        if (url && url.trim() !== '') {
          this.newBuildCard.urlBase = url.trim();
          this.newBuildCard.basecard_Id = undefined;

          if (features.length > 0) {
            this.newBuildCard.features =
              this.featureService.getFeatureIds(features);
            this.totalCost = this.calculateTotalCost();
            this.newBuildCard.cost = this.totalCost;
          } else {
            alert('No features selected');
            return;
          }
        } else if (this.basecardExist) {
          this.saveBase();

          if (features.length > 0) {
            this.newBuildCard.features =
              this.featureService.getFeatureIds(features);
            this.totalCost = this.calculateTotalCost();
            this.newBuildCard.cost = this.totalCost;
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

  /**
   * Closes the confirmation step alert.
   */
  closeAlert() {
    this.confirmationStep = false;
  }

  /**
   * Handles checkbox change events for form arrays.
   * @param e - The event object
   * @param controlName - The name of the form control
   */
  onCheckboxChange(e: any, controlName: string) {
    const checkArray: FormArray = this.thirdFormGroup.get(
      controlName
    ) as FormArray;

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
  /**
   * Saves the delivery details from the third form group to the new build card.
   */
  saveDeliveryDetails() {
    if (this.thirdFormGroup.valid) {
      const deliveryDetail = this.thirdFormGroup.value;
      this.newBuildCard.delivery_detail = Object.keys(deliveryDetail).map(
        (key) => deliveryDetail[key]
      );
    } else {
      console.error('Form is not valid');
    }
  }

  /**
   * Deletes the selected base card.
   */
  deleteSelectionCard() {
    this.basecardService.setBaseCardId(null);
  }
  /**
   * Opens the feature list modal.
   */
  seeFeatureList() {
    this.modalFeatureListIs = true;
    this.modalService.$featureListModal.emit(true);
  }

  /**
   * Removes a feature from the selected features list.
   * @param feature - The feature to be removed
   */
  deleteFeature(feature: Feature): void {
    this.featureService.removeFeatureFromList(feature);
  }
  /**
   * Checks if a documentation option is selected.
   * @param doc - The documentation option
   * @returns true if the option is selected, false otherwise
   */
  isChecked(doc: string): boolean {
    return this.documentationOptions.some((option) => option === doc);
  }
  /**
   * Calculates the total cost of the selected features.
   * @returns The total cost
   */
  calculateTotalCost(): number {
    let totalCost = 0;
    this.selectedFeatures.forEach((feature) => {
      totalCost += feature.cost;
    });
    return totalCost;
  }
  /**
   * Closes the step four alert and navigates to the user dashboard.
   */
  closeAlertFourStep() {
    this.router.navigate(['/user/dashboard']);
    this.messageStepFour = false;
  }
}
