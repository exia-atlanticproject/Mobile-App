import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
const routes: Routes = [
  { path: "", redirectTo: "members", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./auth/login/login.module#LoginPageModule"
  },
  {
    path: "register",
    loadChildren: "./auth/register/register.module#RegisterPageModule"
  },
  {
    path: "members",
    //canActivate: [AuthGuard],
    loadChildren: "./members/member-routing.module#MemberRoutingModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
