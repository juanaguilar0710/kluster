import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl = environment.country;



constructor(private http: HttpClient) { }

getAllCountries(): Observable<any[]> {
  return this.http.get<any[]>(this.countriesUrl).pipe(
    timeout(30000),
    retry(2), 
    map((res: any) => {
      return res.map((country: any) => ({
        name: country.name.common,
        dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
        flag: country.flags.svg
      }));
    }),
    catchError(error => this.handleError(error))
  );
}

private handleError(error: HttpErrorResponse): Observable<any[]> {
  console.error('Error fetching countries:', error);
  if (error.error instanceof ErrorEvent) {
    console.error('Client-side error:', error.error.message);
  } else { 
    console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
  }
  return of([]);
}
}
