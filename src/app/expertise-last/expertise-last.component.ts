import { Component, OnInit } from '@angular/core';
import { Taglinewhyheadval } from '../common';

@Component({
  selector: 'app-expertise-last',
  templateUrl: './expertise-last.component.html',
  styleUrls: ['./expertise-last.component.scss'],
})
export class ExpertiseLastComponent implements OnInit {
  constructor() {}

  taglinewhyhead: Taglinewhyheadval = {
    header: 'Why Choose Tagline Infotech ?',
    title1: 'Empower ',
    title2: ' Your ',
    title3: 'Business',
    title4: ' with Dedicated Developers',
    title5: 'Talk to our Expert',
  };

  ngOnInit(): void {}
}
