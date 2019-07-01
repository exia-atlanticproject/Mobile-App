import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ModalDevicePage } from "./modal-device.page";

const routes: Routes = [
  {
    path: "",
    component: ModalDevicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalDevicePage],
  exports: [ModalDevicePage]
})
export class ModalDevicePageModule {}
