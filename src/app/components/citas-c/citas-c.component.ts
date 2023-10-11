import { Component, Input, OnInit, Renderer2, ElementRef} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {fromEvent,of} from 'rxjs'
import {map,startWith} from 'rxjs/operators'
@Component({
  selector: 'app-citas-c',
  templateUrl: './citas-c.component.html',
  styleUrls: ['./citas-c.component.css']
})
export class CitasCComponent {
  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
}
