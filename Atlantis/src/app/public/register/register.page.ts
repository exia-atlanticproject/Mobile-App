import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(private authenticationService, private router: Router) {}

  ngOnInit() {}

  register(form) {
    this.authenticationService.register(form.value).subscribe(rest => {
      this.router.navigateByUrl("login");
    });
  }
}
