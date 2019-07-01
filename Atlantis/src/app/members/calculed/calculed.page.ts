import { Component, OnInit } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-calculed",
  templateUrl: "./calculed.page.html",
  styleUrls: ["./calculed.page.scss"]
})
export class CalculedPage implements OnInit {
  dataReturned: any;
  private litsDevices: any;
  paramData;
  constructor(private http: HTTP, public navCtrl: NavController) {
    this.litsDevices = [
      {
        title: "Temp",
        IdCalculation: 1,
        deviceName: "Metz",
        dateTime: "05/04/2018"
      },
      {
        title: "Humidity",
        IdCalculation: 2,
        deviceName: "Nancy",
        dateTime: "29/06/2019"
      }
    ];
  }
  openPreviousCalculs(calculationId: number) {
    this.navCtrl.navigateForward("members/previous-calculs/" + calculationId);
  }

  ngOnInit() {
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
}
