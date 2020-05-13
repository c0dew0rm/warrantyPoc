import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activatedButton: string;
  barsIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(str:string) {
    this.activatedButton = str;
  }

  checkCondition(str: string) {
    if(this.activatedButton === str){
      return "active";
    }
    else {
      return "inactive";
    }
  }

}
