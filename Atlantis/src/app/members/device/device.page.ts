import { Component, OnInit } from "@angular/core";
import { ModalDevicePage } from "../modal-device/modal-device.page";
import { ModalController } from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-device",
  templateUrl: "./device.page.html",
  styleUrls: ["./device.page.scss"]
})
export class DevicePage implements OnInit {
  dataReturned: any;
  private litsDevices: any;
  paramData;

  constructor(private modalController: ModalController, private http: HTTP) {
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
  }
  getDeviceByuser() {}

  async ngOnInit() {
    /*
    const { device } = await this.get("http://localhost:8090/devices", {}, {});
    console.log(device);
    */
  }

  public get(url, params?: any, options: any = {}) {
    const responseData = this.http
      .get(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }

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
