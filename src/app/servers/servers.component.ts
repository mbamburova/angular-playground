import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',

  // [] attribute selector and selector is now an attribute
  // selector: '[app-servers]',

  // select by class
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
