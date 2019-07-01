import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-command",
  templateUrl: "./command.page.html",
  styleUrls: ["./command.page.scss"]
})
export class CommandPage implements OnInit {
  paramTitle: string;
  paramID: number;
  paramData: String;
  constructor(private modalController: ModalController) {}

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
