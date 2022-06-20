import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.scss']
})
export class LocalsComponent implements OnInit {

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
