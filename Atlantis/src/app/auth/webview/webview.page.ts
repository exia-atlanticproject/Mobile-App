import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

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
  constructor(private iab: InAppBrowser) {}

  async ngOnInit() {
      console.log('lol');

      const target = '_self';
      let code: string = null;
      const { data } = await axios.get('http://localhost:8090/auth');
      const browser = this.iab.create(data.url, target, 'hideurlbar=yes');

      browser.on('loadstart').subscribe(async e => {
      console.log('I am here too');
      if (e.url.indexOf('?code=') !== -1) {
          code = e.url.slice(e.url.indexOf('?code=') + '?code='.length);
          browser.close();

          const params = new URLSearchParams();
          const { data: token } = await axios.get('http://localhost:8090/login', {
              params: {
                  code
              }
          });
          console.log(token);
    }
    });
  }
}
