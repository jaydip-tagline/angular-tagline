import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hiredevelopers-footer',
  templateUrl: './hiredevelopers-footer.component.html',
  styleUrls: ['./hiredevelopers-footer.component.scss'],
})
export class HiredevelopersFooterComponent implements OnInit {
  @Input() developerData!: string[];
  constructor() {}

  ngOnInit(): void {}
}
