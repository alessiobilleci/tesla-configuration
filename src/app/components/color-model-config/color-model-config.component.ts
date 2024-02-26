import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IModel } from '../../interfaces/model.interface';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-color-model-config',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-model-config.component.html',
  styleUrl: './color-model-config.component.scss'
})
export class ColorModelConfigComponent implements OnInit {

  modelOptions: IModel[] = [];

  constructor(private route: ActivatedRoute, private util: UtilService) { }

  selectedModelCode = signal<string | null>(this.util.selectedModelCode());
  selectedModel = signal<IModel | null | undefined>(this.util.selectedModel());
  selectedColor = signal<string | null>(this.util.selectedColor());

  get imgSrc(): string | null {
    return this.selectedColor() && this.selectedModelCode() ? 'https://interstate21.com/tesla-app/images/' + this.selectedModelCode() + '/' + this.selectedColor() + '.jpg' : null;
  }
  ngOnInit(): void {
    this.route.data.subscribe(({ models }) => {
      this.modelOptions = models;
    });
  }

  setModel(model: Event) {
    this.selectedModelCode.set(((model.currentTarget) as HTMLInputElement).value);
    this.selectedModel.set(this.modelOptions.find(model => model.code === this.selectedModelCode()))
  }

  setColor(color: Event) {
    this.selectedColor.set(((color.currentTarget) as HTMLInputElement).value);
  }
}
