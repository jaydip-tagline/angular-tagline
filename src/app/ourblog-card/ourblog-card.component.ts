import { Component, OnInit, Input } from '@angular/core';

interface Blogval {
  btitle?: string;
  image: string;
  styleData: string;
  button1: string;
  date: string;
  title: string;
  descrption: string;
  button2: string;
}

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
