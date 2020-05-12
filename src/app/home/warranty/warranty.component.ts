import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css']
})
export class WarrantyComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.route.navigate(['../warrantyList'], { relativeTo: this.activatedRoute });
  }
}
