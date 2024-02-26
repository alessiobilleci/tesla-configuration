import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepsComponent } from './components/steps/steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, StepsComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
