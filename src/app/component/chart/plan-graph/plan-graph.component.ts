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
            formatter: function (value) {
                return  value==0?'': value == 100 ? 1 + 'Cr' : value + 'L';
            },
        }
      }
  ],
  series : [
      {
          name:'plan-graph',
          type:'line',
          smooth: true,
           tooltip : {             // Series config.
                trigger: 'item',
                show: true,
                backgroundColor : 'rgba(60,59,93,255)',
                borderColor : 'rgba(60,59,93,255)',
                borderRadius : 8,
                borderWidth: 1,
                padding: 12,
                textStyle : {
                  color: '#fff',
                  decoration: 'none',
                  fontFamily: 'Verdana, sans-serif',
                  fontSize: 10,
                },
                formatter: '<div style="width:auto;float:left; margin-right:40%;"><span style="display:block;float:none">Age</span><span style="display:block;float:none"> {b} </span></div>'+
                '<div style="width:auto;float:left"><span style="display:block;float:none">Year</span><span style="display:block;float:none"> 2044 </span></div>' +
                '<br/>' + '<br/>' +'<hr/>' +
                '<div style="width:auto;float:left; margin-right:10px;"><span style="display:block;float:none">Net Worth</span><span style="display:block;float:none"> {c} lac</span></div>'+
                '<div style="width:auto;float:left"><span style="display:block;float:none">Savings</span><span style="display:block;float:none"> 2.4 lac </span></div>'        
            },
          data:function (){
              var list = [];
              list=[21, 95, 52, { value:45, symbol: '<fa name="home" class="home-icon"></fa>', symbolSize : 15,}, 40, 94, { value:28, symbol: 'star', symbolSize : 15,}, 78, 42, 47, 85, 37, 87, 13, 33, 71, 91, 98, 48, 78, 3, 44, 35, 64, 3, 5, 84, 21, 75, 58, 27, 90, 8, 27, 57, 55, 49, 60, 3, 68, 92, 50, 77, 67, 80, 43];
              return list;
          }()
      }
  ],
  calculable:false
};
}
