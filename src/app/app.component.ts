import { Location } from './types/location.interface';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetUnitsService } from './service/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService){ 

  }
  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
