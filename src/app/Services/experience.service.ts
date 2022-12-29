import { Injectable } from '@angular/core';
import { Fulldiv1val } from '../common';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  public fulldiv1list: Fulldiv1val[] = [
    {
      iamge: '../assets/image/contentlogo.webp',
      title: '125+',
      description: 'Professional',
    },
    {
      iamge: '../assets/image/contentlogo2.webp',
      title: '450+',
      description: 'Completed Projects',
    },
    {
      iamge: '../assets/image/contentlogo3.webp',
      title: '150+',
      description: 'Freelance Hours',
    },
    {
      iamge: '../assets/image/contentlogo4.webp',
      title: '5+',
      description: 'Years of experience',
    },
  ];
}
