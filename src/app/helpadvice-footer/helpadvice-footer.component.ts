import { Component, OnInit, Input } from '@angular/core';
import { InquiryfooterService } from '../Services/inquiryfooter.service';

@Component({
  selector: 'app-helpadvice-footer',
  templateUrl: './helpadvice-footer.component.html',
  styleUrls: ['./helpadvice-footer.component.scss'],
})
export class HelpadviceFooterComponent implements OnInit {
  // @Input() helpData!: string[];
  constructor(private inquiryfooterService: InquiryfooterService) {}
  public helpData!: string[];
  ngOnInit(): void {
    this.helpData = this.inquiryfooterService.division2list;
  }
}
