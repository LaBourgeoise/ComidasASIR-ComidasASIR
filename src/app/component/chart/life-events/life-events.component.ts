import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-life-events',
  templateUrl: './life-events.component.html',
  styleUrls: ['./life-events.component.scss']
})
export class LifeEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventsList = [
    {
      'icon': 'icon-home',
      'name': 'House',
      'color': 'inset 50px 0px 0px 0px #cee9fe',
      'goalTitle': 'New House',
      'goalAmount': '12.25 Lac',
      'goalYear': 'Jan 2030'
    },
    {
      'icon': 'icon-book',
      'name': 'Education',
      'color': '"box-shadow":"inset 50px 0px 0px 0px #d0f2e7"',
      'goalTitle': 'Masters',
      'goalAmount': '41.43 Lac',
      'goalYear': 'Feb 2021'
    },
    {
      'icon': 'icon-family_restroom',
      'name': 'Family',
      'color': 'inset 50px 0px 0px 0px #e5e1ff',
      'goalTitle': 'Buy House',
      'goalAmount': '95 Lac',
      'goalYear': 'Jan 2029'
    },
    {
      'icon': 'icon-beach_access',
      'name': 'Vacation',
      'color': '#f5e1ef',
      'goalTitle': 'Switzerlan Trip',
      'goalAmount': '5 Lac',
      'goalYear': 'Mar 2022'
    },
    {
      'icon': 'icon-directions_car',
      'name': 'Vehicle',
      'color': '#f6ecd6',
      'goalTitle': 'Buy Audi',
      'goalAmount': '75 Lac',
      'goalYear': 'Feb 2027'
    },
    {
      'icon': 'icon-rocket',
      'name': 'Startup',
      'color': '#cee9fe',
      'goalTitle': 'Establish New Startup',
      'goalAmount': '45 Lac',
      'goalYear': 'Dec 2022'
    },
    {
      'icon': 'icon-gamepad',
      'name': 'Gadget',
      'color': '#d0f2e7',
      'goalTitle': 'Buy IPhone',
      'goalAmount': '1 Lac',
      'goalYear': 'Dec 2021'
    },
    {
      'icon': 'icon-awareness-ribbon',
      'name': 'Charity',
      'color': '#e5e1ff',
      'goalTitle': 'Fund Someone',
      'goalAmount': '1 Lac',
      'goalYear': 'Nov 2021'
    },
    {
      'icon': 'icon-puzzle-piece',
      'name': 'Custom',
      'color': '#f5e1ef',
      'goalTitle': 'Upskill',
      'goalAmount': '1 Lac',
      'goalYear': 'Jan 2022'
    }
  ]

  drop(event: CdkDragDrop<string[]>) {
    