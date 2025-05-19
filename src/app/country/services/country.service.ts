import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/country-response.interface';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_URL = "https://restcountries.com/v3.1"

  private http = inject(HttpClient);

  searchByCapital(query: string): 
  Observable<Country[]> {
    query = query.trim().toLowerCase();
    return this.http.get<CountryResponse[]>(`${this.API_URL}/capital/${query}`).pipe(
      map(restCountries => CountryMapper.CountryResponseArrayToCountryArray(restCountries))
    )
  }

}
