import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  date: string;
  role: string;
  message: string;

  messages: any[];
  i: number = 0;

  ngOnInit() {
    this.messages = [{ date: '2020-07-29 13:43:35', role: 'מפקח ראשי - אריה', message: 'ביליתי רוב הזמן בפרויקט מתחם הספורטאים. הכל התנהל כשורה ' },
    { date: '2020-08-29 15:43:35', role: 'מפקח ראשי - יריב', message: 'ביליתי רוב הזמן בפרויקט מתחם הספורטאים. ללא שינוי  ' },
    { date: '2020-09-20 10:43:35', role: 'מפקח ראשי - מנו', message: '  הפרוייקט הסתיים ' }]
  }

  showMessage() {
    this.i++;
  }

  fowerdMessage() {
    this.i--;
  }
}