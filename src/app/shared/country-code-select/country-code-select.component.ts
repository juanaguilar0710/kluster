import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryService } from 'src/services/countrys/country.service';

/** Defines the structure of a country object. */
interface Country {
  name: string;
  dialCode: string;
  flag: string;
}

@Component({
  selector: 'app-country-code-select',
  templateUrl: './country-code-select.component.html',
  styleUrls: ['./country-code-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryCodeSelectComponent),
      multi: true
    },
    {
      provide: MatFormFieldControl,
      useExisting: CountryCodeSelectComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CountryCodeSelectComponent,
      multi: true
    }
  ]
})
/**
 * The `CountryCodeSelectComponent` is a custom form control used for selecting country codes with autocomplete functionality.
 * It integrates with Angular Material's form field and control APIs to provide a seamless user experience.
 */
export class CountryCodeSelectComponent implements OnInit, ControlValueAccessor  {
  /** Static counter to generate unique IDs for each instance of the component. */
  static nextId = 0;

  /** Form control for managing country selection. */
  countryControl = new FormControl();

  /** Observable for tracking changes to the filtered list of countries based on user input. */
  filteredCountries!: Observable<Country[]>;

  /** List of available countries for selection. */
  countries: Country[] = [];

  /** Subject for emitting state changes in the component. */
  stateChanges = new Subject<void>();

  /** Unique ID of the country code select component. */
  id = `country-select-${CountryCodeSelectComponent.nextId++}`;

  /** Indicates if the input field is focused. */
  focused = false;

  /** Indicates if the input field has been touched. */
  touched = false;

  /** Indicates if there's an error in the input field. */
  hasError = false;

  /** Indicates if the component is currently loading data. */
  isLoading = true;

  /** Placeholder text for the input field. */
  private _placeholder: string = '';

  /** Indicates if the input field is required. */
  private _required = false;

  /** Indicates if the input field is disabled. */
  private _disabled = false;

  /** Currently selected value in the input field. */
  private _value: string = '';

  /** Callback function to be invoked when the component's value changes. */
  private onChange: (value: any) => void = () => {};

  /** Callback function to be invoked when the component is touched. */
  private onTouched: () => void = () => {};

  constructor(private countryService: CountryService) {}

  /**
   * Initializes the component.
   * - Retrieves the list of countries from the `CountryService`.
   * - Sets up the filtered list of countries based on user input.
   */
  ngOnInit() {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = this.countryControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterCountries(value))
      );
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.hasError = true;
      this.isLoading = false; 
    });

    this.countryControl.valueChanges.subscribe(value => {
      this._value = value;
      this.stateChanges.next();
      this.onChange(value);
      this.onTouched();
    });
  }

  /** Checks if the input field is empty. */
  get empty(): boolean {
    return !this.countryControl.value;
  }

  /** Checks if the label should float above the input field. */
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  /** Checks if there's an error in the input field. */
  get errorState(): boolean {
    return this.countryControl.invalid && this.touched;
  }

  /** Retrieves the value of the input field. */
  get value(): string {
    return this._value;
  }
  
  /** Sets the value of the input field. */
  set value(value: string) {
    this._value = value;
    this.stateChanges.next();
  }

  /** Retrieves the placeholder text for the input field. */
  get placeholder(): string {
    return this._placeholder;
  }

  /** Sets the placeholder text for the input field. */
  set placeholder(plh: string) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  /** Checks if the input field is required. */
  get required(): boolean {
    return this._required;
  }

  /** Sets whether the input field is required. */
  set required(req: boolean) {
    this._required = req;
    this.stateChanges.next();
  }
/**
   * Checks if the input field is disabled.
   */
  get disabled(): boolean {
    return this._disabled;
  }
/**
   * Sets the disabled state of the input field.
   * If disabled, the country control is disabled; otherwise, it is enabled.
   * @param dis - Boolean value indicating whether the input field should be disabled.
   */
  set disabled(dis: boolean) {
    this._disabled = dis;
    if (this._disabled) {
      this.countryControl.disable();
    } else {
      this.countryControl.enable();
    }
    this.stateChanges.next();
  }
/**
   * Writes a new value to the input field.
   * @param value - The new value to be written.
   */
  writeValue(value: any): void {
    this.value = value;
    this.countryControl.setValue(value);
  }

  /**
   * Registers a callback function to be invoked when the input field's value changes.
   * @param fn - The callback function to be registered.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }


  /**
   * Registers a callback function to be invoked when the input field is touched.
   * @param fn - The callback function to be registered.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Sets the disabled state of the input field.
   * This is part of the ControlValueAccessor interface.
   * @param isDisabled - Boolean value indicating whether the input field should be disabled.
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Handles a click event on the container of the input field.
   * If the click is not on the input field, marks the field as touched.
   * @param event - The MouseEvent object representing the click event.
   */
  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.countryControl.markAsTouched();
    }
  }
/**
   * Validates the input field.
   * @param control - The AbstractControl object representing the input field.
   * @returns ValidationErrors if the field is invalid, null otherwise.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return this.countryControl.valid ? null : { invalid: true };
  }
/**
   * Filters the list of countries based on the provided value.
   * @param value - The value used to filter the list of countries.
   * @returns An array of countries that match the filter criteria.
   */
  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(filterValue) ||
      country.dialCode.includes(filterValue)
    );
  }
/**
   * Cleans up resources used by the component when it is destroyed.
   */
  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
