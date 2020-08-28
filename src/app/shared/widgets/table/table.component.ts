import { Component, OnInit } from '@angular/core';
import { Notifications } from './notifications';

const ELEMENT_DATA: Notifications[] = [
  {notif:" Lewis has posted a new photo on Instagram. "},
  {notif:" Carlos has reached Gold Level. "},
  {notif:" Seb is now a user. "},
  {notif:" Dani has posted a new photo on Facebook. "},
  {notif:" Charles has posted a new photo on Snapchat. "},
  {notif:" Kimi has posted a new photo on Instagram. "},
  {notif:" Stroll is now a user. "}
  
];

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['notif'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
