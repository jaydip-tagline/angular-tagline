import { Component, OnInit, Input } from '@angular/core';
import { Divisionval } from '../common';

@Component({
  selector: 'app-inquiry-footer',
  templateUrl: './inquiry-footer.component.html',
  styleUrls: ['./inquiry-footer.component.scss'],
})
export class InquiryFooterComponent implements OnInit {
  @Input() inqiryData!: Divisionval[];
  constructor() {}

  ngOnInit(): void {}
}
