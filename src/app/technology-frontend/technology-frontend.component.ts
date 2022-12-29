import { Component, OnInit, Input } from '@angular/core';
import { Backendval } from '../common';
import { FrontendtechService } from '../Services/frontendtech.service';
@Component({
  selector: 'app-technology-frontend',
  templateUrl: './technology-frontend.component.html',
  styleUrls: ['./technology-frontend.component.scss'],
})
export class TechnologyFrontendComponent implements OnInit {
  // @Input() frontDataList!: Backendval[];
  constructor(private frontendtechService: FrontendtechService) {}
  public frontDataList!: Backendval[];
  ngOnInit(): void {
    this.frontDataList = this.frontendtechService.techFrontend;
  }
}
