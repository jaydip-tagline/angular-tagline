import { Component, OnInit, Input } from '@angular/core';
import { Divcon2 } from '../common';
import { MainService } from '../Services/main.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
})
export class OurServiceComponent implements OnInit {
  // @Input() serviceData!: Divcon2[];
  public data!: Divcon2[];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.data = this.mainService.input();
    console.log('this.data :>> ', this.data);
  }
}
