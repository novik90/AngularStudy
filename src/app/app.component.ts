import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularStudy';
  showTitle = false;

  getTitle() {
    this.showTitle = !this.showTitle;
  }

}
