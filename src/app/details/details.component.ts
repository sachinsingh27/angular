import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-details',
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}} , {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this Housing Location</h2>
        <ul>
          <li> Units Available : {{housingLocation?.availableUnits}}</li>
          <li>Does this Location have WiFi : {{housingLocation?.wifi}}</li>
          <li>Does this Location have Laundry : {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to Live Here</h2>
        <!-- <button class="primary" type="button" >Apply Now</button> -->
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-Name">First Name</label>
          <input id="first-name" type="text" formControlName = "firstName"/>
          <label for="last-Name">Last Name</label>
          <input id="last-name" type="text" formControlName = "lastName"/>
          <label for="email">Email</label>
          <input id="email" type="email" formControlName = "email"/>
          <button type="submit" class="primary">Apply Now</button>
        </form>
      </section>
      
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  housingLocationId = 0;
  housingService = inject(HousingService);
  housingLocation : HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl()
  })
  constructor(route : ActivatedRoute){
    const housingLocationId = Number(route.snapshot.params['id']);
    // this.housingLocation = this.housingService.getHousingLocationListById(housingLocationId);
    this.housingService.getHousingLocationListById(housingLocationId).then((housingLocationId)=>{
      this.housingLocation = housingLocationId
    })
  }

  submitApplication(){
    this.housingService.submitApplication(
    this.applyForm.value.firstName?? '',
    this.applyForm.value.lastName?? '',
    this.applyForm.value.email?? ''
    )
  }

}
