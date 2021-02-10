import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * Main App Component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nytimes-popular-articles';

  /**
   * @param spinner spinner service responsible for loading
   */
  constructor(private spinner: NgxSpinnerService) { }
}
