import { Component, OnInit, ViewChild } from '@angular/core';
import { startOfDay } from 'date-fns';
import { Options } from 'fullcalendar';
import { EventService } from './event.service';
import { CalendarComponent } from 'ng-fullcalendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // viewDate: Date = new Date();
  // events = [];

  title = 'my-angular-app';
  calendarOptions: Options;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: EventService){}

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next,today',
          center: 'title',
          right: 'month, agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });

  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}

// console.log(startOfDay);
