import { Component, OnInit, Input } from '@angular/core';
import { Fulldiv1val } from '../common';
import { ExperienceService } from '../Services/experience.service';

@Component({
  selector: 'app-experience-data',
  templateUrl: './experience-data.component.html',
  styleUrls: ['./experience-data.component.scss'],
})
export class ExperienceDataComponent implements OnInit {
  // @Input() experience!: Fulldiv1val[];
  constructor(private experienceService: ExperienceService) {}
  public exeData!: Fulldiv1val[];
  ngOnInit(): void {
    this.exeData = this.experienceService.fulldiv1list;
  }
}
