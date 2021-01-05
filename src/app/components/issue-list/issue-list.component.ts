import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-issue',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  @Input() data;
  constructor() { }
  ngOnInit() { }

  showIssues(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'flex')
      e.style.display = 'none';
    else
      e.style.display = 'flex';
  }
}