import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  routerLink: any;
  constructor(private route: Router) {}
  goToLoginPage() {
    this.routerLink = "/loginform";
    this.route.navigate(["/loginform"]);
  }
}
