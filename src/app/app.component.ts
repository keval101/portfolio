import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  isMobileScreen: boolean
  openMenu: boolean;

  ngOnInit(): void {
    if (window.screen.width < 600) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }
  }

  openSidebar(): void {
    this.openMenu = !this.openMenu;
  }
}
