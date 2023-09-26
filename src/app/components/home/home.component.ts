import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {fromEvent,of} from 'rxjs'
import {map,startWith} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }
    menu_icon_variable: boolean = false;
    menuVariable: boolean = false;
  ngOnInit(): void {}
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
}
