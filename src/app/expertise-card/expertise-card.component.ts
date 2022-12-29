import { Component, OnInit, Input } from '@angular/core';
import { Imgnumflexval } from '../common';
import { ExpertiseService } from '../Services/expertise.service';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.scss'],
})
export class ExpertiseCardComponent implements OnInit {
  // @Input() imgnumflex!: Imgnumflexval[];
  constructor(private expertiseService: ExpertiseService) {}
  public expertiseData!: Imgnumflexval[];
  ngOnInit(): void {
    this.expertiseData = this.expertiseService.imgnumflexlist;
  }
}
