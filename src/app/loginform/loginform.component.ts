import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent implements OnInit {
  user: any;
  usingObjectAssign: any;
  constructor() {
    this.user = {
      emailId: "",
      password: ""
    };
  }
  checkPassword() {
    if (this.user.emailId && this.user.password) {
      var usingSplit = this.user.password.split("");
      var usingSpread = [...this.user.password];
      var usingArrayFrom = Array.from(this.user.password);
      var doCheck1 = 0,
        doCheck2 = 0,
        doCheck3 = 0;

      this.usingObjectAssign = Object.assign([], this.user.password);

      this.usingObjectAssign.forEach(function(value) {
        if (value == value.toUpperCase()) {
          doCheck1 = 1;
        }
        if (value == value.toLowerCase()) {
          doCheck2 = 2;
        }
        if (isNaN(value)) {
          doCheck3 = 3;
        }
      });

      if (doCheck1 == 1 && doCheck2 == 2 && doCheck3 == 3) {
        alert("Verified");
      }
    }
    if (!this.user.emailId) {
      alert("Please Fill Email id or username");
    }
  }
  ngOnInit() {}
}
