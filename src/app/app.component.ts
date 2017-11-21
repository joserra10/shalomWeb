import { Component } from '@angular/core';
declare var jquery:any;
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat: number = 19.490439;
  lng: number = -99.0384255;
  zo: number = 17;
}
