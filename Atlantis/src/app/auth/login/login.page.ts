import { Component, NgZone, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
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

  constructor(
    private router: Router,
    private http: HTTP,
    private iab: InAppBrowser,
    private ngZone: NgZone,
    private platform: Platform
  ) {
    platform.ready().then(() => {
      this.httpConnection();
    });
  }

  public get(url, params?: any, options: any = {}) {
    const responseData = this.http
      .get(url, params, {})
      .then(resp =>
        options.responseType === "text" ? resp.data : JSON.parse(resp.data)
      );
    return responseData;
  }

  async navigate() {
    await this.ngZone.run(
      async () => await this.router.navigateByUrl("/members/dashboard")
    );
  }
  ngOnInit() {}
  async httpConnection() {
    const target = "_self";
    let code: string = null;
    const data = await this.get("http://10.154.128.142:8080/api/auth", {}, {});
    const browser = this.iab.create(data, target, "hideurlbar=yes");
    browser.on("loadstart").subscribe(async e => {
      if (e.url.indexOf("?code=") !== -1) {
        code = e.url.slice(e.url.indexOf("?code=") + "?code=".length);
        browser.close();

        const { id_token } = await this.get(
          "http://10.154.128.142:8080/api/login",
          { code },
          {}
        );

        this.http.setHeader("localhost", "Authorization", `Bearer ${id_token}`);
        this.navigate();
      }
    });
  }
}
