import { Component, OnInit, Input } from '@angular/core';
import { Blogval } from '../common';

@Component({
  selector: 'app-ourblog-card',
  templateUrl: './ourblog-card.component.html',
  styleUrls: ['./ourblog-card.component.scss'],
})
export class OurblogCardComponent implements OnInit {
  @Input() blogData!: Blogval[];
  constructor() {}

  ngOnInit(): void {}
}
