import { Component, OnInit } from "@angular/core";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser/ngx";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-webview",
  templateUrl: "./webview.page.html"
})
export class WebviewPage implements OnInit {
  url: any;

  constructor(
    private iab: InAppBrowser,
    public loadingCtrl: LoadingController
  ) {
    let target = "_system";
    let url =
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin";

    const browser = this.iab.create(url, "_self");
    browser.on("loadstop").subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

    this.presentLoading();
    browser.close();
    browser.show;
    /* browser.on("loadstart").subscribe(event => {
      if (1 == 1) {
        const access_token = event.url.split("&code=")[1];
        this.presentLoading();
        console.log(access_token);
        browser.close();
        return true;
      }
    });*/
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Hellooo",
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log("Loading dismissed!");
  }

  ngOnInit() {}
  /* let url =
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin";
    console.log("I am here");
    const browser = this.iab.create(url, target);

    console.log("I am here2");
    browser.on("loadstop").subscribe(event => {
      if (event.url.indexOf("https://google.com")) {
        console.log("I am here");
      }
      console.log("I am here 5");
    });*/

  /* let target = "_self";
    let url =
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin";
    console.log("I am here");
    cordova.plugins.
    const browser = this.iab.create(url, target, this.options);
    console.log("I am here");
    browser.on("loadstart").subscribe(event => {
      if (event.url.indexOf("https://atlantisproject.b2clogi") === 0) {
        console.log("I am here");
      }
    });*/

  /*
    browser.on("loadstart").subscribe(e => {
      console.log("I am here too");

      if (e.url.indexOf("?code=") !== -1) {
        let token = e.url.slice(e.url.indexOf("?code=") + "?code=".length);
        browser.close();
      }
    });*/
}
