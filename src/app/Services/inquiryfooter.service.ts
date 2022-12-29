import { Injectable } from '@angular/core';
import { Divisionval, Firstfooterval } from '../common';

@Injectable({
  providedIn: 'root',
})
export class InquiryfooterService {
  constructor() {}
  public divisionlist: Divisionval[] = [
    {
      title: 'HR Inquiry',
      website: 'hr@taglineinfotech.com',
      number: '+91 6354362521',
    },
    {
      title: 'Sales Inquiry',
      website: 'solutions@taglineinfotech.com',
      number: 'Tagline infotech',
    },
  ];

  div2title: string = 'Help & Advice';
  division2list: string[] = [
    'Career',
    'About Us',
    'Contact Us',
    'Blog',
    'Privacy pilicy',
    'Sitemap',
  ];

  div3title: string = 'Services';
  division3list: string[] = [
    'Mobile',
    'web Development',
    'Web Design',
    'UI / UX Design',
    'Digital Marketing',
  ];

  firstfooter: Firstfooterval = {
    header: 'Get latest from Tagline Infotech',
    title1: 'Share your email so we can send you ',
    title2: 'guides ',
    title3: ' and ',
    title4: 'industry news.',
    title5: 'You can unsubscribe at any time. Read our privacy policy.',
    title6: '2022',
    title7: ' All rights reserved by ',
    title8: 'Tagline Infotech LLP',
  };

  numbers: number[] = [1, 2, 3, 4, 5];

  div4title: string = 'Hire Developers';
  division4list: string[] = [
    'Hire Python Developer',
    'Hire Angular Developer',
    'Hire ROR Developer',
    'Hire Flutter Developer',
    'Hire React Js Developer',
    'Hire React Native Developer',
  ];
}
