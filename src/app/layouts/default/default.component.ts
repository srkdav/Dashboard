import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen= true;
  constructor() { }

  ngOnInit() {
  }
//This is for toggling of side bar, depending on the current value , it'll change on click.
  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }
}