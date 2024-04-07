import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
   URL = "http://localhost:3000/locations";

  constructor() { }

  async getHousingLocationList() : Promise<HousingLocation[]>{
    const data = await fetch(this.URL);
    return await data.json() ?? [];
  }

  async getHousingLocationListById(id : Number) : Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.URL}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName : string,lastName : string,email : string){
    console.log(firstName,lastName,email);
  }
}
