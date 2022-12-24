import { Component, OnInit, Input } from '@angular/core';

interface Divcon2 {
  image: string;
  title: string;
  description: string;
  button: string;
}

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
