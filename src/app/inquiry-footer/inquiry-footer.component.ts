import { Component, OnInit, Input } from '@angular/core';
import { Divisionval } from '../common';
import { InquiryfooterService } from '../Services/inquiryfooter.service';

@Component({
  selector: 'app-inquiry-footer',
  templateUrl: './inquiry-footer.component.html',
  styleUrls: ['./inquiry-footer.component.scss'],
})
export class InquiryFooterComponent implements OnInit {
  // @Input() inqiryData!: Divisionval[];
  constructor(private inquiryfooterService: InquiryfooterService) {}
  public inqiryData!: Divisionval[];
  ngOnInit(): void {
    this.inqiryData = this.inquiryfooterService.divisionlist;
  }
}
