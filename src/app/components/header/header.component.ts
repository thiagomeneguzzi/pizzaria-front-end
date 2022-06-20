import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpened: boolean = false;

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
