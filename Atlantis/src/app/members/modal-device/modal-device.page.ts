import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MetricsPage } from "../metrics/metrics.page";
import { CommandPage } from "../command/command.page";
import { Router } from "@angular/router";
@Component({
  selector: "app-modal-device",
  templateUrl: "./modal-device.page.html",
  styleUrls: ["./modal-device.page.scss"]
})
export class ModalDevicePage implements OnInit {
  paramTitle: string;
  paramID: number;
  paramData: String;
  constructor(
    private modalController: ModalController,
    public router: Router
  ) {}

  ngOnInit() {
    this.paramID;
    this.paramTitle;
    this.paramData;
  }
  async openModalMetric() {
    const modal = await this.modalController.create({
      component: MetricsPage,
      componentProps: {
        paramID: 123,
        paramTitle: "Metric Device",
        paramData: this.paramData
      }
    });
    modal.present();
  }
  async openModalCommand() {
    const modal = await this.modalController.create({
      component: CommandPage,
      componentProps: {
        paramID: 123,
        paramTitle: "Metric Device",
        paramData: this.paramData
      }
    });
    modal.present();
  }
  openModalChart() {
    this.router.navigateByUrl("members/chart/" + this.paramData);
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
