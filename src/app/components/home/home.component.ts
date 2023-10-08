import { Component, Input, OnInit, Renderer2, ElementRef} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {fromEvent,of} from 'rxjs'
import {map,startWith} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slideConfig ={
    slidesToShow:1,
    slidesToScroll:1
  }
  images = [
    {img: "assets/images/banner1.jpg"},
    {img: "assets/images/banner2.jpg"},
    {img: "assets/images/banner3.jpg"}
  ]
  cadenas = [
    {cad: "Agilizando tus tramites"}
  ]
  constructor(private renderer: Renderer2, private el: ElementRef) { }
    menu_icon_variable: boolean = false;
    menuVariable: boolean = false;
  ngOnInit(): void {
    // Crea un elemento <a> para el widget de Twitter
    const twitterAnchor = this.renderer.createElement('a');
    this.renderer.setAttribute(twitterAnchor, 'class', 'twitter-timeline');
    this.renderer.setAttribute(twitterAnchor, 'data-lang', 'es');
    this.renderer.setAttribute(twitterAnchor, 'data-dnt', 'true');
    this.renderer.setAttribute(twitterAnchor, 'data-theme', 'light');
    this.renderer.setAttribute(
      twitterAnchor,
      'href',
      'https://twitter.com/MovilidadNay?ref_src=twsrc%5Etfw'
    );

    // Crea el script para cargar el widget de Twitter
    const twitterScript = this.renderer.createElement('script');
    this.renderer.setAttribute(
      twitterScript,
      'src',
      'https://platform.twitter.com/widgets.js'
    );
    this.renderer.setAttribute(twitterScript, 'charset', 'utf-8');

    // Agrega el elemento <a> y el script al componente
    const container = this.el.nativeElement.querySelector('#twitter-widget-container');
    this.renderer.appendChild(container, twitterAnchor);
    this.renderer.appendChild(container, twitterScript);
  }
  openMenu() {
    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }
}
