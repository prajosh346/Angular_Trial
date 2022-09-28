import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { FibonacciComponent } from "./loginform/fibonacci/fibonacci.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";

const routes: Routes = [
  {
    path: "loginform",
    component: LoginformComponent
  },
  {
    path: "fibonacci",
    component: FibonacciComponent
  },
  {
    path: "personDetails",
    component: PersonDetailsComponent
  },
  {
    path: "back",
    component: AppComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginformComponent,
    FibonacciComponent,
    PersonDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
