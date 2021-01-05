import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-qp',
  templateUrl: './qp-tab.component.html',
  styleUrls: ['./qp-tab.component.scss']
})
export class QpTabComponent implements OnInit {
  qpArr;
  infoArr;
  infoArr2;
  infoArr3;
  constructor() { }

  ngOnInit() {
    this.qpArr = [{ name: 'QP שם', name2: '14' }, { name: 'מזהה', name2: '106' }, { name: 'סוג', name2: ' שיקום שוחות' },
    { name: ' נוצר ב ', name2: '20200804_150540' }, { name: ' מספר אי התאמות ', name2: '15' }
    ]

    this.infoArr = [{ name: 'תיאור האתר', name2: 'מתחם הספורטאים חולון' }, { name: 'סוג', name2: 'STEEL,H.D.P.E' }, { name: 'סוג תקציב', name2: ' שיקום' },
    { name: ' סך התקציב המתוכנן ', name2: '200000' }, { name: '  תקציב עבודה מתוכנן  ', name2: '180000' }, { name: '    אבני דרך מתוכננות לתאריך התחלה  ', name2: '2020-07-22' }
      , { name: '    אבני דרך מתוכננות לסיום  ', name2: '2020-07-31' }
    ]

    this.infoArr2 = [{ name: ' משרד תכנון', name2: '  ניזאר טריף' }, { name: 'קבלן', name2: 'הקבלן' }, { name: 'תפקיד 1 ', name2: ' מנהל,צילה' },
    { name: ' תפקיד 2   ', name2: 'מפקח,אריה' }
    ]

    this.infoArr3 = [{ name: '  1011', name2: '   תכנון: חוסר בסעיפים בכתב הכמויות' }, { name: '1020', name2: 'משמעת: קללות' }, { name: ' 1055 ', name2: ' איכות ביצוע: אביזרים' },
    { name: '  1060   ', name2: 'איכות ביצוע: הנחת צנרת' }
    ]
  }
}