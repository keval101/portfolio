import { Component, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit{
  @Input() openMenu: boolean;
  @Output() menuClose = new EventEmitter<boolean>();
  getScreenWidth: number;
  sections = 5;
  scroll;
  isScrollDown: boolean;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
      if(this.scroll > 0){
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false
      }
   })
  }

  onMenuClick(): void {
    this.openMenu = false;
    this.menuClose.emit(false);
  }

  backToTop(): void {
    window.scrollTo(0,0)
  }
}
