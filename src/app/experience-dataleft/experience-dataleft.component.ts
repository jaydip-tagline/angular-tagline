import { Component, OnInit, Input } from '@angular/core';
import { Contentexpval1 } from '../common';

@Component({
  selector: 'app-experience-dataleft',
  templateUrl: './experience-dataleft.component.html',
  styleUrls: ['./experience-dataleft.component.scss'],
})
export class ExperienceDataleftComponent implements OnInit {
  @Input() exprLeft!: Contentexpval1;
  constructor() {}

  ngOnInit(): void {}
}
