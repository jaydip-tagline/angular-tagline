import { Component, OnInit, Input } from '@angular/core';
import { Placeval } from '../common';
@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() placeData!: Placeval[];
  constructor() {}

  ngOnInit(): void {}
}
