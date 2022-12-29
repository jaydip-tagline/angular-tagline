import { Injectable } from '@angular/core';
import { Placeval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}
  public placelist: Placeval[] = [
    {
      country: 'India (HQ)',
      address: `Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,
    Gujarat 394101`,
      number: '+91 9913 808 285',
    },
    {
      country: 'U.S.A',
      address: `2885 Old Zion, Cemetery Rd, Loganville, Ga 30052`,
      number: '+1 (404) 483-3388',
    },
    {
      country: 'United Kingdom',
      address: `65 Byron road North wembley Middlesex, london HA0 3PB`,
      number: '+44 78240 75400',
    },
  ];
}
