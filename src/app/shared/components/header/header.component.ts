import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarVar : EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  //on toggle the entire page resizes accordingly.
  toggleSideBar() {
    this.toggleSideBarVar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
