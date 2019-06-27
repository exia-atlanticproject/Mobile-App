import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    const stateUrl = new String(this.router.url);

    const [, code] = stateUrl.split("&code=");
    const param = {
      params: {
        code
      }
    };
    axios
      .get(
        "http://10.154.128.142:8090/login?code=eyJraWQiOiJjcGltY29yZV8wOTI1MjAxNSIsInZlciI6IjEuMCIsInppcCI6IkRlZmxhdGUiLCJzZXIiOiIxLjAifQ..mO8ETRtidYEvqfYW.fH3j_4spEFTiiEVEkO6jgOmMr8niUR4kXnJ5bMkwYJWvil_WEz5IQyEtBUpFvWCCLwz2HlGPR58jzNIi8IkpOd-3JvpNWBGOfydnIC2lsjCoRyw85uZuT8KrWYWyZuATzctF2u9SH1ct_6nVZFnNkH14YcWXn0qbEci73ocwQ9cRbBg6JPSucmgwJF8wylQ6vUHM2MvNjQdonhRJzHp7HcJfnM6BWqpZqBwVNP5Mo5t0JTSPrsz8PFrP_LjXkF-qQHp-MZgwpTPxbkvUIWf0is2y9qxatG5h3JRAu5YZpaMkrAt6MysabUKi1Cw2LtDbCLWsb9EUaufDGI3tbtx2A6Dvi8_eD3UhcHdL0mMEKWfkjA96fS3tMe5-AJvqqIhnGOR-7dZMDebNSukZdwLxbA8Z4sRI_S7x9dvOC56AX3m2JEo4PSxfLn2HXO7U8_ni72k3RjIfs_NFQjw2H1De8_u4g_V7H21J2_gyArqBUjJv64RvxEiGiLzxvRT0Pq4Yq1zrLni-3PalC5r_Ha_fO-usaEWES84-ZZE6HFKHBmHHQYgRzcOmZjS4f9oofflxgm4.SeCq_5FDUN6GCgF3idM"
      )
      .then(response => response.data)
      .then(data => {
        console.log(data);
      });
  }
}
