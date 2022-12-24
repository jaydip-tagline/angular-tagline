import { Component, OnInit, Input } from '@angular/core';

interface Contentexpval1 {
  title: string;
  description: string;
  button: string;
}

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
