import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {

  constructor(public utilService: UtilService) { }
}
