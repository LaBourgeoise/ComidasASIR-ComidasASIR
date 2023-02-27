
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanGraphComponent } from './component/chart/plan-graph/plan-graph.component';


const routes: Routes = [
  { path: '', component: PlanGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }