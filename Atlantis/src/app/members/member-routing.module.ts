import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardPageModule"
  },
  { path: "device", loadChildren: "./device/device.module#DevicePageModule" },  { path: 'metrics', loadChildren: './metrics/metrics.module#MetricsPageModule' },
  { path: 'chart', loadChildren: './chart/chart.module#ChartPageModule' }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
