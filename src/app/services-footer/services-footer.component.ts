import { Component, OnInit, Input } from '@angular/core';
import { InquiryfooterService } from '../Services/inquiryfooter.service';

@Component({
  selector: 'app-services-footer',
  templateUrl: './services-footer.component.html',
  styleUrls: ['./services-footer.component.scss'],
})
export class ServicesFooterComponent implements OnInit {
  // @Input() serviceData!: string[];
  constructor(private inquiryfooterService: InquiryfooterService) {}
  public serviceData!: string[];
  ngOnInit(): void {
    this.serviceData = this.inquiryfooterService.division3list;
  }
}
