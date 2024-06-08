import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * CountryService is responsible for retrieving and handling country data.
 * It communicates with the backend API to fetch country information.
 */
export class CountryService {
  
  private countriesUrl = environment.country; // URL of the country data API

  constructor(private http: HttpClient) { }

  /**
   * Retrieves all countries from the backend API.
   * @returns An observable of an array containing country data.
   */
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesUrl).pipe(
      timeout(30000), // Timeout set to 30 seconds
      retry(2), // Retry the request up to 2 times in case of failure
      map((res: any) => {
        // Map the response data to a desired format
        return res.map((country: any) => ({
          name: country.name.common,
          dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
          flag: country.flags.svg
        }));
      }),
      catchError(error => this.handleError(error)) // Handle any errors that occur during the request
    );
  }

  /**
   * Handles HTTP errors that occur during the request.
   * @param error The HTTP error response.
   * @returns An observable of an empty array.
   */
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
