import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { InstantPaymentComponent } from "./instant-payment.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, InstantPaymentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
