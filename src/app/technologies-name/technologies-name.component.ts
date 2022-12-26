import { Component, OnInit, Input } from '@angular/core';
import { Backendval } from '../common';

@Component({
  selector: 'app-technologies-name',
  templateUrl: './technologies-name.component.html',
  styleUrls: ['./technologies-name.component.scss'],
})
export class TechnologiesNameComponent implements OnInit {
  @Input() techDataList!: Backendval[];
  constructor() {}

  ngOnInit(): void {}
}
