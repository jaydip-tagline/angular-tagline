import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology-sidebar',
  templateUrl: './technology-sidebar.component.html',
  styleUrls: ['./technology-sidebar.component.scss'],
})
export class TechnologySidebarComponent implements OnInit {
  @Input() menuData!: string[];
  constructor() {}

  ngOnInit(): void {}
}
