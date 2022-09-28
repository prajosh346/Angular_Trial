import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"]
})
export class PersonDetailsComponent implements OnInit {
  personDetail: any;
  public form: FormGroup;
  cities = ["Pune", "Mumbai", "Nashik", "Surat", "Delhi"];
  states = ["Maharashtra", "Gujrat", "Delhi"];
  personDetails = [];
  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      emailId: [
        "",
        Validators.compose([Validators.required, Validators.email])
      ],
      state: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      contact: [0, Validators.compose([Validators.required])]
    });
    this.personDetail = {
      name: "",
      emailId: "",
      state: "",
      city: "",
      contact: 0
    };
  }
  setDetails() {
    Object.assign(this.personDetail, this.form.value);
    this.personDetails.push(this.personDetail);
  }
  clearDetails() {
    this.personDetails = [];
    this.personDetail = null;
  }

  ngOnInit() {}
}
