import { Component, NgZone, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import axios from "axios";
<<<<<<< HEAD
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
=======
import {
  InAppBrowser,
  InAppBrowserObject
} from "@ionic-native/in-app-browser/ngx";
import { HTTP } from "@ionic-native/http/ngx";
>>>>>>> 6721e25f23bdbf55ec3e1943d5ab4be6e2c34681

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
<<<<<<< HEAD
  constructor(private router: Router, private iab: InAppBrowser) {}
  url: any;

  ngOnInit() {
    axios
      .get("http://10.154.128.142:8090/auth")
      .then(response => response.data)
      .then(data => {
        this.url = data;
        const browser = this.iab.create(this.url, "_self");
      });

    /*  const stateUrl = new String(this.router.url);

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
      });*/
=======
  options: {
    location: "yes"; // Or 'no'
    hideurlbar: "yes";
    hidden: "yes"; // Or  'yes'
    clearcache: "yes";
    clearsessioncache: "yes";
    zoom: "yes"; // Android only ,shows browser zoom controls
    hardwareback: "yes";
    mediaPlaybackRequiresUserAction: "no";
    shouldPauseOnSuspend: "no"; // Android only
    closebuttoncaption: "Close"; // iOS only
    disallowoverscroll: "no"; // iOS only
    toolbar: "yes"; // iOS only
    enableViewportScale: "no"; // iOS only
    allowInlineMediaPlayback: "no"; // iOS only
    presentationstyle: "pagesheet"; // iOS only
    fullscreen: "yes"; // Windows only
  };
  isConnected: boolean;
  isLoading: false;
  constructor(
    private router: Router,
    private http: HTTP,
    private iab: InAppBrowser,
    private ngZone: NgZone
  ) {}
  public get(url, params?: any, options: any = {}) {
    const responseData = this.http
      .get(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }
  /*  public post(url, params?: any, options: any = {}) {
    const responseData = this.http
      .post(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }*/
  async navigate() {
    await this.ngZone.run(
      async () => await this.router.navigateByUrl("/members/dashboard")
    );
  }

  async ngOnInit() {
    const target = "_self";
    let code: string = null;
    const data = await this.get("http://localhost:8090/auth", {}, {});
    const browser = this.iab.create(data, target, "hideurlbar=yes");
    browser.on("loadstart").subscribe(async e => {
      if (e.url.indexOf("?code=") !== -1) {
        code = e.url.slice(e.url.indexOf("?code=") + "?code=".length);
        browser.close();

        const { id_token } = await this.get(
          "http://localhost:8090/login",
          { code },
          {}
        );

        this.http.setHeader("localhost", "Authorization", `Bearer ${id_token}`);
        this.isConnected = true;
        this.isLoading = false;
        this.navigate();

        //this.router.navigate(["members"]);
      }
    });
>>>>>>> 6721e25f23bdbf55ec3e1943d5ab4be6e2c34681
  }
}
