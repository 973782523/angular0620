import {WebComponentWrapperOptions} from '@angular-architects/module-federation-tools';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  itemOption: WebComponentWrapperOptions = {
    // remoteEntry: 'http://localhost:4204/remoteEntry.js',
    // remoteName: 'angular',
    // exposedModule: './web-components',
    // elementName: 'angular1-element1'
    type: 'module',
    remoteEntry: 'http://localhost:4204/remoteEntry.js',
    exposedModule: './web-component',
    elementName: 'angular1-element1'
  };

  ngOnInit() {
  }
}
