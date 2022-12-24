import { Component, OnInit, Input } from '@angular/core';

interface Revboxval {
  number: string;
  review: string;
  name: string;
  verify: string;
}

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent implements OnInit {
  @Input() revBox!: Revboxval[];
  constructor() {}

  ngOnInit(): void {}
}
