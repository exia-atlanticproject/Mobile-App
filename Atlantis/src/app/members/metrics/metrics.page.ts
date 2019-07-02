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

    document.body.style.setProperty("--firstColor", "10%");
    document.body.style.setProperty("--secondColor", "10%");

    this.listMetrics = [
      {
        metric: "Temp",
        data: 31
      }
    ];
  }

  ngOnInit() {
    this.paramID;
    this.paramTitle;
    this.paramData;
    if (this.listMetrics[0].data < -10) {
      document.body.style.setProperty("--firstColor", "5%");
      document.body.style.setProperty("--secondColor", "10%");
    } else if (this.listMetrics[0].data <= 0) {
      document.body.style.setProperty("--firstColor", "20%");
      document.body.style.setProperty("--secondColor", "25%");
    } else if (this.listMetrics[0].data < 10) {
      document.body.style.setProperty("--firstColor", "35%");
      document.body.style.setProperty("--secondColor", "40%");
    } else if (this.listMetrics[0].data < 20) {
      document.body.style.setProperty("--firstColor", "50%");
      document.body.style.setProperty("--secondColor", "55%");
    } else if (this.listMetrics[0].data < 30) {
      document.body.style.setProperty("--firstColor", "65%");
      document.body.style.setProperty("--secondColor", "70%");
    } else if (this.listMetrics[0].data < 40) {
      document.body.style.setProperty("--firstColor", "80%");
      document.body.style.setProperty("--secondColor", "85%");
    }
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
