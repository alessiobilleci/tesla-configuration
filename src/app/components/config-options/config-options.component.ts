import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IConfigOptionsResponse } from '../../interfaces/model.interface';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-config-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.scss'
})
export class ConfigOptionsComponent implements OnInit, OnDestroy {
  @ViewChild('config') config!: ElementRef;
  optionSubscription!: Subscription;
  get selectedConfig() { return this.util.selectedConfig(); }

  constructor(private route: ActivatedRoute, public util: UtilService, private router: Router) { };
  configResponse: IConfigOptionsResponse = {
    configs: [],
    towHitch: false,
    yoke: false
  };

  ngOnInit(): void {
    this.optionSubscription = this.route.data.subscribe(({ options }) => {
      if (!options) {
        this.router.navigate(['/']);
      } else {
        this.configResponse = options;
      }
    })
  }

  setConfig() {
    this.util.selectedConfig.set(this.configResponse.configs.find(config => config.id == this.config.nativeElement.value));
  }

  setTowHitch() {
    this.util.isTowHitch.set(!this.util.isTowHitch());
  }
  setYoke() {
    this.util.isYoke.set(!this.util.isYoke());
  }

  ngOnDestroy() { this.optionSubscription.unsubscribe(); }
}
