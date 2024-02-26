import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IModel } from '../interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  /* Keeps Track of Selected Model's code */
  selectedModelCode = signal<string | null>(null);
  selectedModel = signal<IModel | undefined | null>(null);
  selectedColor = signal<string | null>(null);

  getModels(): Observable<IModel[]> {
    return this.http.get<IModel[]>('/models');
  }

}
