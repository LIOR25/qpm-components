import { Component, OnInit, ViewChild } from "@angular/core";
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {
  @ViewChild('popup', { static: false }) popup: PopupComponent

  constructor() { }
  ngOnInit() { }

  openPopup() {
    this.popup.open();
  }
}