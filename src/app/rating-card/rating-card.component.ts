import { Component, OnInit, Input } from '@angular/core';
import { Revboxval } from '../common';
import { RatingService } from '../Services/rating.service';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent implements OnInit {
  // @Input() revBox!: Revboxval[];
  starRating: number = 0;
  constructor(private ratingService: RatingService) {}
  public ratingData!: Revboxval[];
  ngOnInit(): void {
    this.ratingData = this.ratingService.revboxlist;
  }
}
