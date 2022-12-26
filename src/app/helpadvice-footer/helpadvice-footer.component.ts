import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-helpadvice-footer',
  templateUrl: './helpadvice-footer.component.html',
  styleUrls: ['./helpadvice-footer.component.scss'],
})
export class HelpadviceFooterComponent implements OnInit {
  @Input() helpData!: string[];
  constructor() {}

  ngOnInit(): void {}
}
