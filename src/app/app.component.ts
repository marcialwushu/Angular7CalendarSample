import { Component } from '@angular/core';
import { startOfDay } from 'date-fns';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewDate: Date = new Date();
  events = [];

  title = 'my-angular-app';
  calendarOptions: Options;
  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'month, agendaWeek,agendaDay,listMonth'
      }
    };
  }
}

console.log(startOfDay);
