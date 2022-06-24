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
    type: 'module',
    // remoteEntry: 'http://localhost:4204/remoteEntry.js',
    // exposedModule: './web-component', // 注意这个名字别写错啦
    // elementName: 'angular1-element1',

    // react
    // remoteEntry: 'http://localhost:3001/remoteEntry.js',
    remoteEntry: 'http://localhost:3200/angular0704v12/remoteEntry.js',
    exposedModule: './web-components',
    elementName: 'react-element'
  };

  ngOnInit() {
  }
}
