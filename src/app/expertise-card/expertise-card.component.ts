import { Component, OnInit, Input } from '@angular/core';

interface Imgnumflexval {
  image: string;
  title1: string;
  title2: string;
  description: string;
}

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
