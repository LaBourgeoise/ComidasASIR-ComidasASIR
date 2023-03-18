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
      fillerColor: 'rgba(135,175,255,255)',
      handleColor: '#fff',
      start : 0,
      end : 25
  },
    
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : function (){
              var list = [];
              var n = 28;
              list=[28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148];
              return list;
          }()
      }
  ],
  yAxis : [
      {
          type : 'value',
          
          /* There is no proper documentation for Zrender which is used here */
          /* to create the gradient color effect below the line graph */
          
        //   itemStyle: {
        //     normal: {
        //         areaStyle: {
        //             color : (function (){
        //                 var zrColor = require('zrender/tool/color');
        //                 return zrColor.getLinearGradient(
        //                     0, 200, 0, 400,
        //                     [[0, 'rgba(255,0,0,0.8)'],[0.8, 'rgba(255,255,255,0.1)']]
        //                 )
        //             })()
        //         }
        //     }
        // },
        // itemStyle: {normal: {areaStyle: {color: 'rgba(219,231,255,255)'}}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: [],
          axisLabel: {
            forma