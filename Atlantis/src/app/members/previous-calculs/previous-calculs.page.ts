import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { HTTP } from "@ionic-native/http";

@Component({
  selector: "app-previous-calculs",
  templateUrl: "./previous-calculs.page.html",
  styleUrls: ["./previous-calculs.page.scss"]
})
export class PreviousCalculsPage implements OnInit {
  constructor(public activeRoute: ActivatedRoute) {}

  ngOnInit() {
    let deviceIdRecv = this.activeRoute.snapshot.paramMap.get("calculationId");
    console.log("Id calculed" + deviceIdRecv);
    /*
 const { device } = await this.get("http://localhost:8090/devices", {}, {});
 console.log(device);
 */
  }
}
