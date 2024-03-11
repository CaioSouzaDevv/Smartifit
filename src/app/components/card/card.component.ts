import { Component, Input, OnInit } from '@angular/core';
import {Location} from '../../types/location.interface'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() card!: Location;

  constructor() {}

  ngOnInit(): void {

  }
  
}
