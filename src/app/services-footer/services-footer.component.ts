import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-footer',
  templateUrl: './services-footer.component.html',
  styleUrls: ['./services-footer.component.scss'],
})
export class ServicesFooterComponent implements OnInit {
  @Input() serviceData!: string[];
  constructor() {}

  ngOnInit(): void {}
}
