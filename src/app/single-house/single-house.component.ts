import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Housinglist } from '../housinglist';

@Component({
  selector: 'app-single-house',
  templateUrl: './single-house.component.html',
  styleUrls: ['./single-house.component.css'],
})

export class SingleHouseComponent implements OnInit {

  url = 'http://localhost:3000/locations';
  singleHouse: Housinglist | undefined;
  routes: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 1;
  applyForm = new FormGroup({
     firstName: new FormControl(),
     lastName: new FormControl(),
     email: new FormControl() 
  });

  constructor() {
    this.housingLocationId = Number(this.routes.snapshot.params["id"]);
  }

  async ngOnInit() {
    this.singleHouse = await this.getLocationById(this.housingLocationId);
  }

  async getLocationById(id: number): Promise<any | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }  

  submitApplication() {
    console.log(this.applyForm.value.firstName, this.applyForm.value.lastName);
    console.log(this.applyForm.value.email);
  }
  
}
