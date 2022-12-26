import { Component, OnInit, Input } from '@angular/core';
import { Divcon2 } from '../common';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent implements OnInit {
  @Input() serviceData!: Divcon2[];
  constructor() {}

  ngOnInit(): void {}
}
