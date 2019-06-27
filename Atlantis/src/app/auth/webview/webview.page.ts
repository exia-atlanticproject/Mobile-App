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

  iab: null;
  constructor(private iab: InAppBrowser) {
    this.iab = iab;
  }

  async ngOnInit() {
    const target = '_self';
    const { data: url } = await axios.get('http://localhost:8090/auth');
    const browser = this.iab.create(url, target, this.options);
    console.log('I am here');

    browser.on('loadstart', e => {
      console.log('I am here too');

      if (e.url.indexOf('?code=') !== -1) {
        const token = e.url.slice(e.url.indexOf('?code=') + '?code='.length);
        browser.close();
    }
    });
  }
}
