import { Component, OnInit, Input } from '@angular/core';
import { Blogval } from '../common';
import { OurblogService } from '../Services/ourblog.service';

@Component({
  selector: 'app-ourblog-card',
  templateUrl: './ourblog-card.component.html',
  styleUrls: ['./ourblog-card.component.scss'],
})
export class OurblogCardComponent implements OnInit {
  // @Input() blogData!: Blogval[];
  constructor(private ourblogService: OurblogService) {}
  public blogData!: Blogval[];
  ngOnInit(): void {
    this.blogData = this.ourblogService.bloglist;
  }
}
