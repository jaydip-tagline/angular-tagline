import { Component, OnInit, Input } from '@angular/core';

interface Backendval {
  image: string;
  title: string;
}

@Component({
  selector: 'app-technology-frontend',
  templateUrl: './technology-frontend.component.html',
  styleUrls: ['./technology-frontend.component.scss'],
})
export class TechnologyFrontendComponent implements OnInit {
  @Input() frontDataList!: Backendval[];
  constructor() {}

  ngOnInit(): void {}
}
