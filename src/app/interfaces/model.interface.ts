export interface IModel {
    code: string;
    description: string;
    colors: IColor[];
}

export interface IColor {
    code: string;
    description: string;
    price: number
}
export interface IConfigOptionsResponse {
    configs: IConfig[];
    towHitch: boolean;
    yoke: boolean;
}

export interface IConfig {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}