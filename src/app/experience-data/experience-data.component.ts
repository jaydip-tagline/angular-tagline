import { Component, OnInit, Input } from '@angular/core';
import { Fulldiv1val } from '../common';

@Component({
  selector: 'app-experience-data',
  templateUrl: './experience-data.component.html',
  styleUrls: ['./experience-data.component.scss'],
})
export class ExperienceDataComponent implements OnInit {
  @Input() experience!: Fulldiv1val[];
  constructor() {}

  ngOnInit(): void {}
}
