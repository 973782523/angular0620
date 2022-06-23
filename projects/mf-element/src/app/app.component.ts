import {Component, VERSION, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(1);
  }

  ngOnInit() {
    console.log(2);
  }

  title = 'mf-element';
  ngVersion = VERSION.full;
}
