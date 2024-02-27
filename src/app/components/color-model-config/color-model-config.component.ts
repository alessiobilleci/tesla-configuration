import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IModel } from '../../interfaces/model.interface';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-color-model-config',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-model-config.component.html',
  styleUrl: './color-model-config.component.scss'
})
export class ColorModelConfigComponent implements OnInit, OnDestroy {
  @ViewChild('model') model!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  modelOptionsSubscription!: Subscription

  modelOptions: IModel[] = [];

  constructor(private route: ActivatedRoute, public util: UtilService) { }



  get selectedModel() { return this.util.selectedModel(); }
  get selectedColor() { return this.util.selectedColor(); }

  ngOnInit(): void {

    this.modelOptionsSubscription = this.route.data.subscribe(({ models }) => {
      this.modelOptions = models;
    });
  }

  setModel() {
    this.util.selectedModel.set(this.modelOptions.find(model => model.code === this.model.nativeElement.value));
    this.resetConfigOptions();
  }

  setColor() {
    this.util.selectedColor.set(this.util.selectedModel()?.colors.find(color => color.code == this.color.nativeElement.value));
    this.resetConfigOptions();
  }

  resetConfigOptions() { this.util.isYoke.set(false); this.util.isTowHitch.set(false); }

  ngOnDestroy() {
    this.modelOptionsSubscription.unsubscribe();
  }
}
