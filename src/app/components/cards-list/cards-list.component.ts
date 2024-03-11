import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from '../../service/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent implements OnInit{

  @Input() unitsList: Location[] = [];
  constructor() { 

  }

  ngOnInit(): void {
    
  }

}
