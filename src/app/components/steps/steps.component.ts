import { Component, computed } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  constructor(private utilService: UtilService) {

  }
  isCarConfigured = computed(() => this.utilService.selectedColor() && this.utilService.selectedModelCode());

}
