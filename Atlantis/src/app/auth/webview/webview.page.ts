import {Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-webview',
  templateUrl: './webview.page.html'
})
export class WebviewPage implements OnInit {
  options: {
    location: 'yes', // Or 'no'
    hideurlbar: 'yes',
    hidden: 'yes', // Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', // Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Close', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', // iOS only
    presentationstyle: 'pagesheet', // iOS only
    fullscreen: 'yes' // Windows only
  };

  isConnected: boolean;
  isLoading: false;
  constructor(private iab: InAppBrowser, private http: HTTP, private router: Router, private ngZone: NgZone) {}

  public get(url, params?: any, options: any = {}) {
    const responseData = this.http.get(url, params, {})
      .then(resp => options.responseType === 'text' ? resp.data : JSON.parse(resp.data));
    return responseData;
  }

  public post(url, params?: any, options: any = {}) {
    const responseData = this.http.post(url, params, {})
      .then(resp => options.responseType === 'text' ? resp.data : JSON.parse(resp.data));
    return responseData;
  }

  async navigate() {
    await this.ngZone.run(async () => await this.router.navigateByUrl('/members/dashboard'));
  }
  async ngOnInit() {
      const target = '_self';
      let code: string = null;
      const data = await this.get('http://localhost:8090/auth', {}, {});
      const browser = this.iab.create(data.url, target, 'hideurlbar=yes');
      browser.on('loadstart').subscribe(async e => {
      if (e.url.indexOf('?code=') !== -1) {
          code = e.url.slice(e.url.indexOf('?code=') + '?code='.length);
          browser.close();

          const { id_token } = await this.get('http://localhost:8090/login', { code
          }, {});

          this.http.setHeader('localhost', 'Authorization', `Bearer ${id_token}`);
          this.isConnected = true;
          this.isLoading = false;
          this.navigate();
    }
    });
  }
}
