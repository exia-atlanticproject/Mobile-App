import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-metrics",
  templateUrl: "./metrics.page.html",
  styleUrls: ["./metrics.page.scss"]
})
export class MetricsPage implements OnInit {
  paramTitle: string;
  paramID: number;
  paramData: String;
  private listMetrics: any;

  constructor(private modalController: ModalController) {
    /*const { device } = await this.get(
  "http://localhost:8090/Metrics",
  { deviceIdRecv },
  {}
);*/

    this.listMetrics = [
      {
        metric: "Temp",
        data: 98
      },
      {
        metric: "Humidity",
        data: 47
      }
    ];
  }

  ngOnInit() {
    this.paramID;
    this.paramTitle;
    this.paramData;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
