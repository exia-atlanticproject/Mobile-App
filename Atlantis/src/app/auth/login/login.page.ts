import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    var stateUrl = new String(this.router.url);
    const code = stateUrl.split("&code=");
    console.log("Mon code = ", code[1]);

    /* let target = "_self";
    let url =
      "https://atlantisproject.b2clogin.com/atlantisproject.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_signuporsignin&response_mode=query&response_type=code&scope=openid&state=Ha2G61ljahiC1gl1oZ29hV8pyLwGAlkH56THxjEHE7KyZY8qGMciInA6nw3EmR1R&code_challenge_method=S256&code_challenge=8xaIPgOQJGea2gJGu3X0Qgku6QFWrCBE3CJ8lA5ioQY&client_id=27fb84fe-4baf-4b6b-bfe7-f2d0638f2790&redirect_uri=http%3A%2F%2Flocalhost%3A8090%2Flogin";
    const browser = this.iab.create(url, target, this.options);
    console.log("I am here");
    browser.close();

    browser.on("loadstart").subscribe(e => {
      console.log("I am here too");

      if (e.url.indexOf("?code=") !== -1) {
        let token = e.url.slice(e.url.indexOf("?code=") + "?code=".length);
        browser.close();
      }
    });*/
  }
}
