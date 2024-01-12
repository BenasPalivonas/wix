import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { WixAppRecursiveTreeModule } from "@wix-app/rescursive-tree";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [CommonModule, RouterModule, WixAppRecursiveTreeModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }