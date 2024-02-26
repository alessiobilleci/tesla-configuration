import { Routes } from '@angular/router';
import { ModelsResolver } from './services/resolvers';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import(
                './components/color-model-config/color-model-config.component'
            ).then((c) => c.ColorModelConfigComponent),
        resolve: {
            models: ModelsResolver
        }

    }
];
