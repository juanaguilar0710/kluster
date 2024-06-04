import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl = environment.country;



constructor(private http: HttpClient) { }

getAllCountries(): Observable<any[]> {
  return this.http.get<any[]>(this.countriesUrl).pipe(
    map((res: any) => {
      return res.map((country: any) => ({
        name: country.name.common,
        dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
        flag: country.flags.svg
      }));
    })
  );
}
}
