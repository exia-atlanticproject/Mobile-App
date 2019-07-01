import { Component, OnInit } from "@angular/core";
import { Label } from "ng2-charts";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { ActivatedRoute } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.page.html",
  styleUrls: ["./chart.page.scss"]
})
/*
IDdevice,
start_date,
End_Date,
Granularité: heure, anné, mois ,jour, minute
type: average, min, max , median, deviation,
TypedeCapteur,
TitleCalcul.


*/
export class ChartPage implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] }
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 10], label: "Series A" }
  ];

  constructor(public activeRoute: ActivatedRoute, private http: HTTP) {}

  async ngOnInit() {
    let deviceIdRecv = this.activeRoute.snapshot.paramMap.get("deviceId");
    console.log("Id device" + deviceIdRecv);

    /*const { device } = await this.get(
      "http://localhost:8090/Metrics",
      { deviceIdRecv },
      {}
    );*/
  }

  public get(url, params?: any, options: any = {}) {
    const responseData = this.http
      .get(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }

  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === "bar" ? "line" : "bar";
  }
}
