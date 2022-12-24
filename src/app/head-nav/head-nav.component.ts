import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss'],
})
export class HeadNavComponent implements OnInit {
  @Input() headDataList!: string[];
  constructor() {}

  ngOnInit(): void {}

  logo: string = '../assets/image/tagline.png';
}
