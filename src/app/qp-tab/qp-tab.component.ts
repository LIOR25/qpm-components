import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-qp',
  templateUrl: './qp-tab.component.html',
  styleUrls: ['./qp-tab.component.scss']
})
export class QpTabComponent implements OnInit {
  qpArr;

  constructor() { }

  ngOnInit() {
    this.qpArr = [{ name: 'QP שם', name2: '14' }, { name: 'מזהה', name2: '106' }, { name: 'סוג', name2: ' שיקום שוחות' },
    { name: ' נוצר ב ', name2: '20200804_150540' }, { name: ' מספר אי התאמות ', name2: '15' }
    ]
  }
}