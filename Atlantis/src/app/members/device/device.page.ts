import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-device",
  templateUrl: "./device.page.html",
  styleUrls: ["./device.page.scss"]
})
export class DevicePage implements OnInit {
  private litsItems: any;
  constructor() {
    this.litsItems = [
      {
        title: "Test",
        desc: "First"
      },
      {
        title: "Tests",
        desc: "Two"
      }
    ];
  }

  ngOnInit() {}
  ShowDesc(descs: any) {
    console.log(descs);
  }
}
