import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plan-graph',
  templateUrl: './plan-graph.component.html',
  styleUrls: ['./plan-graph.component.scss']
})
export class PlanGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
/* There is no proper examples and explanation for the Chart. Most of the documentation related to this is in chinese*/
/* Many of the sites related to this are blocked as it violates few of the GDPR rules */
chartOption: EChartOption = {
  tooltip : {
      trigger: 'axis'
  },
  dataZoom : {
      show : true,
      realtime : true,
      y: 560,
      height: 20,
      fillerCo