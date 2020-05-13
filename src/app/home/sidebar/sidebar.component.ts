import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activatedButton: string;
  barsIcon = faBars;

  constructor(private route: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedButton = 'inward';
    this.route.navigate(['inward'], { relativeTo: this.activatedRoute });
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
