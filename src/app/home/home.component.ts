import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  template: `
      <section>
        <form>
          <input type="text" placeholder="Enter the city" #cityName/>
          <button class="primary" type="button" (click)="filterCity(cityName.value)">Search</button>
        </form>
      </section>
      <section class="results">
        <app-housing-location *ngFor="let housingLocation of filteredList" [housingLocation]="housingLocation">
      </app-housing-location>
      </section>  
  `
    ,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService : HousingService = inject(HousingService);
  housingLocationList : HousingLocation[] = [];
  filteredList : HousingLocation[] = [];
  constructor(){
    this.housingService.getHousingLocationList().then((housingLocationList : HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredList = housingLocationList;
    })
  }
  filterCity(text : string){
    if(!text) this.filteredList = this.housingLocationList;
    this.filteredList = this.housingLocationList.filter((housingLocation)=> housingLocation.city.toLowerCase().includes(text.toLowerCase()));
  }

}
