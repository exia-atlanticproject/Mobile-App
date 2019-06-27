import { Component, OnInit } from "@angular/core";
import {
  InAppBrowser,
  InAppBrowserOptions,
  InAppBrowserEvent
} from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-webview",
  templateUrl: "./webview.page.html"
})
export class WebviewPage implements OnInit {
  options: InAppBrowserOptions = {
    location: "yes", //Or 'no'
    hidden: "no", //Or  'yes'
    clearcache: "yes",
    clearsessioncache: "yes",
    zoom: "yes", //Android only ,shows browser zoom controls
    hardwareback: "yes",
    mediaPlaybackRequiresUserAction: "no",
    shouldPauseOnSuspend: "no", //Android only
    closebuttoncaption: "Close", //iOS only
    disallowoverscroll: "no", //iOS only
    toolbar: "yes", //iOS only
    enableViewportScale: "no", //iOS only
    allowInlineMediaPlayback: "no", //iOS only
    presentationstyle: "pagesheet", //iOS only
    fullscreen: "yes" //Windows only
  };

  constructor(private iab: InAppBrowser) {
    /*let target = "_self";
    const browser = this.iab.create(
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin",
      target,
      this.options
    );*/
  }
  ngOnInit() {
    let target = "_self";
    let url =
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin";
    const browser = this.iab.create(url, target, this.options);
    console.log("I am here");

    browser.on("loadstart").subscribe(e => {
      console.log("I am here too");

      if (e.url.indexOf("?code=") !== -1) {
        let token = e.url.slice(e.url.indexOf("?code=") + "?code=".length);
        browser.close();
      }
    });
  }
}

/*
  const browser = this.iab.create("https://oauth.binary.com/oauth2/authorize?app_id=xxxxx", '_self', 'location=yes');
  browser.
  browser.on("loadstart").subscribe((event: InAppBrowserEvent) => {
    this.currentURL = event.url;
    let url = event.url;

    this.liveToken = /token1=([^&]+)/.exec(url)[1];
    this.testToken = /token2=([^&]+)/.exec(url)[1];

    if (this.liveToken) {
      browser.close();
    }
  })
    let browserRef = window.open(url, '_blank', 'location=no');
  browserRef.addEventListener("loadstart", (event: any) => {
    if ((event.url).indexOf('?token=') !== -1) {
      let token = event.url.slice(event.url.indexOf('?token=') + '?token='.length);
      // here is your token, now you can close the InAppBrowser
      browserRef.close();
    }
  })

    let target = "_self";
    this.iab.create(
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin",
      target,
      this.options
    );*/
