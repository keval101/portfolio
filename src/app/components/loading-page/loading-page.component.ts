import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
