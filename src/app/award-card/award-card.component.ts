import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss'],
})
export class AwardCardComponent implements OnInit {
  @Input() awardData!: string[];
  constructor() {}

  ngOnInit(): void {}
}
