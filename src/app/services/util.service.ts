import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor, IConfig, IConfigOptionsResponse, IModel } from '../interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  /* Keeps Track of Selected Model's code */
  selectedModel = signal<IModel | undefined | null>(null);
  selectedColor = signal<IColor | undefined | null>(null);

  readonly isCarConfigured = computed<boolean>(() => this.selectedColor() !== null && this.selectedModel() !== null);

  selectedConfig = signal<IConfig | null | undefined>(null);
  readonly isTowHitch = signal<boolean>(false);
  readonly isYoke = signal<boolean>(false);


  getModels(): Observable<IModel[]> {
    return this.http.get<IModel[]>('/models');
  }

  getOptions(): Observable<IConfigOptionsResponse> {
    return this.http.get<IConfigOptionsResponse>('/options/' + this.selectedModel()?.code);
  }
  get imgSrc(): string | null {
    return this.selectedColor() && this.selectedModel() ? 'https://interstate21.com/tesla-app/images/' + this.selectedModel()?.code + '/' + this.selectedColor()?.code + '.jpg' : null;
  }
}
