import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { PopupIssueComponent } from "../popup-issue/popup-issue.component";

@Component({
  selector: 'app-issue',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  @ViewChild('popup', { static: false }) popup: PopupIssueComponent

  @Input() data;
  constructor() { }
  ngOnInit() { }

  showIssues() {
    var e = document.getElementById('issue1');
    var e1 = document.getElementById('issue2');
    var e2 = document.getElementById('issue3');
    var e3 = document.getElementById('issue4');

    let arr = [e, e1, e2, e3];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].style.display == 'none')
        arr[i].style.display = 'flex';
      else
        arr[i].style.display = 'none';
    }
  }

  openPopup() {
    this.popup.open();
  }
}

