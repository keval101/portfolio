import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  @Input() openMenu: boolean
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 600) {
      this.openMenu = true;
    } else {
      this.openMenu = false;
    }
  }

}
