import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector: 'app-info',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})
export class InfoTabComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {

  }
}