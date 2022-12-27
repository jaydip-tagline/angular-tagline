import { Component, OnInit } from '@angular/core';
import { Rightoffer } from '../common';

@Component({
  selector: 'app-dropleft-service',
  templateUrl: './dropleft-service.component.html',
  styleUrls: ['./dropleft-service.component.scss'],
})
export class DropleftServiceComponent implements OnInit {
  services: Rightoffer = {
    title1: "Don't know what to choose? ",
    title2: 'Drop us a line.',
    title3: 'Contact Us',
  };
  constructor() {}

  ngOnInit(): void {}
}
