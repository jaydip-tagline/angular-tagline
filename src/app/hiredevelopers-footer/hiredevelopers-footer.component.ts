import { Component, OnInit, Input } from '@angular/core';
import { InquiryfooterService } from '../Services/inquiryfooter.service';

@Component({
  selector: 'app-hiredevelopers-footer',
  templateUrl: './hiredevelopers-footer.component.html',
  styleUrls: ['./hiredevelopers-footer.component.scss'],
})
export class HiredevelopersFooterComponent implements OnInit {
  // @Input() developerData!: string[];
  constructor(private inquiryfooterService: InquiryfooterService) {}
  public developerData!: string[];
  ngOnInit(): void {
    this.developerData = this.inquiryfooterService.division4list;
  }
}
