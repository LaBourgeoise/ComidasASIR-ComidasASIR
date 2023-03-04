
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PlanGraphComponent } from './component/chart/plan-graph/plan-graph.component';
import { LifeEventsComponent } from './component/chart/life-events/life-events.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconSvgComponent } from './component/icon-svg/icon-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanGraphComponent,
    LifeEventsComponent,
    IconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }