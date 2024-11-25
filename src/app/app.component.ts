import { Component } from '@angular/core';
import {SignalsComponent} from './in-depth-guides/signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [SignalsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-test-app';
}
