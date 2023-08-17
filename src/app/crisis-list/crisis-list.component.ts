import { Component, OnInit } from '@angular/core';
import { Housinglist } from '../housinglist';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  url = 'http://localhost:3000/locations';
  housinglist: Housinglist[] = [];
  filteredHousingList: Housinglist[] = [];
  
  count: number = 0;
  constructor() { }

  async ngOnInit() {
    this.housinglist = await this.getAllLocations();
    this.filteredHousingList = this.housinglist;
  }

  updateCount(): void {
      this.count = this.count + 1;
  }

  decreaseCount(): void {
    if (this.count > 0 ){
      this.count = this.count - 1;
    }
  }

  async getAllLocations(): Promise<Housinglist[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async filterLocationResults(text: string): Promise<void> {
    if (!text) this.filteredHousingList = this.housinglist;
    this.filteredHousingList = this.housinglist.filter((house) => house.city.toLowerCase().includes(text.toLowerCase()));       
  }

} 
