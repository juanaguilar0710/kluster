import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, ValidationErrors, NG_VALIDATORS} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryService } from 'src/services/countrys/country.service';

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
export class CountryCodeSelectComponent implements OnInit, ControlValueAccessor  {
  static nextId = 0;
  private _placeholder: string = '';
  private _required = false;
  private _disabled = false;
  private _value: string = '';


  countryControl = new FormControl();
  filteredCountries!: Observable<Country[]>;
  countries: Country[] = [];
  stateChanges = new Subject<void>();
  id = `country-select-${CountryCodeSelectComponent.nextId++}`;
  focused = false;
  touched = false;
  hasError = false;
  isLoading = true;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private countryService: CountryService) {}

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

  get empty(): boolean {
    return !this.countryControl.value;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  get errorState(): boolean {
    return this.countryControl.invalid && this.touched;
  }

  get value(): string {
    return this._value;
  }
  
  set value(value: string) {
    this._value = value;
    this.stateChanges.next();
  }

  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(plh: string) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  get required(): boolean {
    return this._required;
  }

  set required(req: boolean) {
    this._required = req;
    this.stateChanges.next();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(dis: boolean) {
    this._disabled = dis;
    if (this._disabled) {
      this.countryControl.disable();
    } else {
      this.countryControl.enable();
    }
    this.stateChanges.next();
  }

  writeValue(value: any): void {
    this.value = value;
    this.countryControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.countryControl.markAsTouched();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.countryControl.valid ? null : { invalid: true };
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(filterValue) ||
      country.dialCode.includes(filterValue)
    );
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
