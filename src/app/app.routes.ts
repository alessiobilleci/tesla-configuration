import { Routes } from '@angular/router';
import { ModelsResolver, OptionsResolver } from './services/resolvers';
export const routes: Routes = [
    {
        path: 'config',
        loadComponent: () =>
            import(
                './components/config-options/config-options.component'
            ).then((c) => c.ConfigOptionsComponent),
        resolve: {
            options: OptionsResolver
        }
    },
    {
        path: 'recap',
        loadComponent: () =>
            import(
                './components/recap/recap.component'
            ).then((c) => c.RecapComponent)
    },
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
