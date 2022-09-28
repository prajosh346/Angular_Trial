import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fibonacci",
  templateUrl: "./fibonacci.component.html",
  styleUrls: ["./fibonacci.component.css"]
})
export class FibonacciComponent implements OnInit {
  nVariable: any;
  numberList: any;
  constructor() {}
  printFibonacciSeries() {
    this.numberList = [];
    // if (this.nVariable == 1) return 0;
    // if (this.nVariable == 2) return 1;
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 2;
    for (var i = 1; i <= this.nVariable; ++i) {
      this.numberList.push(num1);
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }

    console.log(this.numberList);
  }
  ngOnInit() {}
}
