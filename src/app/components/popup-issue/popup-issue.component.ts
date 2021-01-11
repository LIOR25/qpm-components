import { Component, ElementRef, ViewChild } from "@angular/core";


@Component({
  selector: 'app-popyp-issue',
  templateUrl: './popup-issue.component.html',
  styleUrls: ['./popup-issue.component.scss']
})
export class PopupIssueComponent {
  @ViewChild('popup', { static: false }) popup: ElementRef;
  infoArr;


  ngOnInit() {
    this.infoArr = [{ name: ' חומרה', name2: '  חומרה' }, { name: 'קטגוריה', name2: 'קטגוריה' }, { name: ' קטגוריית משנה ', name2: ' קטגוריית משנה' }]
  }

  open() {
    this.popup.nativeElement.style.display = 'block';
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
  }
}
