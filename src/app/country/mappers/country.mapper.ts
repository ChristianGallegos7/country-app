import { CountryResponse } from "../interfaces/country-response.interface";
import { Country } from "../interfaces/country.interface";

export class CountryMapper {
    static CountryResponseToCountry(countryResponse: CountryResponse):Country {
        return {
            cca2 : countryResponse.cca2,
            capital: countryResponse.capital[0],
            flag: countryResponse.flag,
            flagSvg: countryResponse.flags.svg,
            population: countryResponse.population,
            name:countryResponse.name.common      
        }
    }


    static CountryResponseArrayToCountryArray(countriesResponse: CountryResponse[]):Country [] {
        return countriesResponse.map(this.CountryResponseToCountry);
    }
}