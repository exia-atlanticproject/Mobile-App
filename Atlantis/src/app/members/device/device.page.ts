import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-device",
  templateUrl: "./device.page.html",
  styleUrls: ["./device.page.scss"]
})
export class DevicePage implements OnInit {
  public items: string[];
  constructor() {
    this.items = ["Jeje", "Nico"];
  }

  ngOnInit() {}
}
