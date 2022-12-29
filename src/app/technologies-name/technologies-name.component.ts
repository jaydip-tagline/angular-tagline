import { Component, OnInit, Input } from '@angular/core';
import { Backendval } from '../common';
import { BackendtechService } from '../Services/backendtech.service';

@Component({
  selector: 'app-technologies-name',
  templateUrl: './technologies-name.component.html',
  styleUrls: ['./technologies-name.component.scss'],
})
export class TechnologiesNameComponent implements OnInit {
  // @Input() techDataList!: Backendval[];
  constructor(private backendtechService: BackendtechService) {}
  public techDataList!: Backendval[];
  ngOnInit(): void {
    this.techDataList = this.backendtechService.techBackend;
  }
}
