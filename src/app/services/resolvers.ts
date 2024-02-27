import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { IConfigOptionsResponse, IModel } from "../interfaces/model.interface";
import { UtilService } from "./util.service";

export const ModelsResolver: ResolveFn<IModel[]> = () => inject(UtilService).getModels();
export const OptionsResolver: ResolveFn<IConfigOptionsResponse> = () => inject(UtilService).getOptions();
