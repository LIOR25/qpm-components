import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('popup', { static: false }) popup: ElementRef;
  @ViewChild('carousel', { static: false }) carousel: CarouselComponent

  constructor() { }
  ngOnInit() { }

  open() {
    this.popup.nativeElement.style.display = 'block';
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
  }

  openCarousel() {
    this.carousel.open();
  }
}