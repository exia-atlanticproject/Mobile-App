import { Component, OnInit } from "@angular/core";
import { DevicePage } from "./../device/device.page";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  openDevices() {
    this.navCtrl.navigateForward("members/device");
  }
}
