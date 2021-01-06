import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('popup', { static: false }) popup: ElementRef;

  constructor() { }
  ngOnInit() { }

  open() {
    this.popup.nativeElement.style.display = 'block';
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
  }
}