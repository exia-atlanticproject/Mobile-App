import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-calculation",
  templateUrl: "./calculation.page.html",
  styleUrls: ["./calculation.page.scss"]
})
export class CalculationPage implements OnInit {
  titleCalcul: string;
  devineID: number;
  granu: string;
  typeCalcul: string;
  startTime: string;
  endTime: string;

  /*
IDdevice,
start_date,
End_Date,
Granularité: heure, année, mois ,jour, minute
type: average, min, max , median, deviation,
TypedeCapteur,
TitleCalcul.
*/
  constructor(private modalController: ModalController, public router: Router) {
    this.devineID;
    this.titleCalcul;
    this.granu;
    this.typeCalcul;
    this.startTime = "";
    this.endTime = "";
  }
  ngOnInit() {
    this.devineID;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
