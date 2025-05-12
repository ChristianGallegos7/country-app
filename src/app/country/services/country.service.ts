import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  uri = "https://restcountries.com/v3.1/capital/{capital}"

  private http = inject(HttpClient);

  searchByCapital(query: string) {
    query.toLowerCase();
    
  }

}
