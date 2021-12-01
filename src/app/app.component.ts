import { Component, HostListener, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnChanges{
  title = 'portfolio';
  isMobileScreen: boolean
  openMenu: boolean;
  getScreenWidth: number;
  isScrollDown: boolean;
  getScreenHeight: number;

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
    if (window.screen.width < 600) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }
    console.log(this.getScreenHeight);
  }
  ngOnInit(): void {
    if (window.screen.width < 600) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }
  }

  ngOnChanges(): void {
    console.log(this.getScreenWidth)
    if (window.screen.width < 600) {
      // this.isMobileScreen = true;
      console.log('hello');
    }
  }

  openSidebar(): void {
    this.openMenu = !this.openMenu;
  }
  backToTop(): void {
    window.scrollTo(0,0)
  }
}
