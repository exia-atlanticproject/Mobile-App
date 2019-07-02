import { Component, OnInit } from "@angular/core";
import { ModalDevicePage } from "../modal-device/modal-device.page";
import { ModalController } from "@ionic/angular";
//import { HTTP } from "@ionic-native/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-device",
  templateUrl: "./device.page.html",
  styleUrls: ["./device.page.scss"]
})
export class DevicePage implements OnInit {
  dataReturned: any;
  private litsDevices: any;
  paramData;

  constructor(
    private modalController: ModalController,
    private httpclient: HttpClient
  ) {
    this.litsDevices = [
      {
        name: "Nancy",
        id: 57
      },
      {
        name: "Metz",
        id: 54
      }
    ];
    this.httpclient
      .get("http://192.168.0.24:8080/api/device/user/1")
      .subscribe(response => {
        console.log(response);
      });
  }
  getDeviceByuser() {}

  async ngOnInit() {
    /*
    const { device } = await this.get("http://localhost:8090/devices", {}, {});
    console.log(device);
    */
  }

  /*public get(url, params?: any, options: any = {}) {
    const responseData = this.http
      .get(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }*/

  async openModal(title: string, dataD: string) {
    const modal = await this.modalController.create({
      component: ModalDevicePage,
      componentProps: {
        paramID: 123,
        paramTitle: "Test Title",
        paramData: dataD
      }
    });
    modal.present();
  }
}
