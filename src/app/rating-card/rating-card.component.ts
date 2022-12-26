import { Component, OnInit, Input } from '@angular/core';

interface Revboxval {
  number: number;
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
  starRating: number = 0;

  // currentRate:number = this.revBox.number;
  constructor() {}

  // num = Array(this.revBox.number)
  // num: String[] = Array(this.revBox[0].number);
  // abd = this.num.keys();

  ngOnInit(): void {
    // console.log('revBox :>> ', parseInt(this.revBox[0].number));
  }
}
