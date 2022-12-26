import { Component, OnInit, Input } from '@angular/core';
import { Imgnumflexval } from '../common';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.scss'],
})
export class ExpertiseCardComponent implements OnInit {
  @Input() imgnumflex!: Imgnumflexval[];
  constructor() {}

  ngOnInit(): void {}
}
