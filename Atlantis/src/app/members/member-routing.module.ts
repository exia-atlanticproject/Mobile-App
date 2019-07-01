import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardPageModule"
  },
  { path: "device", loadChildren: "./device/device.module#DevicePageModule" },
  {
    path: "metrics",
    loadChildren: "./metrics/metrics.module#MetricsPageModule"
  },
  {
    path: "chart/:deviceId",
    loadChildren: "./chart/chart.module#ChartPageModule"
  },
  {
    path: "command",
    loadChildren: "./command/command.module#CommandPageModule"
  },
  {
    path: "calculed",
    loadChildren: "./calculed/calculed.module#CalculedPageModule"
  },
  {
    path: "previous-calculs/:calculationId",
    loadChildren:
      "./previous-calculs/previous-calculs.module#PreviousCalculsPageModule"
  },  { path: 'calculation', loadChildren: './calculation/calculation.module#CalculationPageModule' }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
