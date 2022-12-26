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
  starRating: number = 0;
  @Input() revBox!: Revboxval[];
  constructor() {}

  // num = Array(this.revBox.number)
  // num: String[] = Array(this.revBox[0].number);
  // abd = this.num.keys();

  ngOnInit(): void {
    console.log('revBox :>> ', this.revBox[0].number);
  }
}
