import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel: ElementRef;

  constructor() { }
  ngOnInit() { }

  open() {
    this.carousel.nativeElement.style.display = 'block';
  }

  close() {
    this.carousel.nativeElement.style.display = 'none';
  }
}