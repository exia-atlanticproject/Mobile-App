import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    const stateUrl = new URLSearchParams(this.router.url);

    const params = new URLSearchParams();
    params.append('client_id', '27fb84fe-4baf-4b6b-bfe7-f2d0638f2790');
    params.append('client_secret', 'Zg2^04#WjA#h%6Q{]eK53J&`');
    params.append('redirect_uri', 'urn:ietf:wg:oauth:2.0:oo');
    params.append('grant_type', 'authorization_code');
    params.append('code', stateUrl.get('code'));
    params.append('scope', 'openid');
    params.append('nonce', '1234');

    axios
      .post('/token', params)
      .then(response => response.data)
      .then(data => {
        console.log(data);
      });
  }
}
