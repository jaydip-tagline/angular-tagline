import { Component, OnInit, Input } from '@angular/core';
import { Revboxval } from '../common';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent implements OnInit {
  @Input() revBox!: Revboxval[];
  starRating: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
