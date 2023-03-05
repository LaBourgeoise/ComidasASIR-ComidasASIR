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
      'goalA