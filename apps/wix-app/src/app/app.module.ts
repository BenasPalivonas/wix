import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { WixAppButtonModule } from "@wix-app/button";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [CommonModule, RouterModule, WixAppButtonModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }