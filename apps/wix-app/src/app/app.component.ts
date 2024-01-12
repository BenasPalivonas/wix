import { Component } from '@angular/core';

@Component({
  selector: 'wix-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  ngOnInit() {
    console.log("hello");
  }
}
