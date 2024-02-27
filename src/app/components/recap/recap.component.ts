import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FixedPrices } from '../../constants/config/config.constants';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss'
})
export class RecapComponent {
  fixedPrices = FixedPrices;
  constructor(public util: UtilService) { }

  totalPrice = computed<number>(() =>
    (this.util.selectedColor()?.price ?? 0) +
    (this.util.selectedConfig()?.price ?? 0) +
    (this.util.isTowHitch() ? FixedPrices.TowHitch : 0) +
    (this.util.isYoke() ? FixedPrices.Yoke : 0)
  )
}
