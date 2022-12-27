import { Component, OnInit } from '@angular/core';

interface Servicesval {
  title1: string;
  title2: string;
  title3: string;
}

@Component({
  selector: 'app-rightoffer-service',
  templateUrl: './rightoffer-service.component.html',
  styleUrls: ['./rightoffer-service.component.scss'],
})
export class RightofferServiceComponent implements OnInit {
  services: Servicesval = {
    title1: 'Find the',
    title2: 'right offers',
    title3: 'for you.',
  };
  constructor() {}

  ngOnInit(): void {}
}
