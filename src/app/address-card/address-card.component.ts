import { Component, OnInit, Input } from '@angular/core';
import { Placeval } from '../common';
import { AddressService } from '../Services/address.service';
@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  // @Input() placeData!: Placeval[];
  constructor(private addressService: AddressService) {}
  public placeData!: Placeval[];
  ngOnInit(): void {
    this.placeData = this.addressService.placelist;
  }
}
